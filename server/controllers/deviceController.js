const uuid = require('uuid')
const path = require('path')
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let filename = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', filename))

            const device = await Device.create({name, price, brandId, typeId, info, img: filename})

            if(info) {
                info = JSON.parse(info)
                info.array.forEach(item => {
                    DeviceInfo.create({
                        title: item.title,
                        description: item.description,
                        deviceId: device.id
                    })
                });
            }

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
 
    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let devices
        if(!brandId && !typeId) {
            devices = await Device.findAll({limit, offset})
        }
        if(brandId && !typeId) {
            devices = await Device.findAll({where: {brandId}, limit, offset})
        }
        if(!brandId && typeId) {
            devices = await Device.findAll({where: {typeId}, limit, offset})
        }
        if(brandId && typeId) {
            devices = await Device.findAll({where: {brandId, typeId}, limit, offset})
        }

        return res.json(devices)
    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            }
        )

        return res.json(device)
    }
}


module.exports = new DeviceController();