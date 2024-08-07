document.addEventListener('DOMContentLoaded', () => {
    const about = document.getElementById("about");

    const aboutPositionPercentage = 15  ; // Example: 50% of the maximum scrollable value

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
        const aboutPosition = maxScrollY * (aboutPositionPercentage / 100);
        const thresholdPosition = Math.min(aboutPosition, 1000); // Use the lesser of aboutPosition or 1300

        console.log('maxScrollY:', maxScrollY); // Log the value of maxScrollY
        console.log('aboutPosition:', aboutPosition); // Log the value of aboutPosition
        console.log('thresholdPosition:', thresholdPosition); // Log the value of thresholdPosition

        if (scrollPosition >= thresholdPosition) {
            about.classList.add('shown');
        } else {
            about.classList.remove('shown');
        }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Recalculate on resize
    handleScroll(); // Initial check in case the element is already in view on load
});

/*
<p class="paragraph">
            This triggered a group of individuals to gather experts from different fields - academics and business,
            to contribute and address unemployment caused by (1) the mismatch of the skills that graduates possess
            and what industries need, and (2) school drop out rate caused by lack of access and low student
            engagement. That group became the founding members that established the Information and Communications
            Technology Academy or iACADEMY in 2002.
        </p>`


<p class="paragraph">
            iACADEMY continues to pave the way and reinvent education by offering degree programs that are highly
            specialized in Computing, Business, and Design following an Output Based Education approach that allow
            students to learn through hands-on experience and from industry experts.
        </p>


        <p class="paragraph mb-md">
            This is our why. What is yours ?
        </p>
*/

// ABOUT SLIDES
const about = {
    text1: `
        <p class="paragraph">
            A <span class="about__highlight-phrase about__highlight-phrase--1">DOLE</span> report records that, “...in the period of 1990-2000 the <span class="about__highlight-phrase about__highlight-phrase--2">highest recorded number of unemployed</span>
            persons was at <span class="about__highlight-phrase about__highlight-phrase--3">3.143 million or a 10.1 percent rate...</span>”
        </p>`,
    text2: `
        <p class="paragraph">
            This triggered a group of individuals to gather <span class="about__highlight-phrase about__highlight-phrase--1">experts from different fields</span> - academics and business,
            to <span class="about__highlight-phrase about__highlight-phrase--2">contribute and address unemployment</span> caused by (1) the mismatch of the skills that graduates possess
            and what industries need, and (2) school drop out rate caused by lack of access and low student
            engagement. That group became the founding members that established the Information and Communications
            Technology Academy or <span class="about__highlight-phrase about__highlight-phrase--3">iACADEMY in 2002</span>.
        </p>`,
    text3: `
        <p class="paragraph">
            Today, iACADEMY has developed <span class="about__highlight-phrase about__highlight-phrase--1">strong industry partnerships</span> that produce <span class="about__highlight-phrase about__highlight-phrase--2">96% job placement rate within 6
            months after graduation</span>. Students’ passions are tuned into careers - they produce projects that <span class="about__highlight-phrase about__highlight-phrase--3">address
            social problems</span>, pitch projects to partner companies, and immerse in an intensive guided 960 hour
            internship.
        </p>`,
    text4: `
        <p class="paragraph">
            iACADEMY continues to pave the way and reinvent education by offering degree programs that are <span class="about__highlight-phrase about__highlight-phrase--1">highly
            specialized</span> in Computing, Business, and Design following an Output Based Education approach that allow
            students to <span class="about__highlight-phrase about__highlight-phrase--2">learn through hands-on experience</span> and from <span class="about__highlight-phrase about__highlight-phrase--3">industry experts</span>.
        </p>`,
    text5: `
        <p class="paragraph mb-md">
            Our <span class="about__highlight-phrase about__highlight-phrase--1">vision</span> is to develop game changers to lead the advancement of society.
            Our <span class="about__highlight-phrase about__highlight-phrase--2">mission</span> is to reinvent education and address the ever-changing needs of industry.
        </p>
        <p class="paragraph">
            <span class="about__highlight-phrase about__highlight-phrase--3">This is our why. What is yours?</span>
        </p>`,
}

const aboutText = document.getElementById("aboutText");

// NEXT-PREV (PART OF ABOUT)
const nextPrevButtons = document.querySelectorAll(".next-prev__button");

// Initially displays the first about text
aboutText.innerHTML = about.text1;
nextPrevButtons[0].classList.add("active");

function setActiveSlide(activeSlide, event) {
    // Removing highlight class in every button before highlighting a button
    nextPrevButtons.forEach(btn => {
        btn.classList.remove("active");
    });


    // Add the highlight class to the clicked button
    event.target.classList.add("active");

    switch (activeSlide) {
        case 1:
            aboutText.innerHTML = about.text1;
            break;
        case 2:
            aboutText.innerHTML = about.text2;
            break;
        case 3:
            aboutText.innerHTML = about.text3;
            break;
        case 4:
            aboutText.innerHTML = about.text4;
            break;
        case 5:
            aboutText.innerHTML = about.text5;
            break;
        case 6:
            aboutText.innerHTML = about.text6;
            break;
        default:
            break;
    }
    aboutText.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
