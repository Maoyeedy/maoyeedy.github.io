const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            // if (entry.target === endOfScroll) {
            //     document.documentElement.style.scrollSnapType = "none";
            // }
        }
        else {
            entry.target.classList.remove("show");
        }
    });
});

const pages = document.querySelectorAll(".page");
// const endOfScroll = document.getElementById("endofscroll")
pages.forEach((el) => observer.observe(el));
