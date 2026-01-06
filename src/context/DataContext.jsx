import React, { createContext, useContext, useState, useEffect } from 'react';
import blogData from '../data/blogData';

// Mock Project Data (Moving it here since it was hardcoded in Project.jsx)
const initialProjectData = [
    {
        id: 1,
        img: "/image/portfolio_website.png",
        title: "Portfolio Website",
        text: " A front-end developer's minimalist portfolio. Built with React JS, Tailwind CSS, Framer Motion and JavaScript. Features responsive design, and a clean code . Streamlined for showcasing projects and professional outreach. ",
        projectTech: ["React JS", "CSS", "Taildwind", "Framer Motion"],
        github: "https://github.com/Rahat-Hridoy/rahat_hridoy",
        liveurl: "https://rahat-hridoy.vercel.app/",
    },
    {
        id: 2,
        img: "/image/plumber-point-website.png",
        title: "Service Website",
        text: " A service-based website for professional plumbing solutions, Plumber Point is built using HTML, CSS, Tailwind CSS, JavaScript, and jQuery. It features a responsive design, smooth interactions, and clear service listings. ",
        projectTech: ["Html", "Tailwind CSS", "JS", "jQuery"],
        github: "https://github.com/Rahat-Hridoy/Plumber-Point",
        liveurl: "https://sprightly-frangipane-d62365.netlify.app/",
    },
    {
        id: 3,
        img: "/image/LMS_Website.png",
        title: "LMS Website",
        text: " Built my first project with React.js and Tailwind CSS — a simple LMS website. Learned component-based development, responsive design, and state management.",
        projectTech: ["React", "Tailwind CSS", "CSS"],
        github: "https://github.com/Rahat-Hridoy/lesson",
        liveurl: "https://lesson-jet.vercel.app/",
    }
];

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);
    const [projects, setProjects] = useState([]);

    // Load initial data
    useEffect(() => {
        const storedBlogs = localStorage.getItem('blogs');
        const storedProjects = localStorage.getItem('projects');

        if (storedBlogs) {
            setBlogs(JSON.parse(storedBlogs));
        } else {
            setBlogs(blogData);
        }

        if (storedProjects) {
            setProjects(JSON.parse(storedProjects));
        } else {
            setProjects(initialProjectData);
        }
    }, []);

    // Save to LocalStorage whenever state changes
    useEffect(() => {
        if (blogs.length > 0) {
            localStorage.setItem('blogs', JSON.stringify(blogs));
        }
    }, [blogs]);

    useEffect(() => {
        if (projects.length > 0) {
            localStorage.setItem('projects', JSON.stringify(projects));
        }
    }, [projects]);

    const addBlog = (newBlog) => {
        setBlogs([newBlog, ...blogs]);
    };

    const addProject = (newProject) => {
        setProjects([newProject, ...projects]);
    };

    return (
        <DataContext.Provider value={{ blogs, projects, addBlog, addProject }}>
            {children}
        </DataContext.Provider>
    );
};
