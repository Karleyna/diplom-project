const ApiError = require('../errors/ApiError');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User} = require('../models/models');
const {Op} = require("sequelize");


const generateJwt = (id, email, role) => {
    return jwt.sign({id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    );
}

class UserController {
    async registration(req, res, next) {
        let id = uuid.v4();
        const {email, password, role} = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Empty email or password'));
        }
        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            return next(ApiError.badRequest('User with this email already exists'));
        }
        const hashPassword = await bcrypt.hash(password, 4);
        const user = await User.create({id, email, role, password: hashPassword});
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token});
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Empty email or password'));
        }
        const user = await User.findOne({where: {email}});
        if (!user) {
            return next(ApiError.internal('User with this email not found'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal('Invalid password!'));
        }
        const token = generateJwt(user.id, user.password, user.role);
        return res.json({token});
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({token});
    }

    async getAll(req, res) {
        try {
            const {userEmail} = req.query;
            if (userEmail) {
                const users = await User.findAll({
                    where: {
                        email: {
                            [Op.like]: `%${userEmail}%`
                        }
                    }
                })
                return res.json(users);
            } else {
                const users = await User.findAndCountAll();
                return res.json(users);
            }

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params;
            if (!id) {
                res.status(400).json({message: "ID не указан"});
            }
            const user = await User.findByPk(id);
            return res.json(user);
        } catch (e) {
            res.status(500).json(e.message)
        }

    }

    async update(req, res) {
        try {
            const {id} = req.params;
            const {email, age, telephone, role, FIO} = req.body;
            if (!id) {
                res.status(400).json({message: "ID не указан"});
            }
            const updatedUser = await User.update({email, age, telephone, role, FIO}, {where: {id: id}});
            const token = generateJwt(id, email, role);
            return res.json({token});
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async updateRole(req, res) {
        try {
            const {id} = req.params;
            const {role} = req.body;
            if (!id) {
                res.status(400).json({message: "ID не указан"});
            }
            const updatedUser = await User.update({role}, {where: {id: id}});
            return res.json(updatedUser);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            if (!id) {
                res.status(400).json({message: "ID не указан"});
            }
            const user = await User.destroy({where: {id: id}});
            return res.json(user);

        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new UserController();