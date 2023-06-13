/* eslint-disable indent */
const main = document.getElementById('main')
const container = document.getElementById('container')
const maoyeedy = document.getElementById('name')
const redButton = document.getElementById('red-button-placeholder')
const leftPanel = document.getElementById('left')
const rightPanel = document.getElementById('right')
const leftTrigger = document.getElementById('left-trigger')
const rightTrigger = document.getElementById('right-trigger')
const circle1 = document.getElementById('circle1')
const circle2 = document.getElementById('circle2')
const scrollPercentage = (window.innerHeight / 100) * 46

function setColor (isDark) {
    circle1.style.backgroundColor = isDark ? '#93969f' : '#ffffff'
    circle2.style.backgroundColor = isDark ? '#ffffff' : '#93969f'
}

function scrollMain (isDown) {
    main.scrollTop += isDown ? scrollPercentage : -1 * scrollPercentage
    setColor(isDown)
}

function toggleLeftPanel () {
    container.classList.toggle('show-left-panel')
}

function toggleRightPanel () {
    container.classList.toggle('show-right-panel')
}

function loadDeferContent () {
    const images = document.querySelectorAll('.defer img')
    images.forEach((img) => {
        img.src = img.dataset.src
    })
}

circle1.addEventListener('click', () => scrollMain(false))
circle2.addEventListener('click', () => scrollMain(true))

main.addEventListener('wheel', (event) => {
    setColor(event.deltaY > 0)
}, { passive: true })

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        scrollMain(true)
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        scrollMain(false)
    }
})

maoyeedy.addEventListener('mouseover', toggleLeftPanel)
maoyeedy.addEventListener('mouseout', toggleLeftPanel)
redButton.addEventListener('mouseover', toggleRightPanel)
redButton.addEventListener('mouseout', toggleRightPanel)
leftPanel.addEventListener('mouseover', toggleLeftPanel)
leftPanel.addEventListener('mouseout', toggleLeftPanel)
rightPanel.addEventListener('mouseover', toggleRightPanel)
rightPanel.addEventListener('mouseout', toggleRightPanel)
leftTrigger.addEventListener('mouseover', toggleLeftPanel)
leftTrigger.addEventListener('mouseout', toggleLeftPanel)
rightTrigger.addEventListener('mouseover', toggleRightPanel)
rightTrigger.addEventListener('mouseout', toggleRightPanel)

setTimeout(loadDeferContent, 1500)
