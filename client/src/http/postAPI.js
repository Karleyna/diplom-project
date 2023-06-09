import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

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

export const createPost = async (post) => {
    const {data} = await $authHost.post('api/posts', post)
    return data
}

export const fetchPosts = async (categoryId, page, limit) => {
    const {data} = await $host.get('api/posts/', {params: {
            categoryId, page, limit
    }})
    return data
}
export const fetchPostsTrowName = async (page,  postName) => {
    const {data} = await $host.get('api/posts/', {params: {
            page, postName
        }})
    return data
}

export const fetchPostInfo = async (postId) => {
    const {data} = await $host.get(`api/posts/${postId}/property/`)
    return data
}

export const createPostInfo = async (title, description, postId) => {
    const {data} = await $authHost.post(`api/posts/${postId}/property/`, {
            title, description
        })
    return data
}
export const updatePostInfo = async (title, description, postId, propertyId) => {
    const {data} = await $authHost.put(`api/posts/${postId}/property/${propertyId}`, {
        title, description
    })
    return data
}
export const fetchOnePost = async (id) => {
    const {data} = await $host.get('api/posts/' + id)
    return data
}