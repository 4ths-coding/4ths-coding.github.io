document.addEventListener('DOMContentLoaded', () => {
    const introGallery = document.getElementById('galleryIntro');
    const introGalleryPosition = introGallery.offsetTop;

    // Main gallery container 
    const mainIntroGallery = document.querySelector(".section-gallery-intro");

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition >= introGalleryPosition) {
            introGallery.classList.add('cover');

                mainIntroGallery.classList.add('cover');
        } else {
            introGallery.classList.remove('cover');
            mainIntroGallery.classList.remove('cover');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case the element is already in view on load
});
