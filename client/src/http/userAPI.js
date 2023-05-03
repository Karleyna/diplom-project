import {$host, $authHost} from "./index"
import jwtDecode from "jwt-decode";


export const registration = async (email, password) => {
    const {data} = await $host.post('api/user/registration',{email,password, role:'admin'});
    localStorage.setItem('token',data.token);
    return jwtDecode(data.token);
}
export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login',{email,password});
    localStorage.setItem('token',data.token);
    return jwtDecode(data.token);
}
export const check = async () => {
    const {data} = await $authHost.get('api/user/auth');
    localStorage.setItem('token',data.token);
    return jwtDecode(data.token);
}
export const fetchOneUser = async (id) => {
    const {data} = await $host.get('api/user/users/' + id)
    return data
}
export const fetchUsers = async (categoryId, page, limit= 5) => {
    const {data} = await $host.get('api/user/users/')
    return data
}