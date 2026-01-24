import React from 'react';

const ProjectGridView = ({ projects, handleEdit, handleDelete }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
                <div key={project.id} className="bg-cardBG rounded-xl overflow-hidden border border-white/10 relative group">
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

                    {/* Edit Button */}
                    <button
                        onClick={() => handleEdit(project)}
                        className="absolute top-2 right-12 z-10 p-2 bg-brand-1/20 text-brand-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-1 hover:text-black"
                        title="Edit Project"
                    >
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </button>

                    <div className="h-48 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                        <h3 className="font-bold text-white mb-2 text-xl">{project.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                            {/* Check if tech is array before mapping */}
                            {Array.isArray(project.tech) && project.tech.slice(0, 3).map((t, i) => (
                                <span key={i} className="text-xs bg-white/5 px-2 py-1 rounded text-brand-1 border border-brand-1/20">{t}</span>
                            ))}
                        </div>
                        <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectGridView;
