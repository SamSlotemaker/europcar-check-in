const cssLoader = document.querySelector('.loader')
const documentVerificationForm = document.querySelector('.verify_document_form')
const documentVerificationFormButton = document.querySelector('.verify_document_form button')
const documentVerificationComplete = document.querySelector('.checkin__step_complete')

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

// page transitions
class Fade extends highway.Transition {
    in({ from, to, done }) {
        const tl = new TimelineLite();
        tl.fromTo(to, { opacity: 0 }, {
            opacity: 1, duration: 1, onComplete: function () {
                from.remove()
                done()
            }
        })
    }
    out({ from, done }) {
        done();
    }
}

const H = new highway.Core({
    transitions: {
        default: Fade
    }
})