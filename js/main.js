const scrollInput = document.getElementById('scrolling');
const buttons = document.querySelectorAll('.catalog-button');
const buttonsContainer = document.querySelector('.buttons-container');
const buttonsToShow = 3;

function updateButtonsVisible(startIndex) {
    buttons.forEach((button, index) => {
        button.style.display = (index >= startIndex && index < startIndex + buttonsToShow) ? 'flex' : 'none';
    });
}

function showAllButtons() {
    buttons.forEach((button) => {
        button.style.display = 'flex';
    });
}

function resetScroll() {
    scrollInput.value = 0; 
    updateButtonsVisible(0);
}

function handleScreenSize() {
    if (window.innerWidth >= 1024) {
        showAllButtons();
        scrollInput.style.display = 'none';
    } else {
        scrollInput.style.display = 'block';
        resetScroll(); // Reseta a rolagem e exibe os botões corretos
    }
}

window.addEventListener('resize', handleScreenSize);

handleScreenSize();

if (window.innerWidth < 1024) {
    scrollInput.addEventListener('input', () => {
        let index = parseInt(scrollInput.value, 10);
        const maxIndex = buttons.length - buttonsToShow;
        if (index < 0) index = 0;
        if (index > maxIndex) index = maxIndex;
        updateButtonsVisible(index);
    });

    const maxIndex = buttons.length - buttonsToShow;
    scrollInput.max = maxIndex;
    updateButtonsVisible(0);
}