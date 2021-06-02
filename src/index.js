import express from 'express'
import dotenv from 'dotenv'
import cookieSession from 'cookie-session'
import * as path from 'path';
import login from './routes/POST/login.js'
import logout from './routes/POST/logout.js'
import loginPage from './routes/GET/login.js'
import { carOverviewPage, carDetailpage } from './routes/GET/car.js'
import { checkinPage, checkInfoPage, checkInfo2Page, verificationInfoPage, driverInfoPage, personVerificationPage } from './routes/GET/checkin.js'
import { checkInfo, checkInfo2 } from './routes/POST/checkin.js'
import { findUser, checkLogin } from './modules/login.js'

// felix id verificatie check

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

//cars
app.get('/cars', checkLogin, carOverviewPage)
app.get('/cars/checkin/', checkLogin, checkinPage)
app.get('/cars/checkin/checkInfo', checkLogin, checkInfoPage)
app.get('/cars/checkin/checkInfo2', checkLogin, checkInfo2Page)
app.get('/cars/checkin/verificationInfo', checkLogin, verificationInfoPage)
app.get('/cars/checkin/driverInfo', checkLogin, driverInfoPage)
app.get('/cars/checkin/personVerification', checkLogin, personVerificationPage)


app.get('/cars/:car', checkLogin, carDetailpage)

// app.post('/checkin/', checkLogin, checkin)
app.post('/cars/checkin/checkInfo', checkInfo)
app.post('/cars/checkin/checkInfo2', checkInfo2)


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