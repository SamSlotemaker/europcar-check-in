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

    let backUrl = '#'

    res.render('checkin/introduction', { title: 'check-in', car, user, backUrl })
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
    let status = { infoStatus: 'doing', verifyStatus: 'blanc', paymentStatus: 'blanc' }

    let backUrl = `/cars/checkin/?car=${car.id}`

    res.render('checkin/checkInfo', { title: 'check-in', car, user, pickupTime, returnTime, backUrl, status })
}

/**
 * gets users and selected car from the cookie and url parameter and then renders checkin page for that car
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function checkInfo2Page(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)
    let status = { infoStatus: 'doing', verifyStatus: 'blanc', paymentStatus: 'blanc' }
    let backUrl = `/cars/checkin/checkInfo?car=${car.id}`

    res.render('checkin/checkInfo2', { title: 'check-in', car, user, backUrl, status })
}

/**
 * gets users and selected car from the cookie and url parameter and then renders checkin page for that car
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function verificationInfoPage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    let driverNumber = 1;

    let status = { infoStatus: 'done', verifyStatus: 'doing', paymentStatus: 'blanc' }

    let backUrl = `/cars/checkin/checkInfo2?car=${car.id}`

    res.render('checkin/verificationInfo', { title: 'check-in', car, user, backUrl, status, driverNumber })
}

/**
 * gets users and selected car from the cookie and url parameter and then renders checkin page for that car
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function driverInfoPage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    let driverNumber = Number(req.query.driver)
    let driver = car.drivers[driverNumber - 1]

    let status = { infoStatus: 'done', verifyStatus: 'doing', paymentStatus: 'blanc' }

    let backUrl = `/cars/checkin/verificationInfo?car=${car.id}`

    res.render('checkin/driverInfo', { title: 'check-in', car, user, driver, driverNumber, backUrl, status })
}

/**
 * gets users and selected car from the cookie and url parameter and then renders checkin page for that car
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function personVerificationInfoPage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)


    let driverNumber = Number(req.query.driver)

    let status = { infoStatus: 'done', verifyStatus: 'doing', paymentStatus: 'blanc' }

    let backUrl = `/cars/checkin/driverInfo?car=${car.id}&driver=${driverNumber}`


    res.render('checkin/personVerificationInfo', { title: 'check-in', car, user, backUrl, status, driverNumber })
}

/**
 * gets users and selected car from the cookie and url parameter and then renders checkin page for that car
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function personVerificationPage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    let driverNumber = Number(req.query.driver)
    let driver = car.drivers[driverNumber - 1]

    let status = { infoStatus: 'done', verifyStatus: 'doing', paymentStatus: 'blanc' }

    let backUrl = `/cars/checkin/personVerificationInfo?car=${car.id}&driver=${driverNumber}`

    res.render('checkin/personVerification', { title: 'check-in', car, user, driver, backUrl, status, driverNumber })
}

/**
 * gets users and selected car from the cookie and url parameter and then renders checkin page for that car
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function documentVerificationInfoPage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    let driverNumber = Number(req.query.driver)

    let status = { infoStatus: 'done', verifyStatus: 'doing', paymentStatus: 'blanc' }

    let backUrl = `/cars/checkin/personVerification?car=${car.id}&driver=${driverNumber}`

    res.render('checkin/documentVerificationInfo', { title: 'check-in', car, user, backUrl, status, driverNumber })
}

/**
 * gets users and selected car from the cookie and url parameter and then renders checkin page for that car
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function documentVerificationPage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    let driverNumber = Number(req.query.driver)
    let driver = car.drivers[driverNumber - 1]

    let status = { infoStatus: 'done', verifyStatus: 'doing', paymentStatus: 'blanc' }

    let backUrl = `/cars/checkin/documentVerificationInfo?car=${car.id}&driver=${driverNumber}`


    res.render('checkin/documentVerification', { title: 'check-in', car, user, driver, validated: false, backUrl, status, driverNumber })
}

/**
 * gets users and selected car from the cookie and url parameter and then renders checkin page for that car
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function driverDonePage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    let driverNumber = Number(req.query.driver)
    let driver = car.drivers[driverNumber - 1]

    let nextUrl;

    //when drivernumber meets the length of the drivers, go to the deposit
    if (driverNumber >= car.drivers.length) {
        nextUrl = `/cars/checkin/deposit?car=${car.id}`
    }
    //otherwise, go to the next driver
    else {
        nextUrl = `/cars/checkin/driverInfo?car=090911&driver=${driverNumber + 1}`
    }

    let backUrl = `/cars/checkin/documentVerification?car=${car.id}&driver=${driverNumber}`

    let status = { infoStatus: 'done', verifyStatus: 'done', paymentStatus: 'blanc' }

    res.render('checkin/driverDone', { title: 'check-in', car, user, driver, driverNumber, backUrl, nextUrl, status })
}

/**
 * gets users and selected car from the cookie and url parameter and then renders checkin page for that car
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function depositPage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    let status = { infoStatus: 'done', verifyStatus: 'done', paymentStatus: 'doing' }

    let backUrl = `/cars/checkin/driverDone?car=${car.id}`


    res.render('checkin/deposit', { title: 'check-in', car, user, backUrl, status })
}

/**
 * gets users and selected car from the cookie and url parameter and then renders checkin page for that car
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function confirmationPage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    let verifyStatus = (car.drivers[0].documentValidated == true && car.drivers[0].personValidated == true) ? 'done' : 'notDone';
    let paymentStatus = (car.depositPayed == true) ? 'done' : 'notDone';

    let status = { infoStatus: 'done', verifyStatus: verifyStatus, paymentStatus: paymentStatus }

    let backUrl = `/cars/checkin/deposit?car=${car.id}`

    res.render('checkin/incheckConfirmation', { title: 'check-in', car, user, backUrl, status })

}


