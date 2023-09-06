let viewBtn = document.querySelector("#view-btn");
let viewBtn2 = document.querySelector("#view-btn-2");
let hiddenImages = document.querySelector(".hidden-images");
let hiddenImages2 = document.querySelector(".hidden-images-2");
let mobileView = document.querySelector(".mobileView");
let menu = document.querySelector(".menu");

viewBtn.addEventListener("click", function () {
    if (hiddenImages.style.display === 'none') {
        hiddenImages.style.display = 'block';
        viewBtn.innerHTML = 'View Less';
    } else {
        hiddenImages.style.display = 'none';
        viewBtn.innerHTML = 'View All';
    }
})

viewBtn2.addEventListener("click", function () {
    if (hiddenImages2.style.display === 'none') {
        hiddenImages2.style.display = 'block';
        viewBtn2.innerHTML = 'View Less';
    } else {
        hiddenImages2.style.display = 'none';
        viewBtn2.innerHTML = 'View All';
    }
})

menu.addEventListener("click", function () {
    mobileView.classList.toggle("show")
})