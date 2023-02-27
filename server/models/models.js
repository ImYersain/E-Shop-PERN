const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketDevice = sequelize.define('basket_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Device = sequelize.define('device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const DeviceInfo = sequelize.define('device_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const TypeBrand = sequelize.define('type_brand', {   //промежуточная модель для связи много ко многим брэнд/тип
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


User.hasOne(Basket)   //Юзер имеет одну корзину, связь 1 к 1
Basket.belongsTo(User) //Корзина пренадлежит Юзеру

User.hasMany(Rating) //1 Юзер может имееть несколько оценок
Rating.belongsTo(User) 

Basket.hasMany(BasketDevice) //Корзина имеет несколько девайсов в корзине
BasketDevice.belongsTo(Basket) //Девайсы корзины пренадлежат корзине

Type.hasMany(Device) //одному типу может пренадлежать несколько девайсов
Device.belongsTo(Type)

Brand.hasMany(Device) //одному брэнду может пренадлежать несколько девайсов
Device.belongsTo(Brand)

Device.hasMany(Rating) //девайс имеет много рейтингов
Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo, {as: 'info'})
DeviceInfo.belongsTo(Device)

Type.belongsToMany(Brand, {through: TypeBrand}) //много брэндов может быть одного тип тип  (М к М)
Brand.belongsToMany(Type, {through: TypeBrand}) //и много типов может быть у одного брэнда (М к М)

module.exports = {
    User, 
    Basket, 
    BasketDevice,
    Device, 
    DeviceInfo, 
    Type, 
    Brand,
    Rating,
    TypeBrand
}
