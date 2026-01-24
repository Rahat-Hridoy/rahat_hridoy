import React, { useState } from 'react';
import { useData } from '../../../context/DataContext';
import { Plus, X } from 'lucide-react';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';
import ProjectGridView from './ProjectGridView';

const ManageProjects = () => {
    const { projects, addProject, deleteProject, updateProject } = useData();
    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        text: '',
        img: '',
        projectTech: '',
        github: '',
        liveurl: ''
    });

    // View and Filter State
    const [viewMode, setViewMode] = useState('list'); // 'grid' | 'list'
    const [sortBy, setSortBy] = useState('newest'); // 'newest' | 'oldest' | 'name'
    const [searchQuery, setSearchQuery] = useState('');

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this project?')) {
            deleteProject(id);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isEditing) {
            const updatedProject = {
                ...formData,
                projectTech: Array.isArray(formData.projectTech) ? formData.projectTech : formData.projectTech.split(',').map(tech => tech.trim()),
                img: formData.img || "https://placehold.co/600x400/001e2b/12f7d6?text=Project+Image"
            };
            updateProject(updatedProject);
        } else {
             const newProject = {
                id: Date.now(),
                ...formData,
                projectTech: formData.projectTech.split(',').map(tech => tech.trim()),
                img: formData.img || "https://placehold.co/600x400/001e2b/12f7d6?text=Project+Image" 
            };
            addProject(newProject);
        }
       
        setShowForm(false);
        setIsEditing(false);
        setFormData({ title: '', text: '', img: '', projectTech: '', github: '', liveurl: '' });
    };

    const handleEdit = (project) => {
        setFormData({
            ...project,
            projectTech: project.projectTech.join(', ') // Convert array back to string for input
        });
        setIsEditing(true);
        setShowForm(true);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Filter and Sort Projects
    const filteredProjects = projects
        .filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.projectTech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesSearch;
        })
        .sort((a, b) => {
            if (sortBy === 'newest') return b.id - a.id;
            if (sortBy === 'oldest') return a.id - b.id;
            if (sortBy === 'name') return a.title.localeCompare(b.title);
            return 0;
        });

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                     <h1 className="text-3xl font-semibold font-primary text-white mb-2">Manage Projects</h1>
                    <p className="text-gray-400 font-second text-sm">Create, edit, and manage your portfolio items</p>
                </div>

                <button
                    onClick={() => setShowForm(!showForm)}
                    className="flex items-center gap-2 bg-brand-1 text-black px-4 py-2 rounded-lg font-bold hover:bg-white transition-colors"
                >
                    {showForm ? <><X size={20} /> Cancel</> : <><Plus size={20} /> Add Project</>}
                </button>
            </div>

            {/* Toolbar */}
            <div className="bg-cardBG border border-white/10 p-4 rounded-xl mb-8 flex flex-col lg:flex-row gap-4 justify-between items-center text-sm font-second">
                {/* Search */}
                <div className="relative w-full lg:w-96">
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-sectionBG border border-white/10 rounded-lg py-2 px-4 focus:border-brand-1 outline-none text-white pl-10"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <div className="flex items-center gap-4 w-full lg:w-auto overflow-x-auto">
                    {/* Sort */}
                    <div className="flex items-center gap-2 whitespace-nowrap">
                        <span className="text-gray-400">Sort by:</span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-sectionBG border border-white/10 rounded-lg py-2 px-3 focus:border-brand-1 outline-none text-white cursor-pointer hover:bg-white/5 transition-colors"
                        >
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                            <option value="name">Name (A-Z)</option>
                        </select>
                    </div>

                    {/* View Toggle */}
                    <div className="flex items-center bg-sectionBG border border-white/10 rounded-lg p-1">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded ${viewMode === 'grid' ? 'bg-brand-1 text-black' : 'text-gray-400 hover:text-white'}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded ${viewMode === 'list' ? 'bg-brand-1 text-black' : 'text-gray-400 hover:text-white'}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Add Project Form */}
            {showForm && (
                <ProjectForm
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    onCancel={() => {
                        setShowForm(false);
                        setIsEditing(false);
                        setFormData({ title: '', text: '', img: '', projectTech: '', github: '', liveurl: '' });
                    }}
                    isEditing={isEditing}
                />
            )}

            {/* Projects List */}
            {filteredProjects.length > 0 ? (
                viewMode === 'list' ? (
                     <ProjectList projects={filteredProjects} handleDelete={handleDelete} handleEdit={handleEdit} />
                ) : (
                    <ProjectGridView projects={filteredProjects} handleDelete={handleDelete} handleEdit={handleEdit} />
                )
            ) : (
                <p className="text-gray-500 font-second col-span-3 text-center py-10 bg-cardBG rounded-xl border border-white/10">No projects found matching your criteria.</p>
            )}
        </div>
    );
};

export default ManageProjects;
