let up2 = document.querySelector(".goToTop");

window.addEventListener("scroll", function () {
    const nav = document.querySelector(".nav");
    let x = scrollY;
    if (x > 200) {
        nav.classList.remove("toggles");
        up2.style.transform = "translateY(0)";
    } else {
        nav.classList.add("toggles");
        up2.style.transform = "translateY(calc(100% + 20px))";
    };
});

window.addEventListener("load", function () {
    const loaded = document.querySelector(".load");
    setTimeout(() => {
        loaded.style.display = "none";
    }, 3000);
});

up2.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

let up = document.querySelector(".up");
let close1 = document.querySelector(".close1");

close1.addEventListener("click", function () {
    up.style.display = "none";
});

let fourButtons = document.querySelectorAll(".times h4");

function time() {
    setInterval(() => {
        fourButtons[3].innerHTML--;
        if (fourButtons[3].innerHTML == 0) {
            fourButtons[3].innerHTML = 59;
            fourButtons[2].innerHTML--
        } else if (fourButtons[2].innerHTML == 0) {
            fourButtons[2].innerHTML = 59;
            fourButtons[1].innerHTML--
        } else if (fourButtons[1].innerHTML == 0) {
            fourButtons[1].innerHTML = 23;
            fourButtons[0].innerHTML--
        } else if (fourButtons[0].innerHTML < 0) {
            fourButtons[3].innerHTML = 0
            fourButtons[2].innerHTML = 0
            fourButtons[1].innerHTML = 0
            fourButtons[0].innerHTML = 0
        };
    }, 1000)
};
time();

let aside = document.querySelector(".aside1");
let bars = document.querySelectorAll(".fa-bars-staggered");
let close2 = document.querySelector(".close2");

bars.forEach((item) => {
    item.addEventListener("click", function () {
        aside.style.transform = "translateX(0)";
    });
});

close2.addEventListener("click", function () {
    aside.style.transform = "translateX(calc(-100% + -50px))";
});