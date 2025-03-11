document.addEventListener("DOMContentLoaded", function () {
  let popup = document.querySelector(".popup");
  let boom = document.querySelector(".boom");
  let cat = document.querySelector(".cat");
  let typedKeys = ""; // store typed characters

  function showPopup() {
    popup.classList.add("show");
    popup.style.visibility = "visible";
    popup.style.opacity = "1";

    cat.style.display = "block";
    boom.style.display = "block";
    boom.classList.add("crash-animation");

    setTimeout(() => {
      popup.classList.remove("show");
      popup.style.opacity = "0";
      setTimeout(() => {
        popup.style.visibility = "hidden";
        cat.style.display = "none"; // Hide the cat
        boom.style.display = "none";
        boom.classList.remove("crash-animation");
      }, 500);
    }, 1000);
  }

  document.addEventListener("keydown", function (event) {
    // ignore special keys
    if (/^[a-zA-Z]$/.test(event.key)) {
      typedKeys += event.key.toLowerCase();

      typedKeys = typedKeys.slice(-3);

      if (typedKeys === "cat") {
        showPopup();
        typedKeys = ""; // resets the cat
      }
    }
  });
});
