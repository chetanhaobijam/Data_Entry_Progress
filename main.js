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
const twentysixMarch22 = document.querySelector("#twentysix-march-22");
const twentyeightMarch22 = document.querySelector("#twentyeight-march-22");

const holiday = document.querySelectorAll(".holiday");
// Table
const angouchaPages = document.querySelector("#angoucha-pages");
const angouchaEntry = document.querySelector("#angoucha-entry");
const angouchaRemarks = document.querySelector("#angoucha-remarks");
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
  angouchaPages.innerText = 82;
  angouchaEntry.innerText = 0;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 69;
  chetanEntry.innerText = 240;
  chetanRemarks.innerText = "";
  kishanPages.innerText = 2398;
  kishanEntry.innerText = 135;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 1507;
  poukinEntry.innerText = 60;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 222;
  rohelEntry.innerText = 130;
  rohelRemarks.innerText = "";
})

// Function to display the stats for Holiday Days
holiday.forEach(date => {
  date.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 0;
  angouchaRemarks.innerText = "Office Holiday";
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
})

// Function to display the stats for 17 March 22
seventeenMarch22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 0;
  angouchaRemarks.innerText = "Absent";
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
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 0;
  angouchaRemarks.innerText = "Absent";
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
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 0;
  angouchaRemarks.innerText = "Absent";
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
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 0;
  angouchaRemarks.innerText = "Absent";
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

// Function to display the stats for 26 March 22
twentysixMarch22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 0;
  angouchaRemarks.innerText = "Absent";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 6;
  chetanRemarks.innerText = "Printing, Inserting Pages in Gazette Book";
  kishanPages.innerText = 400;
  kishanEntry.innerText = 54;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 223;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 222;
  rohelEntry.innerText = 0;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 28 March 22
twentyeightMarch22.addEventListener("click", () => {
  angouchaPages.innerText = 82;
  angouchaEntry.innerText = 0;
  angouchaRemarks.innerText = "Printing";
  chetanPages.innerText = 69;
  chetanEntry.innerText = 35;
  chetanRemarks.innerText = "Printing, Inserting Barcode Pages";
  kishanPages.innerText = 260;
  kishanEntry.innerText = 35;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 220;
  poukinEntry.innerText = 25;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 27;
  rohelRemarks.innerText = "Inserting Barcode Pages";
})
