const iconClick = document.querySelector(".icon");
iconClick.addEventListener("click", () => {
    document.querySelector(".share-button").style.display = "flex";
});

const iconClose = document.querySelector(".share-icon");
iconClose.addEventListener("click", () => {
    document.querySelector(".share-button").style.display = "none";
})