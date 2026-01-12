import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import ManageProjects from './ManageProjects';
import ManageBlogs from './ManageBlogs';
import { LayoutDashboard, PenTool, FolderPlus, Home, LogOut } from 'lucide-react';

const DashboardLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path) => location.pathname === path;

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };

    return (
        <div className="flex min-h-screen bg-sectionBG text-white font-primary pt-2">
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
            {/* Header with Logout - Fixed Position */}
            <div className="fixed top-6 right-8 z-50">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 hover:text-red-400 px-4 py-2 rounded-lg font-second transition-all border border-red-500/20 backdrop-blur-md shadow-lg"
                >
                    <LogOut size={18} />
                    Logout
                </button>
            </div>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-8 relative min-h-screen">
                <div className="mt-8">
                    <Routes>
                        <Route path="/" element={<ManageProjects />} />
                        <Route path="projects" element={<ManageProjects />} />
                        <Route path="blogs" element={<ManageBlogs />} />
                    </Routes>
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
