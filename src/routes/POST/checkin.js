import { findUser } from '../../modules/login.js'
import { findCar } from '../../modules/cars.js'

/**
 * handles the car checkin and then renders the checked in detail page
 * @param {object} req - req object
 * @param {object} res - response object
 */
export function checkInfo(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    res.redirect(`/cars/checkin/checkInfo2?car=${car.id}`)
}

export function checkInfo2(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    res.redirect(`/cars/checkin/verificationInfo?car=${car.id}`)
}

