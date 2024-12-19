// Function to set the CSS variable
function setVhVariable() {
    const viewportHeight = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${viewportHeight}px`);
}

// Set the variable on initial load
setVhVariable();

// Update the variable on window resize
window.addEventListener('resize', setVhVariable);