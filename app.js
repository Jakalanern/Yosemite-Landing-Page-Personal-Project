const scrollButton = document.querySelector('#scroll-button')
const navbar = document.querySelector("nav")
const navele = document.querySelectorAll(".navele")
const rangers = document.querySelector("#rangers")
const contact = document.querySelector("#contact")
const campsites = document.querySelector("#campsites")
const home = document.querySelector("#home")
const habitats = document.querySelector("#habitats")
const history = document.querySelector("#history")
const stackBox = document.querySelector(".stack-box")
const barOne = document.querySelector(".bar1")
const barTwo = document.querySelector(".bar2")
const barThree = document.querySelector(".bar3")
const checkbox = document.querySelector(".hamburger-check")
const dropdown = document.querySelector(".dropdown-nav")
const rangersM = document.querySelector("#rangers")
const contactM = document.querySelector("#contact")
const campsitesM = document.querySelector("#campsites")
const homeM = document.querySelector("#home")
const habitatsM = document.querySelector("#habitats")

// Make dropdown mobile nav appear when checkbox is checked

// Check if checkbox is checked
checkbox.addEventListener("click", function () {
    dropdown.classList.toggle("slide-down")
})
// When checkbox is checked -> set mobile-nav opactiy to 1

//Event listener for click on stack
stackBox.addEventListener("click", function () {
    // Run function
})

//Scrolls to top of page when button is clicked
scrollButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

//Our nav transition when scrolling past Y 150. Goes from transparent, to a white background
window.addEventListener("scroll", function () {
    if (window.innerWidth > 1175) {
        if (window.scrollY < 75) {
            navbar.style.transition = ".5s ease-in-out"
            navbar.style.backgroundColor = "transparent"
            navbar.style.color = "white";
            navbar.style.boxShadow = "none";
        } else {
            navbar.style.transition = ".5s ease-in-out"
            navbar.style.backgroundColor = "white";
            navbar.style.color = "black";
            navbar.style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.158)"
        }
    }
})

//Setting the default underline for our nav elements

//Change font color and underline once transition has happened when Y === 150
//Only works if we are on desktop (past 1175px width)
window.addEventListener("scroll", function () {
    for (let ele of navele) {
        if (window.innerWidth > 1175) {
            if (window.scrollY > 75) {
                ele.addEventListener("mouseenter", function () {
                    ele.style.borderBottom = "1px solid black"
                    ele.style.paddingBottom = ".15em"
                })
                ele.addEventListener("mouseleave", function () {
                    ele.style.borderBottom = "transparent"
                })
            } else {
                ele.addEventListener("mouseenter", function () {
                    ele.style.borderBottom = "1px solid white"
                    ele.style.paddingBottom = ".15em"
                })
                ele.addEventListener("mouseleave", function () {
                    ele.style.borderBottom = "transparent"
                })
            }
        }

    }
})

// Scroll On Nav Element Click
home.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})
campsites.addEventListener("click", function (e) {
    e.preventDefault();
    rangers.scrollIntoView();
})
rangers.addEventListener("click", function () {
    window.scrollTo({
        top: 1865,
        left: 0,
        behavior: 'smooth'
    })
})
history.addEventListener("click", function () {
    window.scrollTo({
        top: 2465,
        left: 0,
        behavior: 'smooth'
    })
})
contact.addEventListener("click", function () {
    window.scrollTo({
        top: 3755,
        left: 0,
        behavior: 'smooth'
    })
})
habitats.addEventListener("click", function () {
    window.scrollTo({
        top: 4255,
        left: 0,
        behavior: 'smooth'
    })
})
// Same thing but for mobile dropdown
// homeM.addEventListener("click", function () {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: 'smooth'
//     })
// })
// campsitesM.addEventListener("click", function () {
//     window.scrollTo({
//         top: 675,
//         left: 0,
//         behavior: 'smooth'
//     })
// })
// rangersM.addEventListener("click", function () {
//     window.scrollTo({
//         top: 1865,
//         left: 0,
//         behavior: 'smooth'
//     })
// })
// historyM.addEventListener("click", function () {
//     window.scrollTo({
//         top: 2465,
//         left: 0,
//         behavior: 'smooth'
//     })
// })
// contactM.addEventListener("click", function () {
//     window.scrollTo({
//         top: 3755,
//         left: 0,
//         behavior: 'smooth'
//     })
// })
// habitatsM.addEventListener("click", function () {
//     window.scrollTo({
//         top: 4255,
//         left: 0,
//         behavior: 'smooth'
//     })
// })

//When screen is < 1175px let's make a stack for the nav