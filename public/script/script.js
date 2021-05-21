//disclosure form
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')
const form = document.querySelector('.check-in form')
console.log(form);
console.log(prevButton)


// PROGRESSIVE FORM
// part of the code from https://www.w3schools.com/howto/howto_js_form_steps.asp
var currentTab = 0; // Current tab is set to be the first tab (0)
if (nextButton) {
    nextButton.addEventListener('click', function () {
        showTab(1)
    })
    prevButton.addEventListener('click', function () {
        console.log(currentTab)
        showTab(-1)
    })
}

//show correct form tab
function showTab(n) {
    // This function will display the specified tab of the form ...
    currentTab += n;

    var progressSection = document.querySelector(".progress");
    progressSection.style.setProperty('--offset', calculateProgressOffset(currentTab))
    form.style.setProperty('--formOffset', calculateFormOffset(currentTab))

}

function calculateProgressOffset(x) {
    return x * 33 + '%'
}
function calculateFormOffset(x) {
    console.log(x * 100 + '%')
    return -x * 100 + '%'
}