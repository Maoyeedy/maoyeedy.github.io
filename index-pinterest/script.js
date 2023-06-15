const overlay = document.getElementById('fullscreen-overlay')

document.querySelectorAll('.fullscreenable img, .fullscreenable video').forEach(element => {
  element.addEventListener('click', () => {
    element.classList.toggle('fullscreen')
    overlay.classList.toggle('show')
  })
})

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    let fullscreenElement = document.querySelector('.fullscreen')
    if (fullscreenElement) {
      fullscreenElement.classList.remove('fullscreen')
      overlay.classList.remove('show')
    }
  }
})
