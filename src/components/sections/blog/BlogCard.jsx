import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
    return (
        <div className="group border-b border-white/10 pb-12 last:border-none flex flex-col md:flex-row gap-8 items-start">
            {/* Image Side */}
            <div className="w-full md:w-[280px] h-[200px] shrink-0 overflow-hidden rounded-lg">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content Side */}
            <div className="flex-1 flex flex-col h-full justify-center">
                <div>
                    <h3 className="text-xl md:text-2xl font-primary font-medium text-brand-1 mb-3 group-hover:text-brand-1/80 transition-colors">
                        {blog.title}
                    </h3>

                    <p className="text-gray-400 font-second text-sm font-light leading-relaxed mb-4 line-clamp-3">
                        {blog.description}
                    </p>

                    <Link
                        to={`/blog/${blog.id}`}
                        className="inline-block text-brand-1 font-second text-sm hover:underline hover:text-white transition-all mb-6"
                    >
                        Read More &gt;&gt;
                    </Link>
                </div>

                {/* Meta Data Row */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-second text-gray-400">
                    <span className="bg-white/10 px-3 py-1 rounded-md text-gray-300">
                        {blog.tag}
                    </span>
                    <div className="flex items-center gap-1">
                        <span className="font-bold text-white">Text:</span> {blog.author}
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-bold text-white">Date:</span> {blog.date}
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-bold text-white">Read:</span> {blog.readTime}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
