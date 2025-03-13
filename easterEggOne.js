const closeBTN = document.querySelector(".closeBTN");
const secretBTN = document.querySelector(".secretBTN");
const container = document.querySelector(".eggContainer");
const popup = document.getElementById("eggPopup"); // Target the popup by ID

// Event listener for opening the popup
if (secretBTN) {
  secretBTN.addEventListener("click", () => {
    popup.classList.add("show"); // Add "show" class to display the popup
  });
}

// Event listener for closing the popup
if (closeBTN) {
  closeBTN.addEventListener("click", () => {
    popup.classList.remove("show"); // Remove "show" class to hide the popup
  });
}

// Other event listeners on container for "mouseover" and "mouseleave" effects
if (container) {
  container.addEventListener("click", () => {
    document.querySelector(".top").style.top = "-100px";
  });

  container.addEventListener("mouseover", () => {
    document.getElementsByClassName("curve-right")[0].style.opacity = 1;
    document.getElementsByClassName("curve-right")[1].style.opacity = 1;
    document.getElementsByClassName("curve-left")[0].style.opacity = 1;
    document.getElementsByClassName("curve-left")[1].style.opacity = 1;
  });

  container.addEventListener("mouseleave", () => {
    document.getElementsByClassName("curve-right")[0].style.opacity = 0;
    document.getElementsByClassName("curve-right")[1].style.opacity = 0;
    document.getElementsByClassName("curve-left")[0].style.opacity = 0;
    document.getElementsByClassName("curve-left")[1].style.opacity = 0;
  });
}
