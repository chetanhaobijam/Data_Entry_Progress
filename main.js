// Variables
const aside = document.querySelector("aside");
const asideTrigger = document.querySelector("#aside-trigger");
const totalProgress = document.querySelector("#total-progress");
const totalProgressContent = document.querySelector("#total-progress-content");
// Dates
const march22 = document.querySelector("#march-22");
const march22content = document.querySelector("#march-22-content");
const seventeenMarch22 = document.querySelector("#seventeen-march-22");
const twentythreeMarch22 = document.querySelector("#twentythree-march-22");
const twentyfourMarch22 = document.querySelector("#twentyfour-march-22");
const twentyfiveMarch22 = document.querySelector("#twentyfive-march-22");

const holiday = document.querySelector(".holiday");
// Table
const chetanPages = document.querySelector("#chetan-pages");
const chetanEntry = document.querySelector("#chetan-entry");
const chetanRemarks = document.querySelector("#chetan-remarks");
const kishanPages = document.querySelector("#kishan-pages");
const kishanEntry = document.querySelector("#kishan-entry");
const kishanRemarks = document.querySelector("#kishan-remarks");
const poukinPages = document.querySelector("#poukin-pages");
const poukinEntry = document.querySelector("#poukin-entry");
const poukinRemarks = document.querySelector("#poukin-remarks");
const rohelPages = document.querySelector("#rohel-pages");
const rohelEntry = document.querySelector("#rohel-entry");
const rohelRemarks = document.querySelector("#rohel-remarks");


totalProgressContent.classList.remove("hide");
march22content.classList.add("hide");

// Function to Trigger the Display of Aside Section
asideTrigger.addEventListener("click", () => {
  aside.classList.toggle("hide");
})

// Function to Trigger the Display of Total Data Entry Progress
totalProgress.addEventListener("click", () => {
  totalProgressContent.classList.remove("hide");
  march22content.classList.add("hide");
})

// Function to Trigger the Display of March 22 Data Entry Stats
march22.addEventListener("click", () => {
  totalProgressContent.classList.add("hide");
  march22content.classList.remove("hide");
  chetanPages.innerText = 0;
  chetanEntry.innerText = 199;
  chetanRemarks.innerText = "";
  kishanPages.innerText = 1738;
  kishanEntry.innerText = 46;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 1064;
  poukinEntry.innerText = 35;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 103;
  rohelRemarks.innerText = "";
})

// Function to display the stats for Holiday Days
holiday.addEventListener("click", () => {
  chetanPages.innerText = 0;
  chetanEntry.innerText = 0;
  chetanRemarks.innerText = "Office Holiday";
  kishanPages.innerText = 0;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "Office Holiday";
  poukinPages.innerText = 0;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "Office Holiday";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 0;
  rohelRemarks.innerText = "Office Holiday";
})

// Function to display the stats for 17 March 22
seventeenMarch22.addEventListener("click", () => {
  chetanPages.innerText = 0;
  chetanEntry.innerText = 5;
  chetanRemarks.innerText = "Few entries due to Software Error";
  kishanPages.innerText = 448;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 320;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 0;
  rohelRemarks.innerText = "Absent";
})

// Function to display the stats for 23 March 22
twentythreeMarch22.addEventListener("click", () => {
  chetanPages.innerText = 0;
  chetanEntry.innerText = 68;
  chetanRemarks.innerText = "";
  kishanPages.innerText = 504;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 360;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 0;
  rohelRemarks.innerText = "Absent";
})

// Function to display the stats for 24 March 22
twentyfourMarch22.addEventListener("click", () => {
  chetanPages.innerText = 0;
  chetanEntry.innerText = 70;
  chetanRemarks.innerText = "";
  kishanPages.innerText = 558;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 384;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 41;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 25 March 22
twentyfiveMarch22.addEventListener("click", () => {
  chetanPages.innerText = 0;
  chetanEntry.innerText = 61;
  chetanRemarks.innerText = "";
  kishanPages.innerText = 228;
  kishanEntry.innerText = 46;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 0;
  poukinEntry.innerText = 35;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 62;
  rohelRemarks.innerText = "";
})
