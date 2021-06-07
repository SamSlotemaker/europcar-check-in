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

export function verifyPerson(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    let driverNumber = Number(req.query.driver)
    let driver = car.drivers[driverNumber - 1]

    driver.personValidated = true;

    res.redirect(`/cars/checkin/documentVerificationInfo?car=${car.id}&driver=${driverNumber}`)
}


export function verifyDocument(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    let driverNumber = Number(req.query.driver)
    let driver = car.drivers[driverNumber - 1]

    driver.documentValidated = true;

    let status = { infoStatus: 'done', verifyStatus: 'doing', paymentStatus: 'blanc' }

    let backUrl = `/cars/checkin/documentVerificationInfo?car=${car.id}&driver=${driverNumber}`

    res.render('checkin/documentVerification', { title: 'check-in', car, user, driver, validated: true, backUrl, status, driverNumber })
}

export function pay(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)
    car.depositPayed = true;

    res.redirect(`/cars/checkin/confirm?car=${car.id}`)
}

export function complete(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)
    car.checkedIn = true;

    res.redirect(`/cars/`)
}