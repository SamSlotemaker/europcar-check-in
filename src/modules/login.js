import users from '../testData/user.js'

/**
 * Returns a car.
 * @constructor
 * @param {string} user - Userobject containing reservations
 * @param {string} carID - The id of the car reservation
 */
export function findUser(email) {
    return users.find(user => user.email == email)
}

/**
 * Returns a car.
 * @constructor
 * @param {string} user - Userobject that equals the given email
 * @param {string} password - password the user filled in
 */
export function userValidates(user, password) {
    return user && user.password == password
}

/**
 * checks if the user is logged in.
 * @constructor
 * @param {string} req - req object
 * @param {string} res - response object
 * @param {string} next - function to skip to net middleware
 */
export function checkLogin(req, res, next) {
    if (req.session.isLoggedIn) {
        next()
    } else {
        console.log('redirect 1');
        res.redirect('/')
    }
}