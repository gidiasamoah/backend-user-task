const UserService = require('../services/user.services');

/**
 * Controller creating a new user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns JSON object as response data
 */
const createNewUser = async (req, res, next) => {
    try {
        const response = await UserService.createUser(req.body);
        return res.status(response.code).json(response)
    } catch (error) {run 
        next(error)
    }
}

/**
 * Controller for login user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const signInUser = async (req, res, next) => {
    try {
        const result = await UserService.loginUser(req.body);
        return res.status(result.code).json(result);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createNewUser,
    signInUser
}