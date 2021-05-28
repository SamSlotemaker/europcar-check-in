import { findUser } from '../../modules/login.js'
import { findCar } from '../../modules/cars.js'
import QRCode from 'qrcode';

/**
 * handles the car checkin and then renders the checked in detail page
 * @param {object} req - req object
 * @param {object} res - response object
 */
export function checkin(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)
    car.checkedIn = true;
    res.redirect('/cars/' + car.id)
}