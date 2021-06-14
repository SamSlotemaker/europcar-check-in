const container = document.querySelector('main section:nth-of-type(1)')
const form = document.querySelector('main section form')
const nextButton = document.querySelector('.checkin__next_button')


//handle fadeout when javascript is on
function handleNextPage(event) {
    event.preventDefault();
    container.classList.add('fade-out')

    setTimeout(() => {
        if (event.target.href) {
            window.location = event.target.href
        }
        else {
            form.submit()
        }
    }, 400)
}

nextButton.addEventListener('click', handleNextPage)