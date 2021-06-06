import { findUser } from '../../modules/login.js'
import { findCar, findDriverNumber } from '../../modules/cars.js'
import { calculateDay } from '../../modules/date.js'
import { calculateTime } from '../../modules/date.js'


/**
 * gets users and selected car from the cookie and url parameter and then renders checkin page for that car
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function checkinPage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    // let pickupTime = calculateDay(car.startRent) + ' ' + calculateTime(car.startRent)
    // let returnTime = calculateDay(car.endRent) + ' ' + calculateTime(car.endRent)

    res.render('checkin/introduction', { title: 'check-in', car, user })
}

/**
 * gets users and selected car from the cookie and url parameter and then renders checkin page for that car
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function checkInfoPage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    let pickupTime = calculateDay(car.startRent) + ' ' + calculateTime(car.startRent)
    let returnTime = calculateDay(car.endRent) + ' ' + calculateTime(car.endRent)

    res.render('checkin/checkInfo', { title: 'check-in', car, user, pickupTime, returnTime })
}

/**
 * gets users and selected car from the cookie and url parameter and then renders checkin page for that car
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function checkInfo2Page(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    res.render('checkin/checkInfo2', { title: 'check-in', car, user })
}

/**
 * gets users and selected car from the cookie and url parameter and then renders checkin page for that car
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function verificationInfoPage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    res.render('checkin/verificationInfo', { title: 'check-in', car, user })
}

/**
 * gets users and selected car from the cookie and url parameter and then renders checkin page for that car
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function driverInfoPage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    let driver = car.drivers[0]
    let driverNumber = findDriverNumber(driver, car.drivers)

    console.log(driver);
    res.render('checkin/driverInfo', { title: 'check-in', car, user, driver, driverNumber })
}

/**
 * gets users and selected car from the cookie and url parameter and then renders checkin page for that car
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function personVerificationInfoPage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    res.render('checkin/personVerificationInfo', { title: 'check-in', car, user })
}

/**
 * gets users and selected car from the cookie and url parameter and then renders checkin page for that car
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function personVerificationPage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)
    let driver = car.drivers[0]

    res.render('checkin/personVerification', { title: 'check-in', car, user, driver })
}

/**
 * gets users and selected car from the cookie and url parameter and then renders checkin page for that car
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function documentVerificationInfoPage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    res.render('checkin/documentVerificationInfo', { title: 'check-in', car, user })
}

/**
 * gets users and selected car from the cookie and url parameter and then renders checkin page for that car
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function documentVerificationPage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)
    let driver = car.drivers[0]

    res.render('checkin/documentVerification', { title: 'check-in', car, user, driver, validated: false })
}

/**
 * gets users and selected car from the cookie and url parameter and then renders checkin page for that car
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function driverDonePage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)
    let driver = car.drivers[0]

    res.render('checkin/driverDone', { title: 'check-in', car, user, driver })
}
