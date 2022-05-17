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

// Remarks
const print = "Printing";
const insert = "Inserting Gazette Barcode Pages";
const prins = "Printing & Inserting Gazette Barcode Pages";
const make = "Making PDFs";
const abs = "Absent";
const em = "";
const excel = "Excel Work";
const other = "Other work";

// Function to Trigger the Display of Aside Section
asideTrigger.addEventListener("click", () => {
  aside.classList.toggle("hide");
  mainContent.classList.toggle("shrink-left-margin");
})

const progress = (aPages, aEntry, aRemarks, cPages, cEntry, cRemarks, kPages, kEntry, kRemarks, pPages, pEntry, pRemarks, rPages, rEntry, rRemarks) => {
  angouchaPages.innerText = aPages;
  angouchaEntry.innerText = aEntry;
  angouchaRemarks.innerText = aRemarks;
  chetanPages.innerText = cPages;
  chetanEntry.innerText = cEntry;
  chetanRemarks.innerText = cRemarks;
  kishanPages.innerText = kPages;
  kishanEntry.innerText = kEntry;
  kishanRemarks.innerText = kRemarks;
  poukinPages.innerText = pPages;
  poukinEntry.innerText = pEntry;
  poukinRemarks.innerText = pRemarks;
  rohelPages.innerText = rPages;
  rohelEntry.innerText = rEntry;
  rohelRemarks.innerText = rRemarks;
}

// Function to Display the Total Data Entry Progress
const showTotalProgress = () => {
  totalProgressContent.classList.remove("hide");
  workProgressContent.classList.add("hide");
  march22content.classList.add("hide");
  april22content.classList.add("hide");
  may22content.classList.add("hide");
  dataEntry.classList.remove("hide");
  progress(724, 377, em, 2805, 1545, em, 9861, 1265, em, 9050, 878, em, 5571, 933, em);
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

// Function to Trigger the Display of March 22 Data Entry Stats
march22.addEventListener("click", () => {
  totalProgressContent.classList.add("hide");
  workProgressContent.classList.add("hide");
  march22content.classList.remove("hide");
  april22content.classList.add("hide");
  may22content.classList.add("hide");
  dataEntry.classList.remove("hide");
  progress(607, 0, em, 69, 378, em, 2996, 232, em, 2055, 110, em, 222, 220, em);
})

// Function to display the stats for 17 March 22
seventeenMarch22.addEventListener("click", () => {
  progress(0, 0, abs, 0, 5, "Few entries due to Software Error", 448, 0, em, 320, 0, em, 0, 0, abs);
})

// Function to display the stats for 23 March 22
twentythreeMarch22.addEventListener("click", () => {
  progress(0, 0, abs, 0, 68, em, 504, 0, em, 360, 0, em, 0, 0, abs);
})

// Function to display the stats for 24 March 22
twentyfourMarch22.addEventListener("click", () => {
  progress(0, 0, abs, 0, 70, em, 558, 0, em, 384, 0, em, 0, 41, em);
})

// Function to display the stats for 25 March 22
twentyfiveMarch22.addEventListener("click", () => {
  progress(0, 0, abs, 0, 61, em, 228, 46, em, 0, 35, em, 0, 62, em);
})

// Function to display the stats for 26 March 22
twentysixMarch22.addEventListener("click", () => {
  progress(0, 0, abs, 0, 6, prins, 400, 54, em, 223, 0, em, 222, 0, em);
})

// Function to display the stats for 28 March 22
twentyeightMarch22.addEventListener("click", () => {
  progress(82, 0, print, 69, 35, prins, 260, 35, em, 220, 25, em, 0, 27, insert);
})

// Function to display the stats for 29 March 22
twentynineMarch22.addEventListener("click", () => {
  progress(203, 0, em, 0, 38, em, 454, 0, em, 344, 0, em, 0, 0, abs);
})

// Function to display the stats for 30 March 22
thirtyMarch22.addEventListener("click", () => {
  progress(148, 0, em, 0, 49, em, 0, 50, em, 204, 0, em, 0, 40, em);
})

// Function to display the stats for 31 March 22
thirtyoneMarch22.addEventListener("click", () => {
  progress(174, 0, em, 0, 51, insert, 144, 47, print, 0, 50, em, 0, 50, em);
})

// Function to Trigger the Display of May 22 Data Entry Stats
may22.addEventListener("click", () => {
  totalProgressContent.classList.add("hide");
  workProgressContent.classList.add("hide");
  march22content.classList.add("hide");
  april22content.classList.add("hide");
  may22content.classList.remove("hide");
  dataEntry.classList.remove("hide");
  progress(0, 154, "", 0, 297, "", 1498, 333, "", 2203, 171, "", 1576, 136, "");
})

// Function to display the stats for 02 May 22
twoMay22.addEventListener("click", () => {
  progress(0, 6, em, 0, 0, other, 0, 0, other, 0, 0, other, 0, 0, other);
})

// Function to display the stats for 04 May 22
fourMay22.addEventListener("click", () => {
  progress(0, 10, em, 0, 0, other, 0, 20, em, 0, 0, other, 0, 0, other)
})

// Function to display the stats for 05 May 22
fiveMay22.addEventListener("click", () => {
  progress(0, 18, em, 0, 0, other, 302, 0, em, 400, 0, em, 322, 0, em);
})

// Function to display the stats for 06 May 22
sixMay22.addEventListener("click", () => {
  progress(0, 0, make, 0, 0, `${excel} & ${make}`, 426, 0, em, 401, 0, em, 272, 0, em);
})

// Function to display the stats for 07 May 22
sevenMay22.addEventListener("click", () => {
  progress(0, 0, make, 0, 2, `${excel} & ${make}`, 86, 0, make, 410, 0, em, 238, 0, em);
})

// Function to display the stats for 09 May 22
nineMay22.addEventListener("click", () => {
  progress(0, 12, make, 0, 0, `${excel} & ${make}`, 0, 0, `${excel} & ${make}`, 242, 0, em, 156, 15, em);
})

// Function to display the stats for 10 May 22
tenMay22.addEventListener("click", () => {
  progress(0, 34, em, 0, 112, make, 0, 109, make, 0, 50, em, 0, 20, em)
})

// Function to display the stats for 11 May 22
elevenMay22.addEventListener("click", () => {
  progress(0, 58, em, 0, 100, print, 0, 104, em, 0, 60, em, 0, 50, em)
})

// Function to display the stats for 12 May 22
twelveMay22.addEventListener("click", () => {
  progress(0, 16, em, 0, 83, em, 0, 100, em, 0, 61, em, 0, 51, em);
})

// Function to display the stats for 13 May 22
thirteenMay22.addEventListener("click", () => {
  progress(0, 0, other, 0, 0, print, 290, 0, em, 392, 0, em, 262, 0, em)
})

// Function to display the stats for 16 May 22
sixteenMay22.addEventListener("click", () => {
  progress(0, 0, make, 0, 0, `Excel Work, ${prins}`, 394, 0, "",  358, 0, "", 326, 0, "");
})