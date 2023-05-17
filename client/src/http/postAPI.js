import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createCategory = async (category) => {
    const {data} = await $authHost.post('api/category', category)
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

export const fetchPosts = async (categoryId, page, limit= 5) => {
    const {data} = await $host.get('api/posts', {params: {
            categoryId, page, limit
        }})
    return data
}

export const fetchPostInfo = async (postId) => {
    const {data} = await $host.get(`api/posts/${postId}/property/`)
    return data
}

export const fetchOnePost = async (id) => {
    const {data} = await $host.get('api/posts/' + id)
    return data
}