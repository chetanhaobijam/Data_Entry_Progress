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
const threeJune22 = document.querySelector("#three-june-22");
const fourJune22 = document.querySelector("#four-june-22");
const sixJune22 = document.querySelector("#six-june-22");
const sevenJune22 = document.querySelector("#seven-june-22");
const eightJune22 = document.querySelector("#eight-june-22");
const nineJune22 = document.querySelector("#nine-june-22");

const holiday = document.querySelectorAll(".holiday");

// Table
const angouchaPages = document.querySelector("#angoucha-pages");
const angouchaEntry = document.querySelector("#angoucha-entry");
const angouchaPdf = document.querySelector("#angoucha-pdf");
const angouchaPrint = document.querySelector("#angoucha-print");
const angouchaRemarks = document.querySelector("#angoucha-remarks");
const chetanPages = document.querySelector("#chetan-pages");
const chetanEntry = document.querySelector("#chetan-entry");
const chetanPdf = document.querySelector("#chetan-pdf");
const chetanPrint = document.querySelector("#chetan-print");
const chetanRemarks = document.querySelector("#chetan-remarks");
const kishanPages = document.querySelector("#kishan-pages");
const kishanEntry = document.querySelector("#kishan-entry");
const kishanPdf = document.querySelector("#kishan-pdf");
const kishanPrint = document.querySelector("#kishan-print");
const kishanRemarks = document.querySelector("#kishan-remarks");
const poukinPages = document.querySelector("#poukin-pages");
const poukinEntry = document.querySelector("#poukin-entry");
const poukinPdf = document.querySelector("#poukin-pdf");
const poukinPrint = document.querySelector("#poukin-print");
const poukinRemarks = document.querySelector("#poukin-remarks");
const rohelPages = document.querySelector("#rohel-pages");
const rohelEntry = document.querySelector("#rohel-entry");
const rohelPdf = document.querySelector("#rohel-pdf");
const rohelPrint = document.querySelector("#rohel-print");
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
const scanStart = "Scanning Started";
const scanEnd = "Scanning Finished";
const entryStart = "Entry Started";
const entryEnd = "Entry Finished";

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

const progress = (aPages, aEntry, aPdf, aPrint, aRemarks, cPages, cEntry, cPdf, cPrint, cRemarks, kPages, kEntry, kPdf, kPrint, kRemarks, pPages, pEntry, pPdf, pPrint, pRemarks, rPages, rEntry, rPdf, rPrint, rRemarks) => {
  angouchaPages.innerText = aPages;
  angouchaEntry.innerText = aEntry;
  angouchaPdf.innerText = aPdf;
  angouchaPrint.innerText = aPrint;
  angouchaRemarks.innerText = aRemarks;
  chetanPages.innerText = cPages;
  chetanEntry.innerText = cEntry;
  chetanPdf.innerText = cPdf;
  chetanPrint.innerText = cPrint;
  chetanRemarks.innerText = cRemarks;
  kishanPages.innerText = kPages;
  kishanEntry.innerText = kEntry;
  kishanPdf.innerText = kPdf;
  kishanPrint.innerText = kPrint;
  kishanRemarks.innerText = kRemarks;
  poukinPages.innerText = pPages;
  poukinEntry.innerText = pEntry;
  poukinPdf.innerText = pPdf;
  poukinPrint.innerText = pPrint;
  poukinRemarks.innerText = pRemarks;
  rohelPages.innerText = rPages;
  rohelEntry.innerText = rEntry;
  rohelPdf.innerText = rPdf;
  rohelPrint.innerText = rPrint;
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
  const dataStream = await fetch("./json/data.json");
  const datas = await dataStream.json();
  // Old Datas
  let oldAngouchaScan = datas[2022]["angoucha"]["old"]["scan"];
  let oldAngouchaEntry = datas[2022]["angoucha"]["old"]["entry"];
  let oldChetanScan = datas[2022]["chetan"]["old"]["scan"];
  let oldChetanEntry = datas[2022]["chetan"]["old"]["entry"];
  let oldKishanScan = datas[2022]["kishan"]["old"]["scan"];
  let oldKishanEntry = datas[2022]["kishan"]["old"]["entry"];
  let oldPoukinScan = datas[2022]["poukin"]["old"]["scan"];
  let oldPoukinEntry = datas[2022]["poukin"]["old"]["entry"];
  let oldRohelScan = datas[2022]["rohel"]["old"]["scan"];
  let oldRohelEntry = datas[2022]["rohel"]["old"]["entry"];

  // March 22 Total Data
  let angouchaMar22ScanTotal = total(datas[2022]["angoucha"]["march"]["scan"]);
  let angouchaMar22EntryTotal = total(datas[2022]["angoucha"]["march"]["entry"]);
  let angouchaMar22PdfTotal = 0;
  let angouchaMar22PrintTotal = 0;
  let chetanMar22ScanTotal = total(datas[2022]["chetan"]["march"]["scan"]);
  let chetanMar22EntryTotal = total(datas[2022]["chetan"]["march"]["entry"]);
  let chetanMar22PdfTotal = 0;
  let chetanMar22PrintTotal = 0;
  let kishanMar22ScanTotal = total(datas[2022]["kishan"]["march"]["scan"]);
  let kishanMar22EntryTotal = total(datas[2022]["kishan"]["march"]["entry"]);
  let kishanMar22PdfTotal = 0;
  let kishanMar22PrintTotal = 0;
  let poukinMar22ScanTotal = total(datas[2022]["poukin"]["march"]["scan"]);
  let poukinMar22EntryTotal = total(datas[2022]["poukin"]["march"]["entry"]);
  let poukinMar22PdfTotal = 0;
  let poukinMar22PrintTotal = 0;
  let rohelMar22ScanTotal = total(datas[2022]["rohel"]["march"]["scan"]);
  let rohelMar22EntryTotal = total(datas[2022]["rohel"]["march"]["entry"]);
  let rohelMar22PdfTotal = 0;
  let rohelMar22PrintTotal = 0;

  // April 22 Total Data
  let angouchaApr22ScanTotal = total(datas[2022]["angoucha"]["april"]["scan"]);
  let angouchaApr22EntryTotal = total(datas[2022]["angoucha"]["april"]["entry"]);
  let angouchaApr22PdfTotal = 0;
  let angouchaApr22PrintTotal = 0;
  let chetanApr22ScanTotal = total(datas[2022]["chetan"]["april"]["scan"]);
  let chetanApr22EntryTotal = total(datas[2022]["chetan"]["april"]["entry"]);
  let chetanApr22PdfTotal = 0;
  let chetanApr22PrintTotal = 0;
  let kishanApr22ScanTotal = total(datas[2022]["kishan"]["april"]["scan"]);
  let kishanApr22EntryTotal = total(datas[2022]["kishan"]["april"]["entry"]);
  let kishanApr22PdfTotal = 0;
  let kishanApr22PrintTotal = 0;
  let poukinApr22ScanTotal = total(datas[2022]["poukin"]["april"]["scan"]);
  let poukinApr22EntryTotal = total(datas[2022]["poukin"]["april"]["entry"]);
  let poukinApr22PdfTotal = 0;
  let poukinApr22PrintTotal = 0;
  let rohelApr22ScanTotal = total(datas[2022]["rohel"]["april"]["scan"]);
  let rohelApr22EntryTotal = total(datas[2022]["rohel"]["april"]["entry"]);
  let rohelApr22PdfTotal = 0;
  let rohelApr22PrintTotal = 0;

  // May 22 Total Data
  let angouchaMay22ScanTotal = total(datas[2022]["angoucha"]["may"]["scan"]);
  let angouchaMay22EntryTotal = total(datas[2022]["angoucha"]["may"]["entry"]);
  let angouchaMay22PdfTotal = 0;
  let angouchaMay22PrintTotal = 0;
  let chetanMay22ScanTotal = total(datas[2022]["chetan"]["may"]["scan"]);
  let chetanMay22EntryTotal = total(datas[2022]["chetan"]["may"]["entry"]);
  let chetanMay22PdfTotal = 0;
  let chetanMay22PrintTotal = 0;
  let kishanMay22ScanTotal = total(datas[2022]["kishan"]["may"]["scan"]);
  let kishanMay22EntryTotal = total(datas[2022]["kishan"]["may"]["entry"]);
  let kishanMay22PdfTotal = 0;
  let kishanMay22PrintTotal = 0;
  let poukinMay22ScanTotal = total(datas[2022]["poukin"]["may"]["scan"]);
  let poukinMay22PdfTotal = 0;
  let poukinMay22PrintTotal = 0;
  let poukinMay22EntryTotal = total(datas[2022]["poukin"]["may"]["entry"]);
  let rohelMay22ScanTotal = total(datas[2022]["rohel"]["may"]["scan"]);
  let rohelMay22EntryTotal = total(datas[2022]["rohel"]["may"]["entry"]);
  let rohelMay22PdfTotal = 0;
  let rohelMay22PrintTotal = 0;

  // June 22 Total Data
  let angouchaJun22ScanTotal = total(datas[2022]["angoucha"]["june"]["scan"]);
  let angouchaJun22EntryTotal = total(datas[2022]["angoucha"]["june"]["entry"]);
  let angouchaJun22PdfTotal = total(datas[2022]["angoucha"]["june"]["pdf"]);
  let angouchaJun22PrintTotal = total(datas[2022]["angoucha"]["june"]["print"]);
  let chetanJun22ScanTotal = total(datas[2022]["chetan"]["june"]["scan"]);
  let chetanJun22EntryTotal = total(datas[2022]["chetan"]["june"]["entry"]);
  let chetanJun22PdfTotal = total(datas[2022]["chetan"]["june"]["pdf"]);
  let chetanJun22PrintTotal = total(datas[2022]["chetan"]["june"]["print"]);
  let kishanJun22ScanTotal = total(datas[2022]["kishan"]["june"]["scan"]);
  let kishanJun22EntryTotal = total(datas[2022]["kishan"]["june"]["entry"]);
  let kishanJun22PdfTotal = total(datas[2022]["kishan"]["june"]["pdf"]);
  let kishanJun22PrintTotal = total(datas[2022]["kishan"]["june"]["print"]);
  let poukinJun22ScanTotal = total(datas[2022]["poukin"]["june"]["scan"]);
  let poukinJun22EntryTotal = total(datas[2022]["poukin"]["june"]["entry"]);
  let poukinJun22PdfTotal = total(datas[2022]["poukin"]["june"]["pdf"]);
  let poukinJun22PrintTotal = total(datas[2022]["poukin"]["june"]["print"]);
  let rohelJun22ScanTotal = total(datas[2022]["rohel"]["june"]["scan"]);
  let rohelJun22EntryTotal = total(datas[2022]["rohel"]["june"]["entry"]);
  let rohelJun22PdfTotal = total(datas[2022]["rohel"]["june"]["pdf"]);
  let rohelJun22PrintTotal = total(datas[2022]["rohel"]["june"]["print"]);

  // Total Data
  let angouchaTotalScan = oldAngouchaScan + angouchaMar22ScanTotal + angouchaApr22ScanTotal + angouchaMay22ScanTotal  + angouchaJun22ScanTotal;
  let angouchaTotalEntry = oldAngouchaEntry + angouchaMar22EntryTotal + angouchaApr22EntryTotal + angouchaMay22EntryTotal + angouchaJun22EntryTotal;
  let angouchaTotalPdf = angouchaJun22PdfTotal;
  let angouchaTotalPrint = angouchaJun22PrintTotal;
  let chetanTotalScan = oldChetanScan + chetanMar22ScanTotal + chetanApr22ScanTotal + chetanMay22ScanTotal + chetanJun22ScanTotal;
  let chetanTotalEntry = oldChetanEntry + chetanMar22EntryTotal + chetanApr22EntryTotal + chetanMay22EntryTotal + chetanJun22EntryTotal;
  let chetanTotalPdf = chetanJun22PdfTotal;
  let chetanTotalPrint = chetanJun22PrintTotal;
  let kishanTotalScan = oldKishanScan + kishanMar22ScanTotal + kishanApr22ScanTotal + kishanMay22ScanTotal + kishanJun22ScanTotal;
  let kishanTotalEntry = oldKishanEntry + kishanMar22EntryTotal + kishanApr22EntryTotal + kishanMay22EntryTotal + kishanJun22EntryTotal;
  let kishanTotalPdf = kishanJun22PdfTotal;
  let kishanTotalPrint = kishanJun22PrintTotal;
  let poukinTotalScan = oldPoukinScan + poukinMar22ScanTotal + poukinApr22ScanTotal + poukinMay22ScanTotal + poukinJun22ScanTotal;
  let poukinTotalEntry = oldPoukinEntry + poukinMar22EntryTotal + poukinApr22EntryTotal + poukinMay22EntryTotal + poukinJun22EntryTotal;
  let poukinTotalPdf = poukinJun22PdfTotal;
  let poukinTotalPrint = poukinJun22PrintTotal;
  let rohelTotalScan = oldRohelScan + rohelMar22ScanTotal + rohelApr22ScanTotal + rohelMay22ScanTotal + rohelJun22ScanTotal;
  let rohelTotalEntry = oldRohelEntry + rohelMar22EntryTotal + rohelApr22EntryTotal + rohelMay22EntryTotal + rohelJun22EntryTotal;
  let rohelTotalPdf = rohelJun22PdfTotal;
  let rohelTotalPrint = rohelJun22PrintTotal;
  let totalScan = angouchaTotalScan + chetanTotalScan + kishanTotalScan + poukinTotalScan + rohelTotalScan;
  let totalEntry = angouchaTotalEntry + chetanTotalEntry + kishanTotalEntry + poukinTotalEntry + rohelTotalEntry;
  let totalPdf = angouchaTotalPdf + chetanTotalPdf + kishanTotalPdf + poukinTotalPdf + rohelTotalPdf;
  let totalPrint = angouchaTotalPrint + chetanTotalPrint + kishanTotalPrint + poukinTotalPrint + rohelTotalPrint;

  // Show Total Data
  totalGazetteScan.innerText = totalScan;
  totalGazetteEntry.innerText = totalEntry;


  // Function to Display the Total Data Entry Progress
  const showTotalProgress = () => {
    displayProgress(totalProgressContent);
    removeActiveData();
    progress(angouchaTotalScan, angouchaTotalEntry, angouchaTotalPdf, angouchaTotalPrint, em, chetanTotalScan, chetanTotalEntry, chetanTotalPdf, chetanTotalPrint, em, kishanTotalScan, kishanTotalEntry, kishanTotalPdf, kishanTotalPrint, em, poukinTotalScan, poukinTotalEntry, poukinTotalPdf, poukinTotalPrint, em, rohelTotalScan, rohelTotalEntry, rohelTotalPdf, rohelTotalPrint, em);
  }

  showTotalProgress();

  totalProgress.addEventListener("click", showTotalProgress);

  // Function to Trigger the Display of March 22 Data Entry Stats
  march22.addEventListener("click", () => {
    displayProgress(march22Content);
    removeActiveData();
    progress(angouchaMar22ScanTotal, angouchaMar22EntryTotal, angouchaMar22PdfTotal, angouchaMar22PrintTotal, em, chetanMar22ScanTotal, chetanMar22EntryTotal, chetanMar22PdfTotal, chetanMar22PrintTotal, em, kishanMar22ScanTotal, kishanMar22EntryTotal,  kishanMar22PdfTotal, kishanMar22PrintTotal, em, poukinMar22ScanTotal, poukinMar22EntryTotal, poukinMar22PdfTotal, poukinMar22PrintTotal, em, rohelMar22ScanTotal, rohelMar22EntryTotal, rohelMar22PdfTotal, rohelMar22PrintTotal, em);
  })

  // Function to display the stats for 17 March 22
  seventeenMarch22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["march"]["entry"][0];
    let kishanScan = datas["2022"]["kishan"]["march"]["scan"][0];
    let poukinScan = datas["2022"]["poukin"]["march"]["scan"][0];
    progress(0, 0, 0, 0, abs, 0, chetanEntry, 0, 0, "Few entries due to Software Error", kishanScan, 0, 0, 0, em, poukinScan, 0, 0, 0, em, 0, 0, 0, 0, abs);
  })

  // Function to display the stats for 23 March 22
  twentythreeMarch22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["march"]["entry"][1];
    let kishanScan = datas["2022"]["kishan"]["march"]["scan"][1];
    let poukinScan = datas["2022"]["poukin"]["march"]["scan"][1];
    progress(0, 0, 0, 0, abs, 0, chetanEntry, 0, 0, em, kishanScan, 0, 0, 0, em, poukinScan, 0, 0, 0, em, 0, 0, 0, 0, abs);
  })

  // Function to display the stats for 24 March 22
  twentyfourMarch22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["march"]["entry"][2];
    let kishanScan = datas["2022"]["kishan"]["march"]["scan"][2];
    let poukinScan = datas["2022"]["poukin"]["march"]["scan"][2];
    let rohelEntry = datas["2022"]["rohel"]["march"]["entry"][2];
    progress(0, 0, 0, 0, abs, 0, chetanEntry, 0, 0, em, kishanScan, 0, 0, 0, em, poukinScan, 0, 0, 0, em, 0, rohelEntry, 0, 0, em);
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
    let angouchaScan = datas["2022"]["angoucha"]["march"]["scan"][8];
    let chetanEntry = datas["2022"]["chetan"]["march"]["entry"][8];
    let kishanScan = datas["2022"]["kishan"]["march"]["scan"][8];
    let kishanEntry = datas["2022"]["kishan"]["march"]["entry"][8];
    let poukinEntry = datas["2022"]["poukin"]["march"]["entry"][8];
    let rohelEntry = datas["2022"]["poukin"]["march"]["entry"][8];
    progress(angouchaScan, 0, em, 0, chetanEntry, insert, kishanScan, kishanEntry, print, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to Trigger the Display of April 22 Data Entry Stats
  april22.addEventListener("click", () => {
    displayProgress(april22Content);
    removeActiveData();
    progress(angouchaApr22ScanTotal, angouchaApr22EntryTotal, angouchaApr22PdfTotal, angouchaApr22PrintTotal, em, chetanApr22ScanTotal, chetanApr22EntryTotal, chetanApr22PdfTotal, chetanApr22PrintTotal, em, kishanApr22ScanTotal, kishanApr22EntryTotal,  kishanApr22PdfTotal, kishanApr22PrintTotal, em, poukinApr22ScanTotal, poukinApr22EntryTotal, poukinApr22PdfTotal, poukinApr22PrintTotal, em, rohelApr22ScanTotal, rohelApr22EntryTotal, rohelApr22PdfTotal, rohelApr22PrintTotal, em);
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
    progress(angouchaMay22ScanTotal, angouchaMay22EntryTotal, angouchaMay22PdfTotal, angouchaMay22PrintTotal, em, chetanMay22ScanTotal, chetanMay22EntryTotal, chetanMay22PdfTotal, chetanMay22PrintTotal, em, kishanMay22ScanTotal, kishanMay22EntryTotal,  kishanMay22PdfTotal, kishanMay22PrintTotal, em, poukinMay22ScanTotal, poukinMay22EntryTotal, poukinMay22PdfTotal, poukinMay22PrintTotal, em, rohelMay22ScanTotal, rohelMay22EntryTotal, rohelMay22PdfTotal, rohelMay22PrintTotal, em);
  })

  // Function to display the stats for 02 May 22
  twoMay22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["may"]["entry"][0];
    progress(0, angouchaEntry, em, 0, 0, other, 0, 0, other, 0, 0, other, 0, 0, other);
  })

  // Function to display the stats for 04 May 22
  fourMay22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["may"]["entry"][1];
    let kishanEntry = datas["2022"]["kishan"]["may"]["entry"][1];
    progress(0, angouchaEntry, em, 0, 0, other, 0, kishanEntry, em, 0, 0, other, 0, 0, other)
  })

  // Function to display the stats for 05 May 22
  fiveMay22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["may"]["entry"][2];
    let kishanScan = datas["2022"]["kishan"]["may"]["scan"][2];
    let poukinScan = datas["2022"]["poukin"]["may"]["scan"][2];
    let rohelScan = datas["2022"]["rohel"]["may"]["scan"][2];
    progress(0, angouchaEntry, em, 0, 0, other, kishanScan, 0, em, poukinScan, 0, em, rohelScan, 0, em);
  })

  // Function to display the stats for 06 May 22
  sixMay22.addEventListener("click", () => {
    let kishanScan = datas["2022"]["kishan"]["may"]["scan"][3];
    let poukinScan = datas["2022"]["poukin"]["may"]["scan"][3];
    let rohelScan = datas["2022"]["rohel"]["may"]["scan"][3];
    progress(0, 0, make, 0, 0, `${excel} & ${make}`, kishanScan, 0, em, poukinScan, 0, em, rohelScan, 0, em);
  })

  // Function to display the stats for 07 May 22
  sevenMay22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["may"]["entry"][4];
    let kishanScan = datas["2022"]["kishan"]["may"]["scan"][4];
    let poukinScan = datas["2022"]["poukin"]["may"]["scan"][4];
    let rohelScan = datas["2022"]["rohel"]["may"]["scan"][4];
    progress(0, 0, make, 0, chetanEntry, `${excel} & ${make}`, kishanScan, 0, make, poukinScan, 0, em, rohelScan, 0, em);
  })

  // Function to display the stats for 09 May 22
  nineMay22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["may"]["entry"][5];
    let poukinScan = datas["2022"]["poukin"]["may"]["scan"][5];
    let rohelScan = datas["2022"]["rohel"]["may"]["scan"][5];
    let rohelEntry = datas["2022"]["rohel"]["may"]["entry"][5];
    progress(0, angouchaEntry, make, 0, 0, `${excel} & ${make}`, 0, 0, `${excel} & ${make}`, poukinScan, 0, em, rohelScan, rohelEntry, em);
  })

  // Function to display the stats for 10 May 22
  tenMay22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["may"]["entry"][6];
    let chetanEntry = datas["2022"]["chetan"]["may"]["entry"][6];
    let kishanEntry = datas["2022"]["kishan"]["may"]["entry"][6];
    let poukinEntry = datas["2022"]["poukin"]["may"]["entry"][6];
    let rohelEntry = datas["2022"]["rohel"]["may"]["entry"][6];
    progress(0, angouchaEntry, em, 0, chetanEntry, make, 0, kishanEntry, make, 0, poukinEntry, em, 0, rohelEntry, em)
  })

  // Function to display the stats for 11 May 22
  elevenMay22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["may"]["entry"][7];
    let chetanEntry = datas["2022"]["chetan"]["may"]["entry"][7];
    let kishanEntry = datas["2022"]["kishan"]["may"]["entry"][7];
    let poukinEntry = datas["2022"]["poukin"]["may"]["entry"][7];
    let rohelEntry = datas["2022"]["rohel"]["may"]["entry"][7];
    progress(0, angouchaEntry, em, 0, chetanEntry, print, 0, kishanEntry, em, 0, poukinEntry, em, 0, rohelEntry, em)
  })

  // Function to display the stats for 12 May 22
  twelveMay22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["may"]["entry"][8];
    let chetanEntry = datas["2022"]["chetan"]["may"]["entry"][8];
    let kishanEntry = datas["2022"]["kishan"]["may"]["entry"][8];
    let poukinEntry = datas["2022"]["poukin"]["may"]["entry"][8];
    let rohelEntry = datas["2022"]["rohel"]["may"]["entry"][8];
    progress(0, angouchaEntry, em, 0, chetanEntry, em, 0, kishanEntry, em, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 13 May 22
  thirteenMay22.addEventListener("click", () => {
    let kishanScan = datas["2022"]["kishan"]["may"]["scan"][9];
    let poukinScan = datas["2022"]["poukin"]["may"]["scan"][9];
    let rohelScan = datas["2022"]["rohel"]["may"]["scan"][9];
    progress(0, 0, other, 0, 0, print, kishanScan, 0, em, poukinScan, 0, em, rohelScan, 0, em)
  })

  // Function to display the stats for 16 May 22
  sixteenMay22.addEventListener("click", () => {
    let kishanScan = datas["2022"]["kishan"]["may"]["scan"][10];
    let poukinScan = datas["2022"]["poukin"]["may"]["scan"][10];
    let rohelScan = datas["2022"]["rohel"]["may"]["scan"][10];
    progress(0, 0, make, 0, 0, `${excel}, ${prins}`, kishanScan, 0, em, poukinScan, 0, em, rohelScan, 0, em);
  })

  // Function to display the stats for 17 May 22
  seventeenMay22.addEventListener("click", () => {
    let poukinScan = datas["2022"]["poukin"]["may"]["scan"][11];
    progress(0, 0, make, 0, 0, abs, 0, 0, other, poukinScan, 0, elec, 0, 0, other);
  })

  // Function to display the stats for 18 May 22
  eighteenMay22.addEventListener("click", () => {
    let chetanScan = datas["2022"]["chetan"]["may"]["scan"][12];
    let chetanEntry = datas["2022"]["chetan"]["may"]["entry"][12];
    let kishanScan = datas["2022"]["kishan"]["may"]["scan"][12];
    let poukinScan = datas["2022"]["poukin"]["may"]["scan"][12];
    let rohelScan = datas["2022"]["rohel"]["may"]["scan"][12];
    progress(0, 0, make, chetanScan, chetanEntry, `${excel}, ${prins}`, kishanScan, 0, scanEnd, poukinScan, 0, em, rohelScan, 0, em);
  })

  // Function to display the stats for 19 May 22
  nineteenMay22.addEventListener("click", () => {
    let poukinScan = datas["2022"]["poukin"]["may"]["scan"][13];
    let rohelScan = datas["2022"]["rohel"]["may"]["scan"][13];
    progress(0, 0, make, 0, 0, `${excel}, ${make}`, 0, 0, abs, poukinScan, 0, scanEnd, rohelScan, 0, em);
  })

  // Function to display the stats for 20 May 22
  twentyMay22.addEventListener("click", () => {
    let rohelScan = datas["2022"]["rohel"]["may"]["scan"][14];
    progress(0, 0, make, 0, 0, `${excel}, ${make}`, 0, 0, make, 0, 0, abs, rohelScan, 0, em);
  })

  // Function to display the stats for 21 May 22
  twentyOneMay22.addEventListener("click", () => {
    let rohelScan = datas["2022"]["rohel"]["may"]["scan"][15];
    progress(0, 0, make, 0, 0, `${excel}, ${make}`, 0, 0, make, 0, 0, abs, rohelScan, 0, scanEnd);
  })

  // Function to display the stats for 23 May 22
  twentyThreeMay22.addEventListener("click", () => {
    let poukinEntry = datas["2022"]["poukin"]["may"]["entry"][16];
    let rohelEntry = datas["2022"]["rohel"]["may"]["entry"][16];
    progress(0, 0, other, 0, 0, `${excel}, ${make} & ${print}`, 0, 0, make, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 24 May 22
  twentyFourMay22.addEventListener("click", () => {
    let poukinEntry = datas["2022"]["poukin"]["may"]["entry"][17];
    let rohelEntry = datas["2022"]["rohel"]["may"]["entry"][17];
    progress(0, 0, other, 0, 0, `${make}, ${prins}`, 0, 0, make, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 25 May 22
  twentyFiveMay22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["may"]["entry"][18];
    let poukinEntry = datas["2022"]["poukin"]["may"]["entry"][18];
    let rohelEntry = datas["2022"]["rohel"]["may"]["entry"][18];
    progress(0, 0, abs, 0, chetanEntry, `${make} & ${insert}`, 0, 0, make, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 26 May 22
  twentySixMay22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["may"]["entry"][19];
    let kishanEntry = datas["2022"]["kishan"]["may"]["entry"][19];
    let poukinEntry = datas["2022"]["poukin"]["may"]["entry"][19];
    let rohelEntry = datas["2022"]["rohel"]["may"]["entry"][19];
    progress(0, 0, other, 0, chetanEntry, `${print}`, 0, kishanEntry, em, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 27 May 22
  twentySevenMay22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["may"]["entry"][20];
    let kishanEntry = datas["2022"]["kishan"]["may"]["entry"][20];
    let poukinEntry = datas["2022"]["poukin"]["may"]["entry"][20];
    let rohelEntry = datas["2022"]["rohel"]["may"]["entry"][20];
    progress(0, 0, other, 0, chetanEntry, other, 0, kishanEntry, other, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 28 May 22
  twentyEightMay22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["may"]["entry"][21];
    let kishanEntry = datas["2022"]["kishan"]["may"]["entry"][21];
    let poukinEntry = datas["2022"]["poukin"]["may"]["entry"][21];
    let rohelEntry = datas["2022"]["rohel"]["may"]["entry"][21];
    progress(0, 0, abs, 0, chetanEntry, elec, 0, kishanEntry, elec, 0, poukinEntry, elec, 0, rohelEntry, elec);
  })

  // Function to display the stats for 30 May 22
  thirtyMay22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["may"]["entry"][22];
    let kishanEntry = datas["2022"]["kishan"]["may"]["entry"][22];
    let poukinEntry = datas["2022"]["poukin"]["may"]["entry"][22];
    let rohelEntry = datas["2022"]["rohel"]["may"]["entry"][22];
    progress(0, 0, other, 0, chetanEntry, entryEnd, 0, kishanEntry, `IDs work, Entry Finished`, 0, poukinEntry, entryEnd, 0, rohelEntry, entryEnd);
  })

  // Function to display the stats for 31 May 22
  thirtyOneMay22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["may"]["entry"][23];
    let kishanScan = datas["2022"]["kishan"]["may"]["scan"][23];
    let poukinScan = datas["2022"]["poukin"]["may"]["scan"][23];
    let rohelScan = datas["2022"]["rohel"]["may"]["scan"][23];
    progress(0, 0, other, 0, chetanEntry, `${print} & IDs Work`, kishanScan, 0, `IDs work, ${scanStart}`, poukinScan, 0, `${scanStart}`, rohelScan, 0, `${scanStart}`);
  })

  // Function to Trigger the Display of June 22 Data Entry Stats
  june22.addEventListener("click", () => {
    displayProgress(june22Content);
    removeActiveData();
    progress(angouchaJun22ScanTotal, angouchaJun22EntryTotal, angouchaJun22PdfTotal, angouchaJun22PrintTotal, em, chetanJun22ScanTotal, chetanJun22EntryTotal, chetanJun22PdfTotal, chetanJun22PrintTotal, em, kishanJun22ScanTotal, kishanJun22EntryTotal,  kishanJun22PdfTotal, kishanJun22PrintTotal, em, poukinJun22ScanTotal, poukinJun22EntryTotal, poukinJun22PdfTotal, poukinJun22PrintTotal, em, rohelJun22ScanTotal, rohelJun22EntryTotal, rohelJun22PdfTotal, rohelJun22PrintTotal, em);
  })

  // Function to display the stats for 01 June 22
  oneJune22.addEventListener("click", () => {
    let kishanScan = datas["2022"]["kishan"]["june"]["scan"][0];
    let poukinScan = datas["2022"]["poukin"]["june"]["scan"][0];
    let rohelScan = datas["2022"]["rohel"]["june"]["scan"][0];
    progress(0, 0, 0, 0, other, 0, 0, 0, 0, `${print} & ${make}`, kishanScan, 0, 0, 0, em, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 02 June 22
  twoJune22.addEventListener("click", () => {
    let kishanScan = datas["2022"]["kishan"]["june"]["scan"][1];
    let poukinScan = datas["2022"]["poukin"]["june"]["scan"][1];
    let rohelScan = datas["2022"]["rohel"]["june"]["scan"][1];
    progress(0, 0, 0, 0, other, 0, 0, 0, 0, `${excel} & ${print}`, kishanScan, 0, 0, 0, em, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 03 June 22
  threeJune22.addEventListener("click", () => {
    let kishanScan = datas["2022"]["kishan"]["june"]["scan"][2];
    let poukinScan = datas["2022"]["poukin"]["june"]["scan"][2];
    let rohelScan = datas["2022"]["rohel"]["june"]["scan"][2];
    progress(0, 0, 0, 0, other, 0, 0, 0, 0, `${excel}, ${print} & ${make}`, kishanScan, 0, 0, 0, em, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 04 June 22
  fourJune22.addEventListener("click", () => {
    let poukinScan = datas["2022"]["poukin"]["june"]["scan"][3];
    let rohelScan = datas["2022"]["rohel"]["june"]["scan"][3];
    progress(0, 0, 0, 0, abs, 0, 0, 0, 0, `${excel}, ${print} & Gazette Title Correction`, 0, 0, 0, 0, `Gazette Title Correction`, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 06 June 22
  sixJune22.addEventListener("click", () => {
    let kishanScan = datas["2022"]["kishan"]["june"]["scan"][4];
    let poukinScan = datas["2022"]["poukin"]["june"]["scan"][4];
    let rohelScan = datas["2022"]["rohel"]["june"]["scan"][4];
    progress(0, 0, 0, 0, other, 0, 0, 0, 0, `${excel} & ${make}`, kishanScan, 0, 0, 0, `${make}, Scanning Completed`, poukinScan, 0, 0, 0, scanEnd, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 07 June 22
  sevenJune22.addEventListener("click", () => {
    let poukinEntry = datas["2022"]["poukin"]["june"]["entry"][5];
    let rohelScan = datas["2022"]["rohel"]["june"]["scan"][5];
    progress(0, 0, 0, 0, other, 0, 0, 0, 0, `${excel} & ${make}`, 0, 0, 0, 0, make, 0, poukinEntry, 0, 0, entryStart, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 08 June 22
  eightJune22.addEventListener("click", () => {
    let poukinEntry = datas["2022"]["poukin"]["june"]["entry"][6];
    let rohelScan = datas["2022"]["rohel"]["june"]["scan"][6];
    let rohelEntry = datas["2022"]["rohel"]["june"]["entry"][6];
    progress(0, 0, 0, 0, other, 0, 0, 0, 0, `${excel} & ${make}`, 0, 0, 0, 0, make, 0, poukinEntry, 0, 0, em, rohelScan, rohelEntry, 0, 0, `${scanEnd}, ${entryStart}`);
  })

  // Function to display the stats for 08 June 22
  nineJune22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["june"]["pdf"][7];
    let chetanPdf = datas["2022"]["chetan"]["june"]["pdf"][7];
    let kishanPdf = datas["2022"]["kishan"]["june"]["pdf"][7];
    let poukinEntry = datas["2022"]["poukin"]["june"]["entry"][7];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, chetanPdf, 0, em, 0, 0, kishanPdf, 0, em, 0, poukinEntry, 0, 0, em, 0, 0, 0, 0, abs);
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
  angouchaPdf.innerText = 0;
  angouchaPrint.innerText = 0;
  angouchaRemarks.innerText = "Office Holiday";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 0;
  chetanPdf.innerText = 0;
  chetanPrint.innerText = 0;
  chetanRemarks.innerText = "Office Holiday";
  kishanPages.innerText = 0;
  kishanEntry.innerText = 0;
  kishanPdf.innerText = 0;
  kishanPrint.innerText = 0;
  kishanRemarks.innerText = "Office Holiday";
  poukinPages.innerText = 0;
  poukinEntry.innerText = 0;
  poukinPdf.innerText = 0;
  poukinPrint.innerText = 0;
  poukinRemarks.innerText = "Office Holiday";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 0;
  rohelPdf.innerText = 0;
  rohelPrint.innerText = 0;
  rohelRemarks.innerText = "Office Holiday";
  })
})