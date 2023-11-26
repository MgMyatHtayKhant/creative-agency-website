const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

toggle.addEventListener("click", toggling);


function toggling() {
    toggle.classList.toggle("active");
    navigation.classList.toggle("active");
}
