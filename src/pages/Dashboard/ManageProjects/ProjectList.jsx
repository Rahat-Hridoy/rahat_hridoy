import React from 'react';
import { Reorder, useDragControls } from 'motion/react';
import { GripVertical } from 'lucide-react';

const ProjectItem = ({ project, handleDelete, handleEdit }) => {
    const controls = useDragControls();

    return (
        <Reorder.Item
            value={project}
            id={project.id}
            dragListener={false}
            dragControls={controls}
            className="bg-cardBG rounded-xl overflow-hidden border border-white/10 relative group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 mb-4 select-none"
        >
            {/* Drag Handle */}
            <div 
                onPointerDown={(e) => controls.start(e)}
                className="cursor-move text-gray-500 hover:text-brand-1 touch-none absolute top-4 left-4 sm:static sm:top-auto sm:left-auto p-2 bg-black/50 rounded-lg sm:bg-transparent sm:p-0 z-20"
            >
                <GripVertical size={20} />
            </div>

            {/* Delete Button */}
            <button
                onClick={() => handleDelete(project.id)}
                className="absolute top-2 right-2 z-10 p-2 bg-red-500/20 text-red-500 rounded-lg opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 hover:text-white"
                title="Delete Project"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>

            {/* Edit Button */}
                <button
                onClick={() => handleEdit(project)}
                className="absolute top-2 right-12 z-10 p-2 bg-brand-1/20 text-brand-1 rounded-lg opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-1 hover:text-black"
                title="Edit Project"
            >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            </button>

            <div className="w-full sm:w-32 h-auto aspect-video sm:h-24 flex-shrink-0 overflow-hidden rounded-lg">
                <img src={project.image || "https://placehold.co/600x400/001e2b/12f7d6?text=No+Image"} alt={project.title} className="w-full h-full object-cover pointer-events-none" />
            </div>
            <div className="flex-1 w-full">
                <h3 className="font-bold text-white mb-2 text-lg pr-16 sm:pr-0">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                    {Array.isArray(project.tech) && project.tech.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-xs bg-white/5 px-2 py-1 rounded text-brand-1 border border-brand-1/20">{tech}</span>
                    ))}
                </div>
                <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
            </div>
        </Reorder.Item>
    );
};

const ProjectList = ({ projects, handleDelete, handleEdit, onReorder }) => {
    return (
        <Reorder.Group axis="y" values={projects} onReorder={onReorder} className="space-y-4">
            {projects.map((project) => (
                <ProjectItem 
                    key={project.id} 
                    project={project} 
                    handleDelete={handleDelete} 
                    handleEdit={handleEdit} 
                />
            ))}
        </Reorder.Group>
    );
};

export default ProjectList;
