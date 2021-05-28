//disclosure form
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')
const submitButton = document.querySelector('.submit')
const fields = document.querySelectorAll('.check-in form fieldset')
const form = document.querySelector('.check-in form')

// PROGRESSIVE FORM
let currentTab = 0

//hide all fields and show right one
fields.forEach(field => {
    field.style.visibility = 'hidden'
});
fields[currentTab].style.visibility = 'visible'


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

    //hide all fields and show right one
    fields.forEach(field => {
        field.style.visibility = 'hidden'
    });

    fields[currentTab].style.visibility = 'visible'

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
    if (currentTab < 3) {
        nextButton.style.display = 'block'
        submitButton.style.display = 'none'
    } else {
        nextButton.style.display = 'none'
        submitButton.style.display = 'block'
    }
}

//calculates how much the progress bar needs to move
function calculateProgressOffset(x) {
    console.log(x)
    if (x >= 2) {
        x--
    }
    return x * 33 + '%'
}
//calculates how much the form fields need to move
function calculateFormOffset(x) {
    return -x * 100 + '%'
}


// ID VERIFICATION
const idImage = document.querySelector('.id-placeholder img')
const idImageInput = document.querySelector('.field__id_verification input')

const nameSelect = document.querySelector('.field__id_verification select')
const idImages = document.querySelectorAll('.id-placeholder img')
idImages[0].style.display = 'block'

nameSelect.addEventListener('change', () => {
    idImages.forEach(image => image.style.display = 'none')
    idImages[nameSelect.selectedIndex].style.display = 'block'
})

if (idImage) {
    idImageInput.onchange = () => {
        const [file] = idImageInput.files
        if (file) {
            idImage.src = URL.createObjectURL(file)
        }
    }
}

