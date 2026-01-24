import React, { createContext, useContext, useState, useEffect } from 'react';
import blogData from '../data/blogData';
import { getProjects, createProject as apiCreateProject, updateProject as apiUpdateProject, deleteProject as apiDeleteProject, reorderProjects as apiReorderProjects } from '../lib/projects';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);
    const [projects, setProjects] = useState([]);

    // Load initial data
    useEffect(() => {
        const storedBlogs = localStorage.getItem('blogs');
        
        if (storedBlogs) {
            setBlogs(JSON.parse(storedBlogs));
        } else {
            setBlogs(blogData);
        }

        // Fetch Projects from Supabase
        const fetchProjects = async () => {
            try {
                const data = await getProjects();
                setProjects(data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    // Save Blogs to LocalStorage whenever state changes
    useEffect(() => {
        if (blogs.length > 0) {
            localStorage.setItem('blogs', JSON.stringify(blogs));
        }
    }, [blogs]);

    // Blog functions (Local Storage)
    const addBlog = (newBlog) => {
        setBlogs([newBlog, ...blogs]);
    };

    const deleteBlog = (id) => {
        setBlogs(blogs.filter(blog => blog.id !== id));
    };

    const updateBlog = (updatedBlog) => {
        setBlogs(blogs.map(blog => blog.id === updatedBlog.id ? updatedBlog : blog));
    };

    // Project functions (Supabase)
    const addProject = async (newProject) => {
        try {
            const savedProject = await apiCreateProject(newProject);
            if (savedProject) {
                setProjects(prev => [...prev, savedProject]); // Add to end or refresh
                // Ideally refresh to get new sort order or just append
                const data = await getProjects();
                setProjects(data);
            }
        } catch (error) {
            console.error("Error creating project:", error);
            throw error;
        }
    };

    const deleteProject = async (id) => {
        try {
            await apiDeleteProject(id);
            setProjects(projects.filter(project => project.id !== id));
        } catch (error) {
            console.error("Error deleting project:", error);
            throw error;
        }
    };

    const updateProject = async (updatedProject) => {
        try {
            // calling apiUpdateProject(id, updates)
            // The updatedProject object should have the ID and the fields to update
            const { id, ...updates } = updatedProject;
            const savedProject = await apiUpdateProject(id, updates);
            if (savedProject) {
                setProjects(projects.map(project => project.id === id ? savedProject : project));
            }
        } catch (error) {
            console.error("Error updating project:", error);
            throw error;
        }
    };

    const reorderProjectList = async (newOrder) => {
        // Optimistic update: Update the sort_order property for each item
        const optimisticProjects = newOrder.map((project, index) => ({
            ...project,
            sort_order: index
        }));

        setProjects(optimisticProjects);

        try {
            await apiReorderProjects(optimisticProjects);
        } catch (error) {
            console.error("Error reordering projects:", error);
            // Revert would be complex, but usually not needed for simple lists
        }
    };

    return (
        <DataContext.Provider value={{ blogs, projects, addBlog, deleteBlog, updateBlog, addProject, deleteProject, updateProject, reorderProjectList }}>
            {children}
        </DataContext.Provider>
    );
};
