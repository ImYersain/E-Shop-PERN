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
}

export default class DeviceStore {
  _types: ITypeBrand[];
  _brands: ITypeBrand[];
  _devices: IDevice[];
  _selectedType: ITypeBrand

  constructor() {
    this._types = [
      { id: 1, name: "Notebook" },
      { id: 2, name: "Smartphone" },
      { id: 3, name: "TV" },
      { id: 4, name: "Watch" },
    ];
    this._brands = [
      { id: 1, name: "Apple" },
      { id: 2, name: "Samsung" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Iphone 13",
        price: 1000,
        raiting: 5,
        img:
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-green?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1656712887888",
      },
      {
        id: 1,
        name: "Iphone 13",
        price: 1000,
        raiting: 5,
        img:
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-green?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1656712887888",
      },
      {
        id: 1,
        name: "Iphone 13",
        price: 1000,
        raiting: 5,
        img:
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-green?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1656712887888",
      },
    ];
    this._selectedType = {};
    makeAutoObservable(this);
  }

  setTypes(types: ITypeBrand[]) {
    this._types = types;
  }

  setBrands(brand: ITypeBrand[]) {
    this._brands = brand;
  }

  setDevices(devices: IDevice[]) {
    this._devices = devices;
  }

  setSelectedType(type: ITypeBrand) {
    this._selectedType = type;
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
}
