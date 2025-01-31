// custom-nav.js
function updateNextNavLink() {
    const currentPage = window.location.pathname.split('/').filter(Boolean).pop(); // Correctly handle URLs

    console.log('Current Page:', currentPage); // Check current page

    if (currentPage === 'introduction-ai-tour') {
        const nextLink = document.querySelector('a.md-footer__link--next'); // More specific selector
        if (nextLink) {
            const baseUrl = window.location.origin; // Get the base URL (e.g., http://127.0.0.1:8000)
            nextLink.href = `/lab-1-function_calling`;
            nextLink.querySelector('.md-footer__title .md-ellipsis').textContent = 'Lab 1 Function Calling Power';
            // console.log('Next link updated to:', nextLink.href);
        }
    }
}

// Function to observe changes in the DOM
function observeDOMChanges() {
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                // Check if the main content has been updated
                if (mutation.target.closest('.md-main__inner')) {
                    updateNextNavLink();
                }
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateNextNavLink();
    observeDOMChanges();
});
