let container = document.querySelector(".eggContainer");

container.addEventListener("click", () => {
  document.querySelector(".top").style.top = "-100px";
});

container.addEventListener =
  ("mouseover",
  () => {
    document.getElementsByClassName("curve-right")[0].style.opacity == 1;
    document.getElementsByClassName("curve-right")[1].style.opacity == 1;
    document.getElementsByClassName("curve-left")[0].style.opacity == 1;
    document.getElementsByClassName("curve-left")[1].style.opacity == 1;
  });

container.addEventListener =
  ("mouseleave",
  () => {
    document.getElementsByClassName("curve-right")[0].style.opacity == 0;
    document.getElementsByClassName("curve-right")[1].style.opacity == 0;
    document.getElementsByClassName("curve-left")[0].style.opacity == 0;
    document.getElementsByClassName("curve-left")[1].style.opacity == 0;
  });

function showPopup() {
  document.getElementById("eggPopup").classList.add("show");
  console.log("Popup opened! Inintializing 3D Egg");

  if (!scene) {
    init3DEgg();
  }
}

function closePopup() {
  document.getElementById("eggPopup").classList.remove("show");
}

document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "e") {
    showPopup();
  }
});
