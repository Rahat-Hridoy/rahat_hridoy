import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import ManageProjects from './ManageProjects';
import ManageBlogs from './ManageBlogs';
import { LayoutDashboard, PenTool, FolderPlus, Home, LogOut, Menu, X } from 'lucide-react';

const DashboardLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    const isActive = (path) => location.pathname === path;

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [navigate]);

    // Close sidebar when route changes on mobile
    useEffect(() => {
        setIsSidebarOpen(false);
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };

    return (
        <div className="flex min-h-screen bg-sectionBG text-white font-primary pt-2">
            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 left-0 w-full bg-sectionBG/95 backdrop-blur-md z-50 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <span className="text-xl font-bold text-brand-1 flex items-center gap-2">
                    <LayoutDashboard size={20} /> Dashboard
                </span>
                <button onClick={() => setIsSidebarOpen(true)} className="text-white">
                    <Menu size={24} />
                </button>
            </div>

            {/* Sidebar Overlay */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/80 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                w-64 border-r border-white/10 fixed h-full z-50 bg-sectionBG transition-transform duration-300 ease-in-out
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                md:translate-x-0 md:block top-0
            `}>
                <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-brand-1 flex items-center gap-2">
                            <LayoutDashboard /> Dashboard
                        </h2>
                        <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-400 hover:text-white">
                            <X size={24} />
                        </button>
                    </div>
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
                    {/* logout button  */}
                    <div className='mt-auto'>
                    <button
                    onClick={handleLogout}
                    className="flex items-center gap-2  hover:bg-red-500/20 text-red-500 hover:text-red-400 px-4 py-2 rounded-lg font-second transition-all border border-red-500/20 backdrop-blur-md shadow-lg w-full"
                >
                    <LogOut size={18} />
                    Logout
                     </button>
                </div>
                </div>
                
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-4 md:p-8 relative min-h-screen mt-14 md:mt-0">
                <div>
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
