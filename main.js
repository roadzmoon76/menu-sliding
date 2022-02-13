//식별자
const $navHorizontal = document.querySelectorAll(".nav");
const $navVertical = document.querySelectorAll(".nav-vertical");
const $underlineHorizontal = document.querySelector("#underline");
const $underlineVertical = document.querySelector("#underline-vertical");

//함수
function moveHorizontal(e) {
    switch (e.target.textContent) {
        case "About":
            $underlineHorizontal.style.width = "5rem";
            $underlineHorizontal.style.left = "7rem";
            break;
        case "Menu":
            $underlineHorizontal.style.width = "4.6rem";
            $underlineHorizontal.style.left = "15.8rem";
            break;
        case "Store":
            $underlineHorizontal.style.width = "4.8rem";
            $underlineHorizontal.style.left = "24.6rem";
            break;
        case "Service":
            $underlineHorizontal.style.width = "6.5rem";
            $underlineHorizontal.style.left = "34.6rem";
            break;
        case "Responsibility":
            $underlineHorizontal.style.width = "11.8rem";
            $underlineHorizontal.style.left = "50.1rem";

    }
}

function moveVertical(e) {
    switch (e.target.textContent) {
        case "About":
            $underlineVertical.style.width = "5rem";
            $underlineVertical.style.top = "4.7rem";
            break;
        case "Menu":
            $underlineVertical.style.width = "4.6rem";
            $underlineVertical.style.top = "8.7rem";
            break;
        case "Store":
            $underlineVertical.style.width = "4.8rem";
            $underlineVertical.style.top = "12.8rem";
            break;
        case "Service":
            $underlineVertical.style.width = "6.5rem";
            $underlineVertical.style.top = "17rem";
            break;
        case "Responsibility":
            $underlineVertical.style.width = "11.8rem";
            $underlineVertical.style.top = "21rem";

    }
}

//이벤트
for (let i = 0; i < $navHorizontal.length - 1; i++) {
    $navHorizontal[i].addEventListener('mouseenter', moveHorizontal);
}

for (let i = 0; i < $navVertical.length; i++) {
    $navVertical[i].addEventListener('mouseenter', moveVertical);
}