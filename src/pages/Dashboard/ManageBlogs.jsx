import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Plus, X } from 'lucide-react';

const ManageBlogs = () => {
    const { blogs, addBlog } = useData();
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        image: '',
        tag: '',
        author: 'Rahat',
        readTime: '',
        description: '',
        content: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlog = {
            id: Date.now(),
            date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
            ...formData,
            image: formData.image || "https://placehold.co/600x400/001e2b/12f7d6?text=Blog+Image",
            likes: 0,
            comments: []
        };
        addBlog(newBlog);
        setShowForm(false);
        setFormData({ title: '', image: '', tag: '', author: 'Rahat', readTime: '', description: '', content: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-primary text-white">Manage Blogs</h1>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="flex items-center gap-2 bg-brand-1 text-black px-4 py-2 rounded-lg font-bold hover:bg-white transition-colors"
                >
                    {showForm ? <><X size={20} /> Cancel</> : <><Plus size={20} /> Add Blog</>}
                </button>
            </div>

            {/* Add Blog Form */}
            {showForm && (
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
                            name="description" placeholder="Should Description (Excerpt)" required
                            value={formData.description} onChange={handleChange}
                            className="bg-sectionBG border border-white/10 rounded-lg p-3 w-full h-24 text-white focus:border-brand-1 outline-none font-second resize-none"
                        />
                        <textarea
                            name="content" placeholder="Full Blog Content" required
                            value={formData.content} onChange={handleChange}
                            className="bg-sectionBG border border-white/10 rounded-lg p-3 w-full h-64 text-white focus:border-brand-1 outline-none font-second resize-none"
                        />
                        <button type="submit" className="w-full bg-brand-1 text-black py-3 rounded-lg font-bold hover:bg-white transition-all shadow-[0_0_15px_rgba(18,247,214,0.1)]">
                            Publish Blog
                        </button>
                    </form>
                </div>
            )}

            {/* Blogs List */}
            <div className="flex flex-col gap-6">
                {blogs.length > 0 ? (
                    blogs.map((blog) => (
                        <div key={blog.id} className="bg-cardBG p-4 rounded-xl border border-white/10 flex gap-4 items-center">
                            <div className="w-24 h-16 shrink-0 rounded-lg overflow-hidden bg-black/20">
                                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-white mb-1">{blog.title}</h3>
                                <div className="flex gap-4 text-xs text-gray-500 font-second">
                                    <span>{blog.date}</span>
                                    <span>{blog.tag}</span>
                                </div>
                            </div>
                            <div className="text-brand-1 font-bold font-second text-xs px-3 py-1 bg-brand-1/10 rounded uppercase">
                                Published
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 font-second text-center py-10">No blogs found.</p>
                )}
            </div>
        </div>
    );
};

export default ManageBlogs;
