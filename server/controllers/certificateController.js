const {Certificate} = require('../models/models')
const ApiError = require('../errors/ApiError');

class certificateController {
    async create(req, res) {
        const {name} = req.body;
        const certificate = await Certificate.create({name});
        return res.json(certificate);
    }

    async getAll(req, res) {
        let {userId} = req.query;
        let certificates;
        if (!userId){
            certificates = await Certificate.findAll()
        }
        else {
            certificates = await Certificate.findAndCountAll({where: {userId}});
        }

        return res.json(certificates)
    }
    async getOne(req, res) {
        const {id} = req.params;
        const certificate = await Certificate.findOne({where: {id}});
        return res.json(certificate);
    }

}

module.exports = new certificateController()