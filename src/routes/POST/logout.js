/**
 * logout POST routes.
 * @module logoutRoutesPOST
 */


/**
 * Sets session.isLoggedIn to false so the user logs out.
 * @param {string} req - req object
 * @param {string} res - response object
 */
export default function logout(req, res) {
    req.session.isLoggedIn = false;
    res.redirect('/')
}