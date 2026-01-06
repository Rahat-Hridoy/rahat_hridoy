import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, MessageSquare, ArrowLeft, Send, Calendar, Share2 } from "lucide-react";
import SectionHead from "../components/common/SectionHead";
import { useData } from "../context/DataContext";

const BlogDetail = () => {
    const { id } = useParams();
    const { blogs: blogData } = useData();
    const [blog, setBlog] = useState(null);
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        const foundBlog = blogData.find((b) => b.id === parseInt(id));
        if (foundBlog) {
            setBlog(foundBlog);
            setLikes(foundBlog.likes);
            setComments(foundBlog.comments || []);
        }
        window.scrollTo(0, 0);
    }, [id]);

    const handleLike = () => {
        if (isLiked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setIsLiked(!isLiked);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        const commentObj = {
            user: "Guest User", // In a real app, this would come from auth
            text: newComment,
            date: new Date().toISOString().split('T')[0]
        };

        setComments([...comments, commentObj]);
        setNewComment("");
    };

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-sectionBG text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
                    <Link to="/blog" className="text-brand-1 hover:underline">
                        Back to Blogs
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-sectionBG pt-28 pb-16 px-4">
            <div className="container mx-auto max-w-4xl">
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-1 mb-8 transition-colors"
                >
                    <ArrowLeft size={20} /> Back to Blogs
                </Link>

                {/* Blog Topic as Image First */}
                <div className="relative rounded-3xl overflow-hidden mb-8 shadow-2xl shadow-brand-1/5 border border-white/10 aspect-video md:aspect-[21/9]">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sectionBG to-transparent opacity-80"></div>
                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 right-6">
                        <div className="bg-brand-1/20 backdrop-blur-md border border-brand-1/30 text-brand-1 px-4 py-1.5 rounded-full inline-block mb-4 text-sm font-second">
                            Featured Post
                        </div>
                        <h1 className="text-3xl md:text-5xl font-primary font-bold text-white leading-tight mb-4 text-shadow-lg">
                            {blog.title}
                        </h1>
                        <div className="flex items-center gap-6 text-gray-300 font-second text-sm md:text-base">
                            <span className="flex items-center gap-2">
                                <Calendar size={18} className="text-brand-1" /> {blog.date}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                            <span>5 min read</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-cardBG rounded-3xl p-6 md:p-10 border border-white/5 shadow-xl">
                    {/* Special Note */}
                    <div className="bg-brand-1/5 border-l-4 border-brand-1 p-6 rounded-r-xl mb-10">
                        <p className="text-xl text-gray-300 font-second italic">
                            "{blog.description}"
                        </p>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none font-primary leading-relaxed text-gray-300">
                        {blog.content.split('\n').map((paragraph, index) => (
                            <p key={index} className="mb-6">
                                {paragraph}
                            </p>
                        ))}

                        {/* Check if content is short (mock data), generate dummy text for visual fill if needed */}
                        {blog.content.length < 500 && (
                            <>
                                <p className="mb-6">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <h3 className="text-2xl font-bold text-white mt-8 mb-4">Key Takeaways</h3>
                                <p className="mb-6">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </>
                        )}
                    </div>

                    {/* Interaction Bar */}
                    <div className="flex items-center justify-between border-t border-white/10 mt-12 pt-8">
                        <div className="flex items-center gap-6">
                            <button
                                onClick={handleLike}
                                className={`flex items-center gap-2 transition-all duration-300 ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                            >
                                <Heart size={24} fill={isLiked ? "currentColor" : "none"} />
                                <span className="font-second text-lg">{likes} Likes</span>
                            </button>

                            <button className="flex items-center gap-2 text-gray-400 hover:text-brand-1 transition-colors">
                                <MessageSquare size={24} />
                                <span className="font-second text-lg">{comments.length} Comments</span>
                            </button>
                        </div>

                        <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                            <Share2 size={24} />
                        </button>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="mt-12">
                    <h3 className="text-2xl font-primary text-white mb-8 relative inline-block">
                        Comments
                        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-brand-1 rounded-full"></span>
                    </h3>

                    {/* Comment Form */}
                    <form onSubmit={handleCommentSubmit} className="mb-10 relative">
                        <div className="relative">
                            <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Share your thoughts..."
                                className="w-full bg-cardBG border border-white/10 rounded-2xl p-6 pr-16 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-1/50 min-h-[120px] resize-none font-second transition-all"
                            ></textarea>
                            <button
                                type="submit"
                                disabled={!newComment.trim()}
                                className="absolute bottom-4 right-4 bg-brand-1 text-black p-2.5 rounded-xl hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send size={20} />
                            </button>
                        </div>
                    </form>

                    {/* Comments List */}
                    <div className="space-y-6">
                        {comments.length > 0 ? (
                            comments.map((comment, idx) => (
                                <div key={idx} className="bg-cardBG p-6 rounded-2xl border border-white/5 animate-fade-in-up">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-1 to-blue-500 flex items-center justify-center font-bold text-black border-2 border-sectionBG">
                                                {comment.user.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="text-white font-medium">{comment.user}</h4>
                                                <span className="text-xs text-gray-500 font-second">{comment.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 font-second pl-13">{comment.text}</p>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-10 text-gray-500 font-second border border-dashed border-white/10 rounded-2xl">
                                No comments yet. Be the first to share your thoughts!
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetail;
