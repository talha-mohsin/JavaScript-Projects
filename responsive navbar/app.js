let sideNavigation = document.querySelector('.sideNavigation');
let darkDisplay = document.querySelector('.darkDisplay');

function sideNav() {
    sideNavigation.style.display = "block";
    darkDisplay.style.transform = "translateX(0vw)";
}

function sideNavHide() {
    sideNavigation.style.display = "none";
    darkDisplay.style.transform = "translateX(-100vw)";
}