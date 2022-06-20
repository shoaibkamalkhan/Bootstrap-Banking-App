
// Need to remove class for .flex-column and replace it with .flex-itmes-start at the 400px breakpoint, so that we can have the .nav-pills div side by side with .tab-content or .tab-panes div's.

// We will have to think about the sizing of the tab-nav and content.

const settingsContainer = document.getElementById ('settings-container');
const screenHeight = screen.height;
const screenWidth = screen.width;
const x = window.matchMedia("(min-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

function myFunction(x) {
if (x.matches) { // If media query matches
    settingsContainer.classList.remove('flex-column');
    settingsContainer.classList.add('flex-row');
} else {
    settingsContainer.classList.remove('flex-row');
    settingsContainer.classList.add('flex-column');
}
}

console.log(myFunction);
