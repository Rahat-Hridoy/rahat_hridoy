import { supabase } from './supabase'

export const uploadProjectImage = async (file) => {
  if (!file) return null

  const fileExt = file.name.split('.').pop()
  const fileName = `${Date.now()}.${fileExt}`
  const filePath = `${fileName}`

  // Using 'projects' bucket as requested by user
  const { error: uploadError } = await supabase.storage
    .from('projects')
    .upload(filePath, file)

  if (uploadError) {
    throw uploadError
  }

  const { data } = supabase.storage
    .from('projects')
    .getPublicUrl(filePath)

  return data.publicUrl
}
