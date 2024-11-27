import { $authHost, $host } from "./index";
import { jwtDecode } from 'jwt-decode';

export const registration = async (FIO, phone, email, login, password) => {
    const {data} = await $host.post('registration', { FIO, phone, email, login, password })
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const logins = async (login, password) => {
    const { data } = await $host.post('login', { login, password })
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}