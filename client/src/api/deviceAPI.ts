import {$authHost, $host} from '../api/index';
import jwt_decode from 'jwt-decode';
import { ITypeBrand, IDevice } from '../store/DeviceStore';


export const createType = async (item:ITypeBrand) => {
    const {data} = await $authHost.post('api/type', item)  //await axios.post('localhost:5000/api/type', {item})
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (item: ITypeBrand) => {
    const {data} = await $authHost.post('api/brand', item)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand');
    return data;
}

export const createDevice = async (device: any) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async () => {
    const {data} = await $host.get('api/device');
    return data;
}

export const fetchOneDevice = async (id:string | undefined) => {
    const {data} = await $host.get('api/device/' + id);
    return data
} 