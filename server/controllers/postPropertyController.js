const {Posts, PostInfo} = require('../models/models')
const ApiError = require('../errors/ApiError');
const uuid = require('uuid')
const path = require('path');
const fs = require("fs");


class postPropertyController {
    async getAll(req, res, next) {
        try {
            if (!req.params.postId) {
                res.status(400).json({message: "ID не указан"});
            }
            const post = await Posts.findByPk(req.params.postId)
            if (!post) {
                res.status(400).json({message: "Товар не найден в БД"});
            }
            const properties = await PostInfo.findAndCountAll({where: {id: req.params.postId}})

            res.json(properties)
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const post = await Posts.findByPk(req.params.postId);
            if (!post) {
                res.status(400).json({message: "Пост не найден в БД"});
            }
            const property = await PostInfo.findOne({where: {postId: req.params.postId, id: req.params.id}});
            if (!property) {
                res.status(500).json({message: "Свойство товара не найдено в БД"});
            }
            res.json(property);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async create(req, res, next) {
        try {
            const post = await Posts.findByPk(req.params.postId);
            let fileName;
            if (!post) {
                res.status(400).json({message: "Пост не найден в БД"});
            }
            if (req.files) {
                const {file} = req.files;
                const type = file.name.split('.').pop();
                fileName = uuid.v4() + "." + type;
                await file.mv(path.resolve(__dirname, '..', 'static', fileName))
            }
            const {title, description} = req.body;
            const property = await PostInfo.create({title, description, file: fileName})
            await property.setPost(post);
            res.json(property)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        try {
            const post = await Posts.findByPk(req.params.postId);
            if (!post) {
                res.status(400).json({message: "Пост не найден в БД"});
            }
            if (!req.params.id) {
                res.status(400).json({message: "Не указано id записи"});
            }
            if (!req.body) {
                res.status(400).json({message: "Нет данных для обновления"});
            }
            let fileName = "";
            const propFile = await PostInfo.findByPk(req.params.id);
            if (propFile.file.toString()){
                await fs.unlinkSync(path.resolve(__dirname, '..', 'static', propFile.file.toString()));
            }
            if (req.files) {
                const {file} = req.files;
                const type = file.name.split('.').pop();
                fileName = uuid.v4() + "." + type;
                await file.mv(path.resolve(__dirname, '..', 'static', fileName))
            }
            const {title, description} = req.body;
            const property = await PostInfo.update({title, description, file: fileName}, {
                where: {
                    id: req.params.id,
                    postId: req.params.postId
                }
            })
            res.json(property)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            if (!req.params.postId) {
                res.status(400).json({message: "Пост не найден в БД"});
            }
            if (!req.params.id) {
                res.status(400).json({message: "Не указано id записи"});
            }
            const propFile = await PostInfo.findByPk(req.params.id);
            if (propFile.file.toString()){
                await fs.unlinkSync(path.resolve(__dirname, '..', 'static', propFile.file.toString()));
            }
            const property = await PostInfo.destroy({where: {postId :req.params.postId, id: req.params.id}});
            res.json(property)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}


module.exports = new postPropertyController()

