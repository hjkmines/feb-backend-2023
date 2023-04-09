const adminValidator = (req, res, next) => {
    if (req.user.admin) {
        next()
    } else {
        res
        .status(401)
        .setHeader('Content-Type', 'application/json')
        .json({ msg: 'Unauthorized to access this resource!' })
    }
}

module.exports = adminValidator;