import {$authHost, $host} from "./index";

export const createPost = async (post) => {
    const {data} = await $authHost.post('api/posts/', post)
    return data
}
export const updatePost = async (post, postId) => {
    const {data} = await $authHost.put(`api/posts/${postId}`, post)
    return data
}
export const deletePost = async (postId) => {
    const {data} = await $authHost.delete(`api/posts/${postId}`)
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
export const fetchOnePost = async (id) => {
    const {data} = await $host.get('api/posts/' + id)
    return data
}