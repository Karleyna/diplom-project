const uuid = require('uuid')
const path = require('path');
const {Posts, PostInfo} = require('../models/models')
const ApiError = require('../errors/ApiError');

class postsController {
    async create(req, res, next) {
        try {
            let {name, categoryId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const post = await Posts.create({name, categoryId, img: fileName});

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    PostInfo.create({
                        title: i.title,
                        description: i.description,
                        postId: post.id
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
            posts = await Posts.findAndCountAll({where:{categoryId}, limit, offset})
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
}

module.exports = new postsController()
