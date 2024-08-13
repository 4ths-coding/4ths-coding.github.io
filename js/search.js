document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const searchToggle = document.getElementById('search-toggle');
    const searchableElements = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, li, div');

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const query = searchInput.value.toLowerCase().replace(/\s+/g, '');
            let found = false;

            searchableElements.forEach(element => {
                const elementText = element.textContent.toLowerCase().replace(/\s+/g, '');
                if (elementText.includes(query)) {
                    found = true;
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    searchToggle.checked = false;
                }
            });

            if (!found) {
                alert('Item not found');
            }
        }
    });

});

document.getElementById('search-toggle').addEventListener('click', function() {
        var useElement = document.querySelector('#search-icon use');
        var currentIcon = useElement.getAttribute('xlink:href');
        var newIcon = currentIcon === '../img/sprite.svg#icon-search' ? '../img/sprite.svg#icon-cross' : '../img/sprite.svg#icon-search';
        useElement.setAttribute('xlink:href', newIcon);
    });
