import { supabase } from "./supabaseClient";

export const uploadFile = async (file, folder = "") => {
    const { data, error } = await supabase.storage.from('pram-portfolio').upload(`${folder}/${file.name}`, file, {
        cacheControl: '3600',
        upsert: true
    })
    if (error) {
        console.log(error, "error")
        return null
    } else {
        console.log(data, "data")
        return import.meta.env.VITE_SUPABASE_URL + "/storage/v1/object/public/" + data.fullPath
    }
}