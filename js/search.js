document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const searchToggle = document.getElementById('search-toggle');
    const searchableElements = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, li, div');

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const query = searchInput.value.toLowerCase();
            let found = false;

            searchableElements.forEach(element => {
                if (element.textContent.toLowerCase().includes(query)) {
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
