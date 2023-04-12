const uuid = require('uuid')
const path = require('path');
const {Posts, PostInfo} = require('../models/models')
const ApiError = require('../errors/ApiError');

class postsController {
    async create(req, res, next) {
        try {
            let {name, categoryId, info} = req.body
            const {img, file_} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const post = await Posts.create({name, categoryId, img: fileName});

            if (info) {
                let fileName = uuid.v4() + ".docx"
                await file_.mv(path.resolve(__dirname, '..', 'static'));
                // console.log(file_)
                info = JSON.parse(info)
                info.forEach(i =>
                    PostInfo.create({
                        title: i.title,
                        description: i.description,
                        postId: post.id,
                        file: fileName

                    })
                )
            }

            return res.json(post)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {categoryId, limit, page} = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let posts;
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
        const post = await Posts.findOne(
            {
                where: {id},
                include: [{model: PostInfo, as: 'info'}]
            },
        )
        return res.json(post);
    }

    // async update(req, res, next) {
    //     try {
    //         if (!req.params.id) {
    //             throw new Error('Не указан id товара')
    //         }
    //         const product = await ProductMapping.findByPk(req.params.id)
    //         if (!product) {
    //             throw new Error('Товар не найден в БД')
    //         }
    //         const name = req.body.name ?? product.name
    //         const price = req.body.price ?? product.price
    //         await product.update({name, price})
    //         res.json(product)
    //     } catch(e) {
    //         next(ApiError.badRequest(e.message))
    //     }
    // }
    //
    // async delete(req, res, next) {
    //     try {
    //         if (!req.params.id) {
    //             throw new Error('Не указан id товара')
    //         }
    //         const product = await ProductMapping.findByPk(req.params.id)
    //         if (!product) {
    //             throw new Error('Товар не найден в БД')
    //         }
    //         await product.destroy()
    //         res.json(product)
    //     } catch(e) {
    //         next(AppError.badRequest(e.message))
    //     }
    // }

}

module.exports = new postsController()
