## Europcar check-in

[Live link](https://europcar-checkin.herokuapp.com/)

### Test account:
Email: sam1
Password: password

--- 

In deze repo vind je de sourcecode voor een auto check-in applicatie waaraan ik gewerkt heb voor Q42. 

---

[Trello board](https://trello.com/b/M7rEyn08/europcar-check-in) 

---
[Product biografie](https://github.com/SamSlotemaker/europcar-check-in/blob/master/docs/productbiografie.pdf)

---

[Design rationale](https://github.com/SamSlotemaker/europcar-check-in/blob/master/docs/design-rationale.pdf)

---

## Table of Content
- [:gear: Installation](#-gear--installation)
- [:book: Debriefing](#-book--debriefing)
  * [Probleemstelling](#probleemstelling)
  * [Opdracht omschrijving](#opdracht-omschrijving)
- [:computer: Code structure](#computer-code-structure)
  * [Actor Diagram](#actor-diagram)
  * [Code consistency](#code-consistency)
    + [function naamgeving](#function-naamgeving)
    + [Code style](#code-style)
    + [Code comments](#code-comments)
- [:minidisc: Data](#minidisc-data)
- [:package: NPM packages](#-package--npm-packages)
  * [Dotenv](#dotenv)
  * [Ejs](#ejs)
  * [Express](#express)
  * [Nodemon](#nodemon)
  * [EsLint](#eslint)
  * [Qrcode](#qrcode)
  * [Cookie-session](#cookie-session)

---

## :gear: Installation
1. Clone this repo
```
git clone https://github.com/SamSlotemaker/europcar-check-in.git
```
2. Make sure you're in the right folder
```
cd europcar-check-in
```
3. Install dependencies
```
npm install
```
4. Start the application
```
npm start
```
5. For development you can run it in dev mode
```
npm run dev
```

---


## :book: Debriefing

### Probleemstelling
Het incheckproces van Europcar Nederland kan al gauw 15 minuten duren. Europcar wilt een mogelijkheid aanbieden om de gehele check-in zelf te regelen. Denk hierbij aan het verifiëren, valideren en betalen van de borg, zodat er op locatie enkel een code hoeft worden gescand, en de huurovereenkomst ondertekend wordt. De gebruiker kan vervolgens snel op pad.

### Opdracht omschrijving
Een gebruiker reserveert vaak ruim van te voren een auto om te huren. Het inchecken van de gebruiker gaat tot op heden altijd fysiek, op locatie bij Europcar. Dit kost al gauw zo’n 15 minuten per gebruiker. 

Maak een digitaal incheckproces voor Europcar, zodat er weinig tot geen fysieke interactie nodig is voor het ophalen van de huurauto. Het incheckproces bestaat uit het inloggen van de gebruiker, het inchecken van de reservering, bevestigen van de identiteit en rijbewijs, en het reserveren van de borg op de desbetreffende creditcard. 

---
## :computer: Code structure

### Code Docs
[code doc generated with JSDoc](https://samslotemaker.github.io/europcar-check-in/docs/codeDoc/index.html)

### Actor Diagram
![Web 1920 – 3](https://user-images.githubusercontent.com/60625329/121935435-b7cdf680-cd48-11eb-8985-4320c89e5196.png)

### Code consistency

#### Function naamgeving
functions krijgen namen die aangeven wat de functie doet. 

Post requests zullen de actie als naam hebben, bijvoorbeeld: 
checkin()
login()

Get request functies zullen de naam van de pagina krijgen, bijvoorbeeld:
overviewPage()
detailPage()

Util functies zullen aangeven wat de functie uitvoert, zoals: 
findUser()
findCar()
checkLogin()

Hierbij zullen boolean returns een naam krijgen waarbij de vraag true of false kan zijn. Zoals:
userValidates() 
userExists()

#### Code style
Om mijn code style te checken zal ik gebruik maken de npm package ESlint. Met de volgende style:
- Enkele quotes : ‘‘
- Geen semicolons: ‘;’

#### Code comments 

voor documentatie van mijn code ga ik gebruik maken van JSDocs. JSdocs maakt gebruik van de volgende code comments structuur: 

```js 
/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {
}
```

---

## :minidisc: Data
Data waar de applicatie op gebouwd is:
<details>
<summary>User object</summary>

```js 

    {
        name: 'Sam Slotemaker',
        birthDate: '06-01-2000',
        email: 'test',
        password: 'password',
        adress: {
            city: 'Heiloo',
            street: 'Westerweg 311',
            zip: '1922 PS',
            country: 'Nederland'
        },
        reservations: [
            {
                id: '090909',
                car: 'Ford',
                model: 'Ka',
                startRent: new Date('Juli 1, 2021 13:30:00'),
                endRent: new Date('Juli 9, 2021 16:00:00'),
                imgUrl: '/style/images/fordKa.jpg',
                allStepsComplete: false,
                checkinStarted: false,
                checkedIn: false,
                infoConfirmed: false,
                drivers: [
                    {
                        info: {
                            name: 'Sam',
                            phone: '0612425243',
                            birthDate: '06-01-2000',
                            email: 'sam.slotemaker@test.nl'
                        },

                        documentValidated: false
                    },
                ],
                depositPayed: false
            },
            {
                id: '090910',
                car: 'Fiat',
                model: 'Punto',
                startRent: new Date('Juli 3, 2021 13:30:00'),
                endRent: new Date('Juli 7, 2021 16:00:00'),
                imgUrl: '/style/images/punto.jpg',
                allStepsComplete: false,
                checkinStarted: false,
                checkedIn: false,
                infoConfirmed: false,
                drivers: [
                    {
                        info: {
                            name: 'Sam',
                            phone: '0612425243',
                            birthDate: '06-01-2000',
                            email: 'sam.slotemaker@test.nl'
                        },
                        documentValidated: false
                    },
                ],
                depositPayed: false
            }
        ]
    }
```
</details>

---

## :package: NPM packages
Discriptions are from the websites given or written by me when not existing.

### Dotenv
[Dotenv](https://www.npmjs.com/package/dotenv) is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

### Ejs
[Ejs](https://www.npmjs.com/package/ejs) is a template engine used to create dynamic web pages.

### Express
[Express](https://www.npmjs.com/package/express) is a small framework used to create node servers, making routing easier to setup and use.


### Nodemon
[Nodemon](https://www.npmjs.com/package/nodemon) is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

### EsLint
[ESLint](https://www.npmjs.com/package/eslint) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code

### Qrcode
[Qrcode](https://www.npmjs.com/package/qrcode) is a tool to generate a QR code image from JSON. 

### Cookie-session
[Cookie-session](https://www.npmjs.com/package/cookie-session) is a cookie-based session middleware used to create user-sessions.


