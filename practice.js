// Variables
const aside = document.querySelector("aside");
const asideTrigger = document.querySelector("#aside-trigger");
const totalProgress = document.querySelector("#total-progress");
const totalProgressContent = document.querySelector("#total-progress-content");
const currentwork = document.querySelector("#current-work");
let currentworkChildren = currentwork.children;
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

// Function to Display the Corresponding Data
const displayData = (btn, page, progress) => {
  btn.addEventListener("click", (e) => {
    let otherElems = document.querySelectorAll(".data-container *:not(h1, p)");

    Array.prototype.slice.call(otherElems).forEach((value) => {
      value.classList.add("hide");
    });
    currentwork.classList.remove("hide");
    for(let i = 0; i < currentworkChildren.length; i++) {
      currentworkChildren[i].classList.remove("hide");
    }
    let dataEntry = document.querySelector(".data-entry");
    dataEntry.classList.remove("hide");
    for(let i = 0; i < currentworkChildren.length; i++) {
      currentworkChildren[i].classList.remove("hide");
    }

    page.classList.remove("hide");
    let elems = page.children;
    for(let i = 0; i < elems.length; i++) {
      elems[i].classList.remove("hide");
      let elemsChildren = elems[i].children;
      for(j = 0; j < elemsChildren.length; j++) {
        elemsChildren[j].classList.remove("hide");
        let elemsElemsChildren = elemsChildren[j].children;
        for(k = 0; k < elemsElemsChildren.length; k++) {
          elemsElemsChildren[k].classList.remove("hide");
        }
      }
    }
    
    e.stopPropagation();
  })
  progress();
}

// Function to Trigger the Display of Aside Section
asideTrigger.addEventListener("click", () => {
  aside.classList.toggle("hide");
})

// Function to Display the Total Data Entry Progress
const showTotalProgress = () => {
  angouchaPages.innerText = 724;
  angouchaEntry.innerText = 149;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 2497;
  chetanEntry.innerText = 1093;
  chetanRemarks.innerText = "";
  kishanPages.innerText = 7113;
  kishanEntry.innerText = 759;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 6091;
  poukinEntry.innerText = 533;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 3126;
  rohelEntry.innerText = 669;
  rohelRemarks.innerText = "";
}

displayData(totalProgress, totalProgressContent, showTotalProgress);

// Function to Trigger the Display of March 22 Data Entry Stats
march22.addEventListener("click", () => {
  totalProgressContent.classList.add("hide");
  april22content.classList.add("hide");
  march22content.classList.remove("hide");
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
  march22content.classList.add("hide");
  april22content.classList.remove("hide");
  angouchaPages.innerText = 117;
  angouchaEntry.innerText = 149;
  angouchaRemarks.innerText = "";
  chetanPages.innerText = 100;
  chetanEntry.innerText = 431;
  chetanRemarks.innerText = "";
  kishanPages.innerText = 2178;
  kishanEntry.innerText = 209;
  kishanRemarks.innerText = "";
  poukinPages.innerText = 1928;
  poukinEntry.innerText = 162;
  poukinRemarks.innerText = "";
  rohelPages.innerText = 1162;
  rohelEntry.innerText = 217;
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