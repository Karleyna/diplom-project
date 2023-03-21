const {Category} = require('../models/models')
const ApiError = require('../errors/ApiError');

class categoryController {
    async create(req, res) {
        const {name} = req.body;
        const category = await Category.create({name});
        return res.json(category);
    }

    async getAll(req, res) {
        const types = await Category.findAll()
        return res.json(types)
    }
    async getOne(req, res) {
        const {id} = req.params;
        const category = await Category.findOne({where: {id}});
        return res.json(category);
    }

}

module.exports = new categoryController()