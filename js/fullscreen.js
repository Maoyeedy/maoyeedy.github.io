const images = document.querySelectorAll('.fullscreenable img')
images.forEach(image => {
  image.addEventListener('click', () => {
    window.open(image.src, '_blank')
  })
})
