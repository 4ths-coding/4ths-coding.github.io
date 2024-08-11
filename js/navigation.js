// Object to store sublist items for each main navigation item
const sublistContent = {
    home: [],
    about: [],
    campus: [
        { text: 'MAKATI CAMPUS', link: '#campus' },
        { text: 'CEBU CAMPUS', link: '#campus' }
    ],
    family: [
        { text: 'MANAGEMENT COMMITTEE', link: '#meet-iac' },
        { text: 'ACADEMIC HEADS', link: '#meet-iac' },
        { text: 'DEPARTMENTS', link: '#meet-iac' }
    ],
    facilities: [],
    organizations: [
        { text: 'Compile', link: 'https://www.facebook.com/iacademycompile', newTab: true },
        { text: 'Elix', link: 'https://www.facebook.com/ElixEsports', newTab: true },
        { text: 'FSi', link: 'https://www.facebook.com/fsi.iacademy', newTab: true },
        { text: 'iNSIGHT ', link: 'https://www.facebook.com/iACiNSIGHT', newTab: true },
        { text: 'Octave', link: 'https://www.facebook.com/iAcademyOCTAVE', newTab: true },
        { text: 'Optics', link: 'https://www.facebook.com/iacademyoptics', newTab: true },
        { text: 'Pikzel', link: 'https://www.facebook.com/PikzelGraphicDesign', newTab: true },
        { text: 'PRIMA', link: 'https://www.facebook.com/PRIMAofiACADEMY', newTab: true },
        { text: 'RHYTHM', link: 'https://www.facebook.com/iacademyrhythm', newTab: true },
        { text: 'The Moonlight Tavern', link: 'https://www.facebook.com/TheMoonlightTavern', newTab: true }
    ],
    events: [],
    others: [
      { text: 'CHECKLIST', link: '#others' },
      { text: 'DEVELOPERS', link: '#dev' }
    ]
};

// Function to update the sublist based on the hovered main navigation item
function updateSublist(key) {
    // Get the sublist element by its ID
    const sublist = document.getElementById('navigationSublist');
    // Get the sublist items for the given key from the sublistContent object
    const sublistItems = sublistContent[key] || [];

    // Clear the current sublist content
    sublist.innerHTML = '';

    // Loop through each sublist item and create the corresponding HTML elements
    sublistItems.forEach(subitem => {
        // Create a new flex item (div element)
        const item = document.createElement('div');
        item.className = 'navigation__subitem';
        // Create a new anchor (a) element
        const a = document.createElement('a');
        a.href = subitem.link;
        a.className = 'navigation__sublink';
        a.textContent = subitem.text;

        // Check if the link should open in a new tab
        if (subitem.newTab) {
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
        }
        // Add event listener to uncheck the navigation toggle
        a.addEventListener('click', () => {
            const naviToggle = document.getElementById('navi-toggle');
            naviToggle.checked = false;
        });

        // Add specific event listeners for campus and family sublist items
        if (key === 'campus') {
            a.addEventListener('click', () => trigActiveCampus(subitem.text));
        } else if (key === 'family') {
            a.addEventListener('click', () => trigFamGalleryActiveNav(subitem.text));
        }

        // Append the anchor element to the list item element
        item.appendChild(a);
        // Append the list item element to the sublist element
        sublist.appendChild(item);
    });

    // Apply animation class to sublist
    sublist.classList.remove('animate'); // Remove any existing animation class
    void sublist.offsetWidth; // Trigger a reflow to restart the animation
    sublist.classList.add('animate');

    // Make sure the sublist is displayed
    sublist.style.display = 'block';
}

// Define the setActiveCampus function
function trigActiveCampus(campus) {
    console.log(`Active campus: ${campus}`);
    if (campus === 'MAKATI CAMPUS'){
      setActiveCampus('Makati');
    }
    if (campus === 'CEBU CAMPUS'){
      setActiveCampus('Cebu');
    }
    // Add your logic here
}

// Define the setFamGalleryActiveNav function
function trigFamGalleryActiveNav(nav) {
    console.log(`Active family gallery nav: ${nav}`);
    if (nav === 'MANAGEMENT COMMITTEE'){
      setFamGalleryActiveNav('managementCommittee');
      console.log(nav);
    }
    if (nav === 'ACADEMIC HEADS'){
      setFamGalleryActiveNav('academicHeads');
      console.log(nav);
    }
    if (nav === 'DEPARTMENTS'){
      setFamGalleryActiveNav('departments');
      console.log(nav);
    }

    // Add your logic here
}

// Make the function globally available
window.updateSublist = updateSublist;



// Add color to the nav button and search button when scrolled down to intro gallery
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector(".search__button");
    const navButton = document.querySelector(".navigation__button");

    const introGallery = document.getElementById('galleryIntro');
    const introGalleryPosition = introGallery.offsetTop;

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition >= introGalleryPosition) {
            searchButton.classList.add("colored");
            navButton.classList.add("colored");
        } else {
            searchButton.classList.remove("colored");
            navButton.classList.remove("colored");
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case the element is already in view on load
    window.scrollTo(0, 0);

});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const aboutsection = document.getElementById("about");
    const naviToggle = document.getElementById('navi-toggle');

    if (sectionId == "about") {
        aboutsection.classList.add("shown")
        naviToggle.checked = false;

    } else {
        section.scrollIntoView({
            behavior: 'smooth'
          });
        naviToggle.checked = false;
    }

    /*
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
      */
  }


  // ADD Parameter if about, then add about.shown
