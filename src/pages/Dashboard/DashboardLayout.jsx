import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import ManageProjects from './ManageProjects';
import ManageBlogs from './ManageBlogs';
import { LayoutDashboard, PenTool, FolderPlus, Home } from 'lucide-react';

const DashboardLayout = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="flex min-h-screen bg-sectionBG text-white font-primary pt-24">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10 fixed h-full hidden md:block">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-brand-1 mb-8 flex items-center gap-2">
                        <LayoutDashboard /> Dashboard
                    </h2>
                    <nav className="space-y-4 font-second">
                        <Link
                            to="/dashboard"
                            className={`flex items-center gap-3 p-3 rounded-xl transition-all ${isActive('/dashboard') || isActive('/dashboard/projects')
                                    ? 'bg-brand-1/20 text-brand-1 border border-brand-1/30'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <FolderPlus size={20} /> Manage Projects
                        </Link>
                        <Link
                            to="/dashboard/blogs"
                            className={`flex items-center gap-3 p-3 rounded-xl transition-all ${isActive('/dashboard/blogs')
                                    ? 'bg-brand-1/20 text-brand-1 border border-brand-1/30'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <PenTool size={20} /> Manage Blogs
                        </Link>
                        <Link
                            to="/"
                            className="flex items-center gap-3 p-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 mt-8 border-t border-white/10"
                        >
                            <Home size={20} /> Back to Home
                        </Link>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-8">
                <Routes>
                    <Route path="/" element={<ManageProjects />} />
                    <Route path="projects" element={<ManageProjects />} />
                    <Route path="blogs" element={<ManageBlogs />} />
                </Routes>
            </main>
        </div>
    );
};

export default DashboardLayout;
