const iconOpen = document.querySelector(".js-icon-open");
const iconClose = document.querySelector(".js-icon-close");

const options = document.querySelector(".js-options");

const op = document.querySelector(".op");

iconOpen.addEventListener("click", () => {
    iconOpen.style.display = "none";
    iconClose.style.display = "block";

    options.classList.add("open");
    op.classList.add("op-vis");
    document.body.style.overflowY = "hidden";
});

iconClose.addEventListener("click", () => {
    iconClose.style.display = "none";
    iconOpen.style.display = "block";

    options.classList.remove("open");
    op.classList.remove("op-vis");
    document.body.style.overflowY = "visible";
});