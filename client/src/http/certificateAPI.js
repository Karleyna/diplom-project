import {$authHost} from "./index";

export const createCertificate = async (postInfo, postId) => {
    const {data} = await $authHost.post(`api/certificate/`, postInfo)
    return data
}