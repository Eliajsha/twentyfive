let layer = document.querySelector(".fade-layer");
layer.addEventListener("click", showMenu);

let button = document.querySelector(".menu-button");
button.addEventListener("click", showMenu);

function showMenu() {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible")
}

document.getElementById("logga").addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

document.getElementsByClassName("tillbaka").addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
});