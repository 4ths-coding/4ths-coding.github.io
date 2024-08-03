// Object to store sublist items for each main navigation item
const sublistContent = {
    home: [
        
    ],
    about: [
        
    ],
    campus: [
        { text: 'MAKATI CAMPUS', link: '#campus' },
        { text: 'CEBU CAMPUS', link: '#campus' }
    ],
    family: [
        { text: 'MANAGEMENT COMMITTEE', link: '#meet-iac' },
        { text: 'ACADEMIC HEADS', link: '#meet-iac' },
        { text: 'DEPARTMENTS', link: '#meet-iac' }
    ],
    facilities: [
        { text: 'MEZZANINE', link: '#facilities' },
        { text: 'CAFETERIA', link: '#facilities' },
        { text: 'LIBRARY', link: '#facilities' },
        { text: 'SEWING ROOM', link: '#facilities' },
        { text: 'FASHION DESIGN ROOM', link: '#facilities' },
        { text: 'GREEN ROOM', link: '#facilities' },
        { text: 'SOUND ROOM', link: '#facilities' },
        { text: 'MULTIMEDIA ARTS LABORATORY', link: '#facilities' },
        { text: 'MORE', link: '#facilities' },
    ],
    organizations: [
        { text: 'Sublist Organizations 1', link: '#' },
        { text: 'Sublist Organizations 2', link: '#' },
        { text: 'Sublist Organizations 3', link: '#' }
    ],
    events: [
        { text: 'Student Orientation and Registration (SOAR)', link: '#events' },
        { text: 'iACADEMY Foundation Week', link: '#events' },
        { text: 'Therapets', link: '#events' },
        { text: 'PBL Expo', link: '#events' },
        { text: 'Battle League', link: '#events' },
        { text: 'Creative Camp', link: '#events' },
        { text: 'Recognition Day', link: '#events' },
        { text: 'MORE', link: '#events' },
    ],
    others: [
        
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

    if (sectionId == "about") { 
        aboutsection.classList.add("shown")
        
    } else {
        section.scrollIntoView({
            behavior: 'smooth'
          });
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