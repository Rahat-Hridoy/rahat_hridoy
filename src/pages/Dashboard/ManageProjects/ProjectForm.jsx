import React from 'react';

const ProjectForm = ({ formData, handleChange, handleSubmit, onCancel, isEditing }) => {
    return (
        <div className="bg-cardBG p-6 rounded-2xl mb-8 border border-white/10 animate-fade-in-up">
            <h3 className="text-xl font-bold mb-4 text-brand-1">{isEditing ? 'Edit Project' : 'Add New Project'}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Project Title */}
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
                {/* Project Technologies */}
                <input
                    type="text" name="projectTech" placeholder="Technologies (comma separated, e.g. React, CSS, Tailwind)" required
                    value={formData.projectTech} onChange={handleChange}
                    className="bg-sectionBG border border-white/10 rounded-lg p-3 w-full text-white focus:border-brand-1 outline-none font-second"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* GitHub URL */}
                    <input
                        type="url" name="github" placeholder="GitHub URL" required
                        value={formData.github} onChange={handleChange}
                        className="bg-sectionBG border border-white/10 rounded-lg p-3 text-white focus:border-brand-1 outline-none font-second"
                    />
                    {/* Live Demo URL */}
                    <input
                        type="url" name="liveurl" placeholder="Live Demo URL" required
                        value={formData.liveurl} onChange={handleChange}
                        className="bg-sectionBG border border-white/10 rounded-lg p-3 text-white focus:border-brand-1 outline-none font-second"
                    />
                </div>
                {/* Project Description */}
                <textarea
                    name="text" placeholder="Project Description" required
                    value={formData.text} onChange={handleChange}
                    className="bg-sectionBG border border-white/10 rounded-lg p-3 w-full h-32 text-white focus:border-brand-1 outline-none font-second resize-none"
                />
                <div className="flex gap-4">
                    {/* Save Project Button */}
                     <button type="submit" className="w-full bg-brand-1 text-black py-3 rounded-lg font-bold hover:bg-white transition-all shadow-[0_0_15px_rgba(18,247,214,0.1)]">
                         {isEditing ? 'Update Project' : 'Save Project'}
                    </button>
                    {/* Cancel Button */}
                    {onCancel && (
                         <button type="button" onClick={onCancel} className="w-full bg-red-500/20 text-red-500 py-3 rounded-lg font-bold hover:bg-red-500 hover:text-white transition-all">
                            Cancel
                        </button>
                    )}
                </div>
               
            </form>
        </div>
    );
};

export default ProjectForm;
