## Europcar check-in

[Live link](https://europcar-checkin.herokuapp.com/)

Test account:
Email: sam1
Password: password


In deze repo vind je de sourcecode voor een auto check-in applicatie waaraan ik gewerkt heb voor Q42. 

## Debriefing

### Probleemstelling
Het incheckproces van Europcar Nederland kan al gauw 15 minuten duren. Europcar wilt een mogelijkheid aanbieden om de gehele check-in zelf te regelen. Denk hierbij aan het verifiëren, valideren en betalen van de borg, zodat er op locatie enkel een code hoeft worden gescand, en de huurovereenkomst ondertekend wordt. De gebruiker kan vervolgens snel op pad.

### Opdracht omschrijving
Een gebruiker reserveert vaak ruim van te voren een auto om te huren. Het inchecken van de gebruiker gaat tot op heden altijd fysiek, op locatie bij Europcar. Dit kost al gauw zo’n 15 minuten per gebruiker. 

Maak een digitaal incheckproces voor Europcar, zodat er weinig tot geen fysieke interactie nodig is voor het ophalen van de huurauto. Het incheckproces bestaat uit het inloggen van de gebruiker, het inchecken van de reservering, bevestigen van de identiteit en rijbewijs, en het reserveren van de borg op de desbetreffende creditcard. 

## Code structure

### Actor Diagram
![Web 1920 – 3](https://user-images.githubusercontent.com/60625329/121935435-b7cdf680-cd48-11eb-8985-4320c89e5196.png)

### Code consistency

#### function naamgeving
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




