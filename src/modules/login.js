import users from '../testData/user.js'

/**
 * login module.
 * @module loginUtils
 */

/**
 * Returns a car.
 * @param {string} user - Userobject containing reservations
 * @param {string} carID - The id of the car reservation
 */
export function findUser(email) {
    return users.find(user => user.email == email)
}

/**
 * Returns a user.
 * @param {string} user - Userobject that equals the given email
 * @param {string} password - password the user filled in
 */
export function userValidates(user, password) {
    return user && user.password == password
}

/**
 * middleware, checks if the user is logged in based on the user session. Redirects to root if not logged in.
 * @param {string} req - req object
 * @param {string} res - response object
 * @param {string} next - function to skip to net middleware
 */
export function checkLogin(req, res, next) {
    if (req.session.isLoggedIn) {
        next()
    } else {
        res.redirect('/')
    }
}