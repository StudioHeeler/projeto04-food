document.addEventListener('DOMContentLoaded', () => {
    const catalog = document.querySelector('.lateral-catalog');
    const range = document.querySelector('.scroll-range');
    let isScrolling = false;

    // Update range value when scrolling
    catalog.addEventListener('scroll', () => {
        if (!isScrolling) {
            const scrollPercentage = (catalog.scrollLeft / (catalog.scrollWidth - catalog.clientWidth)) * 100;
            range.value = scrollPercentage;
        }
    });

    // Update scroll position when range changes
    range.addEventListener('input', (e) => {
        isScrolling = true;
        const scrollPercentage = e.target.value / 100;
        const scrollPosition = (catalog.scrollWidth - catalog.clientWidth) * scrollPercentage;
        catalog.scrollLeft = scrollPosition;
    });

    // Reset isScrolling flag when user stops interacting with range
    range.addEventListener('mouseup', () => {
        setTimeout(() => {
            isScrolling = false;
        }, 50);
    });

    // Hide range if no scroll needed
    function updateRangeVisibility() {
        const isScrollable = catalog.scrollWidth > catalog.clientWidth;
        range.style.display = isScrollable ? 'block' : 'none';
    }

    // Update range visibility on load and resize
    updateRangeVisibility();
    window.addEventListener('resize', updateRangeVisibility);
});document.addEventListener('DOMContentLoaded', () => {
    const catalog = document.querySelector('.lateral-catalog');
    const range = document.querySelector('.scroll-range');
    let isScrolling = false;

    // Update range value when scrolling
    catalog.addEventListener('scroll', () => {
        if (!isScrolling) {
            const scrollPercentage = (catalog.scrollLeft / (catalog.scrollWidth - catalog.clientWidth)) * 100;
            range.value = scrollPercentage;
        }
    });

    // Update scroll position when range changes
    range.addEventListener('input', (e) => {
        isScrolling = true;
        const scrollPercentage = e.target.value / 100;
        const scrollPosition = (catalog.scrollWidth - catalog.clientWidth) * scrollPercentage;
        catalog.scrollLeft = scrollPosition;
    });

    // Reset isScrolling flag when user stops interacting with range
    range.addEventListener('mouseup', () => {
        setTimeout(() => {
            isScrolling = false;
        }, 50);
    });

    // Hide range if no scroll needed
    function updateRangeVisibility() {
        const isScrollable = catalog.scrollWidth > catalog.clientWidth;
        range.style.display = isScrollable ? 'block' : 'none';
    }

    // Update range visibility on load and resize
    updateRangeVisibility();
    window.addEventListener('resize', updateRangeVisibility);
});