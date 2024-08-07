const family = {
    managementCommittee: [
        {
            name: "Dr. Vanessa Tanco",
            position: "CEO & President"
        },
        {
            name: "Ms. Raquel P. Wong",
            position: "COO"
        },
        {
            name: "Ms. Cecilia Sy",
            position: "VP for Academics"
        },
        {
            name: "Ms. Joanna Maria Caneo",
            position: "AVP for Administration"
        },
        {
            name: "Ms. Marygil Reygie Tolentino",
            position: "AVP for Human Resources"
        },
        {
            name: "Ms. Anna Fernandez",
            position: "Senior Manager for Student Affairs and Services"
        },
        {
            name: "Ms. Teresa Bete",
            position: "Senior Manager for Finance"
        },
        {
            name: "Mr. Clarence Gomez",
            position: "Senior Manager for Admissions and Corpoarate Communications"
        },
    ],
    academicHeads: {
        soda: [
            {
                name: "Dean Jon Cuyson",
                position: "SODA Dean"
            },
            {
                name: "Ms. Weena Espardinez",
                position: "Chairperson for Animation"
            },
            {
                name: "Ms. Gilly Tribiana",
                position: "Chairperson for Multimedia Arts"
            },
            {
                name: "Dean Jennifer Jean Dee",
                position: "Chairperson for Fashion and Design"
            },
            {
                name: "Sir Gerard",
                position: "MPSD"
            },
        ],
        sbla: [
            {
                name: "Dean John Padua",
                position: "SBLA Dean"
            },
            {
                name: "Ms. Madeleine Batac",
                position: "Chairperson of Psychology"
            },
            {
                name: "Ms. Leizandra Pugong",
                position: "Chairperson for Accountancy & Business"
            },
            {
                name: "Mr. Gian Carlo Alcantara",
                position: "Chairperson for General Education"
            },
        ],
        soc: [
            {
                name: "Dean Francisco Napalit",
                position: "OIC Dean for SOC"
            },
            {
                name: "Mr. Bennet Tanyag",
                position: "Chairperson for Software Engineering and Web Development"
            },
            {
                name: "Mr. Carl louie So",
                position: "Chairperson for Game Development"
            },
            {
                name: "Ms. Crisola Tan",
                position: "Chairperson for Computer Science"
            },
        ],
        shs: [
            {
                name: "Mr. Paolo Antonio Noceda",
                position: "SHS Principal"
            },
            {
                name: "Peter Hans Tejada",
                position: "SHS Assistant Principal"
            },
        ]
    }
};

const iacGallery = document.getElementById("iacGallery");

const meetIacNav = document.getElementById("meetIacNav");

document.addEventListener('DOMContentLoaded', () => {

    // Initially displays the management committee gallery
    // test gallery
    iacGallery.innerHTML = galleryManagementCommittee;

    // Initially removes the active class for all gallery nav text and setting it to managementcommittee
    meetIacNav.classList.remove("man-com");
    meetIacNav.classList.remove("aca-hea");
    meetIacNav.classList.remove("dep");

    // setting it to managementcommittee
    meetIacNav.classList.add("man-com");


    // Add scroll event listener
    // window.addEventListener('scroll', arrangeGallery);

    const meetIacPositionPercentage = 40  ; // Example: 50% of the maximum scrollable value

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
        const meetIacPosition = maxScrollY * (meetIacPositionPercentage / 100);
        const thresholdPosition = Math.min(meetIacPosition, 2900); // Use the lesser of aboutPosition or 1300

        console.log('maxScrollY:', maxScrollY); // Log the value of maxScrollY
        console.log('meetIacPosition:', meetIacPosition); // Log the value of aboutPosition
        console.log('thresholdPosition:', thresholdPosition); // Log the value of thresholdPosition

        if (scrollPosition >= thresholdPosition) {
            arrangeGallery();
        }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Recalculate on resize
    handleScroll(); // Initial check in case the element is already in view on load

    function arrangeGallery() {
        const instruction1 = document.getElementById("instruction1");
        const instruction2 = document.getElementById("instruction2");

        iacGallery.classList.add("active");

        if (instruction1) {
            instruction1.classList.remove("used");
        }

        if (instruction2) {
            instruction2.classList.remove("used");
        }

        event.target.classList.add("used");
    }

});


function setFamGalleryActiveNav(activeNav) {
    iacGallery.classList.remove("active");

    meetIacNav.classList.remove("man-com");
    meetIacNav.classList.remove("aca-hea");
    meetIacNav.classList.remove("dep");

    switch (activeNav) {
        case "managementCommittee":
            meetIacNav.classList.add("man-com");
            iacGallery.innerHTML = galleryManagementCommittee;
            arrangeGalleryD();
            break;
        case "academicHeads":
            meetIacNav.classList.add("aca-hea");
            iacGallery.innerHTML = galleryAcademicHeads;
            arrangeGalleryD();
            break;
        case "departments":
            meetIacNav.classList.add("dep");
            // test
            iacGallery.innerHTML = galleryAdmission;
            break;

        default:
            break;
    }

    initializeFamily();

}

const instruction1 = document.getElementById("instruction1");
const instruction2 = document.getElementById("instruction2");

function arrangeGallery(event) {
    const instruction1 = document.getElementById("instruction1");
    const instruction2 = document.getElementById("instruction2");

    iacGallery.classList.add("active");

    if (instruction1) {
        instruction1.classList.remove("used");
    }

    if (instruction2) {
        instruction2.classList.remove("used");
    }

    event.target.classList.add("used");
}

function arrangeGalleryD(event) {
    const instruction1 = document.getElementById("instruction1");
    const instruction2 = document.getElementById("instruction2");

    setTimeout(() => {
        iacGallery.classList.add("active");
    }, 100);

    if (instruction1) {
        instruction1.classList.remove("used");
    }

    if (instruction2) {
        instruction2.classList.remove("used");
    }

    event.target.classList.add("used");
}
/*<figure class="iac-gallery__instruction" onclick="arrangeGallery(event)" id="instruction1">
    Click me to view gallery!
</figure>*/
const galleryManagementCommittee = `

                <figure class="iac-gallery__item iac-gallery__item--1">
                    <div class="iac-gallery__content iac-gallery__content--1">
                        <figcaption class="iac-gallery__caption">
                            <h4 class="name">${family.managementCommittee[0].name}</h4>
                            <h5 class="position">${family.managementCommittee[0].position}</h5>
                        </figcaption>
                    </div>
                </figure>
                <figure class="iac-gallery__item iac-gallery__item--2">
                    <div class="iac-gallery__content iac-gallery__content--2">
                        <figcaption class="iac-gallery__caption">
                            <h4 class="name">${family.managementCommittee[1].name}</h4>
                            <h5 class="position">${family.managementCommittee[1].position}</h5>
                        </figcaption>
                    </div>
                </figure>
                <figure class="iac-gallery__item iac-gallery__item--3">
                    <div class="iac-gallery__content iac-gallery__content--3">
                        <figcaption class="iac-gallery__caption">
                            <h4 class="name">${family.managementCommittee[2].name}</h4>
                            <h5 class="position">${family.managementCommittee[2].position}</h5>
                        </figcaption>
                    </div>
                </figure>
                <figure class="iac-gallery__item iac-gallery__item--4 mc">
                    <div class="iac-gallery__content iac-gallery__content--4">
                        <figcaption class="iac-gallery__caption">
                            <h4 class="name">${family.managementCommittee[3].name}</h4>
                            <h5 class="position">${family.managementCommittee[3].position}</h5>
                        </figcaption>
                    </div>
                </figure>
                <figure class="iac-gallery__item iac-gallery__item--5">
                    <div class="iac-gallery__content iac-gallery__content--5">
                        <figcaption class="iac-gallery__caption">
                            <h4 class="name">${family.managementCommittee[4].name}</h4>
                            <h5 class="position">${family.managementCommittee[4].position}</h5>
                        </figcaption>
                    </div>
                </figure>
                <figure class="iac-gallery__item iac-gallery__item--6 mc">
                    <div class="iac-gallery__content iac-gallery__content--6">
                        <figcaption class="iac-gallery__caption">
                            <h4 class="name">${family.managementCommittee[0].name}</h4>
                            <h5 class="position">${family.managementCommittee[0].position}</h5>
                        </figcaption>
                    </div>
                </figure>
                <figure class="iac-gallery__item iac-gallery__item--7 u-gallery-last-item">
                    <div class="iac-gallery__content iac-gallery__content--7">
                        <figcaption class="iac-gallery__caption">
                            <h4 class="name">${family.managementCommittee[1].name}</h4>
                            <h5 class="position">${family.managementCommittee[1].position}</h5>
                        </figcaption>
                    </div>
                </figure>
                <figure class="iac-gallery__item iac-gallery__item--8">
                    <div class="iac-gallery__content iac-gallery__content--8">
                        <figcaption class="iac-gallery__caption">
                            <h4 class="name">${family.managementCommittee[2].name}</>
                            <h5 class="position">${family.managementCommittee[2].position}</h5>
                        </figcaption>
                    </div>
                </figure>
`;

/*<figure class="iac-gallery__instruction" onclick="arrangeGallery(event)" id="instruction2">
    Click me to view gallery!
</figure>*/
const galleryAcademicHeads = `

                <figure class="iac-gallery__item iac-gallery__item--1 soda">
                    <div class="iac-gallery__content iac-gallery__content--1">
                        <figcaption class="iac-gallery__caption">
                            <h4 class="name">${family.academicHeads.soda[0].name}</h4>
                            <h5 class="position">${family.academicHeads.soda[0].position}</h5>
                        </figcaption>
                    </div>
                </figure>
                <figure class="iac-gallery__item iac-gallery__item--2 soda">
                    <div class="iac-gallery__content iac-gallery__content--2">
                        <figcaption class="iac-gallery__caption">
                            <h4 class="name">${family.academicHeads.soda[1].name}</h4>
                            <h5 class="position">${family.academicHeads.soda[1].position}</h5>
                        </figcaption>
                    </div>
                </figure>
                <figure class="iac-gallery__item iac-gallery__item--3 soda">
                    <div class="iac-gallery__content iac-gallery__content--3">
                        <figcaption class="iac-gallery__caption">
                            <h4 class="name">${family.academicHeads.soda[2].name}</h4>
                            <h5 class="position">${family.academicHeads.soda[2].position}</h5>
                        </figcaption>
                    </div>
                </figure>
                <figure class="iac-gallery__item iac-gallery__item--4 soda">
                    <div class="iac-gallery__content iac-gallery__content--4">
                        <figcaption class="iac-gallery__caption">
                            <h4 class="name">${family.academicHeads.soda[3].name}</h4>
                            <h5 class="position">${family.academicHeads.soda[3].position}</h5>
                        </figcaption>
                    </div>
                </figure>
                <figure class="iac-gallery__item iac-gallery__item--5 soda">
                    <div class="iac-gallery__content iac-gallery__content--5">
                        <figcaption class="iac-gallery__caption">
                            <h4 class="name">${family.academicHeads.soda[4].name}</h4>
                            <h5 class="position">${family.academicHeads.soda[4].position}</h5>
                        </figcaption>
                    </div>
                </figure>
                <figure class="iac-gallery__item iac-gallery__item--6 sbla">
                    <div class="iac-gallery__content iac-gallery__content--6">
                        <figcaption class="iac-gallery__caption">
                            <h4 class="name">${family.academicHeads.sbla[0].name}</h4>
                            <h5 class="position">${family.academicHeads.sbla[0].position}</h5>
                        </figcaption>
                    </div>
                </figure>
                <figure class="iac-gallery__item iac-gallery__item--7 sbla">
                    <div class="iac-gallery__content iac-gallery__content--7">
                        <figcaption class="iac-gallery__caption">
                            <h4 class="name">${family.academicHeads.sbla[1].name}</h4>
                            <h5 class="position">${family.academicHeads.sbla[1].position}</h5>
                        </figcaption>
                    </div>
                </figure>
                <figure class="iac-gallery__item iac-gallery__item--8 sbla">
                    <div class="iac-gallery__content iac-gallery__content--8">
                        <figcaption class="iac-gallery__caption">
                            <h4 class="name">${family.academicHeads.sbla[2].name}</h4>
                            <h5 class="position">${family.academicHeads.sbla[2].position}</h5>
                        </figcaption>
                    </div>
                </figure>
                <figure class="iac-gallery__item iac-gallery__item--9 sbla">
                    <div class="iac-gallery__content iac-gallery__content--9">
                        <figcaption class="iac-gallery__caption">
                            <h4 class="name">${family.academicHeads.sbla[3].name}</h4>
                            <h5 class="position">${family.academicHeads.sbla[3].position}</h5>
                        </figcaption>
                    </div>
                </figure>
                <figure class="iac-gallery__item iac-gallery__item--10 soc">
                    <div class="iac-gallery__content iac-gallery__content--10">
                        <figcaption class="iac-gallery__caption">
                            <h4 class="name">${family.academicHeads.soc[0].name}</h4>
                            <h5 class="position">${family.academicHeads.soc[0].position}</h5>
                        </figcaption>
                    </div>
                </figure>
                <figure class="iac-gallery__item iac-gallery__item--11 soc">
                    <div class="iac-gallery__content iac-gallery__content--11">
                        <figcaption class="iac-gallery__caption">
                            <h4 class="name">${family.academicHeads.soc[1].name}</h4>
                            <h5 class="position">${family.academicHeads.soc[1].position}</h5>
                        </figcaption>
                    </div>
                </figure>
                <figure class="iac-gallery__item iac-gallery__item--12 soc">
                    <div class="iac-gallery__content iac-gallery__content--12">
                        <figcaption class="iac-gallery__caption">
                            <h4 class="name">${family.academicHeads.soc[2].name}</h4>
                            <h5 class="position">${family.academicHeads.soc[2].position}</h5>
                        </figcaption>
                    </div>
                </figure>
                <figure class="iac-gallery__item iac-gallery__item--13 soc">
                    <div class="iac-gallery__content iac-gallery__content--13">
                        <figcaption class="iac-gallery__caption">
                            <h4 class="name">${family.academicHeads.soc[3].name}</h4>
                            <h5 class="position">${family.academicHeads.soc[3].position}</h5>
                        </figcaption>
                    </div>
                </figure>
                <figure class="iac-gallery__item iac-gallery__item--14 shs">
                    <div class="iac-gallery__content iac-gallery__content--14">
                        <figcaption class="iac-gallery__caption">
                            <h4 class="name">${family.academicHeads.shs[0].name}</h4>
                            <h5 class="position">${family.academicHeads.shs[0].position}</h5>
                        </figcaption>
                    </div>
                </figure>
                <figure class="iac-gallery__item iac-gallery__item--15 shs">
                    <div class="iac-gallery__content iac-gallery__content--15">
                        <figcaption class="iac-gallery__caption">
                            <h4 class="name">${family.academicHeads.shs[1].name}</h4>
                            <h5 class="position">${family.academicHeads.shs[1].position}</h5>
                        </figcaption>
                    </div>
                </figure>
                <figure class="iac-gallery__item iac-gallery__item--soda-text text-item">
                    <figcaption class="iac-gallery__caption">
                        <h3 class="soda">SCHOOL OF DESIGN AND THE ARTS (SODA)</h3>
                    </figcaption>
                </figure>
                <figure class="iac-gallery__item iac-gallery__item--sbla-text text-item">
                    <figcaption class="iac-gallery__caption">
                        <h3 class="sbla">SCHOOL OF BUSINESS AND LIBERAL ARTS (SBLA)</h3>
                    </figcaption>
                </figure>
                <figure class="iac-gallery__item iac-gallery__item--soc-text text-item">
                    <figcaption class="iac-gallery__caption">
                        <h3 class="soc">SCHOOL OF COMPUTING (SOC)</h3>
                    </figcaption>
                </figure>
                <figure class="iac-gallery__item iac-gallery__item--shs-text text-item">
                    <figcaption class="iac-gallery__caption">
                        <h3 class="shs">SENIOR HIGHSCHOOL (SHS)</h3>
                    </figcaption>
                </figure>
`;

const galleryAdmission = `
                <figure class="iac-gallery__item--departments iac-gallery__item--departments--admission">
                    <div class="iac-gallery__content--departments">
                        <h2 class="department__heading mb-hg">
                            <span class="department__name">Admissions Department</span>
                            <span class="department__floor">Ground Floor</span>
                        </h2>
                        <ul class="department__list">
                            <li class="department__item department__item--1">
                                <span class="department__item-content">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-info-with-circle"></use>
                                        </svg>
                                    </span>
                                    For processing and assisting all incoming students and application inquiries.
                                </span>
                            </li>
                            <li class="department__item department__item--2">
                                <a href="mailto:admissions@iacademy.edu.ph" class="department__item-content department__item-content--email">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-email"></use>
                                        </svg>
                                    </span>
                                   admissions@iacademy.edu.ph
                                </a>
                            </li>
                        </ul>
                        <div class="department-nav mt-lg">
                            <span class="department-nav__prev" onclick="setDepartmentGallery('Library')">
                                &larr; <span id="prevDepartment">Library</span>
                            </span>
                            <span class="department-nav__next" onclick="setDepartmentGallery('Registrar')">
                                <span id="nextDepartment">Registrar's Office</span> &rarr;
                            </span>
                        </div>
                    </div>
                </figure>
`;

const galleryRegistrar = `
                <figure class="iac-gallery__item--departments iac-gallery__item--departments--registrar">
                    <div class="iac-gallery__content--departments">
                        <h2 class="department__heading mb-md">
                            <span class="department__name">Registrar’s Office</span>
                            <span class="department__floor">Ground Floor</span>
                        </h2>
                        <ul class="department__list">
                            <li class="department__item department__item--1">
                                <span class="department__item-content">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-info-with-circle"></use>
                                        </svg>
                                    </span>
                                    For processing and assisting all current students with records.
                                </span>
                            </li>
                            <li class="department__item department__item--2">
                                <a href="mailto:registrar@iacademy.edu.ph" class="department__item-content department__item-content--email">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-email"></use>
                                        </svg>
                                    </span>
                                   registrar@iacademy.edu.ph
                                </a>
                            </li>
                            <li class="department__item department__item--3">
                                <span class="department__item-content">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-phone"></use>
                                        </svg>
                                    </span>
                                   Landline: 8889-5555 loc 2112 and 2115
                                </span>
                            </li>
                            <li class="department__item department__item--4">
                                <span class="department__item-content">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-phone"></use>
                                        </svg>
                                    </span>
                                   Mobile Number: 09171304282
                                </span>
                            </li>
                        </ul>
                        <div class="department-nav mt-lg">
                            <span class="department-nav__prev" onclick="setDepartmentGallery('Admission')">
                                &larr; <span id="prevDepartment">Admissions Department</span>
                            </span>
                            <span class="department-nav__next" onclick="setDepartmentGallery('Finance')">
                                <span id="nextDepartment">Finance Office</span> &rarr;
                            </span>
                        </div>
                    </div>
                </figure>
`;

const galleryFinance = `
                <figure class="iac-gallery__item--departments iac-gallery__item--departments--finance">
                    <div class="iac-gallery__content--departments">
                        <h2 class="department__heading mb-md">
                            <span class="department__name">Finance Office</span>
                            <span class="department__floor">Ground Floor</span>
                        </h2>
                        <ul class="department__list">
                            <li class="department__item department__item--1">
                                <span class="department__item-content">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-info-with-circle"></use>
                                        </svg>
                                    </span>
                                    For payments and financial concerns.
                                </span>
                            </li>
                            <li class="department__item department__item--2">
                                <a href="mailto:shsfinance@iacademy.edu.ph" class="department__item-content department__item-content--email">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-email"></use>
                                        </svg>
                                    </span>
                                   shsfinance@iacademy.edu.ph
                                </a>
                            </li>
                            <li class="department__item department__item--2">
                                <a href="mailto:collegefinance@iacademy.edu.ph" class="department__item-content department__item-content--email">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-email"></use>
                                        </svg>
                                    </span>
                                   collegefinance@iacademy.edu.ph
                                </a>
                            </li>
                        </ul>
                        <div class="department-nav mt-lg">
                            <span class="department-nav__prev" onclick="setDepartmentGallery('Registrar')">
                                &larr; <span id="prevDepartment">Registrar's Office</span>
                            </span>
                            <span class="department-nav__next" onclick="setDepartmentGallery('IT')">
                                <span id="nextDepartment">Information Technology Department</span> &rarr;
                            </span>
                        </div>
                    </div>
                </figure>
`;

const galleryIT = `
                <figure class="iac-gallery__item--departments iac-gallery__item--departments--it">
                    <div class="iac-gallery__content--departments">
                        <h2 class="department__heading mb-sm">
                            <span class="department__name">Information Technology Department</span>
                            <span class="department__floor">Mezzanine</span>
                        </h2>
                        <ul class="department__list">
                            <li class="department__item department__item--1">
                                <span class="department__item-content">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-info-with-circle"></use>
                                        </svg>
                                    </span>
                                    For IT-related and NEO LMS concerns.
                                </span>
                            </li>
                            <li class="department__item department__item--2">
                                <a href="mailto:infotech@iacademy.edu.ph" class="department__item-content department__item-content--email">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-email"></use>
                                        </svg>
                                    </span>
                                   infotech@iacademy.edu.ph
                                </a>
                            </li>
                            <li class="department__item department__item--3">
                                <span class="department__item-content">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-phone"></use>
                                        </svg>
                                    </span>
                                   Telephone Number: 8889-5555 local 2223-2226
                                </span>
                            </li>
                        </ul>
                        <div class="department-nav mt-lg">
                            <span class="department-nav__prev" onclick="setDepartmentGallery('Finance')">
                                &larr; <span id="prevDepartment">Finance Office</span>
                            </span>
                            <span class="department-nav__next" onclick="setDepartmentGallery('OSAS')">
                                <span id="nextDepartment">Office of Student Affairs & Services</span> &rarr;
                            </span>
                        </div>
                    </div>
                </figure>
`;

const galleryOSAS = `
                <figure class="iac-gallery__item--departments iac-gallery__item--departments--osas">
                    <div class="iac-gallery__content--departments">
                        <h2 class="department__heading mb-md">
                            <span class="department__name">Office of Student Affairs and Services</span>
                            <span class="department__floor">Mezzanine</span>
                        </h2>
                        <ul class="department__list">
                            <li class="department__item">
                                <a href="mailto:osas@iacademy.edu.ph" class="department__item-content department__item-content--email">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-email"></use>
                                        </svg>
                                    </span>
                                   osas@iacademy.edu.ph (For student services and student org concerns)
                                </a>
                            </li>
                            <li class="department__item">
                                <a href="mailto:guidance@iacademy.edu.ph" class="department__item-content department__item-content--email">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-email"></use>
                                        </svg>
                                    </span>
                                   guidance@iacademy.edu.ph (For guidance or student support concerns)
                                </a>
                            </li>
                        </ul>
                        <div class="department-nav mt-lg">
                            <span class="department-nav__prev" onclick="setDepartmentGallery('IT')">
                                &larr; <span id="prevDepartment">Information Technology Department</span>
                            </span>
                            <span class="department-nav__next" onclick="setDepartmentGallery('ScholarDep')">
                                <span id="nextDepartment">Scholarship Department</span> &rarr;
                            </span>
                        </div>
                    </div>
                </figure>
`;

const galleryScholarDep = `
                <figure class="iac-gallery__item--departments iac-gallery__item--departments--scholar-dep">
                    <div class="iac-gallery__content--departments">
                        <h2 class="department__heading mb-md">
                            <span class="department__name">Scholarship Department</span>
                            <span class="department__floor">Mezzanine</span>
                        </h2>
                        <ul class="department__list">
                            <li class="department__item department__item--1">
                                <span class="department__item-content">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-info-with-circle"></use>
                                        </svg>
                                    </span>
                                    For scholarship, referral discounts, and financial aid concerns
                                </span>
                            </li>
                            <li class="department__item department__item--2">
                                <a href="mailto:scholarship@iacademy.edu.ph" class="department__item-content department__item-content--email">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-email"></use>
                                        </svg>
                                    </span>
                                   scholarship@iacademy.edu.ph
                                </a>
                            </li>
                            <li class="department__item department__item--3">
                                <span class="department__item-content">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-phone"></use>
                                        </svg>
                                    </span>
                                   Landline Number: Local 2607
                                </span>
                            </li>
                        </ul>
                        <div class="department-nav mt-lg">
                            <span class="department-nav__prev" onclick="setDepartmentGallery('OSAS')">
                                &larr; <span id="prevDepartment">Office of Student Affairs and Services</span>
                            </span>
                            <span class="department-nav__next" onclick="setDepartmentGallery('Partnership')">
                                <span id="nextDepartment">External Linkages & Partneships Department</span> &rarr;
                            </span>
                        </div>
                    </div>
                </figure>
`;

const galleryPartnership = `
                <figure class="iac-gallery__item--departments iac-gallery__item--departments--partnership">
                    <div class="iac-gallery__content--departments">
                        <h2 class="department__heading mb-md">
                            <span class="department__name">External Linkages and Partnerships Department</span>
                            <span class="department__floor">Mezzanine</span>
                        </h2>
                        <ul class="department__list">
                            <li class="department__item department__item--2">
                                <a href="mailto:externallinkages@iacademy.edu.ph" class="department__item-content department__item-content--email">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-email"></use>
                                        </svg>
                                    </span>
                                   externallinkages@iacademy.edu.ph (For industry partnerships and community development projects)
                                </a>
                            </li>
                            <li class="department__item department__item--2">
                                <a href="mailto:internsupport@iacademy.edu.ph" class="department__item-content department__item-content--email">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-email"></use>
                                        </svg>
                                    </span>
                                   internsupport@iacademy.edu.ph (For internship-related inquiries and support)
                                </a>
                            </li>
                        </ul>
                        <div class="department-nav mt-lg">
                            <span class="department-nav__prev" onclick="setDepartmentGallery('ScholarDep')">
                                &larr; <span id="prevDepartment">Scholarship Department</span>
                            </span>
                            <span class="department-nav__next" onclick="setDepartmentGallery('HumanResource')">
                                <span id="nextDepartment">Human Resource Management</span> &rarr;
                            </span>
                        </div>
                    </div>
                </figure>
`;

const galleryHumanResource = `
                <figure class="iac-gallery__item--departments iac-gallery__item--departments--human-resource">
                    <div class="iac-gallery__content--departments">
                        <h2 class="department__heading mb-sm">
                            <span class="department__name">Human Resource Management</span>
                            <span class="department__floor">Mezzanine</span>
                        </h2>
                        <ul class="department__list">
                            <li class="department__item">
                                <span class="department__item-content">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-info-with-circle"></use>
                                        </svg>
                                    </span>
                                    For HR-related concerns
                                </span>
                            </li>
                            <li class="department__item">
                                <a href="mailto:hr@iacademy.edu.ph" class="department__item-content department__item-content--email">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-email"></use>
                                        </svg>
                                    </span>
                                   hr@iacademy.edu.ph
                                </a>
                            </li>
                            <li class="department__item">
                                <span class="department__item-content">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-phone"></use>
                                        </svg>
                                    </span>
                                   Landline: 8 889-5555 loc 2112 and 2115
                                </span>
                            </li>
                            <li class="department__item">
                                <span class="department__item-content">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-phone"></use>
                                        </svg>
                                    </span>
                                   Mobile Number: 09171304282
                                </span>
                            </li>
                        </ul>
                        <div class="department-nav mt-sm">
                            <span class="department-nav__prev" onclick="setDepartmentGallery('Partnership')">
                                &larr; <span id="prevDepartment">External Linkages and Partnerships Department</span>
                            </span>
                            <span class="department-nav__next" onclick="setDepartmentGallery('AdminOffice')">
                                <span id="nextDepartment">Building Admin Office</span> &rarr;
                            </span>
                        </div>
                    </div>
                </figure>
`;

const galleryAdminOffice = `
                <figure class="iac-gallery__item--departments iac-gallery__item--departments--building-admin">
                    <div class="iac-gallery__content--departments">
                        <h2 class="department__heading mb-md">
                            <span class="department__name">Building Admin Office</span>
                            <span class="department__floor">2nd Floor</span>
                        </h2>
                        <ul class="department__list">
                            <li class="department__item">
                                <span class="department__item-content">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-info-with-circle"></use>
                                        </svg>
                                    </span>
                                    For room and equipment reservation concerns
                                </span>
                            </li>
                            <li class="department__item">
                                <a href="mailto:adminfacilities@iacademy.edu.ph" class="department__item-content department__item-content--email">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-email"></use>
                                        </svg>
                                    </span>
                                   adminfacilities@iacademy.edu.ph
                                </a>
                            </li>
                            <li class="department__item">
                                <span class="department__item-content">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-phone"></use>
                                        </svg>
                                    </span>
                                   Local Landline: 2233, 2234, and 2235
                                </span>
                            </li>
                            <li class="department__item">
                                <span class="department__item-content">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-phone"></use>
                                        </svg>
                                    </span>
                                   Mobile Number: 09171700011
                                </span>
                            </li>
                        </ul>
                        <div class="department-nav mt-lg">
                            <span class="department-nav__prev" onclick="setDepartmentGallery('HumanResource')">
                                &larr; <span id="prevDepartment">Human Resource Management</span>
                            </span>
                            <span class="department-nav__next" onclick="setDepartmentGallery('Purchase')">
                                <span id="nextDepartment">Purchasing Department</span> &rarr;
                            </span>
                        </div>
                    </div>
                </figure>
`;

const galleryPurchase = `
                <figure class="iac-gallery__item--departments iac-gallery__item--departments--purchase">
                    <div class="iac-gallery__content--departments">
                        <h2 class="department__heading mb-hg">
                            <span class="department__name">Purchasing Department</span>
                            <span class="department__floor">3rd Floor</span>
                        </h2>
                        <ul class="department__list">
                            <li class="department__item">
                                <span class="department__item-content">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-info-with-circle"></use>
                                        </svg>
                                    </span>
                                    For purchasing and discounted item concerns
                                </span>
                            </li>
                            <li class="department__item">
                                <a href="mailto:purchasing@iacademy.edu.ph" class="department__item-content department__item-content--email">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-email"></use>
                                        </svg>
                                    </span>
                                   purchasing@iacademy.edu.ph
                                </a>
                            </li>
                        </ul>
                        <div class="department-nav mt-lg">
                            <span class="department-nav__prev" onclick="setDepartmentGallery('AdminOffice')">
                                &larr; <span id="prevDepartment">Building Admin Office</span>
                            </span>
                            <span class="department-nav__next" onclick="setDepartmentGallery('Academic')">
                                <span id="nextDepartment">Academics Department</span> &rarr;
                            </span>
                        </div>
                    </div>
                </figure>
`;

const galleryAcademic = `
                <figure class="iac-gallery__item--departments iac-gallery__item--departments--faculty">
                    <div class="iac-gallery__content--departments">
                        <h2 class="department__heading mb-hg">
                            <span class="department__name">Academics Department</span>
                            <span class="department__floor">8th Floor</span>
                        </h2>
                        <ul class="department__list">
                            <li class="department__item">
                                <span class="department__item-content">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-info-with-circle"></use>
                                        </svg>
                                    </span>
                                    For academic-related concerns
                                </span>
                            </li>
                        </ul>
                        <div class="department-nav mt-lg">
                            <span class="department-nav__prev">
                                &larr; <span id="prevDepartment" onclick="setDepartmentGallery('Purchase')">Purchasing Department</span>
                            </span>
                            <span class="department-nav__next" onclick="setDepartmentGallery('Library')">
                                <span id="nextDepartment">Library</span> &rarr;
                            </span>
                        </div>
                    </div>
                </figure>
`;

const galleryLibrary = `
                <figure class="iac-gallery__item--departments iac-gallery__item--departments--library">
                    <div class="iac-gallery__content--departments">
                        <h2 class="department__heading mb-hg">
                            <span class="department__name">Library</span>
                        </h2>
                        <ul class="department__list">
                            <li class="department__item">
                                <span class="department__item-content">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-info-with-circle"></use>
                                        </svg>
                                    </span>
                                    For library concerns
                                </span>
                            </li>
                            <li class="department__item">
                                <a href="mailto:library@iacademy.edu.ph" class="department__item-content department__item-content--email">
                                    <span class="department__icon-container">
                                        <svg class="department__icon">
                                            <use xlink:href="../img/sprite.svg#icon-email"></use>
                                        </svg>
                                    </span>
                                   library@iacademy.edu.ph
                                </a>
                            </li>
                        </ul>
                        <div class="department-nav mt-lg">
                            <span class="department-nav__prev" onclick="setDepartmentGallery('Academic')">
                                &larr; <span id="prevDepartment">Academic Department</span>
                            </span>
                            <span class="department-nav__next" onclick="setDepartmentGallery('Admission')">
                                <span id="nextDepartment">Admissions Department</span> &rarr;
                            </span>
                        </div>
                    </div>
                </figure>
`;

function setDepartmentGallery(activeDepGallery) {
    switch (activeDepGallery) {
        case "Admission":
            iacGallery.innerHTML = galleryAdmission;
            break;
        case "Registrar":
            iacGallery.innerHTML = galleryRegistrar;
            break;
        case "Finance":
            iacGallery.innerHTML = galleryFinance;
            break;
        case "IT":
            iacGallery.innerHTML = galleryIT;
            break;
        case "OSAS":
            iacGallery.innerHTML = galleryOSAS;
            break;
        case "ScholarDep":
            iacGallery.innerHTML = galleryScholarDep;
            break;
        case "Partnership":
            iacGallery.innerHTML = galleryPartnership;
            break;
        case "HumanResource":
            iacGallery.innerHTML = galleryHumanResource;
            break;
        case "AdminOffice":
            iacGallery.innerHTML = galleryAdminOffice;
            break;
        case "Purchase":
            iacGallery.innerHTML = galleryPurchase;
            break;
        case "Academic":
            iacGallery.innerHTML = galleryAcademic;
            break;
        case "Library":
            iacGallery.innerHTML = galleryLibrary;
            break;
        default:
            break;
    }
}



// Expected to return the contents of management committee or academic heads.
// It depends on what nav is active.
function getCurrentGalleryContents() {
    return document.querySelectorAll(".iac-gallery__content");
}

function setContentEventListeners(contents) {
    contents.forEach(content => {
        content.addEventListener("click", () => handleMeetIacPersonPicClick(event));
    });
}

function handleMeetIacPersonPicClick(event) {
    console.log("hello");
    event.currentTarget.classList.toggle("active");
}


document.addEventListener("DOMContentLoaded", () => {
    initializeFamily();
});

function initializeFamily() {
    document.querySelectorAll(".iac-gallery__content");

    setContentEventListeners(document.querySelectorAll(".iac-gallery__content"));
}
