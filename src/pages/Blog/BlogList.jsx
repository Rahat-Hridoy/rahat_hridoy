import React, { useState } from "react";
import BlogCard from "../../components/sections/blog/BlogCard";
import SectionHead from "../../components/common/SectionHead";
import { useData } from "../../context/DataContext";

const BlogList = () => {
    const { blogs: blogData } = useData();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(blogData.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        const section = document.getElementById("blog-header");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) handlePageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) handlePageChange(currentPage + 1);
    };

    const currentItems = blogData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <section className="section-padding min-h-screen pt-32 bg-sectionBG" id="blog">
            <div className="container mx-auto max-w-5xl">
                {/* Header & Subscribe */}
                <div id="blog-header" className="wrapper mt-32 mb-8 text-center">
                    <SectionHead
                        title="Blogs"
                        text="My thoughts on technology and business, welcome to subscribe"
                    />
                </div>

                {/* Divider before list */}
                <div className="w-full h-px bg-white/10 mb-12"></div>

                {/* Blog List - Vertical */}
                <div className="flex flex-col gap-12 mb-16">
                    {currentItems.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>

                {/* Divider after list (optional, but good for closing) */}
                <div className="w-full h-px bg-white/10 mb-16"></div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4">
                        <button
                            onClick={handlePrev}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded-lg font-second font-medium text-lg transition-all duration-300 border border-brand-1 ${currentPage === 1
                                ? "text-gray-600 border-gray-600 cursor-not-allowed opacity-50"
                                : "text-brand-1 hover:bg-brand-1 hover:text-white hover:shadow-[0_0_15px_rgba(8,_112,_184,_0.4)]"
                                }`}
                        >
                            Prev
                        </button>

                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`w-10 h-10 rounded-lg font-second font-bold text-lg transition-all duration-300 flex items-center justify-center border ${currentPage === page
                                        ? "bg-brand-1 text-white border-brand-1 shadow-[0_0_15px_rgba(8,_112,_184,_0.4)] scale-110"
                                        : "bg-transparent text-gray-400 border-gray-700 hover:border-brand-1 hover:text-brand-1"
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 rounded-lg font-second font-medium text-lg transition-all duration-300 border border-brand-1 ${currentPage === totalPages
                                ? "text-gray-600 border-gray-600 cursor-not-allowed opacity-50"
                                : "text-brand-1 hover:bg-brand-1 hover:text-white hover:shadow-[0_0_15px_rgba(8,_112,_184,_0.4)]"
                                }`}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogList;
