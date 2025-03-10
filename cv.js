document.addEventListener("DOMContentLoaded", getCVData);

// function to fetch data from JSON file
async function getCVData() {
  try {
    // fetches the file async (asynkront)
    const response = await fetch("cv.json");
    // error handeler
    if (!response.ok) {
      throw new Error("Could not fetch data!");
    }
    // convert JSON-file to a JavaScript object
    const data = await response.json();

    // generates sections in the CV with data from the JSON file
    generateSection(
      data.workExperience,
      "experienceList",
      "Work Experience",
      createExperienceHTML
    );
    generateSection(
      data.education,
      "educationList",
      "Education",
      createEducationHTML
    );
    //showes error if error occur
  } catch (error) {
    console.error("Error fetching work experience:", error);
  }
}

// function to create sections
function generateSection(dataArray, containerId, title, templateFuntion) {
  const container = document.getElementById(containerId);

  //fecthes the HTML-container where sections will be placed
  container.innerHTML = `<h2>${title}</h2>`;

  //   loop through every item/object from each list
  dataArray.forEach((item) => {
    // creates a new <div>-element for every obejct in the list
    const element = document.createElement("div");

    // generates HTML from the template
    element.innerHTML = templateFuntion(item);

    // addes new element in the HTML container
    container.appendChild(element);
  });
}

//
function createExperienceHTML(experience) {
  const moduleHTML = experience.merits
    .map((m) => `<span class="module">${m}</span>`)
    .join("");

  return `
        <h3>${experience.title}, ${experience.company}</h3>
        <h4>${experience.place}</h4>
        <h5>${experience.date}</h5>
        <p>${experience.info}</p>
        <h4>Skills & Certifications</h4>
        <div class="modules">${moduleHTML}</div>
        `;
}

function createEducationHTML(edu) {
  return `
        <h3>${edu.program}</h3>
        <h4>${edu.school}, ${edu.place}</h4>
        <h5>${edu.date}</h5>
        `;
}
