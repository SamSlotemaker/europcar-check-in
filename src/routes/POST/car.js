import { findUser } from '../../modules/login.js'
import { findCar } from '../../modules/cars.js'
import QRCode from 'qrcode';

/**
 * handles the car checkin and then renders the checked in detail page
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function checkin(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)
    car.checkedIn = true;

    let isCheckedIn = car.checkedIn

    QRCode.toDataURL('/scanned?id=' + req.params.car)
        .then(url => {
            res.render('detail.ejs', { title: car.car, car, qr: url, checkedIn: isCheckedIn })
        })
        .catch(err => {
            console.error(err)
        })
}