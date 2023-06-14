import {$authHost, $host} from "./index";

export const fetchPostInfo = async (postId) => {
    const {data} = await $host.get(`api/posts/${postId}/property/`)
    return data
}

export const createPostInfo = async (postInfo, postId) => {
    const {data} = await $authHost.post(`api/posts/${postId}/property/`, postInfo)
    return data
}
export const updatePostInfo = async (postId, propertyId, formData) => {
    const {data} = await $authHost.put(`api/posts/${postId}/property/${propertyId}`, formData)
    return data
}
export const deletePostInfo = async (postId, propertyId) => {
    const {data} = await $authHost.delete(`api/posts/${postId}/property/${propertyId}`)
    return data
}