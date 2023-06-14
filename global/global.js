const img = document.querySelectorAll('img')
img.forEach((image) => {
    image.draggable = false
})

const anchors = document.querySelectorAll('a')
anchors.forEach((anchor) => {
    // anchor.target = '_blank';
    anchor.rel = 'noreferrer noopener'
    anchor.draggable = false
})
