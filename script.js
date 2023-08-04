const projectItems = document.querySelectorAll(".item");
const btns = document.querySelectorAll(".arrow-btn");
const mBtn = document.querySelector(".mobile-menu-btn");
const closeBtn = document.querySelector(".close-icon");
const rollDownMenu = document.querySelector("nav>div:nth-of-type(2)");

let slideIndex = 0;
let direction;

// page direction control 

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        if (i === 0) {
            direction = -1;
        } else {
            direction = +1;
        }
        console.log(direction);

        const plusSlides = (n) => {
            slideIndex += n;

            if (slideIndex < 0) {
                slideIndex = projectItems.length - 1;
            }

            if (slideIndex > projectItems.length - 1) {
                slideIndex = 0;
            }

            showMyProject();
        };
        plusSlides(direction);
    });
});


// Page direction control end

const showMyProject = () => {
    for (let i = 0; i < projectItems.length; i++) {
        console.log(projectItems[i]);
        projectItems[i].classList.remove("show");
        projectItems[slideIndex].classList.add("show");
    }
}

showMyProject();

document.addEventListener("scroll", () => {
    if (window.scrollY <= 500) {
        document.querySelector(".up-home").style.display = "none";
    } else {
        document.querySelector(".up-home").style.display = "flex";
    }
});

mBtn.addEventListener("click", () => {
    rollDownMenu.style.maxHeight = "100%"   ;
});

closeBtn.addEventListener("click", ()=>{
    rollDownMenu.style.maxHeight = "0%"   ;
});