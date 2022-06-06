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
const calendarData = document.querySelectorAll(".calendar-table tbody td");
const totalGazetteScan = document.querySelector(".total-pages");
const totalGazetteEntry = document.querySelector(".total-entry");

// Dates
// March Dates
const march22 = document.querySelector("#march-22");
const march22Content = document.querySelector("#march-22-content");
const seventeenMarch22 = document.querySelector("#seventeen-march-22");
const twentythreeMarch22 = document.querySelector("#twentythree-march-22");
const twentyfourMarch22 = document.querySelector("#twentyfour-march-22");
const twentyfiveMarch22 = document.querySelector("#twentyfive-march-22");
const twentysixMarch22 = document.querySelector("#twentysix-march-22");
const twentyeightMarch22 = document.querySelector("#twentyeight-march-22");
const twentynineMarch22 = document.querySelector("#twentynine-march-22");
const thirtyMarch22 = document.querySelector("#thirty-march-22");
const thirtyoneMarch22 = document.querySelector("#thirtyone-march-22");

// April Dates
const april22 = document.querySelector("#april-22");
const april22Content = document.querySelector("#april-22-content");
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

// May Dates
const may22 = document.querySelector("#may-22");
const may22Content = document.querySelector("#may-22-content");
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
const seventeenMay22 = document.querySelector("#seventeen-may-22");
const eighteenMay22 = document.querySelector("#eighteen-may-22");
const nineteenMay22 = document.querySelector("#nineteen-may-22");
const twentyMay22 = document.querySelector("#twenty-may-22");
const twentyOneMay22 = document.querySelector("#twentyone-may-22");
const twentyThreeMay22 = document.querySelector("#twentythree-may-22");
const twentyFourMay22 = document.querySelector("#twentyfour-may-22");
const twentyFiveMay22 = document.querySelector("#twentyfive-may-22");
const twentySixMay22 = document.querySelector("#twentysix-may-22");
const twentySevenMay22 = document.querySelector("#twentyseven-may-22");
const twentyEightMay22 = document.querySelector("#twentyeight-may-22");
const thirtyMay22 = document.querySelector("#thirty-may-22");
const thirtyOneMay22 = document.querySelector("#thirtyone-may-22");

// June Dates
const june22 = document.querySelector("#june-22");
const june22Content = document.querySelector("#june-22-content");
const oneJune22 = document.querySelector("#one-june-22");
const twoJune22 = document.querySelector("#two-june-22");

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
const elec = "Electricity outage";

// Function to Remove the Active class from table data
const removeActiveData = () => {
  calendarData.forEach(data => {
    data.classList.remove("active-data");
  })
}

// Function to mark the clicked table data as active
for(let i = 0; i < calendarData.length; i++) {
  calendarData[i].addEventListener("click", () => {
    removeActiveData();
    if(calendarData[i].hasAttribute("class")) {
      calendarData[i].classList.add("active-data");
    }
  })
}

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

// Function to hide/display the contents
const displayProgress = (content) => {
  totalProgressContent.classList.add("hide");
  workProgressContent.classList.add("hide");
  march22Content.classList.add("hide");
  april22Content.classList.add("hide");
  may22Content.classList.add("hide");
  june22Content.classList.add("hide");
  dataEntry.classList.remove("hide");
  // Content
  content.classList.remove("hide");
}

// Function to calculate the total scan/entry of a month
const total = arr => {
  return arr.reduce((acc, val) => {
    return acc + val;
  0})
}


// Function to call the data by Fetch API
async function getData() {
  const dataStream = await fetch("../json/data.json");
  const datas = await dataStream.json();
  let oldAngouchaScan = datas[2022]["angoucha"]["old"]["scan"];
  let oldAngouchaEntry = datas[2022]["angoucha"]["old"]["entry"];
  let oldChetanScan = datas[2022]["chetan"]["old"]["scan"];
  let oldChetanEntry = datas[2022]["chetan"]["old"]["entry"];;
  let oldKishanScan = datas[2022]["kishan"]["old"]["scan"];
  let oldKishanEntry = datas[2022]["kishan"]["old"]["entry"];
  let oldPoukinScan = datas[2022]["poukin"]["old"]["scan"];
  let oldPoukinEntry = datas[2022]["poukin"]["old"]["entry"];
  let oldRohelScan = datas[2022]["rohel"]["old"]["scan"];
  let oldRohelEntry = datas[2022]["rohel"]["old"]["entry"];

  // March 22 Total Data
  let angouchaMar22ScanTotal = total(datas[2022]["angoucha"]["march"]["scan"]);
  let angouchaMar22EntryTotal = total(datas[2022]["angoucha"]["march"]["entry"]);
  let chetanMar22ScanTotal = total(datas[2022]["chetan"]["march"]["scan"]);
  let chetanMar22EntryTotal = total(datas[2022]["chetan"]["march"]["entry"]);
  let kishanMar22ScanTotal = total(datas[2022]["kishan"]["march"]["scan"]);
  let kishanMar22EntryTotal = total(datas[2022]["kishan"]["march"]["entry"]);
  let poukinMar22ScanTotal = total(datas[2022]["poukin"]["march"]["scan"]);
  let poukinMar22EntryTotal = total(datas[2022]["poukin"]["march"]["entry"]);
  let rohelMar22ScanTotal = total(datas[2022]["rohel"]["march"]["scan"]);
  let rohelMar22EntryTotal = total(datas[2022]["rohel"]["march"]["entry"]);

  // April 22 Total Data
  let angouchaApr22ScanTotal = total(datas[2022]["angoucha"]["april"]["scan"]);
  let angouchaApr22EntryTotal = total(datas[2022]["angoucha"]["april"]["entry"]);
  let chetanApr22ScanTotal = total(datas[2022]["chetan"]["april"]["scan"]);
  let chetanApr22EntryTotal = total(datas[2022]["chetan"]["april"]["entry"]);
  let kishanApr22ScanTotal = total(datas[2022]["kishan"]["april"]["scan"]);
  let kishanApr22EntryTotal = total(datas[2022]["kishan"]["april"]["entry"]);
  let poukinApr22ScanTotal = total(datas[2022]["poukin"]["april"]["scan"]);
  let poukinApr22EntryTotal = total(datas[2022]["poukin"]["april"]["entry"]);
  let rohelApr22ScanTotal = total(datas[2022]["rohel"]["april"]["scan"]);
  let rohelApr22EntryTotal = total(datas[2022]["rohel"]["april"]["entry"]);

  // May 22 Total Data
  let angouchaMay22ScanTotal = total(datas[2022]["angoucha"]["may"]["scan"]);
  let angouchaMay22EntryTotal = total(datas[2022]["angoucha"]["may"]["entry"]);
  let chetanMay22ScanTotal = total(datas[2022]["chetan"]["may"]["scan"]);
  let chetanMay22EntryTotal = total(datas[2022]["chetan"]["may"]["entry"]);
  let kishanMay22ScanTotal = total(datas[2022]["kishan"]["may"]["scan"]);
  let kishanMay22EntryTotal = total(datas[2022]["kishan"]["may"]["entry"]);
  let poukinMay22ScanTotal = total(datas[2022]["poukin"]["may"]["scan"]);
  let poukinMay22EntryTotal = total(datas[2022]["poukin"]["may"]["entry"]);
  let rohelMay22ScanTotal = total(datas[2022]["rohel"]["may"]["scan"]);
  let rohelMay22EntryTotal = total(datas[2022]["rohel"]["may"]["entry"]);

  // Total Data
  let angouchaTotalScan = oldAngouchaScan + angouchaMar22ScanTotal + angouchaApr22ScanTotal + angouchaMay22ScanTotal;
  let angouchaTotalEntry = oldAngouchaEntry + angouchaMar22EntryTotal + angouchaApr22EntryTotal + angouchaMay22EntryTotal;
  let chetanTotalScan = oldChetanScan + chetanMar22ScanTotal + chetanApr22ScanTotal + chetanMay22ScanTotal;
  let chetanTotalEntry = oldChetanEntry + chetanMar22EntryTotal + chetanApr22EntryTotal + chetanMay22EntryTotal;
  let kishanTotalScan = oldKishanScan + kishanMar22ScanTotal + kishanApr22ScanTotal + kishanMay22ScanTotal;
  let kishanTotalEntry = oldKishanEntry + kishanMar22EntryTotal + kishanApr22EntryTotal + kishanMay22EntryTotal;
  let poukinTotalScan = oldPoukinScan + poukinMar22ScanTotal + poukinApr22ScanTotal + poukinMay22ScanTotal;
  let poukinTotalEntry = oldPoukinEntry + poukinMar22EntryTotal + poukinApr22EntryTotal + poukinMay22EntryTotal;
  let rohelTotalScan = oldRohelScan + rohelMar22ScanTotal + rohelApr22ScanTotal + rohelMay22ScanTotal;
  let rohelTotalEntry = oldRohelEntry + rohelMar22EntryTotal + rohelApr22EntryTotal + rohelMay22EntryTotal;
  let totalScan = angouchaTotalScan + chetanTotalScan + kishanTotalScan + poukinTotalScan + rohelTotalScan;
  let totalEntry = angouchaTotalEntry + chetanTotalEntry + kishanTotalEntry + poukinTotalEntry + rohelTotalEntry;

  // Show Total Data
  totalGazetteScan.innerText = totalScan;
  totalGazetteEntry.innerText = totalEntry;


  // Function to Display the Total Data Entry Progress
  const showTotalProgress = () => {
    displayProgress(totalProgressContent);
    removeActiveData();
    progress(angouchaTotalScan, angouchaTotalEntry, em, chetanTotalScan, chetanTotalEntry, em, kishanTotalScan, kishanTotalEntry, em, poukinTotalScan, poukinTotalEntry, em, rohelTotalScan, rohelTotalEntry, em);
  }

  showTotalProgress();

  totalProgress.addEventListener("click", showTotalProgress);

  // Function to Trigger the Display of March 22 Data Entry Stats
  march22.addEventListener("click", () => {
    displayProgress(march22Content);
    removeActiveData();
    progress(angouchaMar22ScanTotal, angouchaMar22EntryTotal, em, chetanMar22ScanTotal, chetanMar22EntryTotal, em, kishanMar22ScanTotal, kishanMar22EntryTotal, em, poukinMar22ScanTotal, poukinMar22EntryTotal, em, rohelMar22ScanTotal, rohelMar22EntryTotal, em);
  })

  // Function to display the stats for 17 March 22
  seventeenMarch22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["march"]["entry"][0];
    let kishanScan = datas["2022"]["kishan"]["march"]["scan"][0];
    let poukinScan = datas["2022"]["poukin"]["march"]["scan"][0];
    progress(0, 0, abs, 0, chetanEntry, "Few entries due to Software Error", kishanScan, 0, em, poukinScan, 0, em, 0, 0, abs);
  })

  // Function to display the stats for 23 March 22
  twentythreeMarch22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["march"]["entry"][1];
    let kishanScan = datas["2022"]["kishan"]["march"]["scan"][1];
    let poukinScan = datas["2022"]["poukin"]["march"]["scan"][1];
    progress(0, 0, abs, 0, chetanEntry, em, kishanScan, 0, em, poukinScan, 0, em, 0, 0, abs);
  })

  // Function to display the stats for 24 March 22
  twentyfourMarch22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["march"]["entry"][2];
    let kishanScan = datas["2022"]["kishan"]["march"]["scan"][2];
    let poukinScan = datas["2022"]["poukin"]["march"]["scan"][2];
    let rohelEntry = datas["2022"]["rohel"]["march"]["entry"][2];
    progress(0, 0, abs, 0, chetanEntry, em, kishanScan, 0, em, poukinScan, 0, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 25 March 22
  twentyfiveMarch22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["march"]["entry"][3];
    let kishanScan = datas["2022"]["kishan"]["march"]["scan"][3];
    let kishanEntry = datas["2022"]["kishan"]["march"]["entry"][3];
    let poukinEntry = datas["2022"]["poukin"]["march"]["entry"][3];
    let rohelEntry = datas["2022"]["rohel"]["march"]["entry"][3];
    progress(0, 0, abs, 0, chetanEntry, em, kishanScan, kishanEntry, em, 0, poukinEntry, em, 0, rohelEntry, em);
  })
  
  // Function to display the stats for 26 March 22
  twentysixMarch22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["march"]["entry"][4];
    let kishanScan = datas["2022"]["kishan"]["march"]["scan"][4];
    let kishanEntry = datas["2022"]["kishan"]["march"]["entry"][4];
    let poukinScan = datas["2022"]["poukin"]["march"]["scan"][4];
    let rohelScan = datas["2022"]["rohel"]["march"]["scan"][4];
    progress(0, 0, abs, 0, chetanEntry, prins, kishanScan, kishanEntry, em, poukinScan, 0, em, rohelScan, 0, em);
  })
  
  // Function to display the stats for 28 March 22
  twentyeightMarch22.addEventListener("click", () => {
    let angouchaScan = datas["2022"]["angoucha"]["march"]["scan"][5];
    let chetanScan = datas["2022"]["chetan"]["march"]["scan"][5];
    let chetanEntry = datas["2022"]["chetan"]["march"]["entry"][5];
    let kishanScan = datas["2022"]["kishan"]["march"]["scan"][5];
    let kishanEntry = datas["2022"]["kishan"]["march"]["entry"][5];
    let poukinScan = datas["2022"]["poukin"]["march"]["scan"][5];
    let poukinEntry = datas["2022"]["poukin"]["march"]["entry"][5];
    let rohelEntry = datas["2022"]["rohel"]["march"]["entry"][5];
    progress(angouchaScan, 0, print, chetanScan, chetanEntry, prins, kishanScan, kishanEntry, em, poukinScan, poukinEntry, em, 0, rohelEntry, insert);
  })

  // Function to display the stats for 29 March 22
  twentynineMarch22.addEventListener("click", () => {
    let angouchaScan = datas["2022"]["angoucha"]["march"]["scan"][6];
    let chetanEntry = datas["2022"]["chetan"]["march"]["entry"][6];
    let kishanScan = datas["2022"]["kishan"]["march"]["scan"][6];
    let poukinScan = datas["2022"]["poukin"]["march"]["scan"][6];
    progress(angouchaScan, 0, em, 0, chetanEntry, em, kishanScan, 0, em, poukinScan, 0, em, 0, 0, abs);
  })

  // Function to display the stats for 30 March 22
  thirtyMarch22.addEventListener("click", () => {
    let angouchaScan = datas["2022"]["angoucha"]["march"]["scan"][7];
    let chetanEntry = datas["2022"]["chetan"]["march"]["entry"][7];
    let kishanEntry = datas["2022"]["kishan"]["march"]["entry"][7];
    let poukinScan = datas["2022"]["poukin"]["march"]["scan"][7];
    let rohelEntry = datas["2022"]["poukin"]["march"]["entry"][7];
    progress(angouchaScan, 0, em, 0, chetanEntry, em, 0, kishanEntry, em, poukinScan, 0, em, 0, rohelEntry, abs);
  })
  
  // Function to display the stats for 30 March 22
  thirtyoneMarch22.addEventListener("click", () => {
    let angouchaScan = datas["2022"]["angoucha"]["march"]["scan"][6];
    let chetanEntry = datas["2022"]["chetan"]["march"]["entry"][6];
    let kishanScan = datas["2022"]["kishan"]["march"]["scan"][6];
    let kishanEntry = datas["2022"]["kishan"]["march"]["entry"][6];
    let poukinEntry = datas["2022"]["poukin"]["march"]["entry"][6];
    let rohelEntry = datas["2022"]["poukin"]["march"]["entry"][6];
    progress(angouchaScan, 0, em, 0, chetanEntry, insert, kishanScan, kishanEntry, print, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to Trigger the Display of April 22 Data Entry Stats
  april22.addEventListener("click", () => {
    displayProgress(april22Content);
    removeActiveData();
    progress(angouchaApr22ScanTotal, angouchaApr22EntryTotal, em, chetanApr22ScanTotal, chetanApr22EntryTotal, em, kishanApr22ScanTotal, kishanApr22EntryTotal, em, poukinApr22ScanTotal, poukinApr22EntryTotal, em, rohelApr22ScanTotal, rohelApr22EntryTotal, em);
  })

  // Function to display the stats for 17 March 22
  oneApril22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][0];
    let kishanEntry = datas["2022"]["kishan"]["april"]["entry"][0];
    let poukinEntry = datas["2022"]["poukin"]["april"]["entry"][0];
    let rohelEntry = datas["2022"]["rohel"]["april"]["entry"][0];
    progress(0, 0, print, 0, chetanEntry, em, 0, kishanEntry, em, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 04 April 22
  fourApril22.addEventListener("click", () => {
    let angouchaScan = datas["2022"]["angoucha"]["april"]["scan"][1];
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][1];
    let kishanScan = datas["2022"]["kishan"]["april"]["scan"][1];
    let poukinScan = datas["2022"]["poukin"]["april"]["scan"][1];
    let rohelScan = datas["2022"]["rohel"]["april"]["scan"][1];
    progress(angouchaScan, 0, print, 0, chetanEntry, print, kishanScan, 0, em, poukinScan, 0, em, rohelScan, 0, em);
  })

  // Function to display the stats for 05 April 22
  fiveApril22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["april"]["entry"][2];
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][2];
    let kishanScan = datas["2022"]["kishan"]["april"]["scan"][2];
    let poukinScan = datas["2022"]["poukin"]["april"]["scan"][2];
    let rohelScan = datas["2022"]["rohel"]["april"]["scan"][2];
    progress(0, angouchaEntry, em, 0, chetanEntry, em, kishanScan, 0, em, poukinScan, 0, em, rohelScan, 0, em)
  })

  // Function to display the stats for 06 April 22
  sixApril22.addEventListener("click", () => {
    let angouchaScan = datas["2022"]["angoucha"]["april"]["scan"][3];
    let angouchaEntry = datas["2022"]["angoucha"]["april"]["entry"][3];
    let chetanScan = datas["2022"]["chetan"]["april"]["scan"][3];
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][3];
    let poukinScan = datas["2022"]["poukin"]["april"]["scan"][3];
    let rohelEntry = datas["2022"]["rohel"]["april"]["entry"][3];
    progress(angouchaScan, angouchaEntry, em, chetanScan, chetanEntry, insert, 0, 0, abs, poukinScan, 0, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 07 April 22
  sevenApril22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["april"]["entry"][4];
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][4];
    let kishanScan = datas["2022"]["kishan"]["april"]["scan"][4];
    let poukinScan = datas["2022"]["poukin"]["april"]["scan"][4];
    let rohelEntry = datas["2022"]["rohel"]["april"]["entry"][4];
    progress(0, angouchaEntry, em, 0, chetanEntry, em, kishanScan, 0, insert, poukinScan, 0, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 08 April 22
  eightApril22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][5];
    let kishanEntry = datas["2022"]["kishan"]["april"]["entry"][5];
    let poukinEntry = datas["2022"]["poukin"]["april"]["entry"][5];
    let rohelEntry = datas["2022"]["rohel"]["april"]["entry"][5];
    progress(0, 0, other, 0, chetanEntry, em, 0, kishanEntry, em, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 11 April 22
  elevenApril22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["april"]["entry"][6];
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][6];
    let kishanEntry = datas["2022"]["kishan"]["april"]["entry"][6];
    let poukinEntry = datas["2022"]["poukin"]["april"]["entry"][6];
    let rohelEntry = datas["2022"]["rohel"]["april"]["entry"][6]
    progress(0, angouchaEntry, em, 0, chetanEntry, em, 0, kishanEntry, print, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 12 April 22
  twelveApril22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["april"]["entry"][7];
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][7];
    let kishanScan = datas["2022"]["kishan"]["april"]["scan"][7];
    let poukinScan = datas["2022"]["poukin"]["april"]["scan"][7];
    let rohelScan = datas["2022"]["rohel"]["april"]["scan"][7];
    progress(0, angouchaEntry, em, 0, chetanEntry, print, kishanScan, 0, em, poukinScan, 0, em, rohelScan, 0, em);
  })

  // Function to display the stats for 13 April 22
  thirteenApril22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["april"]["entry"][8];
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][8];
    let kishanScan = datas["2022"]["kishan"]["april"]["scan"][8];
    let poukinScan = datas["2022"]["poukin"]["april"]["scan"][8];
    let rohelScan = datas["2022"]["rohel"]["april"]["scan"][8];
    progress(0, angouchaEntry, em, 0, chetanEntry, em, kishanScan, 0, em, poukinScan, 0, em, rohelScan, 0, em);
  })

  // Function to display the stats for 16 April 22
  sixteenApril22.addEventListener("click", () => {
    let poukinScan = datas["2022"]["poukin"]["april"]["scan"][9];
    let rohelScan = datas["2022"]["rohel"]["april"]["scan"][9];
    progress(0, 0, `${other}, ${elec}`, 0, 0, `${excel}, ${elec}`, 0, 0, abs, poukinScan, 0, elec, rohelScan, 0, elec);
  })

  // Function to display the stats for 18 April 22
  eighteenApril22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][10];
    let kishanScan = datas["2022"]["kishan"]["april"]["scan"][10];
    let poukinScan = datas["2022"]["poukin"]["april"]["scan"][10];
    let poukinEntry = datas["2022"]["poukin"]["april"]["entry"][10];
    let rohelScan = datas["2022"]["rohel"]["april"]["scan"][10];
    progress(0, 0, other, 0, chetanEntry, excel, kishanScan, 0, em, poukinScan, poukinEntry, em, rohelScan, 0, em);
  })

  // Function to display the stats for 19 April 22
  nineteenApril22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["april"]["entry"][11];
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][11];
    let kishanEntry = datas["2022"]["kishan"]["april"]["entry"][11];
    let poukinEntry = datas["2022"]["poukin"]["april"]["entry"][11];
    let rohelEntry = datas["2022"]["rohel"]["april"]["entry"][11]
    progress(0, angouchaEntry, em, 0, chetanEntry, em, 0, kishanEntry, em, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 20 April 22
  twentyApril22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["april"]["entry"][12];
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][12];
    let poukinEntry = datas["2022"]["poukin"]["april"]["entry"][12];
    progress(0, angouchaEntry, em, 0, chetanEntry, em, 0, 0, print, 0, poukinEntry, em, 0, 0, `No work done`);
  })

  // Function to display the stats for 21 April 22
  twentyoneApril22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["april"]["entry"][13];
    let kishanScan = datas["2022"]["kishan"]["april"]["scan"][13];
    let poukinScan = datas["2022"]["poukin"]["april"]["scan"][13];
    let rohelScan = datas["2022"]["rohel"]["april"]["scan"][13];
    progress(0, angouchaEntry, em, 0, 0, print, kishanScan, 0, em, poukinScan, 0, em, rohelScan, 0, em);
  })

  // Function to display the stats for 22 April 22
  twentytwoApril22.addEventListener("click", () => {
    let poukinScan = datas["2022"]["poukin"]["april"]["scan"][14];
    let rohelScan = datas["2022"]["rohel"]["april"]["scan"][14];
    progress(0, 0, make, 0, 0, `${excel} & ${make}`, 0, 0, abs, poukinScan, 0, em, rohelScan, 0, em);
  })

  // Function to display the stats for 25 April 22
  twentyfiveApril22.addEventListener("click", () => {
    let chetanScan = datas["2022"]["chetan"]["april"]["scan"][15];
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][15];
    let kishanScan = datas["2022"]["kishan"]["april"]["scan"][15];
    let poukinScan = datas["2022"]["poukin"]["april"]["scan"][15];
    let rohelScan = datas["2022"]["rohel"]["april"]["scan"][15];
    progress(0, 0, make, chetanScan, chetanEntry, `${excel}, ${make} & ${insert}`, kishanScan, 0, em, poukinScan, 0, em, rohelScan, 0, em);
  })

  // Function to display the stats for 26 April 22
  twentysixApril22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["april"]["entry"][16];
    let kishanScan = datas["2022"]["kishan"]["april"]["scan"][16];
    let poukinEntry = datas["2022"]["poukin"]["april"]["entry"][16];
    let rohelEntry = datas["2022"]["rohel"]["april"]["entry"][16]
    progress(0, angouchaEntry, make, 0, 0, `${excel}, ${make} & ${insert}`, kishanScan, 0, em, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 27 April 22
  twentysevenApril22.addEventListener("click", () => {
    progress(0, 0, elec, 0, 0, `${insert}, ${elec}`, 0, 0, `${insert}, ${elec}`, 0, 0, elec, 0, 0, elec);
  })

  // Function to display the stats for 28 April 22
  twentyeightApril22.addEventListener("click", () => {
    let chetanScan = datas["2022"]["chetan"]["april"]["scan"][17];
    let poukinEntry = datas["2022"]["poukin"]["april"]["entry"][17];
    let rohelEntry = datas["2022"]["rohel"]["april"]["entry"][17]
    progress(0, 0, abs, chetanScan, 0, `${excel}, ${make}, ${elec}`, 0, 0, abs, 0, poukinEntry, elec, 0, rohelEntry, elec);
  })

  // Function to display the stats for 29 April 22
  twentynineApril22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["april"]["entry"][18];
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][18];
    let kishanScan = datas["2022"]["kishan"]["april"]["scan"][18];
    let kishanEntry = datas["2022"]["kishan"]["april"]["entry"][18];
    let poukinEntry = datas["2022"]["poukin"]["april"]["entry"][18];
    let rohelEntry = datas["2022"]["rohel"]["april"]["entry"][18]
    progress(0, angouchaEntry, make, 0, chetanEntry, `${excel}, ${make}`, kishanScan, kishanEntry, make, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 30 April 22
  thirtyApril22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["april"]["entry"][19];
    let kishanEntry = datas["2022"]["kishan"]["april"]["entry"][19];
    progress(0, angouchaEntry, em, 0, 0, print, 0, kishanEntry, `${make}, ${insert}`, 0, 0, `No work done`, 0, 0, abs);
  })

  // Function to Trigger the Display of May 22 Data Entry Stats
  may22.addEventListener("click", () => {
    displayProgress(may22Content);
    removeActiveData();
    progress(angouchaMay22ScanTotal, angouchaMay22EntryTotal, em, chetanMay22ScanTotal, chetanMay22EntryTotal, em, kishanMay22ScanTotal, kishanMay22EntryTotal, em, poukinMay22ScanTotal, poukinMay22EntryTotal, em, rohelMay22ScanTotal, rohelMay22EntryTotal, em);
  })

}


getData();

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
  displayProgress(workProgressContent);
  dataEntry.classList.add("hide");
  removeActiveData();
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