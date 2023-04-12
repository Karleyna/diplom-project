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
    async update(req, res, next) {
        try {
            if (!req.params.id) {
                res.status(400).json({message:"ID не указан"});
            }
            const category = await Category.findByPk(req.params.id)
            if (!category) {
                res.status(404).json({message:"Категория не надена"});
            }
            const name = req.body.name ?? category.name
            await category.update({name})
            res.json(category)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            if (!req.params.id) {
                res.status(400).json({message:"ID не указан"});
            }
            const category = await Category.findByPk(req.params.id)
            if (!category) {
                res.status(404).json({message:"Категория не надена"});
            }
            await category.destroy()
            res.json(category)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new categoryController()