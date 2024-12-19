document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector("footer");
    const footerHeight = footer.offsetHeight;

    document.documentElement.style.setProperty('--footer-height', `${footerHeight}px`);
});