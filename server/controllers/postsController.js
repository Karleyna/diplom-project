const uuid = require('uuid')
const path = require('path');
const {Posts, PostInfo} = require('../models/models')
const ApiError = require('../errors/ApiError');
const fs = require("fs");
const {Op} = require("sequelize");

class postsController {
    async create(req, res, next) {
        try {
            let {name, categoryId} = req.body;
            let fileName;
            if (req.files) {
                const {img} = req.files;
                fileName = uuid.v4() + ".jpg";
                await img.mv(path.resolve(__dirname, '..', 'static', fileName));
            }
            const post = await Posts.create({name, categoryId, img: fileName});
            return res.json(post);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }

    }


    async getAll(req, res) {
        let {categoryId, limit, page, postName} = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let posts;
        if (offset< 0 && !postName){
            posts = await Posts.findAll();
            return res.json(posts)
        } else if (offset< 0 && postName) {
            const posts = await Posts.findAll({
                where: {
                    name: {
                        [Op.like]: `%${postName}%`
                    }
                }
            })
            return res.json(posts);
        }

        if (!categoryId) {
            posts = await Posts.findAndCountAll({limit, offset})
        }

        if (categoryId) {
            posts = await Posts.findAndCountAll({where: {categoryId}, limit, offset})
        }
        return res.json(posts)
    }

    async getOne(req, res) {
        const {id} = req.params
        const post = await Posts.findOne({where: {id}})
        return res.json(post);
    }

    async update(req, res, next) {
        try {
            if (!req.params.id) {
                res.status(400).json({message: "Не указано id"});
            }
            const post = await Posts.findByPk(req.params.id)
            if (!post) {
                res.status(400).json({message: "Пост не найден в БД"});
            }
            let fileName;
            if (req.files) {
                if (post.img !== null) {
                    await fs.unlinkSync(path.resolve(__dirname, '..', 'static', post.img.toString()));
                }
                const {img} = req.files;
                fileName = uuid.v4() + ".jpg";
                await img.mv(path.resolve(__dirname, '..', 'static', fileName));
            }
            const {name, categoryId} = req.body;
            await post.update({name, categoryId, img: fileName})
            res.json(post)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            if (!req.params.id) {
                res.status(400).json({message: "Не указано id"});
            }
            const post = await Posts.findByPk(req.params.id)
            if (!post) {
                res.status(400).json({message: "Пост не найден в БД"});
            }
            const properties = await PostInfo.findAll({where: {postId: req.params.id}});
            for (let i of properties) {
                if (i.file !== null) {
                    await fs.unlinkSync(path.resolve(__dirname, '..', 'static', i.file.toString()));
                }
                await i.destroy();
            }
            if (post.img !== null) {
                await fs.unlinkSync(path.resolve(__dirname, '..', 'static', post.img.toString()));
            }
            await post.destroy()
            res.json(post)
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

}

module.exports = new postsController()
