/**
 * login routes.
 * @module loginRoutes
 */

/**
 * renders the static login page
 * @param {string} req - req object
 * @param {string} res - response object
 */
export default function loginPage(req, res) {
    res.render('login.ejs', { title: 'login', error: false })
}