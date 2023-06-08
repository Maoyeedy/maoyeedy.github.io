const main = document.getElementById('main');
const container = document.getElementById('container');
const button = document.getElementById('red-button');
const maoyeedy = document.getElementById('name');
const left = document.getElementById('left');
const right = document.getElementById('right');
const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');

main.addEventListener('wheel', function (event) {
    event.preventDefault();
    setColor(event.deltaY > 0);
});

circle1.addEventListener('click', function () {
    setColor(false);
});

circle2.addEventListener('click', function () {
    setColor(true);
});

function setColor(isGoingUp) {
    circle1.style.backgroundColor = isGoingUp ? '#93969f' : 'white';
    circle2.style.backgroundColor = isGoingUp ? 'white' : '#93969f';
    main.scrollTop += isGoingUp ? window.innerHeight : -1 * window.innerHeight;
}

//Function
function toggleLeftPanel() { container.classList.toggle('show-left-panel'); }
function toggleRightPanel() { container.classList.toggle('show-right-panel'); }
maoyeedy.addEventListener('mouseover', toggleLeftPanel);
maoyeedy.addEventListener('mouseout', toggleLeftPanel);
// maoyeedy.addEventListener('click', toggleLeftPanel)
button.addEventListener('mouseover', toggleRightPanel);
button.addEventListener('mouseout', toggleRightPanel);
// button.addEventListener('click', toggleRightPanel)
left.addEventListener('mouseover', toggleLeftPanel);
left.addEventListener('mouseout', toggleLeftPanel);
right.addEventListener('mouseover', toggleRightPanel);
right.addEventListener('mouseout', toggleRightPanel);

//Function
function loadDeferContent() {
    const deferimg = document.querySelectorAll(".defer img");
    deferimg.forEach(function (img) {
        img.src = img.dataset.src;
    });
}

setTimeout(function () {
    loadDeferContent();
}, 1500);

