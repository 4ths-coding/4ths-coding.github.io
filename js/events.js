const eventItems = document.querySelectorAll(".events-gallery__item");
const dateAndIndicatorContainer = document.querySelectorAll(".events-gallery__date-and-indicator");
const indicators = document.querySelectorAll(".events-gallery__indicator");

dateAndIndicatorContainer.forEach(container => {
    container.addEventListener("click", () => setContainernActive(container));
});

eventItems.forEach(item => {
    item.addEventListener("mouseenter", () => setItemActive(item));
});

function setItemActive(item) {
    const container = item.querySelector(".events-gallery__date-and-indicator");

    setContainernActive(container);
}

function setContainernActive(container) {
    if (!container.classList.contains("active")) {
        deactivateAllContainer();
        resetAllIndicator();
        const indicator = container.querySelector(".events-gallery__indicator");
        indicator.innerHTML = "–";
        container.classList.add("active");
    } else {
        deactivateAllContainer();
        resetAllIndicator();
        container.classList.remove("active");
    }
}

function deactivateAllContainer(){
    dateAndIndicatorContainer.forEach(container => {
        container.classList.remove("active");
    });
}

function resetAllIndicator() {
    indicators.forEach(indicator => {
        indicator.innerHTML = "+";
    });
}
