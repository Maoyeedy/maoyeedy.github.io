function extendImagesWithPicture () {
  let imgElements = document.querySelectorAll("img")

  imgElements.forEach(function (img) {
    let dataSrc = img.getAttribute("data-src")
    let path = dataSrc.substring(0, dataSrc.lastIndexOf("/") + 1)
    let imageName = dataSrc.substring(dataSrc.lastIndexOf("/") + 1, dataSrc.lastIndexOf("."))

    let picture = document.createElement("picture")
    let sourceAVIF = document.createElement("source")
    sourceAVIF.setAttribute("srcset", path + imageName + ".avif")
    sourceAVIF.setAttribute("type", "image/avif")

    let sourceWebP = document.createElement("source")
    sourceWebP.setAttribute("srcset", path + imageName + ".webp")
    sourceWebP.setAttribute("type", "image/webp")

    let newImg = document.createElement("img")
    newImg.setAttribute("src", dataSrc)

    picture.appendChild(sourceAVIF)
    picture.appendChild(sourceWebP)
    picture.appendChild(newImg)

    img.parentNode.replaceChild(picture, img)
  })
}

extendImagesWithPicture()
