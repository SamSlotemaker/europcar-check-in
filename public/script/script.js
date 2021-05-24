//disclosure form
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')
const submitButton = document.querySelector('.submit')
const form = document.querySelector('.check-in form')

// PROGRESSIVE FORM
let currentTab = 0
if (nextButton) {
    nextButton.addEventListener('click', function () {
        showTab(1)
    })
    prevButton.addEventListener('click', function () {
        showTab(-1)
    })
}

//show correct form tab
function showTab(n) {
    currentTab += n;


    if (currentTab <= 0) {
        prevButton.style.visibility = 'hidden'
    } else {
        prevButton.style.visibility = 'visible'
    }

    showCorrectButton()

    var progressSection = document.querySelector(".progress");
    progressSection.style.setProperty('--offset', calculateProgressOffset(currentTab))
    form.style.setProperty('--formOffset', calculateFormOffset(currentTab))

}

function showCorrectButton() {
    if (currentTab < 2) {
        nextButton.style.display = 'block'
        submitButton.style.display = 'none'
    } else {
        nextButton.style.display = 'none'
        submitButton.style.display = 'block'
    }
}


//calculates how much the progress bar needs to move
function calculateProgressOffset(x) {
    return x * 33 + '%'
}
//calculates how much the form fields need to move
function calculateFormOffset(x) {
    console.log(x * 100 + '%')
    return -x * 100 + '%'
}


// ID VERIFICATION
const idImage = document.querySelector('.id-placeholder img')
console.log(idImage)
const idImageInput = document.querySelector('.field__id_verification input')
console.log(idImageInput)

if (idImage) {
    idImageInput.onchange = () => {
        const [file] = idImageInput.files
        if (file) {
            idImage.src = URL.createObjectURL(file)
        }
    }
}

