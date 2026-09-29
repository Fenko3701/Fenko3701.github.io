// Your JavaScript goes here — you'll start filling this in during Lesson 2.3 (JS week).
console.log("script.js is connected!");

const bioHeading = document.querySelector("#bio-heading");
console.log(bioHeading);

const factBtn = document.querySelector("#fact-btn");
const funFact = document.querySelector("#funFact");

if (factBtn) {
  factBtn.addEventListener("click", function () {
    if (funFact) {
      funFact.style.display = "block";
    }
  });
}

const skillPills = document.querySelectorAll(".skill-pill");
skillPills.forEach(function (pill) {
  pill.addEventListener("click", function () {
    const detail = pill.querySelector(".skill-detail");
    if (detail) {
      detail.style.display = "inline";
    }
  });
});

const battleCats = document.querySelectorAll(".battle-cat");
battleCats.forEach(function (cats) {
  cats.addEventListener("click", function () {
    const detail = cats.querySelector(".battle-detail");
    if (detail) {
      detail.style.display = "inline";
    }
  });
});

/* --- COMBINED SMART THEME ENGINE (MUTUALLY EXCLUSIVE) --- */
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const gradientModeToggle = document.querySelector("#gradient-mode-toggle");

// 1. Restore previous choices from browser memory on page load
if (localStorage.getItem("gradientMode") === "enabled") {
  if (gradientModeToggle) gradientModeToggle.checked = true;
  document.body.classList.add("gradient-mode");
} else if (localStorage.getItem("darkMode") === "enabled") {
  if (darkModeToggle) darkModeToggle.checked = true;
}

// 2. Dark Mode Toggle Behavior
if (darkModeToggle) {
  darkModeToggle.addEventListener("change", function () {
    if (darkModeToggle.checked) {
      localStorage.setItem("darkMode", "enabled");
      
      // Force Gradient Mode OFF when Dark Mode turns ON
      if (gradientModeToggle) gradientModeToggle.checked = false;
      document.body.classList.remove("gradient-mode");
      localStorage.setItem("gradientMode", "disabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });
}

// 3. Gradient Mode Toggle Behavior
if (gradientModeToggle) {
  gradientModeToggle.addEventListener("change", function () {
    if (gradientModeToggle.checked) {
      document.body.classList.add("gradient-mode");
      localStorage.setItem("gradientMode", "enabled");
      
      // Force Dark Mode OFF when Gradient Mode turns ON
      if (darkModeToggle) darkModeToggle.checked = false;
      localStorage.setItem("darkMode", "disabled");
    } else {
      document.body.classList.remove("gradient-mode");
      localStorage.setItem("gradientMode", "disabled");
    }
  });
}

/* --- GALLERY TOGGLE --- */
const galleryBtn = document.querySelector("#gallery-btn");
const catGallery = document.querySelector("#cat-gallery");

if (galleryBtn && catGallery) {
  galleryBtn.addEventListener("click", function () {
    if (catGallery.style.display === "none") {
      catGallery.style.display = "block";
      galleryBtn.textContent = "Hide Gallery";
    } else {
      catGallery.style.display = "none";
      galleryBtn.textContent = "Show Gallery";
    }
  });
}
