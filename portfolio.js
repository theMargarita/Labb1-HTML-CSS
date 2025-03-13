const GITHUB_URL = "https://api.github.com/users/theMargarita/repos";

// document.addEventListener("DOMContentLoaded", fetchGithubData);

//to be able to clse the popup
document.addEventListener("DOMContentLoaded", () => {
  const closeButton = document.querySelector(".closeBTN");
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      document.getElementById("popup").style.display = "none";
    });
  }

  fetch(GITHUB_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not fetch", response);
      }
      return response.json();
    })
    .then((repos) => {
      console.log("Github API responese:", repos);

      const container = document.getElementById("github-repos");
      container.innerHTML = "";

      if (!repos.length) {
        container.innerHTML = "Nothing found";
        return;
      }

      const ul = document.createElement("ul");
      ul.className = "repos-list";

      repos.forEach((repo) => {
        const li = document.createElement("li");
        const popupButton = document.createElement("button");

        popupButton.className = "buttonOpen";
        popupButton.textContent = repo.name;

        popupButton.addEventListener("click", () => {
          showPopup(repo);
        });

        li.appendChild(popupButton);
        ul.appendChild(li);
      });
      container.appendChild(ul);
    })
    .catch((error) => {
      console.error("Something went wrong", error);
    });

  //   function to show popup for repos
  function showPopup(repo) {
    const popup = document.getElementById("popup");
    // const popup1 = document.getElementById(".popup");

    const popupTitle = document.getElementById("popupTitle");
    const popupDescription = document.getElementById("popupDescription");
    const popupLink = document.getElementById("popupLink");

    if (!popup || !popupTitle || !popupDescription || !popupLink) {
      console.error("Popup elements not found!");
      return;
    }

    popupTitle.textContent = "Loading, please wait";
    popupDescription.textContent = "Fetching the description, please wait";

    popupLink.href = "#"; //link empty until the info arrives
    popup.style.display = "block"; //shows popup
    popupLink.target = "_blank";
    console.log("Popup should appear for:", repo.name);

    //setting timer and updating repo information
    setTimeout(() => {
      popupTitle.textContent = repo.name;
      popupDescription.textContent =
        repo.description || "No description available";
      popupLink.href = repo.html_url;
      popupLink.textContent = "View on GitHub";
    }, 2000); //two seconds
  }
});
