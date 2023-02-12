import { makeAutoObservable } from "mobx";

export interface ITypeBrand {
  id?: number;
  name?: string;
}
export interface IDevice {
  id: number;
  name: string;
  price: number;
  raiting: number;
  img: string;
  info?: [{id:number, title: string, description: string}];
}

export default class DeviceStore {
  _types: ITypeBrand[];
  _brands: ITypeBrand[];
  _devices: IDevice[];
  _selectedType: ITypeBrand;
  _selectedBrand: ITypeBrand;

  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];

    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setTypes(types: ITypeBrand[]) {
    this._types = types;
  }

  setBrands(brands: ITypeBrand[]) {
    this._brands = brands;
  }

  setDevices(devices: IDevice[]) {
    this._devices = devices;
  }

  setSelectedType(type: ITypeBrand) {
    this._selectedType = type;
  }

  setSelectedBrand(brand: ITypeBrand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
