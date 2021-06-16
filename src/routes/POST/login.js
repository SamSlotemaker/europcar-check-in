import { findUser, userValidates } from '../../modules/login.js'

/**
 * login POST routes.
 * @module loginRoutesPOST
 */


/**
 * handles the post request for the user login
 * ON SUCCESS: Redirect to overview page
 * ON ERROR: render login with error
 * @param {string} req - req object
 * @param {string} res - response object
 */
export default function login(req, res) {
    const user = findUser(req.body.email)

    if (userValidates(user, req.body.password)) {
        req.session.isLoggedIn = true;
        req.session.userID = user.email;
        res.redirect('/cars')
    }
    else {
        res.render('login.ejs', { title: 'login', error: true })
    }
}