function extendImagesWithPicture () {
  const imgElements = document.querySelectorAll('img')

  imgElements.forEach(function (img) {
    const dataSrc = img.getAttribute('data-src')
    const path = dataSrc.substring(0, dataSrc.lastIndexOf('/') + 1)
    const imageName = dataSrc.substring(dataSrc.lastIndexOf('/') + 1, dataSrc.lastIndexOf('.'))

    const picture = document.createElement('picture')
    const sourceAVIF = document.createElement('source')
    sourceAVIF.setAttribute('srcset', path + imageName + '.avif')
    sourceAVIF.setAttribute('type', 'image/avif')

    const sourceWebP = document.createElement('source')
    sourceWebP.setAttribute('srcset', path + imageName + '.webp')
    sourceWebP.setAttribute('type', 'image/webp')

    const newImg = document.createElement('img')
    newImg.setAttribute('src', dataSrc)

    picture.appendChild(sourceAVIF)
    picture.appendChild(sourceWebP)
    picture.appendChild(newImg)

    img.parentNode.replaceChild(picture, img)
  })
}

extendImagesWithPicture()
