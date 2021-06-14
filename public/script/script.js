const cssLoader = document.querySelector('.loader')
const documentVerificationForm = document.querySelector('.verify_document_form')
const documentVerificationFormButton = document.querySelector('.verify_document_form button')
const documentVerificationComplete = document.querySelector('.checkin__step_complete')
const noJsMessages = document.querySelectorAll('.no-javascript')

//hide all messagees saying you need Javascript
noJsMessages.forEach(message => {
    message.style.display = 'none'
})

//change all backbuttons on checkin to lastvisited page
const checkinBackButton = document.querySelector('.checkin__back_button')
if (checkinBackButton) {
    checkinBackButton.href = '#'
    //go back in history when back is clicked
    checkinBackButton.addEventListener('click', () => {
        window.history.back()
    })
}


function handleDocumentFormSubmit(e) {
    e.preventDefault()

    documentVerificationFormButton.style.display = 'none'
    cssLoader.style.display = 'block'

    setTimeout(() => {
        documentVerificationForm.submit()
    }, 3000)

}

if (documentVerificationForm) {
    documentVerificationForm.addEventListener('submit', handleDocumentFormSubmit)
}

// deposit payments
const depositInputs = document.querySelectorAll('#payment_form > section input')
const depositForm = document.querySelector('#payment_form')
console.log(depositInputs);
depositInputs.forEach(input => {
    input.addEventListener('change', (e) => {
        console.log(e.target.value);
        if (e.target.value == 'ideal') {
            depositForm.classList.remove('showCreditcard')
            depositForm.classList.add('showIdeal')
        } else {
            depositForm.classList.add('showCreditcard')
            depositForm.classList.remove('showIdeal')
        }
    })
})


// SAVE QR CODE IMAGE
const saveQRbutton = document.querySelector('.save_qr_image')
const url = 'https://hcti.io/v1/image/6a1328ad-d665-4f03-b73a-2c8667d79227'
if (saveQRbutton) {
    saveQRbutton.addEventListener('click', () => {
        saveImage(url)
    })
}

function saveImage(url) {
    var a = document.createElement('a');
    a.href = url;
    a.download = url;
}


// deposit pay buttons
const payForms = document.querySelectorAll('.checkin__deposit #payment_form form')
const payedButtons = document.querySelectorAll('.checkin__deposit #payment_form form button:last-of-type')

function handlePayment(event) {
    event.preventDefault()
    event.target.classList.add('paying')

    setTimeout(() => {
        event.target.submit()
    }, 1000)
}

if (payForms) {
    payForms.forEach(form => {
        form.addEventListener('submit', handlePayment)
    })
}

// scroll to bottom when payed
if (payedButtons) {
    payedButtons.forEach(button => {
        if (button.textContent.includes('Betaald')) {
            window.scrollTo(0, document.body.scrollHeight);
            return;
        }

    })
}