import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Plus, X } from 'lucide-react';

const ManageProjects = () => {
    const { projects, addProject } = useData();
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        text: '',
        img: '',
        projectTech: '',
        github: '',
        liveurl: ''
    });

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

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-primary text-white">Manage Projects</h1>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="flex items-center gap-2 bg-brand-1 text-black px-4 py-2 rounded-lg font-bold hover:bg-white transition-colors"
                >
                    {showForm ? <><X size={20} /> Cancel</> : <><Plus size={20} /> Add Project</>}
                </button>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <div key={project.id} className="bg-cardBG rounded-xl overflow-hidden border border-white/10 relative group">
                            <div className="h-48 overflow-hidden">
                                <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.projectTech.slice(0, 3).map((tech, i) => (
                                        <span key={i} className="text-xs bg-white/5 px-2 py-1 rounded text-brand-1 border border-brand-1/20">{tech}</span>
                                    ))}
                                </div>
                                <p className="text-gray-400 text-sm line-clamp-2">{project.text}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 font-second col-span-3 text-center py-10">No projects found.</p>
                )}
            </div>
        </div>
    );
};

export default ManageProjects;
