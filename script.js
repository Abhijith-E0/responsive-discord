

const menu = document.querySelector(".menu-btn");
const nav = document.querySelector("#ul");


menu.onclick = () => {
    nav.classList.toggle("active");
}
