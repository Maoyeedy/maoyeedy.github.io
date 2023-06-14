function extendImagesWithPicture () {
  let imgElements = document.querySelectorAll("img")

  imgElements.forEach(function (img) {
    let src = img.getAttribute("src")
    let path = src.substring(0, src.lastIndexOf("/") + 1)
    let imageName = src.substring(src.lastIndexOf("/") + 1, src.lastIndexOf("."))

    let picture = document.createElement("picture")
    let sourceAVIF = document.createElement("source")
    sourceAVIF.setAttribute("srcset", path + imageName + ".avif")
    sourceAVIF.setAttribute("type", "image/avif")

    let sourceWebP = document.createElement("source")
    sourceWebP.setAttribute("srcset", path + imageName + ".webp")
    sourceWebP.setAttribute("type", "image/webp")

    let newImg = document.createElement("img")
    newImg.setAttribute("src", src)

    picture.appendChild(sourceAVIF)
    picture.appendChild(sourceWebP)
    picture.appendChild(newImg)

    img.parentNode.replaceChild(picture, img)
  })
}
extendImagesWithPicture()
