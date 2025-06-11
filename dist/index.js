"use strict";
elementsShowEffect();
function elementsShowEffect() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-effect');
            }
        });
    });
    const hiddenElements = document.querySelectorAll('.hidden-effect');
    hiddenElements.forEach((el) => observer.observe(el));
}
;
function showSidebar() {
    const sidebar = document.querySelector('.side-bar');
    if (!sidebar)
        throw new Error("SIDEBAR NOT FOUND!");
    sidebar.style.display = 'flex';
}
function hideSidebar() {
    const sidebar = document.querySelector('.side-bar');
    if (!sidebar)
        throw new Error("SIDEBAR NOT FOUND!");
    sidebar.style.display = 'none';
}
//# sourceMappingURL=index.js.map