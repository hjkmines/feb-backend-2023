const User = require('../models/User');
// For '/user' endpoint 

const getUsers = async (res, req, next) => {

    const filter = {}
    const options = {}
    if (Object.keys(req.query).length) {
        const {
            gender, 
            userName, 
            limit, 
            sortByUserName
        } = req.query

        if (gender) filter.gender = true
        if (userName) filter.userName = true

        if (limit) options.limit = limit; 
        if (sortByUserName) options.sort = {
            userName: sortByUserName
        }
    }

    try {
        const users = await User.find()

        res
        .status(200) // 'ok'
        .setHeader('Content-Type', 'application/json')
        .json(users)
    } catch (err) {
        next(err)
    }

}

const postUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body)

        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(user)
    } catch (err) {
        next(err)
    }
    
}

const deleteUsers = async (req, res, next) => {
    try {
        const users = await User.deleteMany()
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(users)
    } catch (err) {
        next(err)
    }
}

// For '/user/:userId/'
const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(user)
    } catch (err) {
        next(err)
    }

}

const putUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true })

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(user)
    } catch (err) {
        next(err)
    }
    
}

const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.userId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(user)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getUsers, 
    postUser, 
    deleteUsers, 
    getUser, 
    putUser, 
    deleteUser
}