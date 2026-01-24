import React from 'react';

const BlogList = ({ blogs }) => {
    return (
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
    );
};

export default BlogList;
