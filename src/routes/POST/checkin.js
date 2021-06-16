import { findUser } from '../../modules/login.js'
import { findCar } from '../../modules/cars.js'
import { checkSkipped, checkCompleteCheckedIn } from '../../modules/checkin.js'

/**
 * handles the car checkin and then renders the checked in detail page
 * @param {object} req - req object
 * @param {object} res - response object
 */
export function startCheckin(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    car.checkinStarted = true;

    res.redirect(`/cars/checkin/?car=${car.id}`)
}
/**
 * handles the check info and redirects it to the next one
 * @param {object} req - req object
 * @param {object} res - response object
 */
export function checkInfo(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    res.redirect(`/cars/checkin/checkInfo2?car=${car.id}`)
}

/**
 * handles the check info and sets it's status to complete, redirects to verification info
 * @param {object} req - req object
 * @param {object} res - response object
 */
export function checkInfo2(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    car.infoConfirmed = true;

    res.redirect(`/cars/checkin/verificationInfo?car=${car.id}`)
}


/**
 * handles document validation, sets status to complete for that driver and sends it to the driver done page
 * @param {object} req - req object
 * @param {object} res - response object
 */
export function verifyDocument(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    let driverNumber = Number(req.query.driver)
    let driver = car.drivers[driverNumber - 1]

    driver.documentValidated = true;

    res.redirect(`/cars/checkin/driverDone?car=${car.id}&driver=${driverNumber}`)

}
/**
 * handles the deposit payment, sets status to complete and sends user to checkin complete page
 * @param {object} req - req object
 * @param {object} res - response object
 */
export function pay(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    car.depositPayed = true;

    let skipped = checkSkipped(req.query.skipped)

    let status = { infoStatus: 'done', verifyStatus: 'done', paymentStatus: 'doing' }

    //check which field needs to be opend for payed status, ideal or creditcard
    let openField = req.body.method

    let backUrl = `/cars/checkin/driverDone?car=${car.id}`

    res.render('checkin/deposit', { title: 'check-in', car, user, backUrl, status, skipped, payed: car.depositPayed, open: openField })
}

/**
 * handles the checkin completion, sets status to be complete and renders detail page
 * @param {object} req - req object
 * @param {object} res - response object
 */
export function complete(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)
    car.checkedIn = true;

    car.allStepsComplete = checkCompleteCheckedIn(car)
    console.log(car)
    res.redirect(`/cars/${car.id}`)
}