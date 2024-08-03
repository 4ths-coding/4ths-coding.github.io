const firstDaySlideInnerHTML = [
    `
        <ul>
            <li>Notebook</li>
            <li>Pen</li>
            <li>Water tumbler</li>
            <li>Extra shirt</li>
            <li>Special Medications (if needed)</li>
            <li>Laptop/Tablet (optional)</li>
            <li><strong>Your awesome self :)</strong></li>
        </ul>
    `,
    `
        <p>Buying your own gadget/software is OPTIONAL</p>
        <p>iACADEMY students may access our laboratories with installed softwares.</p>
        <p>
            If you still opt to proceed and buy your own gadget/software, 
            below are some of our recommendations:
        </p>
        <ul>
            <li>Processor: Apple M2 or higher or Intel Core i7 or higher</li>
            <li>VRAM: 2GB or more</li>
            <li>RAM: 16GB if possible, 8GB minimum</li>
            <li>FullHD display or higher with a minimum resolution of 1920×1080 pixels</li>
            <li>512GB + SSD hard drive space, 1TB or more preferable</li>
        </ul>
    `,
    `
        <p>Buying your own gadget/software is OPTIONAL</p>
        <p>iACADEMY students may access our laboratories with installed softwares.</p>
        <p>
            If you still opt to proceed and buy your own gadget/software, 
            below are some of our recommendations:
        </p>
        <h3>CAMERA</h3>
        <ul>
            <li>Sony A6400 and up</li>
            <li>Fujifilm X-S20 and up</li>
            <li>Canon</li>
        </ul>
        <h3>LENS</h3>
        <ul>
            <li>Standard Lens (35mm-85mm)</li>
            <li>Prime Lens</li>
        </ul>
    `,
    `
        <p>Buying your own gadget/software is OPTIONAL</p>
        <p>iACADEMY students may access our laboratories with installed softwares.</p>
        <p>
            If you still opt to proceed and buy your own gadget/software, 
            below are some of our recommendations:
        </p>
        <ul>
            <li>Adobe Creative Cloud</li>
            <li>Maya</li>
            <li>3Ds Max</li>
            <li>Blender</li>
            <li>Toonboom</li>
            <li>Cinema 4D</li>
            <li>DaVinci Resolve</li>
            <li>Avid</li>
            <li>Unity</li>
            <li>Python</li>
            <li>etc.</li>
        </ul>
    `
];

const firstDaySection = document.querySelector(".first-day");
const firstDayText = document.querySelector(".first-day__mobile-view-text");

firstDaySection.classList.add("slide1");
firstDayText.innerHTML = firstDaySlideInnerHTML[0];

var currentSlideIndex = 1;

function clicked() {
    removeSlideClasses();

    currentSlideIndex += 1;

    if (currentSlideIndex > 4) currentSlideIndex = 1;

    switch (currentSlideIndex) {
        case 1:
            firstDaySection.classList.add("slide1");
            firstDayText.innerHTML = firstDaySlideInnerHTML[0];
            break;
        case 2:
            firstDaySection.classList.add("slide2");
            firstDayText.innerHTML = firstDaySlideInnerHTML[1];

            break;
        case 3:
            firstDaySection.classList.add("slide3");
            firstDayText.innerHTML = firstDaySlideInnerHTML[2];

            break;
        case 4:
            firstDaySection.classList.add("slide4");
            firstDayText.innerHTML = firstDaySlideInnerHTML[3];

            break;

        default:
            break;
    }
}

function removeSlideClasses() {
    firstDaySection.classList.remove("slide1");
    firstDaySection.classList.remove("slide2");
    firstDaySection.classList.remove("slide3");
    firstDaySection.classList.remove("slide4");
}
