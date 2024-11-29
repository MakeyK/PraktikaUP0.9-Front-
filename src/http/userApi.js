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

export const createRequest = async (contacts, type_service, desired_date_and_time, adress, payment_type) => {
    const { data } = await $host.post('req', { contacts, type_service, desired_date_and_time, adress, payment_type })
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}
export const getAll = async () => {
    try {
        const {data} = await $authHost.get(`getrequest`)
        return data.request
    } catch (error) {
        alert(error.response.data.message)
    }
} 