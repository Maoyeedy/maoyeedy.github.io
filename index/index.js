const main = document.getElementById('main');
const container = document.getElementById('container');
const maoyeedy = document.getElementById('name');
const redButton = document.getElementById('red-button-placeholder');
const leftPanel = document.getElementById('left');
const rightPanel = document.getElementById('right');
const leftTrigger = document.getElementById('left-trigger');
const rightTrigger = document.getElementById('right-trigger');
const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const scrollPercentage = 45.5 * (window.innerHeight / 100);

function setColor(isGoingUp) {
    circle1.style.backgroundColor = isGoingUp ? '#93969f' : 'white';
    circle2.style.backgroundColor = isGoingUp ? 'white' : '#93969f';
}

function scrollMain(isGoingUp) {
    main.scrollTop += isGoingUp ? scrollPercentage : -1 * scrollPercentage;
    setColor(isGoingUp);
}

circle1.addEventListener('click', function () {
    scrollMain(false);
});

circle2.addEventListener('click', function () {
    scrollMain(true);
});

main.addEventListener('wheel', function (event) { event.preventDefault; scrollMain(event.deltaY > 0); });
// main.addEventListener('wheel', function (event) { setColor(event.deltaY > 0); }, { passive: true });

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowDown') {
        scrollMain(true);
    } else if (event.key === 'ArrowUp') {
        scrollMain(false);
    }
});

//Function
function toggleLeftPanel() { container.classList.toggle('show-left-panel'); }
function toggleRightPanel() { container.classList.toggle('show-right-panel'); }
maoyeedy.addEventListener('mouseover', toggleLeftPanel);
maoyeedy.addEventListener('mouseout', toggleLeftPanel);
// maoyeedy.addEventListener('click', toggleLeftPanel)
redButton.addEventListener('mouseover', toggleRightPanel);
redButton.addEventListener('mouseout', toggleRightPanel);
// button.addEventListener('click', toggleRightPanel)
leftPanel.addEventListener('mouseover', toggleLeftPanel);
leftPanel.addEventListener('mouseout', toggleLeftPanel);
rightPanel.addEventListener('mouseover', toggleRightPanel);
rightPanel.addEventListener('mouseout', toggleRightPanel);
leftTrigger.addEventListener('mouseover', toggleLeftPanel);
leftTrigger.addEventListener('mouseout', toggleLeftPanel);
rightTrigger.addEventListener('mouseover', toggleRightPanel);
rightTrigger.addEventListener('mouseout', toggleRightPanel);

//Function
function loadDeferContent() {
    const deferimg = document.querySelectorAll(".defer img");
    deferimg.forEach(function (img) {
        img.src = img.dataset.src;
    });
}

setTimeout(function () { loadDeferContent(); }, 1500);

