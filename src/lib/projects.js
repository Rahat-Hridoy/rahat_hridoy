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
    .order('sort_order', { ascending: true }) // Changed to sort_order

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

// REORDER
export const reorderProjects = async (projects) => {
  // We'll update the sort_order for each project
  // This can be optimized with an RPC call, but for now a loop or Promise.all is fine for small lists
  try {
    const updates = projects.map((project, index) => 
      supabase
        .from('projects')
        .update({ sort_order: index })
        .eq('id', project.id)
    );
    
    await Promise.all(updates);
    return true;
  } catch (error) {
    throw error;
  }
}

// DELETE
export const deleteProject = async (id) => {
  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id)

  if (error) throw error
}
