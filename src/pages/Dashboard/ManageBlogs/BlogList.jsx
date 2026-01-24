import React from 'react';

const BlogList = ({ blogs, handleEdit, handleDelete }) => {
    return (
        <div className="flex flex-col gap-6">
            {blogs.length > 0 ? (
                blogs.map((blog) => (
                    <div key={blog.id} className="bg-cardBG p-4 rounded-xl border border-white/10 flex gap-4 items-center group relative hover:border-brand-1/30 transition-all">
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

                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                onClick={() => handleEdit(blog)}
                                className="p-2 bg-brand-1/20 text-brand-1 rounded-lg hover:bg-brand-1 hover:text-black transition-colors"
                                title="Edit"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </button>
                            <button
                                onClick={() => handleDelete(blog.id)}
                                className="p-2 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
                                title="Delete"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-col items-end gap-2">
                             <div className="text-brand-1 font-bold font-second text-xs px-3 py-1 bg-brand-1/10 rounded uppercase">
                                Published
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-gray-500 font-second text-center py-10">No blogs found.</p>
            )}
        </div>
    );
};

export default BlogList;
