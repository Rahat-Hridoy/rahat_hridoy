import { supabase } from './supabase'

// CREATE
export const createProject = async (project) => {
  const { data, error } = await supabase
    .from('projects')
    .insert([project])
    .select()

  if (error) throw error
  return data[0]
}

// READ
export const getProjects = async () => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

// UPDATE
export const updateProject = async (id, updates) => {
  const { data, error } = await supabase
    .from('projects')
    .update(updates)
    .eq('id', id)
    .select()

  if (error) throw error
  return data[0]
}

// DELETE
export const deleteProject = async (id) => {
  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id)

  if (error) throw error
}
