import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Plus, X } from 'lucide-react';

const ManageProjects = () => {
    const { projects, addProject, deleteProject } = useData();
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        text: '',
        img: '',
        projectTech: '',
        github: '',
        liveurl: ''
    });

    // View and Filter State
    const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
    const [sortBy, setSortBy] = useState('newest'); // 'newest' | 'oldest' | 'name'
    const [searchQuery, setSearchQuery] = useState('');

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this project?')) {
            deleteProject(id);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProject = {
            id: Date.now(),
            ...formData,
            projectTech: formData.projectTech.split(',').map(tech => tech.trim()),
            img: formData.img || "https://placehold.co/600x400/001e2b/12f7d6?text=Project+Image" // Fallback placeholder
        };
        addProject(newProject);
        setShowForm(false);
        setFormData({ title: '', text: '', img: '', projectTech: '', github: '', liveurl: '' });
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
                    <h1 className="text-3xl font-primary text-white mb-2">Manage Projects</h1>
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
                <div className="bg-cardBG p-6 rounded-2xl mb-8 border border-white/10 animate-fade-in-up">
                    <h3 className="text-xl font-bold mb-4 text-brand-1">Add New Project</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text" name="title" placeholder="Project Title" required
                                value={formData.title} onChange={handleChange}
                                className="bg-sectionBG border border-white/10 rounded-lg p-3 text-white focus:border-brand-1 outline-none font-second"
                            />
                            <input
                                type="text" name="img" placeholder="Image URL (e.g. /image/portfolio.png)"
                                value={formData.img} onChange={handleChange}
                                className="bg-sectionBG border border-white/10 rounded-lg p-3 text-white focus:border-brand-1 outline-none font-second"
                            />
                        </div>
                        <input
                            type="text" name="projectTech" placeholder="Technologies (comma separated, e.g. React, CSS, Tailwind)" required
                            value={formData.projectTech} onChange={handleChange}
                            className="bg-sectionBG border border-white/10 rounded-lg p-3 w-full text-white focus:border-brand-1 outline-none font-second"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="url" name="github" placeholder="GitHub URL" required
                                value={formData.github} onChange={handleChange}
                                className="bg-sectionBG border border-white/10 rounded-lg p-3 text-white focus:border-brand-1 outline-none font-second"
                            />
                            <input
                                type="url" name="liveurl" placeholder="Live Demo URL" required
                                value={formData.liveurl} onChange={handleChange}
                                className="bg-sectionBG border border-white/10 rounded-lg p-3 text-white focus:border-brand-1 outline-none font-second"
                            />
                        </div>
                        <textarea
                            name="text" placeholder="Project Description" required
                            value={formData.text} onChange={handleChange}
                            className="bg-sectionBG border border-white/10 rounded-lg p-3 w-full h-32 text-white focus:border-brand-1 outline-none font-second resize-none"
                        />
                        <button type="submit" className="w-full bg-brand-1 text-black py-3 rounded-lg font-bold hover:bg-white transition-all shadow-[0_0_15px_rgba(18,247,214,0.1)]">
                            Save Project
                        </button>
                    </form>
                </div>
            )}

            {/* Projects List */}
            {filteredProjects.length > 0 ? (
                <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
                    {filteredProjects.map((project) => (
                        <div key={project.id} className={`bg-cardBG rounded-xl overflow-hidden border border-white/10 relative group ${viewMode === 'list' ? 'flex items-center gap-4 p-4' : ''}`}>
                            {/* Delete Button */}
                            <button
                                onClick={() => handleDelete(project.id)}
                                className="absolute top-2 right-2 z-10 p-2 bg-red-500/20 text-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 hover:text-white"
                                title="Delete Project"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>

                            <div className={`${viewMode === 'list' ? 'w-32 h-24 flex-shrink-0' : 'h-48'} overflow-hidden`}>
                                <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                            <div className={viewMode === 'list' ? 'flex-1' : 'p-4'}>
                                <h3 className={`font-bold text-white mb-2 ${viewMode === 'list' ? 'text-lg' : 'text-xl'}`}>{project.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.projectTech.slice(0, 3).map((tech, i) => (
                                        <span key={i} className="text-xs bg-white/5 px-2 py-1 rounded text-brand-1 border border-brand-1/20">{tech}</span>
                                    ))}
                                </div>
                                <p className="text-gray-400 text-sm line-clamp-2">{project.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 font-second col-span-3 text-center py-10 bg-cardBG rounded-xl border border-white/10">No projects found matching your criteria.</p>
            )}
        </div>
    );
};

export default ManageProjects;
