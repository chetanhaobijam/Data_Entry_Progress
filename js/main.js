// Variables
const aside = document.querySelector("aside");
const asideTrigger = document.querySelector("#aside-trigger");
const mainContent = document.querySelector(".main-content");
const currentWork = document.querySelector("#current-work");
const totalProgress = document.querySelector("#total-progress");
const totalProgressContent = document.querySelector("#total-progress-content");
const workProgress = document.querySelector("#work-progress");
const workProgressContent = document.querySelector("#work-progress-content");
const dataEntry = document.querySelector(".data-entry");
// Dates
const march22 = document.querySelector("#march-22");
const march22content = document.querySelector("#march-22-content");
const seventeenMarch22 = document.querySelector("#seventeen-march-22");
const twentythreeMarch22 = document.querySelector("#twentythree-march-22");
const twentyfourMarch22 = document.querySelector("#twentyfour-march-22");
const twentyfiveMarch22 = document.querySelector("#twentyfive-march-22");
const twentysixMarch22 = document.querySelector("#twentysix-march-22");
const twentyeightMarch22 = document.querySelector("#twentyeight-march-22");
const twentynineMarch22 = document.querySelector("#twentynine-march-22");
const thirtyMarch22 = document.querySelector("#thirty-march-22");
const thirtyoneMarch22 = document.querySelector("#thirtyone-march-22");
const april22 = document.querySelector("#april-22");
const april22content = document.querySelector("#april-22-content");
const oneApril22 = document.querySelector("#one-april-22");
const fourApril22 = document.querySelector("#four-april-22");
const fiveApril22 = document.querySelector("#five-april-22");
const sixApril22 = document.querySelector("#six-april-22");
const sevenApril22 = document.querySelector("#seven-april-22");
const eightApril22 = document.querySelector("#eight-april-22");
const elevenApril22 = document.querySelector("#eleven-april-22");
const twelveApril22 = document.querySelector("#twelve-april-22");
const thirteenApril22 = document.querySelector("#thirteen-april-22");
const sixteenApril22 = document.querySelector("#sixteen-april-22");
const eighteenApril22 = document.querySelector("#eighteen-april-22");
const nineteenApril22 = document.querySelector("#nineteen-april-22");
const twentyApril22 = document.querySelector("#twenty-april-22");
const twentyoneApril22 = document.querySelector("#twentyone-april-22");
const twentytwoApril22 = document.querySelector("#twentytwo-april-22");
const twentyfiveApril22 = document.querySelector("#twentyfive-april-22");
const twentysixApril22 = document.querySelector("#twentysix-april-22");
const twentysevenApril22 = document.querySelector("#twentyseven-april-22");
const twentyeightApril22 = document.querySelector("#twentyeight-april-22");
const twentynineApril22 = document.querySelector("#twentynine-april-22");
const thirtyApril22 = document.querySelector("#thirty-april-22");
const may22 = document.querySelector("#may-22");
const may22content = document.querySelector("#may-22-content");
const twoMay22 = document.querySelector("#two-may-22");
const fourMay22 = document.querySelector("#four-may-22");
const fiveMay22 = document.querySelector("#five-may-22");
const sixMay22 = document.querySelector("#six-may-22");
const sevenMay22 = document.querySelector("#seven-may-22");
const nineMay22 = document.querySelector("#nine-may-22");
const tenMay22 = document.querySelector("#ten-may-22");
const elevenMay22 = document.querySelector("#eleven-may-22");
const twelveMay22 = document.querySelector("#twelve-may-22");
const thirteenMay22 = document.querySelector("#thirteen-may-22");
const sixteenMay22 = document.querySelector("#sixteen-may-22");

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

// Function to Trigger the Display of Aside Section
asideTrigger.addEventListener("click", () => {
  aside.classList.toggle("hide");
  mainContent.classList.toggle("shrink-left-margin");
})

// Function to Display the Total Data Entry Progress
const showTotalProgress = () => {
  totalProgressContent.classList.remove("hide");
  workProgressContent.classList.add("hide");
  march22content.classList.add("hide");
  april22content.classList.add("hide");
  may22content.classList.add("hide");
  dataEntry.classList.remove("hide");
  angouchaPages.innerText = 724;
  angouchaEntry.innerText = 377;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 2805;
  chetanEntry.innerText = 1545;
  chetanRemarks.innerText = "";
  kishanPages.innerText = 9861;
  kishanEntry.innerText = 1265;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 9050;
  poukinEntry.innerText = 878;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 5571;
  rohelEntry.innerText = 933;
  rohelRemarks.innerText = "";
}

showTotalProgress();

totalProgress.addEventListener("click", showTotalProgress);

// Work Progress Section
const workProgressColoring = () => {
  const workTd = workProgressContent.querySelectorAll("td");
  workTd.forEach((td) => {
    if (td.textContent === "Completed") {
      td.classList.add("text-success");
    } else if (td.textContent === "No") {
      td.classList.add("text-danger");
    } else if (td.textContent === "Ongoing") {
      td.classList.add("text-primary");
    }
  });
}

const showWorkProgress = () => {
  totalProgressContent.classList.add("hide");
  march22content.classList.add("hide");
  april22content.classList.add("hide");
  may22content.classList.add("hide");
  dataEntry.classList.add("hide");
  workProgressContent.classList.remove("hide");
}

workProgress.addEventListener("click", () => {
  showWorkProgress();
})

workProgressColoring();

// Function to Trigger the Display of March 22 Data Entry Stats
march22.addEventListener("click", () => {
  totalProgressContent.classList.add("hide");
  workProgressContent.classList.add("hide");
  march22content.classList.remove("hide");
  april22content.classList.add("hide");
  may22content.classList.add("hide");
  dataEntry.classList.remove("hide");
  angouchaPages.innerText = 607;
  angouchaEntry.innerText = 0;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 69;
  chetanEntry.innerText = 378;
  chetanRemarks.innerText = "";
  kishanPages.innerText = 2996;
  kishanEntry.innerText = 232;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 2055;
  poukinEntry.innerText = 110;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 222;
  rohelEntry.innerText = 220;
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
  chetanEntry.innerText = 63;
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

// Function to display the stats for 29 March 22
twentynineMarch22.addEventListener("click", () => {
  angouchaPages.innerText = 203;
  angouchaEntry.innerText = 0;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 38;
  chetanRemarks.innerText = "";
  kishanPages.innerText = 454;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 344;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 0;
  rohelRemarks.innerText = "Absent";
})

// Function to display the stats for 30 March 22
thirtyMarch22.addEventListener("click", () => {
  angouchaPages.innerText = 148;
  angouchaEntry.innerText = 0;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 49;
  chetanRemarks.innerText = "";
  kishanPages.innerText = 0;
  kishanEntry.innerText = 50;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 204;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 40;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 31 March 22
thirtyoneMarch22.addEventListener("click", () => {
  angouchaPages.innerText = 174;
  angouchaEntry.innerText = 0;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 51;
  chetanRemarks.innerText = "Inserting Barcode Pages";
  kishanPages.innerText = 144;
  kishanEntry.innerText = 47;
  kishanRemarks.innerText = "Printing Work";
  poukinPages.innerText = 0;
  poukinEntry.innerText = 50;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 50;
  rohelRemarks.innerText = "";
})

// Function to Trigger the Display of April 22 Data Entry Stats
april22.addEventListener("click", () => {
  totalProgressContent.classList.add("hide");
  workProgressContent.classList.add("hide");
  march22content.classList.add("hide");
  april22content.classList.remove("hide");
  may22content.classList.add("hide");
  dataEntry.classList.remove("hide");
  angouchaPages.innerText = 117;
  angouchaEntry.innerText = 223;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 408;
  chetanEntry.innerText = 586;
  chetanRemarks.innerText = "";
  kishanPages.innerText = 3428;
  kishanEntry.innerText = 382;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 2684;
  poukinEntry.innerText = 336;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 2031;
  rohelEntry.innerText = 345;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 01 April 22
oneApril22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 0;
  angouchaRemarks.innerText = "Printing Work";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 73;
  chetanRemarks.innerText = "";
  kishanPages.innerText = 0;
  kishanEntry.innerText = 70;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 0;
  poukinEntry.innerText = 43;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 41;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 04 April 22
fourApril22.addEventListener("click", () => {
  angouchaPages.innerText = 17;
  angouchaEntry.innerText = 0;
  angouchaRemarks.innerText = "Printing Work";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 20;
  chetanRemarks.innerText = "Printing Work";
  kishanPages.innerText = 242;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 214;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 214;
  rohelEntry.innerText = 0;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 05 April 22
fiveApril22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 16;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 54;
  chetanRemarks.innerText = "";
  kishanPages.innerText = 513;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 215;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 209;
  rohelEntry.innerText = 0;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 06 April 22
sixApril22.addEventListener("click", () => {
  angouchaPages.innerText = 100;
  angouchaEntry.innerText = 30;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 100;
  chetanEntry.innerText = 6;
  chetanRemarks.innerText = "Inserting Barcode Pages";
  kishanPages.innerText = 0;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "Absent";
  poukinPages.innerText = 410;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 50;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 07 April 22
sevenApril22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 21;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 63;
  chetanRemarks.innerText = "";
  kishanPages.innerText = 398;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "Inserting Barcode Pages";
  poukinPages.innerText = 315;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 52;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 08 April 22
eightApril22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 0;
  angouchaRemarks.innerText = "Other work";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 65;
  chetanRemarks.innerText = "";
  kishanPages.innerText = 0;
  kishanEntry.innerText = 71;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 0;
  poukinEntry.innerText = 50;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 50;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 11 April 22
elevenApril22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 23;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 50;
  chetanRemarks.innerText = "";
  kishanPages.innerText = 0;
  kishanEntry.innerText = 68;
  kishanRemarks.innerText = "Printing Works";
  poukinPages.innerText = 0;
  poukinEntry.innerText = 39;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 24;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 12 April 22
twelveApril22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 24;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 5;
  chetanRemarks.innerText = "Printing Works";
  kishanPages.innerText = 378;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 208;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 208;
  rohelEntry.innerText = 0;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 13 April 22
thirteenApril22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 35;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 55;
  chetanRemarks.innerText = "";
  kishanPages.innerText = 311;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 476;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 305;
  rohelEntry.innerText = 0;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 16 April 22
sixteenApril22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 0;
  angouchaRemarks.innerText = "Other works, Electricity Outage Problem";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 0;
  chetanRemarks.innerText = "Excel Work, Electricity Outage Problem";
  kishanPages.innerText = 0;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "Absent";
  poukinPages.innerText = 10;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "Electricity Outage Problem";
  rohelPages.innerText = 84;
  rohelEntry.innerText = 0;
  rohelRemarks.innerText = "Electricity Outage Problem";
})

// Function to display the stats for 18 April 22
eighteenApril22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 0;
  angouchaRemarks.innerText = "Other Works";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 40;
  chetanRemarks.innerText = "Excel Work";
  kishanPages.innerText = 336;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 80;
  poukinEntry.innerText = 30;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 142;
  rohelEntry.innerText = 0;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 19 April 22
nineteenApril22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 11;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 51;
  chetanRemarks.innerText = "";
  kishanPages.innerText = 0;
  kishanEntry.innerText = 58;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 0;
  poukinEntry.innerText = 45;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 31;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 20 April 22
twentyApril22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 3;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 3;
  chetanRemarks.innerText = "";
  kishanPages.innerText = 0;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "Printing Works";
  poukinPages.innerText = 0;
  poukinEntry.innerText = 11;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 0;
  rohelRemarks.innerText = "No Work Done";
})

// Function to display the stats for 21 April 22
twentyoneApril22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 38;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 0;
  chetanRemarks.innerText = "Printing & Other Works";
  kishanPages.innerText = 472;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 300;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 255;
  rohelEntry.innerText = 0;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 22 April 22
twentytwoApril22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 0;
  angouchaRemarks.innerText = "Making PDFs";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 0;
  chetanRemarks.innerText = "Excel and Making PDFs";
  kishanPages.innerText = 0;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "Absent";
  poukinPages.innerText = 310;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 400;
  rohelEntry.innerText = 0;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 25 April 22
twentyfiveApril22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 0;
  angouchaRemarks.innerText = "Making PDFs";
  chetanPages.innerText = 8;
  chetanEntry.innerText = 1;
  chetanRemarks.innerText = "Excel work, Making PDFs and Inserting Barcode Pages";
  kishanPages.innerText = 286;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 146;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 214;
  rohelEntry.innerText = 0;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 26 April 22
twentysixApril22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 2;
  angouchaRemarks.innerText = "Making PDFs";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 0;
  chetanRemarks.innerText = "Excel work, Making PDFs and Inserting Barcode Pages";
  kishanPages.innerText = 400;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 0;
  poukinEntry.innerText = 50;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 32;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 27 April 22
twentysevenApril22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 0;
  angouchaRemarks.innerText = "Electricity Outage";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 0;
  chetanRemarks.innerText = "Inserting Barcode Pages, Electricity Outage";
  kishanPages.innerText = 0;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "Inserting Barcode Pages, Electricity Outage";
  poukinPages.innerText = 0;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "Electricity Outage";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 0;
  rohelRemarks.innerText = "Electricity Outage";
})

// Function to display the stats for 28 April 22
twentyeightApril22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 0;
  angouchaRemarks.innerText = "Absent";
  chetanPages.innerText = 300;
  chetanEntry.innerText = 0;
  chetanRemarks.innerText = "Excel work, Making PDFs, Electricity Outage";
  kishanPages.innerText = 0;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "Absent";
  poukinPages.innerText = 0;
  poukinEntry.innerText = 26;
  poukinRemarks.innerText = "Electricity Outage";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 26;
  rohelRemarks.innerText = "Electricity Outage";
})

// Function to display the stats for 29 April 22
twentynineApril22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 18;
  angouchaRemarks.innerText = "Making PDFs";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 100;
  chetanRemarks.innerText = "Excel work, Making PDFs";
  kishanPages.innerText = 92;
  kishanEntry.innerText = 100;
  kishanRemarks.innerText = "Making PDFs";
  poukinPages.innerText = 0;
  poukinEntry.innerText = 42;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 39;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 30 April 22
thirtyApril22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 2;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 0;
  chetanRemarks.innerText = "Printing 496 Gazette Barcode Pages";
  kishanPages.innerText = 0;
  kishanEntry.innerText = 15;
  kishanRemarks.innerText = "Making PDFs, Inserting 496 Gazette Barcode Pages";
  poukinPages.innerText = 0;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "No Work Done";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 0;
  rohelRemarks.innerText = "Absent";
})

// Function to Trigger the Display of May 22 Data Entry Stats
may22.addEventListener("click", () => {
  totalProgressContent.classList.add("hide");
  workProgressContent.classList.add("hide");
  march22content.classList.add("hide");
  april22content.classList.add("hide");
  may22content.classList.remove("hide");
  dataEntry.classList.remove("hide");
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 154;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 297;
  chetanRemarks.innerText = "";
  kishanPages.innerText = 1498;
  kishanEntry.innerText = 333;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 2203;
  poukinEntry.innerText = 171;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 1576;
  rohelEntry.innerText = 136;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 02 May 22
twoMay22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 6;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 0;
  chetanRemarks.innerText = "Other Works";
  kishanPages.innerText = 0;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "Other Works";
  poukinPages.innerText = 0;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "Other Works";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 0;
  rohelRemarks.innerText = "Other Works";
})

// Function to display the stats for 04 May 22
fourMay22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 10;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 0;
  chetanRemarks.innerText = "Other Works";
  kishanPages.innerText = 0;
  kishanEntry.innerText = 20;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 0;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "Other Works";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 0;
  rohelRemarks.innerText = "Other Works";
})

// Function to display the stats for 05 May 22
fiveMay22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 18;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 0;
  chetanRemarks.innerText = "Other Works";
  kishanPages.innerText = 302;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 400;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 322;
  rohelEntry.innerText = 0;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 06 May 22
sixMay22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 0;
  angouchaRemarks.innerText = "Making PDFs";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 0;
  chetanRemarks.innerText = "Excel, Making PDFs";
  kishanPages.innerText = 426;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 401;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 272;
  rohelEntry.innerText = 0;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 07 May 22
sevenMay22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 0;
  angouchaRemarks.innerText = "Making PDFs";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 2;
  chetanRemarks.innerText = "Excel, Making PDFs";
  kishanPages.innerText = 86;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "Making PDFs";
  poukinPages.innerText = 410;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 238;
  rohelEntry.innerText = 0;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 09 May 22
nineMay22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 12;
  angouchaRemarks.innerText = "Making PDFs";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 0;
  chetanRemarks.innerText = "Excel & Making PDFs";
  kishanPages.innerText = 0;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "Excel & Making PDFs";
  poukinPages.innerText = 242;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 156;
  rohelEntry.innerText = 15;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 10 May 22
tenMay22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 34;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 112;
  chetanRemarks.innerText = "Making PDFs";
  kishanPages.innerText = 0;
  kishanEntry.innerText = 109;
  kishanRemarks.innerText = "Making PDFs";
  poukinPages.innerText = 0;
  poukinEntry.innerText = 50;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 20;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 11 May 22
elevenMay22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 58;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 100;
  chetanRemarks.innerText = "Printing 116 Gazette Barcode Pages";
  kishanPages.innerText = 0;
  kishanEntry.innerText = 104;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 0;
  poukinEntry.innerText = 60;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 50;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 12 May 22
twelveMay22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 16;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 83;
  chetanRemarks.innerText = "";
  kishanPages.innerText = 0;
  kishanEntry.innerText = 100;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 0;
  poukinEntry.innerText = 61;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 51;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 13 May 22
thirteenMay22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 0;
  angouchaRemarks.innerText = "Other Works";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 0;
  chetanRemarks.innerText = "Printing 259 Gazette Barcode Pages";
  kishanPages.innerText = 290;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 392;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 262;
  rohelEntry.innerText = 0;
  rohelRemarks.innerText = "";
})

// Function to display the stats for 16 May 22
sixteenMay22.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 0;
  angouchaRemarks.innerText = "Making PDFs";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 0;
  chetanRemarks.innerText = "Excel Work, Printing & Inserting Gazette Barcode Pages";
  kishanPages.innerText = 394;
  kishanEntry.innerText = 0;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 358;
  poukinEntry.innerText = 0;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 326;
  rohelEntry.innerText = 0;
  rohelRemarks.innerText = "";
})