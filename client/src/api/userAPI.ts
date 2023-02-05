import {$authHost, $host} from '../api/index';
import jwt_decode from 'jwt-decode';

interface IRequestProps {
    email: string,
    password: string,
    role?: string
}

export const registration = async ({email, password}:IRequestProps) => {
    const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async ({email, password}:IRequestProps) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}