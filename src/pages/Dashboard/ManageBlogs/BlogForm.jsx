import React from 'react';

const BlogForm = ({ formData, handleChange, handleSubmit, onCancel }) => {
    return (
        <div className="bg-cardBG p-6 rounded-2xl mb-8 border border-white/10 animate-fade-in-up">
            <h3 className="text-xl font-bold mb-4 text-brand-1">Add New Blog Post</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text" name="title" placeholder="Blog Title" required
                        value={formData.title} onChange={handleChange}
                        className="bg-sectionBG border border-white/10 rounded-lg p-3 text-white focus:border-brand-1 outline-none font-second"
                    />
                    <input
                        type="text" name="image" placeholder="Image URL"
                        value={formData.image} onChange={handleChange}
                        className="bg-sectionBG border border-white/10 rounded-lg p-3 text-white focus:border-brand-1 outline-none font-second"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        type="text" name="tag" placeholder="Tag (e.g. React, AI)" required
                        value={formData.tag} onChange={handleChange}
                        className="bg-sectionBG border border-white/10 rounded-lg p-3 text-white focus:border-brand-1 outline-none font-second"
                    />
                    <input
                        type="text" name="author" placeholder="Author"
                        value={formData.author} onChange={handleChange}
                        className="bg-sectionBG border border-white/10 rounded-lg p-3 text-white focus:border-brand-1 outline-none font-second"
                    />
                    <input
                        type="text" name="readTime" placeholder="Read Time (e.g. 5 Min)" required
                        value={formData.readTime} onChange={handleChange}
                        className="bg-sectionBG border border-white/10 rounded-lg p-3 text-white focus:border-brand-1 outline-none font-second"
                    />
                </div>

                <textarea
                    name="description" placeholder="Short Description (Excerpt)" required
                    value={formData.description} onChange={handleChange}
                    className="bg-sectionBG border border-white/10 rounded-lg p-3 w-full h-24 text-white focus:border-brand-1 outline-none font-second resize-none"
                />
                <textarea
                    name="content" placeholder="Full Blog Content" required
                    value={formData.content} onChange={handleChange}
                    className="bg-sectionBG border border-white/10 rounded-lg p-3 w-full h-64 text-white focus:border-brand-1 outline-none font-second resize-none"
                />
                 <div className="flex gap-4">
                    <button type="submit" className="w-full bg-brand-1 text-black py-3 rounded-lg font-bold hover:bg-white transition-all shadow-[0_0_15px_rgba(18,247,214,0.1)]">
                        Publish Blog
                    </button>
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

export default BlogForm;
