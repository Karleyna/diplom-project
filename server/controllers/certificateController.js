const {Certificate, User} = require('../models/models')
const ApiError = require('../errors/ApiError');

class certificateController {
    async create(req, res) {
        const {title, userId} = req.body;
        const certificate = await Certificate.create({title, userId});
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
    async update(req, res) {
        try {
            if (!req.params.id) {
                res.status(400).json({message:"ID не указан"});
            }
            const certificate = req.body;
            const updatedCertificate = await Certificate.update(certificate, {where: {id: req.params.id}});
            return res.json(updatedCertificate);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            if (!id) {
                res.status(400).json({message:"ID не указан"});
            }
            const certificate = await Certificate.destroy({where: {id:id}});
            return res.json(certificate);

        } catch (e) {
            res.status(500).json(e)
        }
    }

}

module.exports = new certificateController()