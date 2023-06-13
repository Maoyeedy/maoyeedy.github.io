const imgElements = document.querySelectorAll('.fullscreenable img')

imgElements.forEach(img => {
  img.addEventListener('click', () => {
    const src = img.getAttribute('src')
    const overlay = document.createElement('div')
    overlay.style.width = '100%'
    overlay.style.height = '100%'
    overlay.style.position = 'fixed'
    overlay.style.zIndex = '10000'
    overlay.style.top = '0'
    overlay.style.left = '0'
    overlay.style.cursor = 'zoom-out'
    // overlay.style.background = `RGBA(255,255,255,0.5) url(${src}) no-repeat center`
    // overlay.style.background = `RGBA(255,255,255,0.5) url(${src}) no-repeat center / contain`
    overlay.style.background = `#fff url(${src}) no-repeat center / auto 70%`

    overlay.addEventListener('click', () => {
      overlay.remove()
      document.body.style.overflow = 'visible'
    })
    document.body.appendChild(overlay)
    document.body.appendChild(overlay)
    document.body.style.overflow = 'clip'
  })
})
