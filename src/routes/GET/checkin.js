import { findUser } from '../../modules/login.js'
import { findCar, findDriverNumber } from '../../modules/cars.js'
import { calculateDay } from '../../modules/date.js'
import { calculateTime } from '../../modules/date.js'
import { checkSkipped, checkAllDriversCompleted } from '../../modules/checkin.js'


/**
 * renders checkin page
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function checkinPage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    let skipped = checkSkipped(req.query.skipped)

    let backUrl = '#'

    res.render('checkin/introduction', { title: 'check-in', car, user, backUrl, skipped })
}

/**
 *  renders check info page
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function checkInfoPage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    let skipped = checkSkipped(req.query.skipped)

    // redirect if info has already been confirmed
    if (car.infoConfirmed) {
        res.redirect(`/cars/checkin/verificationInfo?car=${car.id}&skipped=true`)
    }

    let pickupTime = calculateDay(car.startRent) + ' ' + calculateTime(car.startRent)
    let returnTime = calculateDay(car.endRent) + ' ' + calculateTime(car.endRent)
    let status = { infoStatus: 'doing', verifyStatus: 'blanc', paymentStatus: 'blanc' }

    let backUrl = `/cars/checkin/?car=${car.id}`

    res.render('checkin/checkInfo', { title: 'check-in', car, user, pickupTime, returnTime, backUrl, status, skipped })
}

/**
 * renders check info 2 page
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function checkInfo2Page(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)
    let skipped = checkSkipped(req.query.skipped)

    let status = { infoStatus: 'doing', verifyStatus: 'blanc', paymentStatus: 'blanc' }
    let backUrl = `/cars/checkin/checkInfo?car=${car.id}`

    res.render('checkin/checkInfo2', { title: 'check-in', car, user, backUrl, status, skipped })
}

/**
 * renders verification info page
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function verificationInfoPage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    let driverNumber = 1;

    // check if page was skipped to
    let skipped = checkSkipped(req.query.skipped)

    //create an array with all verification statuses
    let driverCompleteStatuses = checkAllDriversCompleted(car)

    //skip full identification routes when it's already been completed
    if (driverCompleteStatuses) {
        res.redirect(`/cars/checkin/deposit?car=${car.id}&skipped=true`)
    }

    let status = { infoStatus: 'done', verifyStatus: 'doing', paymentStatus: 'blanc' }

    let backUrl = `/cars/checkin/checkInfo2?car=${car.id}`

    res.render('checkin/verificationInfo', { title: 'check-in', car, user, backUrl, status, driverNumber, skipped })
}

/**
 * render driver info page
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function driverInfoPage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    let skipped = checkSkipped(req.query.skipped)

    let driverNumber = Number(req.query.driver)
    let driver = car.drivers[driverNumber - 1]

    //skip full driver identification routes when it's already been completed
    if (driver.documentValidated) {
        let nextUrl;
        if (driverNumber >= car.drivers.length) {
            nextUrl = `/cars/checkin/deposit?car=${car.id}`
        }
        //otherwise, go to the next driver
        else {
            nextUrl = `/cars/checkin/driverInfo?car=090911&driver=${driverNumber + 1}`
        }
        res.redirect(nextUrl)
    }

    let status = { infoStatus: 'done', verifyStatus: 'doing', paymentStatus: 'blanc' }

    let backUrl = `/cars/checkin/verificationInfo?car=${car.id}`

    res.render('checkin/driverInfo', { title: 'check-in', car, user, driver, driverNumber, backUrl, status, skipped })
}

/**
 * render document verification page
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function documentVerificationPage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    req.session.car = req.query.car
    req.session.driver = req.query.driver
    let skipped = checkSkipped(req.query.skipped)

    let driverNumber = Number(req.query.driver)
    let driver = car.drivers[driverNumber - 1]

    let status = { infoStatus: 'done', verifyStatus: 'doing', paymentStatus: 'blanc' }

    let backUrl = `/cars/checkin/driverInfo?car=${car.id}&driver=${driverNumber}`

    res.render('checkin/documentVerification', { title: 'check-in', car, user, driver, validated: false, backUrl, status, driverNumber, skipped })
}

/**
 * renders the page that confirms driver lisence validation
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function callbackValidation(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.session.car)

    let skipped = checkSkipped(req.query.skipped)

    let driverNumber = Number(req.session.driver)
    let driver = car.drivers[driverNumber - 1]

    let status = { infoStatus: 'done', verifyStatus: 'doing', paymentStatus: 'blanc' }

    let backUrl = `/cars/checkin/documentVerificationInfo?car=${car.id}&driver=${driverNumber}`


    res.render('checkin/documentVerification', { title: 'check-in', car, user, driver, validated: true, backUrl, status, driverNumber, skipped })
}


/**
 * renders driver completed page
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function driverDonePage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    let skipped = checkSkipped(req.query.skipped)

    //fetch drivernumer when there is no query (coming from back button)
    let driverNumber = Number(req.query.driver)
    if (!driverNumber) {
        car.drivers.forEach((driver, index) => {
            //set drivernumber to index of the last not validated driver
            if (!driver.documentValidated) {
                driverNumber = index + 1;
            }
        })
    }
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

    let status = { infoStatus: 'done', verifyStatus: 'doing', paymentStatus: 'blanc' }

    res.render('checkin/driverDone', { title: 'check-in', car, user, driver, driverNumber, backUrl, nextUrl, status, skipped })
}

/**
 * renders pay deposit page
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function depositPage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    let skipped = checkSkipped(req.query.skipped)

    // redirect if deposit has been payed
    if (car.depositPayed) {
        res.redirect(`/cars/checkin/confirm?car=${car.id}`)
    }

    let status = { infoStatus: 'done', verifyStatus: 'done', paymentStatus: 'doing' }

    let backUrl = `/cars/checkin/driverDone?car=${car.id}`

    res.render('checkin/deposit', { title: 'check-in', car, user, backUrl, status, skipped, payed: car.depositPayed, open: null })
}

/**
 * renders confirm checkin page
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function confirmationPage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    let skipped = checkSkipped(req.query.skipped)

    let verifyStatus = checkAllDriversCompleted(car) ? 'done' : 'notDone';
    let paymentStatus = (car.depositPayed == true) ? 'done' : 'notDone';

    let status = { infoStatus: 'done', verifyStatus: verifyStatus, paymentStatus: paymentStatus }

    let backUrl = `/cars/checkin/deposit?car=${car.id}`

    res.render('checkin/incheckConfirmation', { title: 'check-in', car, user, backUrl, status, skipped })

}


