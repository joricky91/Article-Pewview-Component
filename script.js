const iconClick = document.querySelector(".icon");
const shareBtn = document.querySelector(".share-button");
const triangle = document.querySelector(".triangle");
const shareIcon = document.querySelector(".share-icon");
iconClick.addEventListener("click", () => {
    if (shareBtn.style.display == "none" && triangle.style.display == "none"){
        shareBtn.style.display = "flex";
        triangle.style.display = "flex";
    }
    else{
        shareBtn.style.display = "none";
        triangle.style.display = "none";
    }
});

shareIcon.addEventListener("click", () => {
    shareBtn.style.display = "none";
    triangle.style.display = "none";
});










