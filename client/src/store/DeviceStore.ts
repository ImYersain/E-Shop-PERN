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
  _selectedType: any;
  _selectedBrand: ITypeBrand;
  _page: number;
  _totalCount: number;
  _limit: number;

  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];

    this._selectedType = {};
    this._selectedBrand = {};

    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;
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

  setPage(page: number) {
    this._page = page;
  }

  setTotalCount(totalCount: number) {
    this._totalCount = totalCount;
  }

  setLimit(limit: number) {
    this._limit = limit;
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

  get page() {
    return this._page;
  }

  get totalCount() {
    return this._totalCount;
  }

  get limit() {
    return this._limit;
  }
}
