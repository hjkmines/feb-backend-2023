// For '/user' endpoint 

const getUsers = (res, req, next) => {
    if (Object.keys(req.query).length) {
        const {
            gender, 
            userName
        } = req.query

        const filter = []; 

        if (gender) filter.push(gender)
        if (userName) filter.push(userName)

        for (const query of filter) {
            console.log(`Searching item by ${query}`)
        }
    }

    res
    .status(200) // 'ok'
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Show me all the users' })
}

const postUser = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `
    Creating user with user name of: ${req.body.userName}
    and user description of: ${req.body.userDescription}` 
    })
}

const deleteUsers = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Deleting all users' })
}

// For '/user/:userId/'
const getUser = (req, res, next) => {
    console.log(req)
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Show me the user with user id of ${req.params.userId}` })
}

const putUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Update the user with user id of ${req.params.userId}` })
}

const deleteUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Delete the user with user id of ${req.params.userId}` })
}

module.exports = {
    getUsers, 
    postUser, 
    deleteUsers, 
    getUser, 
    putUser, 
    deleteUser
}