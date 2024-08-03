document.addEventListener('DOMContentLoaded', () => {

});

const checklistCircle = document.getElementById("checklistCircle");


let stepIndex = 1;

showSlides(stepIndex);

function nextList(n) {
    showSlides(stepIndex += n);
}

function currentSlide(n) {
    showSlides(stepIndex = n);
}

function showSlides(n) {
    // Removing all classes before adding a new one
    checklistCircle.classList.remove("rotate-1");
    checklistCircle.classList.remove("rotate-2");
    checklistCircle.classList.remove("rotate-3");
    checklistCircle.classList.remove("rotate-4");
    checklistCircle.classList.remove("rotate-5");

    let totalSteps = 5;

    if (n > totalSteps) { stepIndex = 1 }
    if (n < 1) { stepIndex = totalSteps }

    switch (stepIndex) {
        case 1:
            checklistCircle.classList.add("rotate-1");
            break;
        case 2:
            checklistCircle.classList.add("rotate-2");
            break;
        case 3:
            checklistCircle.classList.add("rotate-3");
            break;
        case 4:
            checklistCircle.classList.add("rotate-4");
            break;
        case 5:
            checklistCircle.classList.add("rotate-5");
            break;

        default:
            break;
    }
}
