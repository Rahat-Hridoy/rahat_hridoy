import React, { useRef, useEffect, useState } from 'react'
import { UploadCloud, X } from 'lucide-react'
import { createProject, updateProject } from '@/lib/projects'
import { uploadProjectImage } from '@/lib/storage'
import { useData } from '@/context/DataContext'

const ProjectForm = ({ editingProject, onSuccess, onCancel }) => {
  const { addProject, updateProject: updateProjectContext } = useData()
  const fileInputRef = useRef(null)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    tech: '',
    github_url: '',
    live_url: ''
  })
  
  const [imageFile, setImageFile] = useState(null)
  const [loading, setLoading] = useState(false)

  // Prefill when editing
  useEffect(() => {
    if (editingProject) {
      setFormData({
        ...editingProject,
        tech: Array.isArray(editingProject.tech) ? editingProject.tech.join(', ') : (editingProject.tech || '')
      })
    }
  }, [editingProject])

  const handleChange = (e) => {
    const { name, value, files } = e.target

    if (name === 'image' && files?.[0]) {
      const file = files[0]
      setImageFile(file)
      // Preview
      const preview = URL.createObjectURL(file)
      setFormData(prev => ({ ...prev, image: preview }))
      return
    }

    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleRemoveImage = () => {
    setFormData(prev => ({ ...prev, image: '' }))
    setImageFile(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      let imageUrl = formData.image

      // Upload image if a new file is selected
      if (imageFile) {
        imageUrl = await uploadProjectImage(imageFile)
      }

      const payload = {
        title: formData.title,
        description: formData.description,
        image: imageUrl,
        github_url: formData.github_url,
        live_url: formData.live_url,
        tech: formData.tech.split(',').map(t => t.trim())
      }

      if (editingProject) {
        await updateProjectContext({ id: editingProject.id, ...payload })
      } else {
        await addProject(payload)
      }

      onSuccess?.()
      setFormData({
        title: '',
        description: '',
        image: '',
        tech: '',
        github_url: '',
        live_url: ''
      })
      setImageFile(null)
    } catch (err) {
      console.error(err)
      alert(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8">
      {/* IMAGE */}
      <div className="w-full lg:w-[320px]">
        <label className="text-sm text-gray-400">Project Thumbnail</label>

        <div
          onClick={() => fileInputRef.current.click()}
          className="relative aspect-square border-2 border-dashed rounded-2xl cursor-pointer overflow-hidden bg-sectionBG border-white/10 hover:border-brand-1/50 transition-colors"
        >
          <input
            ref={fileInputRef}
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />

          {formData.image ? (
            <>
              <img src={formData.image} className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); handleRemoveImage(); }}
                className="absolute top-2 right-2 bg-red-500 p-2 rounded-full z-10"
              >
                <X size={16} />
              </button>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-gray-400">
              <UploadCloud size={40} />
              <p>Upload Image</p>
            </div>
          )}
        </div>
      </div>

      {/* FORM */}
      <div className="flex-1 space-y-4">
        <div className="space-y-2">
            <label className="text-sm text-gray-400">Title</label>
            <input
            name="title"
            placeholder="Project title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full bg-cardBG border border-white/10 rounded-lg p-3 text-white focus:border-brand-1 outline-none"
            />
        </div>

        <div className="space-y-2">
            <label className="text-sm text-gray-400">Technologies (comma separated)</label>
            <input
            name="tech"
            placeholder="React, Tailwind, Supabase"
            value={formData.tech}
            onChange={handleChange}
            required
            className="w-full bg-cardBG border border-white/10 rounded-lg p-3 text-white focus:border-brand-1 outline-none"
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
                <label className="text-sm text-gray-400">GitHub URL</label>
                <input
                name="github_url"
                placeholder="https://github.com/..."
                value={formData.github_url}
                onChange={handleChange}
                required
                className="w-full bg-cardBG border border-white/10 rounded-lg p-3 text-white focus:border-brand-1 outline-none"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm text-gray-400">Live URL</label>
                <input
                name="live_url"
                placeholder="https://..."
                value={formData.live_url}
                onChange={handleChange}
                required
                className="w-full bg-cardBG border border-white/10 rounded-lg p-3 text-white focus:border-brand-1 outline-none"
                />
            </div>
        </div>

        <div className="space-y-2">
            <label className="text-sm text-gray-400">Description</label>
            <textarea
            name="description"
            placeholder="Project description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full bg-cardBG border border-white/10 rounded-lg p-3 text-white focus:border-brand-1 outline-none h-32 resize-none"
            />
        </div>

        <div className="flex gap-3 pt-4">
          <button 
            type="submit" 
            disabled={loading}
            className="px-6 py-3 bg-brand-1 text-black font-bold rounded-lg hover:bg-white transition-colors disabled:opacity-50"
          >
            {loading ? 'Saving...' : (editingProject ? 'Update Project' : 'Create Project')}
          </button>

          {onCancel && (
            <button 
                type="button" 
                onClick={onCancel}
                className="px-6 py-3 bg-white/5 text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </form>
  )
}

export default ProjectForm
