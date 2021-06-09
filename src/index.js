import express from 'express'
import dotenv from 'dotenv'
import cookieSession from 'cookie-session'
import * as path from 'path';
import login from './routes/POST/login.js'
import logout from './routes/POST/logout.js'
import loginPage from './routes/GET/login.js'
import { carOverviewPage, carDetailpage } from './routes/GET/car.js'
import { checkinPage, checkInfoPage, checkInfo2Page, verificationInfoPage, confirmationPage, callbackValidation, driverInfoPage, depositPage, driverDonePage, documentVerificationPage } from './routes/GET/checkin.js'
import { startCheckin, checkInfo, checkInfo2, verifyDocument, pay, complete } from './routes/POST/checkin.js'
import { findUser, checkLogin } from './modules/login.js'


const app = express()
const PORT = process.env.PORT || 3001
dotenv.config()

app.use(express.static(path.join(path.resolve(), 'public')))
app.use(express.urlencoded({ extended: true }))

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    isLoggedIn: false,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

app.set('view engine', 'ejs')
app.set('views', path.join(path.resolve(), 'src/views/pages'))

//login
app.get('/', loginPage)
app.post('/login', login)
app.post('/logout', logout)

//cars overview page
app.get('/cars', checkLogin, carOverviewPage)

//all checkin routes
app.get('/cars/checkin/', checkLogin, checkinPage)
//check info pages
app.get('/cars/checkin/checkInfo', checkLogin, checkInfoPage)
app.get('/cars/checkin/checkInfo2', checkLogin, checkInfo2Page)
//verification pages
app.get('/cars/checkin/verificationInfo', checkLogin, verificationInfoPage)
app.get('/cars/checkin/driverInfo', checkLogin, driverInfoPage)
app.get('/cars/checkin/documentVerification', checkLogin, documentVerificationPage)

app.get('/cars/checkin/callbackValidation', checkLogin, callbackValidation)
//driver completed page
app.get('/cars/checkin/driverDone', checkLogin, driverDonePage)
//deposit page
app.get('/cars/checkin/deposit', checkLogin, depositPage)
app.get('/cars/checkin/confirm', checkLogin, confirmationPage)

//detail page
app.get('/cars/:car', checkLogin, carDetailpage)

//POST routes
app.post('/cars/checkin/start', startCheckin)
app.post('/cars/checkin/checkInfo', checkInfo)
app.post('/cars/checkin/checkInfo2', checkInfo2)
app.post('/cars/checkin/verifyDocument', verifyDocument)
app.post('/cars/checkin/pay', pay)
app.post('/cars/checkin/complete', complete)




//profile
app.get('/profile', checkLogin, (req, res) => {
    let user = findUser(req.session.userID)
    res.render('profile.ejs', { title: 'profile', user })
})

//404
app.use(function (req, res, next) {
    res.status(404).render('404.ejs', { title: 'error: 404' })
})

app.listen(PORT, () => console.log(`app listening on localhost:${PORT}`))