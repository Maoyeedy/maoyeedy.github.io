const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
      // if (entry.target === endOfScroll) {
      //     document.documentElement.style.scrollSnapType = 'none'
      // }
    } else {
      entry.target.classList.remove('show')
    }
  })
})

// const endOfScroll = document.getElementById('endofscroll')
const pages = document.querySelectorAll('.page')
pages.forEach((el) => observer.observe(el))
