const menuIcon = document.querySelector(".nav-icon");
const productPage = document.querySelector(".menu-container");
const exitIcon = document.querySelector(".close");
const product = document.querySelector(".input");
const menuDesktop = document.querySelector(".menu-desktop")
menuIcon.addEventListener("click", () => {
    productPage.classList.add("active");
});

exitIcon.addEventListener("click", () => {
    productPage.classList.remove("active");
});

product.addEventListener("click", () => {
    menuDesktop.classList.toggle("active")
})