import {$authHost, $host} from "./index";

export const createCategory = async (category) => {
    const {data} = await $authHost.post('api/category', category)
    return data
}
export const deleteCategory = async (id) => {
    const {data} = await $authHost.delete('api/category/' + id)
    return data
}
export const updateCategory = async (id, name) => {
    const {data} = await $authHost.put('api/category/' + id, {name})
    return data
}
export const fetchCategories = async () => {
    const {data} = await $host.get('api/category')
    return data
}