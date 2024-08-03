const campus = {
    makati: {
        heading: "iACADEMY Makati - Nexus",
        paragraphs: `<p class="paragraph">
                        iACADEMY’s first campus was along Ayala Avenue in Makati. It first offered College courses on Software Engineering, Network Engineering, e-Management, and Digital Arts. The school grew its course offerings. In 2007, iACADEMY was the first to offer BS Animation in the Philippines. As the College program offerings grew, the student population grew with it.
                    </p>
                    <p class="paragraph">
                        By 2014, iACADEMY transferred to another building along Buendia Avenue in Makati. The school started offering Senior High School in 2016 and the student population has grown exponentially that by 2017 the school had to build a bigger, newer, even better space for learning.            
                    </p>
                    <p class="paragraph">
                        Hence, the iACADEMY Nexus along Yakal St. still in Makati, closer to partner companies where industry practitioners and professors for iACADEMY come from opened in 2018. 
                    </p>
                    <p class="paragraph">
                        ACADEMY’s unique approach to education has gained traction and has been awarded IBM Center of Excellence in the ASEAN Region, UNITY training and certification center, PwC Accountancy school partner, Toon Boom Center of Excellence, Most Innovative School, among others. See full list of awards , among others. 
                    </p>`
    },
    cebu: {
        heading: "iACADEMY Cebu",
        paragraphs: `
            <p class="paragraph">
                iACADEMY’s success in its Makati Campus has demanded expansion and the only way to grow is to bring the type of education that iACADEMY offers closer to people. In 2023, iACADEMY opened its first regional campus in Cebu IT Park. Its initial offerings are Software Engineering, Game Development, Real Estate Management, Animation, and Multimedia Arts and Design. 
            </p>
            <p class="paragraph">
                Maintaining the same academic and facilities quality that its main campus offers, the unique Cebu campus design is filled with high-tech classrooms, multipurpose hall, Cintiq room, light box room, green room, multimedia laboratory, computer laboratories, and a very inviting student lounge. 
            </p>`
    }
}

const campusLocation = document.getElementById("campusLocation");
const campusParagraphs = document.getElementById("campusParagraphs");
const campusTextArea = document.getElementById("campusTextArea");

document.addEventListener('DOMContentLoaded', () => {
    campusParagraphs.innerHTML = "";

    campusLocation.innerHTML = campus.makati.heading;
    campusParagraphs.innerHTML = campus.makati.paragraphs;





    // Animate when scrolled in the position
    var campusPosition = 999999; 

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const vw = window.innerWidth;

        if (vw <= 1024) {
            campusPosition = 1900;
        } else if (vw <= 2560) {
            campusPosition = 2100;
        }

        console.log("Current vw: " + vw);
        console.log("Current scroll position: " + scrollPosition);

        if (scrollPosition >= campusPosition) {
            campusTextArea.classList.add("shown");
        } else {
            campusTextArea.classList.remove("shown");
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case the element is already in view on load
});

function showCampusText(currentCampus) {


    if (currentCampus === "Makati") {
        campusLocation.innerHTML = campus.makati.heading;
        campusParagraphs.innerHTML = campus.makati.paragraphs;

    } else {
        campusLocation.innerHTML = campus.cebu.heading;
        campusParagraphs.innerHTML = campus.cebu.paragraphs;
    }

    // Trigger the animation
    campusTextArea.classList.remove("shown");
    void campusTextArea.offsetWidth; // Trigger reflow to restart the animation
    campusTextArea.classList.add("shown");
}


const makatiCampusImg = document.getElementById("makati");
const cebuCampusImg = document.getElementById("cebu");

function setActiveCampus(currentCampus) {
    makatiCampusImg.classList.remove("active");
    cebuCampusImg.classList.remove("active");
    showCampusText(currentCampus);

    currentCampus === "Makati" ?
        makatiCampusImg.classList.add("active") :
        cebuCampusImg.classList.add("active");
}