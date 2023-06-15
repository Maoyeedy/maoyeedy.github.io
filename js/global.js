document.addEventListener('DOMContentLoaded', function () {
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

  const images = document.querySelectorAll('.fullscreenable img')
  images.forEach(image => {
    image.addEventListener('click', () => {
      window.open(image.src, '_blank')
    })
  })
})


