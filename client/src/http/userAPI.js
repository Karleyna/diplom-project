import {$host, $authHost} from "./index"
import jwtDecode from "jwt-decode";


export const registration = async (email, password) => {
    const {data} = await $host.post('api/user/registration',{email,password});
    localStorage.setItem('token',data.token);
    return jwtDecode(data.token);
}
export const updateUser = async (id,email,FIO,telephone,age) => {
    const {data} = await $host.put('api/user/users/' + id,{email,FIO,telephone,age});
    localStorage.setItem('token',data.token);
    return jwtDecode(data.token);
}
export const updateUserRole = async (id, role) => {
    const {data} = await $authHost.put('api/user/' + id,{role});
    return data;
}
export const deleteUser = async (id) => {
    const {data} = await $authHost.delete('api/user/users/' + id)
    return data
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
export const fetchUsers = async () => {
    const {data} = await $host.get('api/user/users')
    return data
}