// user array with userdata to create the application.
const users = [
    //leeftijd
    //gebruikersadres ter verificatie
    //ideal betaalmethode

    //borg betaling zou altijd moeten kunnen, ook 
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
    },
    {
        name: 'Sam Slotemaker',
        birthDate: '06-01-2000',
        email: 'sam1',
        password: 'password',
        adress: {
            city: 'Heiloo',
            street: 'Westerweg 311',
            zip: '1922 PS',
            country: 'Nederland'
        },
        reservations: [
            {
                id: '090911',
                car: 'BMW',
                model: '5 serie',
                startRent: new Date('June 10, 2021 13:30:00'),
                endRent: new Date('June 17, 2021 16:00:00'),
                imgUrl: '/style/images/5serie.jpg',
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
                    {
                        info: {
                            name: 'Martijn',
                            phone: '0612425243',
                            birthDate: '06-01-2000',
                            email: 'martijn.tromp@test.nl'
                        },
                        documentValidated: false
                    }
                ],
                depositPayed: false
            },
            {
                id: '090912',
                car: 'Audi',
                model: 'A3',
                startRent: new Date('juni 22, 2021 13:30:00'),
                endRent: new Date('Juli 20, 2021 16:00:00'),
                imgUrl: '/style/images/a3.jpg',
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
]

export default users