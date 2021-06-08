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


// Elements for taking the snapshot
var canvas = document.getElementById('canvas')
// CODE FROM https://davidwalsh.name/browser-camera



// Trigger photo take
if (canvas) {
    //camera acces
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
            //video.src = window.URL.createObjectURL(stream);
            video.srcObject = stream;
            video.play();
        });
    }


    var context = canvas.getContext('2d')
    var video = document.getElementById('video')
    const refreshButton = document.querySelector('.refresh_button')
    const uploadButton = document.getElementById('uploadButton')
    document.getElementById("snap").addEventListener("click", function () {
        let width = video.offsetWidth
        let height = video.offsetHeight
        context.drawImage(video, 0, 0, width, height)
        canvas.style.opacity = 1
        canvas.style.zIndex = 0
        uploadButton.classList.remove('disabled')
    });

    //refresh taken photo
    refreshButton.addEventListener('click', () => {
        canvas.style.opacity = 0;
        uploadButton.classList.add('disabled')
    })

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