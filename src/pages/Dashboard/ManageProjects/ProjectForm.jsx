import React, { useRef } from 'react';
import { UploadCloud, X } from 'lucide-react';

const ProjectForm = ({ formData, handleChange, handleSubmit, onCancel, isEditing }) => {
    // Hidden file input ref
    const fileInputRef = useRef(null);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleRemoveImage = (e) => {
        e.stopPropagation(); // Prevent triggering upload click
        // Pass empty value to mimic clearing the input, though we need to manually update state
        // Since handleChange handles events, we can create a synthetic event or just pass null if we modified the parent.
        // But for now, let's just trigger a change event with empty string for 'img'
        handleChange({ target: { name: 'img', value: '' } });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8">
            {/* Left Side - Image Upload (Square) */}
            <div className="w-full lg:w-[320px] flex-shrink-0 space-y-2">
                <label className="text-sm text-gray-400 font-second ml-1">Project Thumbnail</label>
                <div 
                    onClick={handleImageClick}
                    className={`relative w-full aspect-square border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all overflow-hidden group 
                        ${formData.img ? 'border-brand-1/50 bg-black/40' : 'border-white/10 bg-sectionBG hover:border-brand-1/30 hover:bg-sectionBG/80'}`}
                >
                    <input 
                        type="file" 
                        ref={fileInputRef}
                        name="img"
                        onChange={handleChange}
                        className="hidden"
                        accept="image/*"
                    />
                    
                    {formData.img ? (
                        <>
                            <img src={formData.img} alt="Preview" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-second font-medium flex items-center gap-2">
                                    <UploadCloud size={20} /> Change
                                </span>
                            </div>
                            <button 
                                type="button"
                                onClick={handleRemoveImage}
                                className="absolute top-2 right-2 bg-red-500/80 text-white p-1.5 rounded-full hover:bg-red-600 transition-colors z-10"
                            >
                                <X size={16} />
                            </button>
                        </>
                    ) : (
                        <div className="flex flex-col items-center text-gray-400 space-y-4 px-4 text-center group-hover:text-brand-1 transition-colors">
                            <div className="p-4 bg-white/5 rounded-full group-hover:bg-brand-1/10 transition-colors">
                                <UploadCloud size={40} className="text-brand-1/50 group-hover:text-brand-1 transition-all duration-300" />
                            </div>
                            <div>
                                <p className="font-second font-medium text-lg">Upload Image</p>
                                <p className="text-xs text-gray-500 mt-1 leading-relaxed">Square or Landscape<br/>(max. 2MB)</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Right Side - Form Fields */}
            <div className="flex-1 space-y-5">
                {/* Project Title */}
                <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-second ml-1">Project Title</label>
                    <input
                        type="text" name="title" placeholder="e.g. E-Commerce Dashboard" required
                        value={formData.title} onChange={handleChange}
                        className="w-full bg-sectionBG border border-white/10 rounded-xl p-3.5 text-white focus:border-brand-1 focus:ring-1 focus:ring-brand-1/50 outline-none font-second transition-all placeholder:text-gray-600 text-lg"
                    />
                </div>

                {/* Project Technologies */}
                <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-second ml-1">Technologies</label>
                    <input
                        type="text" name="projectTech" placeholder="e.g. React, CSS, Tailwind (comma separated)" required
                        value={formData.projectTech} onChange={handleChange}
                        className="w-full bg-sectionBG border border-white/10 rounded-xl p-3.5 text-white focus:border-brand-1 focus:ring-1 focus:ring-brand-1/50 outline-none font-second transition-all placeholder:text-gray-600"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* GitHub URL */}
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400 font-second ml-1">GitHub URL</label>
                        <input
                            type="url" name="github" placeholder="https://github.com/..." required
                            value={formData.github} onChange={handleChange}
                            className="w-full bg-sectionBG border border-white/10 rounded-xl p-3.5 text-white focus:border-brand-1 focus:ring-1 focus:ring-brand-1/50 outline-none font-second transition-all placeholder:text-gray-600"
                        />
                    </div>
                    {/* Live Demo URL */}
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400 font-second ml-1">Live Demo URL</label>
                        <input
                            type="url" name="liveurl" placeholder="https://..." required
                            value={formData.liveurl} onChange={handleChange}
                            className="w-full bg-sectionBG border border-white/10 rounded-xl p-3.5 text-white focus:border-brand-1 focus:ring-1 focus:ring-brand-1/50 outline-none font-second transition-all placeholder:text-gray-600"
                        />
                    </div>
                </div>

                {/* Project Description */}
                <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-second ml-1">Description</label>
                    <textarea
                        name="text" placeholder="Describe your project..." required
                        value={formData.text} onChange={handleChange}
                        className="w-full bg-sectionBG border border-white/10 rounded-xl p-3.5 h-32 text-white focus:border-brand-1 focus:ring-1 focus:ring-brand-1/50 outline-none font-second resize-none transition-all placeholder:text-gray-600"
                    />
                </div>

                <div className="pt-2 flex gap-4">
                    <button type="submit" className="flex-1 bg-brand-1 text-black py-4 rounded-xl font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(18,247,214,0.15)] hover:shadow-[0_0_25px_rgba(18,247,214,0.3)] hover:-translate-y-0.5 active:translate-y-0">
                        {isEditing ? 'Update Project' : 'Create Project'}
                    </button>
                    {onCancel && (
                        <button type="button" onClick={onCancel} className="flex-1 bg-white/5 border border-white/10 text-gray-300 py-4 rounded-xl font-bold hover:bg-white/10 hover:text-white transition-all">
                            Cancel
                        </button>
                    )}
                </div>
            </div>
        </form>
    );
};

export default ProjectForm;
