import React, { useState } from 'react';
import { useData } from '../../../context/DataContext';
import { Plus, X } from 'lucide-react';
import BlogForm from './BlogForm';
import BlogList from './BlogList';

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
                <BlogForm
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    onCancel={() => setShowForm(false)}
                />
            )}

            {/* Blogs List */}
            <BlogList blogs={blogs} />
        </div>
    );
};

export default ManageBlogs;
