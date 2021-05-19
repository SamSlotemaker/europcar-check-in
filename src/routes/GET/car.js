import { findUser } from '../../modules/login.js'
import { findCar } from '../../modules/cars.js'
import QRCode from 'qrcode';

/**
 * gets user and his reservations from the session cookie and renders the overview page
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function carOverviewPage(req, res) {
    let user = findUser(req.session.userID)
    let reservations = user.reservations;

    res.render('cars.ejs', { title: 'login', reservations })
}

/**
 * gets users and selected car from the cookie and url parameter and then renders detail page
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function carDetailpage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.params.car)
    let isCheckedIn = car.checkedIn;

    QRCode.toDataURL('/scanned?id=' + req.params.car)
        .then(url => {
            res.render('detail.ejs', { title: car.car, car, qr: url, checkedIn: isCheckedIn })
        })
        .catch(err => {
            console.error(err)
        })
}

/**
 * gets users and selected car from the cookie and url parameter and then renders checkin page for that car
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function checkinPage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)
    res.render('check-in.ejs', { title: car.car, car })
}

