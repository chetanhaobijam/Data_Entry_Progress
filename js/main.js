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
const tenJune22 = document.querySelector("#ten-june-22");
const thirteenJune22 = document.querySelector("#thirteen-june-22");
const fourteenJune22 = document.querySelector("#fourteen-june-22");
const fifteenJune22 = document.querySelector("#fifteen-june-22");
const sixteenJune22 = document.querySelector("#sixteen-june-22");
const seventeenJune22 = document.querySelector("#seventeen-june-22");
const twentyJune22 = document.querySelector("#twenty-june-22");
const twentyOneJune22 = document.querySelector("#twentyone-june-22");
const twentyTwoJune22 = document.querySelector("#twentytwo-june-22");
const twentyThreeJune22 = document.querySelector("#twentythree-june-22");
const twentyFourJune22 = document.querySelector("#twentyfour-june-22");
const twentyFiveJune22 = document.querySelector("#twentyfive-june-22");
const twentySevenJune22 = document.querySelector("#twentyseven-june-22");
const twentyEightJune22 = document.querySelector("#twentyeight-june-22");
const twentyNineJune22 = document.querySelector("#twentynine-june-22");
const thirtyJune22 = document.querySelector("#thirty-june-22");

// July Dates
const july22 = document.querySelector("#july-22");
const july22Content = document.querySelector("#july-22-content");
const twoJuly22 = document.querySelector("#two-july-22");
const fourJuly22 = document.querySelector("#four-july-22");
const fiveJuly22 = document.querySelector("#five-july-22");
const sixJuly22 = document.querySelector("#six-july-22");
const sevenJuly22 = document.querySelector("#seven-july-22");
const eightJuly22 = document.querySelector("#eight-july-22");
const elevenJuly22 = document.querySelector("#eleven-july-22");
const twelveJuly22 = document.querySelector("#twelve-july-22");
const thirteenJuly22 = document.querySelector("#thirteen-july-22");
const fourteenJuly22 = document.querySelector("#fourteen-july-22");
const fifteenJuly22 = document.querySelector("#fifteen-july-22");
const sixteenJuly22 = document.querySelector("#sixteen-july-22");
const seventeenJuly22 = document.querySelector("#seventeen-july-22");
const eighteenJuly22 = document.querySelector("#eighteen-july-22");
const nineteenJuly22 = document.querySelector("#nineteen-july-22");
const twentyJuly22 = document.querySelector("#twenty-july-22");
const twentyOneJuly22 = document.querySelector("#twentyone-july-22");
const twentyTwoJuly22 = document.querySelector("#twentytwo-july-22");
const twentyThreeJuly22 = document.querySelector("#twentythree-july-22");
const twentyFiveJuly22 = document.querySelector("#twentyfive-july-22");
const twentySixJuly22 = document.querySelector("#twentysix-july-22");
const twentySevenJuly22 = document.querySelector("#twentyseven-july-22");
const twentyEightJuly22 = document.querySelector("#twentyeight-july-22");
const twentyNineJuly22 = document.querySelector("#twentynine-july-22");
const thirtyJuly22 = document.querySelector("#thirty-july-22");

// August Dates
const august22 = document.querySelector("#august-22");
const august22Content = document.querySelector("#august-22-content");
const oneAugust22 = document.querySelector("#one-august-22");
const twoAugust22 = document.querySelector("#two-august-22");
const threeAugust22 = document.querySelector("#three-august-22");
const fourAugust22 = document.querySelector("#four-august-22");
const fiveAugust22 = document.querySelector("#five-august-22");
const sixAugust22 = document.querySelector("#six-august-22");
const eightAugust22 = document.querySelector("#eight-august-22");
const nineAugust22 = document.querySelector("#nine-august-22");
const tenAugust22 = document.querySelector("#ten-august-22");
const elevenAugust22 = document.querySelector("#eleven-august-22");
const twelveAugust22 = document.querySelector("#twelve-august-22");
const sixteenAugust22 = document.querySelector("#sixteen-august-22");
const seventeenAugust22 = document.querySelector("#seventeen-august-22");
const eighteenAugust22 = document.querySelector("#eighteen-august-22");
const twentyTwoAugust22 = document.querySelector("#twentytwo-august-22");
const twentyThreeAugust22 = document.querySelector("#twentythree-august-22");
const thirtyOneAugust22 = document.querySelector("#thirtyone-august-22");

// September Dates
const september22 = document.querySelector("#september-22");
const september22Content = document.querySelector("#september-22-content");
const oneSeptember22 = document.querySelector("#one-september-22");
const twoSeptember22 = document.querySelector("#two-september-22");
const threeSeptember22 = document.querySelector("#three-september-22");
const fiveSeptember22 = document.querySelector("#five-september-22");
const sixSeptember22 = document.querySelector("#six-september-22");

const holiday = document.querySelectorAll(".holiday");
const otherWork = document.querySelectorAll(".other-work");

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
const over = "Overtime Work";
const nwd = "No work done";

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
  aside.classList.toggle("left");
  mainContent.classList.toggle("shrink-left-margin");
})

const oldProgress = (aPages, aEntry, aRemarks, cPages, cEntry, cRemarks, kPages, kEntry, kRemarks, pPages, pEntry, pRemarks, rPages, rEntry, rRemarks) => {
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
  currentWork.classList.add("hide");
  totalProgressContent.classList.add("hide");
  workProgressContent.classList.add("hide");
  march22Content.classList.add("hide");
  april22Content.classList.add("hide");
  may22Content.classList.add("hide");
  june22Content.classList.add("hide");
  july22Content.classList.add("hide");
  august22Content.classList.add("hide");
  september22Content.classList.add("hide");
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

  // July 22 Total Data
  let angouchaJul22ScanTotal = total(datas[2022]["angoucha"]["july"]["scan"]);
  let angouchaJul22EntryTotal = total(datas[2022]["angoucha"]["july"]["entry"]);
  let angouchaJul22PdfTotal = total(datas[2022]["angoucha"]["july"]["pdf"]);
  let angouchaJul22PrintTotal = total(datas[2022]["angoucha"]["july"]["print"]);
  let chetanJul22ScanTotal = total(datas[2022]["chetan"]["july"]["scan"]);
  let chetanJul22EntryTotal = total(datas[2022]["chetan"]["july"]["entry"]);
  let chetanJul22PdfTotal = total(datas[2022]["chetan"]["july"]["pdf"]);
  let chetanJul22PrintTotal = total(datas[2022]["chetan"]["july"]["print"]);
  let kishanJul22ScanTotal = total(datas[2022]["kishan"]["july"]["scan"]);
  let kishanJul22EntryTotal = total(datas[2022]["kishan"]["july"]["entry"]);
  let kishanJul22PdfTotal = total(datas[2022]["kishan"]["july"]["pdf"]);
  let kishanJul22PrintTotal = total(datas[2022]["kishan"]["july"]["print"]);
  let poukinJul22ScanTotal = total(datas[2022]["poukin"]["july"]["scan"]);
  let poukinJul22EntryTotal = total(datas[2022]["poukin"]["july"]["entry"]);
  let poukinJul22PdfTotal = total(datas[2022]["poukin"]["july"]["pdf"]);
  let poukinJul22PrintTotal = total(datas[2022]["poukin"]["july"]["print"]);
  let rohelJul22ScanTotal = total(datas[2022]["rohel"]["july"]["scan"]);
  let rohelJul22EntryTotal = total(datas[2022]["rohel"]["july"]["entry"]);
  let rohelJul22PdfTotal = total(datas[2022]["rohel"]["july"]["pdf"]);
  let rohelJul22PrintTotal = total(datas[2022]["rohel"]["july"]["print"]);

  // August 22 Total Data
  let angouchaAug22ScanTotal = total(datas[2022]["angoucha"]["august"]["scan"]);
  let angouchaAug22EntryTotal = total(datas[2022]["angoucha"]["august"]["entry"]);
  let angouchaAug22PdfTotal = total(datas[2022]["angoucha"]["august"]["pdf"]);
  let angouchaAug22PrintTotal = total(datas[2022]["angoucha"]["august"]["print"]);
  let chetanAug22ScanTotal = total(datas[2022]["chetan"]["august"]["scan"]);
  let chetanAug22EntryTotal = total(datas[2022]["chetan"]["august"]["entry"]);
  let chetanAug22PdfTotal = total(datas[2022]["chetan"]["august"]["pdf"]);
  let chetanAug22PrintTotal = total(datas[2022]["chetan"]["august"]["print"]);
  let kishanAug22ScanTotal = total(datas[2022]["kishan"]["august"]["scan"]);
  let kishanAug22EntryTotal = total(datas[2022]["kishan"]["august"]["entry"]);
  let kishanAug22PdfTotal = total(datas[2022]["kishan"]["august"]["pdf"]);
  let kishanAug22PrintTotal = total(datas[2022]["kishan"]["august"]["print"]);
  let poukinAug22ScanTotal = total(datas[2022]["poukin"]["august"]["scan"]);
  let poukinAug22EntryTotal = total(datas[2022]["poukin"]["august"]["entry"]);
  let poukinAug22PdfTotal = total(datas[2022]["poukin"]["august"]["pdf"]);
  let poukinAug22PrintTotal = total(datas[2022]["poukin"]["august"]["print"]);
  let rohelAug22ScanTotal = total(datas[2022]["rohel"]["august"]["scan"]);
  let rohelAug22EntryTotal = total(datas[2022]["rohel"]["august"]["entry"]);
  let rohelAug22PdfTotal = total(datas[2022]["rohel"]["august"]["pdf"]);
  let rohelAug22PrintTotal = total(datas[2022]["rohel"]["august"]["print"]);

  // September 22 Total Data
  let angouchaSep22ScanTotal = total(datas[2022]["angoucha"]["september"]["scan"]);
  let angouchaSep22EntryTotal = total(datas[2022]["angoucha"]["september"]["entry"]);
  let angouchaSep22PdfTotal = total(datas[2022]["angoucha"]["september"]["pdf"]);
  let angouchaSep22PrintTotal = total(datas[2022]["angoucha"]["september"]["print"]);
  let chetanSep22ScanTotal = total(datas[2022]["chetan"]["september"]["scan"]);
  let chetanSep22EntryTotal = total(datas[2022]["chetan"]["september"]["entry"]);
  let chetanSep22PdfTotal = total(datas[2022]["chetan"]["september"]["pdf"]);
  let chetanSep22PrintTotal = total(datas[2022]["chetan"]["september"]["print"]);
  let kishanSep22ScanTotal = total(datas[2022]["kishan"]["september"]["scan"]);
  let kishanSep22EntryTotal = total(datas[2022]["kishan"]["september"]["entry"]);
  let kishanSep22PdfTotal = total(datas[2022]["kishan"]["september"]["pdf"]);
  let kishanSep22PrintTotal = total(datas[2022]["kishan"]["september"]["print"]);
  let poukinSep22ScanTotal = total(datas[2022]["poukin"]["september"]["scan"]);
  let poukinSep22EntryTotal = total(datas[2022]["poukin"]["september"]["entry"]);
  let poukinSep22PdfTotal = total(datas[2022]["poukin"]["september"]["pdf"]);
  let poukinSep22PrintTotal = total(datas[2022]["poukin"]["september"]["print"]);
  let rohelSep22ScanTotal = total(datas[2022]["rohel"]["september"]["scan"]);
  let rohelSep22EntryTotal = total(datas[2022]["rohel"]["september"]["entry"]);
  let rohelSep22PdfTotal = total(datas[2022]["rohel"]["september"]["pdf"]);
  let rohelSep22PrintTotal = total(datas[2022]["rohel"]["september"]["print"]);

  // Total Data
  let angouchaTotalScan = oldAngouchaScan + angouchaMar22ScanTotal + angouchaApr22ScanTotal + angouchaMay22ScanTotal  + angouchaJun22ScanTotal + angouchaJul22ScanTotal + angouchaAug22ScanTotal + angouchaSep22ScanTotal;
  let angouchaTotalEntry = oldAngouchaEntry + angouchaMar22EntryTotal + angouchaApr22EntryTotal + angouchaMay22EntryTotal + angouchaJun22EntryTotal + angouchaJul22EntryTotal + angouchaAug22EntryTotal + angouchaSep22EntryTotal;
  let angouchaTotalPdf = angouchaJun22PdfTotal + angouchaJul22PdfTotal + angouchaAug22PdfTotal + angouchaSep22PdfTotal;
  let angouchaTotalPrint = angouchaJun22PrintTotal + angouchaJul22PrintTotal + angouchaAug22PrintTotal + angouchaSep22PrintTotal;
  let chetanTotalScan = oldChetanScan + chetanMar22ScanTotal + chetanApr22ScanTotal + chetanMay22ScanTotal + chetanJun22ScanTotal + chetanJul22ScanTotal + chetanAug22ScanTotal + chetanSep22ScanTotal;
  let chetanTotalEntry = oldChetanEntry + chetanMar22EntryTotal + chetanApr22EntryTotal + chetanMay22EntryTotal + chetanJun22EntryTotal + chetanJul22EntryTotal + chetanAug22EntryTotal + chetanSep22EntryTotal;
  let chetanTotalPdf = chetanJun22PdfTotal + chetanJul22PdfTotal + chetanAug22PdfTotal + chetanSep22PdfTotal;
  let chetanTotalPrint = chetanJun22PrintTotal + chetanJul22PrintTotal + chetanAug22PrintTotal + chetanSep22PrintTotal;
  let kishanTotalScan = oldKishanScan + kishanMar22ScanTotal + kishanApr22ScanTotal + kishanMay22ScanTotal + kishanJun22ScanTotal + kishanJul22ScanTotal + kishanAug22ScanTotal + kishanSep22ScanTotal;
  let kishanTotalEntry = oldKishanEntry + kishanMar22EntryTotal + kishanApr22EntryTotal + kishanMay22EntryTotal + kishanJun22EntryTotal + kishanJul22EntryTotal + kishanAug22EntryTotal + kishanSep22EntryTotal;
  let kishanTotalPdf = kishanJun22PdfTotal + kishanJul22PdfTotal + kishanAug22PdfTotal + kishanSep22PdfTotal;
  let kishanTotalPrint = kishanJun22PrintTotal + kishanJul22PrintTotal + kishanAug22PrintTotal + kishanSep22PrintTotal;
  let poukinTotalScan = oldPoukinScan + poukinMar22ScanTotal + poukinApr22ScanTotal + poukinMay22ScanTotal + poukinJun22ScanTotal + poukinJul22ScanTotal + poukinAug22ScanTotal + poukinSep22ScanTotal;
  let poukinTotalEntry = oldPoukinEntry + poukinMar22EntryTotal + poukinApr22EntryTotal + poukinMay22EntryTotal + poukinJun22EntryTotal + poukinJul22EntryTotal + poukinAug22EntryTotal + poukinSep22EntryTotal;
  let poukinTotalPdf = poukinJun22PdfTotal + poukinJul22PdfTotal + poukinAug22PdfTotal + poukinSep22PdfTotal;
  let poukinTotalPrint = poukinJun22PrintTotal +  + poukinJul22PrintTotal + poukinAug22PrintTotal + poukinSep22PrintTotal;
  let rohelTotalScan = oldRohelScan + rohelMar22ScanTotal + rohelApr22ScanTotal + rohelMay22ScanTotal + rohelJun22ScanTotal + rohelJul22ScanTotal + rohelAug22ScanTotal + rohelSep22ScanTotal;
  let rohelTotalEntry = oldRohelEntry + rohelMar22EntryTotal + rohelApr22EntryTotal + rohelMay22EntryTotal + rohelJun22EntryTotal + rohelJul22EntryTotal + rohelAug22EntryTotal + rohelSep22EntryTotal;
  let rohelTotalPdf = rohelJun22PdfTotal + rohelJul22PdfTotal + rohelAug22PdfTotal + rohelSep22PdfTotal;
  let rohelTotalPrint = rohelJun22PrintTotal + rohelJul22PrintTotal + rohelAug22PrintTotal + rohelSep22PrintTotal;
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
    currentWork.classList.remove("hide");
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
    progress(0, 0, 0, 0, abs, 0, chetanEntry, 0, 0, em, kishanScan, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })
  
  // Function to display the stats for 26 March 22
  twentysixMarch22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["march"]["entry"][4];
    let kishanScan = datas["2022"]["kishan"]["march"]["scan"][4];
    let kishanEntry = datas["2022"]["kishan"]["march"]["entry"][4];
    let poukinScan = datas["2022"]["poukin"]["march"]["scan"][4];
    let rohelScan = datas["2022"]["rohel"]["march"]["scan"][4];
    progress(0, 0, 0, 0, abs, 0, chetanEntry, 0, 0, prins, kishanScan, kishanEntry, 0, 0, em, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
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
    progress(angouchaScan, 0, 0, 0, print, chetanScan, chetanEntry, 0, 0, prins, kishanScan, kishanEntry, 0, 0, em, poukinScan, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, insert);
  })

  // Function to display the stats for 29 March 22
  twentynineMarch22.addEventListener("click", () => {
    let angouchaScan = datas["2022"]["angoucha"]["march"]["scan"][6];
    let chetanEntry = datas["2022"]["chetan"]["march"]["entry"][6];
    let kishanScan = datas["2022"]["kishan"]["march"]["scan"][6];
    let poukinScan = datas["2022"]["poukin"]["march"]["scan"][6];
    progress(angouchaScan, 0, 0, 0, em, 0, chetanEntry, 0, 0, em, kishanScan, 0, 0, 0, em, poukinScan, 0, 0, 0, em, 0, 0, 0, 0, abs);
  })

  // Function to display the stats for 30 March 22
  thirtyMarch22.addEventListener("click", () => {
    let angouchaScan = datas["2022"]["angoucha"]["march"]["scan"][7];
    let chetanEntry = datas["2022"]["chetan"]["march"]["entry"][7];
    let kishanEntry = datas["2022"]["kishan"]["march"]["entry"][7];
    let poukinScan = datas["2022"]["poukin"]["march"]["scan"][7];
    let rohelEntry = datas["2022"]["poukin"]["march"]["entry"][7];
    progress(angouchaScan, 0, 0, 0, em, 0, chetanEntry, 0, 0, em, 0, kishanEntry, 0, 0, em, poukinScan, 0, 0, 0, em, 0, rohelEntry, 0, 0, abs);
  })
  
  // Function to display the stats for 30 March 22
  thirtyoneMarch22.addEventListener("click", () => {
    let angouchaScan = datas["2022"]["angoucha"]["march"]["scan"][8];
    let chetanEntry = datas["2022"]["chetan"]["march"]["entry"][8];
    let kishanScan = datas["2022"]["kishan"]["march"]["scan"][8];
    let kishanEntry = datas["2022"]["kishan"]["march"]["entry"][8];
    let poukinEntry = datas["2022"]["poukin"]["march"]["entry"][8];
    let rohelEntry = datas["2022"]["poukin"]["march"]["entry"][8];
    progress(angouchaScan, 0, 0, 0, em, 0, chetanEntry, 0, 0, insert, kishanScan, kishanEntry, 0, 0, print, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
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
    oldProgress(0, 0, print, 0, chetanEntry, em, 0, kishanEntry, em, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 04 April 22
  fourApril22.addEventListener("click", () => {
    let angouchaScan = datas["2022"]["angoucha"]["april"]["scan"][1];
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][1];
    let kishanScan = datas["2022"]["kishan"]["april"]["scan"][1];
    let poukinScan = datas["2022"]["poukin"]["april"]["scan"][1];
    let rohelScan = datas["2022"]["rohel"]["april"]["scan"][1];
    oldProgress(angouchaScan, 0, print, 0, chetanEntry, print, kishanScan, 0, em, poukinScan, 0, em, rohelScan, 0, em);
  })

  // Function to display the stats for 05 April 22
  fiveApril22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["april"]["entry"][2];
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][2];
    let kishanScan = datas["2022"]["kishan"]["april"]["scan"][2];
    let poukinScan = datas["2022"]["poukin"]["april"]["scan"][2];
    let rohelScan = datas["2022"]["rohel"]["april"]["scan"][2];
    oldProgress(0, angouchaEntry, em, 0, chetanEntry, em, kishanScan, 0, em, poukinScan, 0, em, rohelScan, 0, em)
  })

  // Function to display the stats for 06 April 22
  sixApril22.addEventListener("click", () => {
    let angouchaScan = datas["2022"]["angoucha"]["april"]["scan"][3];
    let angouchaEntry = datas["2022"]["angoucha"]["april"]["entry"][3];
    let chetanScan = datas["2022"]["chetan"]["april"]["scan"][3];
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][3];
    let poukinScan = datas["2022"]["poukin"]["april"]["scan"][3];
    let rohelEntry = datas["2022"]["rohel"]["april"]["entry"][3];
    oldProgress(angouchaScan, angouchaEntry, em, chetanScan, chetanEntry, insert, 0, 0, abs, poukinScan, 0, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 07 April 22
  sevenApril22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["april"]["entry"][4];
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][4];
    let kishanScan = datas["2022"]["kishan"]["april"]["scan"][4];
    let poukinScan = datas["2022"]["poukin"]["april"]["scan"][4];
    let rohelEntry = datas["2022"]["rohel"]["april"]["entry"][4];
    oldProgress(0, angouchaEntry, em, 0, chetanEntry, em, kishanScan, 0, insert, poukinScan, 0, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 08 April 22
  eightApril22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][5];
    let kishanEntry = datas["2022"]["kishan"]["april"]["entry"][5];
    let poukinEntry = datas["2022"]["poukin"]["april"]["entry"][5];
    let rohelEntry = datas["2022"]["rohel"]["april"]["entry"][5];
    oldProgress(0, 0, other, 0, chetanEntry, em, 0, kishanEntry, em, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 11 April 22
  elevenApril22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["april"]["entry"][6];
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][6];
    let kishanEntry = datas["2022"]["kishan"]["april"]["entry"][6];
    let poukinEntry = datas["2022"]["poukin"]["april"]["entry"][6];
    let rohelEntry = datas["2022"]["rohel"]["april"]["entry"][6]
    oldProgress(0, angouchaEntry, em, 0, chetanEntry, em, 0, kishanEntry, print, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 12 April 22
  twelveApril22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["april"]["entry"][7];
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][7];
    let kishanScan = datas["2022"]["kishan"]["april"]["scan"][7];
    let poukinScan = datas["2022"]["poukin"]["april"]["scan"][7];
    let rohelScan = datas["2022"]["rohel"]["april"]["scan"][7];
    oldProgress(0, angouchaEntry, em, 0, chetanEntry, print, kishanScan, 0, em, poukinScan, 0, em, rohelScan, 0, em);
  })

  // Function to display the stats for 13 April 22
  thirteenApril22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["april"]["entry"][8];
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][8];
    let kishanScan = datas["2022"]["kishan"]["april"]["scan"][8];
    let poukinScan = datas["2022"]["poukin"]["april"]["scan"][8];
    let rohelScan = datas["2022"]["rohel"]["april"]["scan"][8];
    oldProgress(0, angouchaEntry, em, 0, chetanEntry, em, kishanScan, 0, em, poukinScan, 0, em, rohelScan, 0, em);
  })

  // Function to display the stats for 16 April 22
  sixteenApril22.addEventListener("click", () => {
    let poukinScan = datas["2022"]["poukin"]["april"]["scan"][9];
    let rohelScan = datas["2022"]["rohel"]["april"]["scan"][9];
    oldProgress(0, 0, `${other}, ${elec}`, 0, 0, `${excel}, ${elec}`, 0, 0, abs, poukinScan, 0, elec, rohelScan, 0, elec);
  })

  // Function to display the stats for 18 April 22
  eighteenApril22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][10];
    let kishanScan = datas["2022"]["kishan"]["april"]["scan"][10];
    let poukinScan = datas["2022"]["poukin"]["april"]["scan"][10];
    let poukinEntry = datas["2022"]["poukin"]["april"]["entry"][10];
    let rohelScan = datas["2022"]["rohel"]["april"]["scan"][10];
    oldProgress(0, 0, other, 0, chetanEntry, excel, kishanScan, 0, em, poukinScan, poukinEntry, em, rohelScan, 0, em);
  })

  // Function to display the stats for 19 April 22
  nineteenApril22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["april"]["entry"][11];
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][11];
    let kishanEntry = datas["2022"]["kishan"]["april"]["entry"][11];
    let poukinEntry = datas["2022"]["poukin"]["april"]["entry"][11];
    let rohelEntry = datas["2022"]["rohel"]["april"]["entry"][11]
    oldProgress(0, angouchaEntry, em, 0, chetanEntry, em, 0, kishanEntry, em, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 20 April 22
  twentyApril22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["april"]["entry"][12];
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][12];
    let poukinEntry = datas["2022"]["poukin"]["april"]["entry"][12];
    oldProgress(0, angouchaEntry, em, 0, chetanEntry, em, 0, 0, print, 0, poukinEntry, em, 0, 0, `No work done`);
  })

  // Function to display the stats for 21 April 22
  twentyoneApril22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["april"]["entry"][13];
    let kishanScan = datas["2022"]["kishan"]["april"]["scan"][13];
    let poukinScan = datas["2022"]["poukin"]["april"]["scan"][13];
    let rohelScan = datas["2022"]["rohel"]["april"]["scan"][13];
    oldProgress(0, angouchaEntry, em, 0, 0, print, kishanScan, 0, em, poukinScan, 0, em, rohelScan, 0, em);
  })

  // Function to display the stats for 22 April 22
  twentytwoApril22.addEventListener("click", () => {
    let poukinScan = datas["2022"]["poukin"]["april"]["scan"][14];
    let rohelScan = datas["2022"]["rohel"]["april"]["scan"][14];
    oldProgress(0, 0, make, 0, 0, `${excel} & ${make}`, 0, 0, abs, poukinScan, 0, em, rohelScan, 0, em);
  })

  // Function to display the stats for 25 April 22
  twentyfiveApril22.addEventListener("click", () => {
    let chetanScan = datas["2022"]["chetan"]["april"]["scan"][15];
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][15];
    let kishanScan = datas["2022"]["kishan"]["april"]["scan"][15];
    let poukinScan = datas["2022"]["poukin"]["april"]["scan"][15];
    let rohelScan = datas["2022"]["rohel"]["april"]["scan"][15];
    oldProgress(0, 0, make, chetanScan, chetanEntry, `${excel}, ${make} & ${insert}`, kishanScan, 0, em, poukinScan, 0, em, rohelScan, 0, em);
  })

  // Function to display the stats for 26 April 22
  twentysixApril22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["april"]["entry"][16];
    let kishanScan = datas["2022"]["kishan"]["april"]["scan"][16];
    let poukinEntry = datas["2022"]["poukin"]["april"]["entry"][16];
    let rohelEntry = datas["2022"]["rohel"]["april"]["entry"][16]
    oldProgress(0, angouchaEntry, make, 0, 0, `${excel}, ${make} & ${insert}`, kishanScan, 0, em, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 27 April 22
  twentysevenApril22.addEventListener("click", () => {
    oldProgress(0, 0, elec, 0, 0, `${insert}, ${elec}`, 0, 0, `${insert}, ${elec}`, 0, 0, elec, 0, 0, elec);
  })

  // Function to display the stats for 28 April 22
  twentyeightApril22.addEventListener("click", () => {
    let chetanScan = datas["2022"]["chetan"]["april"]["scan"][17];
    let poukinEntry = datas["2022"]["poukin"]["april"]["entry"][17];
    let rohelEntry = datas["2022"]["rohel"]["april"]["entry"][17]
    oldProgress(0, 0, abs, chetanScan, 0, `${excel}, ${make}, ${elec}`, 0, 0, abs, 0, poukinEntry, elec, 0, rohelEntry, elec);
  })

  // Function to display the stats for 29 April 22
  twentynineApril22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["april"]["entry"][18];
    let chetanEntry = datas["2022"]["chetan"]["april"]["entry"][18];
    let kishanScan = datas["2022"]["kishan"]["april"]["scan"][18];
    let kishanEntry = datas["2022"]["kishan"]["april"]["entry"][18];
    let poukinEntry = datas["2022"]["poukin"]["april"]["entry"][18];
    let rohelEntry = datas["2022"]["rohel"]["april"]["entry"][18]
    oldProgress(0, angouchaEntry, make, 0, chetanEntry, `${excel}, ${make}`, kishanScan, kishanEntry, make, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 30 April 22
  thirtyApril22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["april"]["entry"][19];
    let kishanEntry = datas["2022"]["kishan"]["april"]["entry"][19];
    oldProgress(0, angouchaEntry, em, 0, 0, print, 0, kishanEntry, `${make}, ${insert}`, 0, 0, `No work done`, 0, 0, abs);
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
    oldProgress(0, angouchaEntry, em, 0, 0, other, 0, 0, other, 0, 0, other, 0, 0, other);
  })

  // Function to display the stats for 04 May 22
  fourMay22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["may"]["entry"][1];
    let kishanEntry = datas["2022"]["kishan"]["may"]["entry"][1];
    oldProgress(0, angouchaEntry, em, 0, 0, other, 0, kishanEntry, em, 0, 0, other, 0, 0, other)
  })

  // Function to display the stats for 05 May 22
  fiveMay22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["may"]["entry"][2];
    let kishanScan = datas["2022"]["kishan"]["may"]["scan"][2];
    let poukinScan = datas["2022"]["poukin"]["may"]["scan"][2];
    let rohelScan = datas["2022"]["rohel"]["may"]["scan"][2];
    oldProgress(0, angouchaEntry, em, 0, 0, other, kishanScan, 0, em, poukinScan, 0, em, rohelScan, 0, em);
  })

  // Function to display the stats for 06 May 22
  sixMay22.addEventListener("click", () => {
    let kishanScan = datas["2022"]["kishan"]["may"]["scan"][3];
    let poukinScan = datas["2022"]["poukin"]["may"]["scan"][3];
    let rohelScan = datas["2022"]["rohel"]["may"]["scan"][3];
    oldProgress(0, 0, make, 0, 0, `${excel} & ${make}`, kishanScan, 0, em, poukinScan, 0, em, rohelScan, 0, em);
  })

  // Function to display the stats for 07 May 22
  sevenMay22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["may"]["entry"][4];
    let kishanScan = datas["2022"]["kishan"]["may"]["scan"][4];
    let poukinScan = datas["2022"]["poukin"]["may"]["scan"][4];
    let rohelScan = datas["2022"]["rohel"]["may"]["scan"][4];
    oldProgress(0, 0, make, 0, chetanEntry, `${excel} & ${make}`, kishanScan, 0, make, poukinScan, 0, em, rohelScan, 0, em);
  })

  // Function to display the stats for 09 May 22
  nineMay22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["may"]["entry"][5];
    let poukinScan = datas["2022"]["poukin"]["may"]["scan"][5];
    let rohelScan = datas["2022"]["rohel"]["may"]["scan"][5];
    let rohelEntry = datas["2022"]["rohel"]["may"]["entry"][5];
    oldProgress(0, angouchaEntry, make, 0, 0, `${excel} & ${make}`, 0, 0, `${excel} & ${make}`, poukinScan, 0, em, rohelScan, rohelEntry, em);
  })

  // Function to display the stats for 10 May 22
  tenMay22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["may"]["entry"][6];
    let chetanEntry = datas["2022"]["chetan"]["may"]["entry"][6];
    let kishanEntry = datas["2022"]["kishan"]["may"]["entry"][6];
    let poukinEntry = datas["2022"]["poukin"]["may"]["entry"][6];
    let rohelEntry = datas["2022"]["rohel"]["may"]["entry"][6];
    oldProgress(0, angouchaEntry, em, 0, chetanEntry, make, 0, kishanEntry, make, 0, poukinEntry, em, 0, rohelEntry, em)
  })

  // Function to display the stats for 11 May 22
  elevenMay22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["may"]["entry"][7];
    let chetanEntry = datas["2022"]["chetan"]["may"]["entry"][7];
    let kishanEntry = datas["2022"]["kishan"]["may"]["entry"][7];
    let poukinEntry = datas["2022"]["poukin"]["may"]["entry"][7];
    let rohelEntry = datas["2022"]["rohel"]["may"]["entry"][7];
    oldProgress(0, angouchaEntry, em, 0, chetanEntry, print, 0, kishanEntry, em, 0, poukinEntry, em, 0, rohelEntry, em)
  })

  // Function to display the stats for 12 May 22
  twelveMay22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["may"]["entry"][8];
    let chetanEntry = datas["2022"]["chetan"]["may"]["entry"][8];
    let kishanEntry = datas["2022"]["kishan"]["may"]["entry"][8];
    let poukinEntry = datas["2022"]["poukin"]["may"]["entry"][8];
    let rohelEntry = datas["2022"]["rohel"]["may"]["entry"][8];
    oldProgress(0, angouchaEntry, em, 0, chetanEntry, em, 0, kishanEntry, em, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 13 May 22
  thirteenMay22.addEventListener("click", () => {
    let kishanScan = datas["2022"]["kishan"]["may"]["scan"][9];
    let poukinScan = datas["2022"]["poukin"]["may"]["scan"][9];
    let rohelScan = datas["2022"]["rohel"]["may"]["scan"][9];
    oldProgress(0, 0, other, 0, 0, print, kishanScan, 0, em, poukinScan, 0, em, rohelScan, 0, em)
  })

  // Function to display the stats for 16 May 22
  sixteenMay22.addEventListener("click", () => {
    let kishanScan = datas["2022"]["kishan"]["may"]["scan"][10];
    let poukinScan = datas["2022"]["poukin"]["may"]["scan"][10];
    let rohelScan = datas["2022"]["rohel"]["may"]["scan"][10];
    oldProgress(0, 0, make, 0, 0, `${excel}, ${prins}`, kishanScan, 0, em, poukinScan, 0, em, rohelScan, 0, em);
  })

  // Function to display the stats for 17 May 22
  seventeenMay22.addEventListener("click", () => {
    let poukinScan = datas["2022"]["poukin"]["may"]["scan"][11];
    oldProgress(0, 0, make, 0, 0, abs, 0, 0, other, poukinScan, 0, elec, 0, 0, other);
  })

  // Function to display the stats for 18 May 22
  eighteenMay22.addEventListener("click", () => {
    let chetanScan = datas["2022"]["chetan"]["may"]["scan"][12];
    let chetanEntry = datas["2022"]["chetan"]["may"]["entry"][12];
    let kishanScan = datas["2022"]["kishan"]["may"]["scan"][12];
    let poukinScan = datas["2022"]["poukin"]["may"]["scan"][12];
    let rohelScan = datas["2022"]["rohel"]["may"]["scan"][12];
    oldProgress(0, 0, make, chetanScan, chetanEntry, `${excel}, ${prins}`, kishanScan, 0, scanEnd, poukinScan, 0, em, rohelScan, 0, em);
  })

  // Function to display the stats for 19 May 22
  nineteenMay22.addEventListener("click", () => {
    let poukinScan = datas["2022"]["poukin"]["may"]["scan"][13];
    let rohelScan = datas["2022"]["rohel"]["may"]["scan"][13];
    oldProgress(0, 0, make, 0, 0, `${excel}, ${make}`, 0, 0, abs, poukinScan, 0, scanEnd, rohelScan, 0, em);
  })

  // Function to display the stats for 20 May 22
  twentyMay22.addEventListener("click", () => {
    let rohelScan = datas["2022"]["rohel"]["may"]["scan"][14];
    oldProgress(0, 0, make, 0, 0, `${excel}, ${make}`, 0, 0, make, 0, 0, abs, rohelScan, 0, em);
  })

  // Function to display the stats for 21 May 22
  twentyOneMay22.addEventListener("click", () => {
    let rohelScan = datas["2022"]["rohel"]["may"]["scan"][15];
    oldProgress(0, 0, make, 0, 0, `${excel}, ${make}`, 0, 0, make, 0, 0, abs, rohelScan, 0, scanEnd);
  })

  // Function to display the stats for 23 May 22
  twentyThreeMay22.addEventListener("click", () => {
    let poukinEntry = datas["2022"]["poukin"]["may"]["entry"][16];
    let rohelEntry = datas["2022"]["rohel"]["may"]["entry"][16];
    oldProgress(0, 0, other, 0, 0, `${excel}, ${make} & ${print}`, 0, 0, make, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 24 May 22
  twentyFourMay22.addEventListener("click", () => {
    let poukinEntry = datas["2022"]["poukin"]["may"]["entry"][17];
    let rohelEntry = datas["2022"]["rohel"]["may"]["entry"][17];
    oldProgress(0, 0, other, 0, 0, `${make}, ${prins}`, 0, 0, make, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 25 May 22
  twentyFiveMay22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["may"]["entry"][18];
    let poukinEntry = datas["2022"]["poukin"]["may"]["entry"][18];
    let rohelEntry = datas["2022"]["rohel"]["may"]["entry"][18];
    oldProgress(0, 0, abs, 0, chetanEntry, `${make} & ${insert}`, 0, 0, make, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 26 May 22
  twentySixMay22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["may"]["entry"][19];
    let kishanEntry = datas["2022"]["kishan"]["may"]["entry"][19];
    let poukinEntry = datas["2022"]["poukin"]["may"]["entry"][19];
    let rohelEntry = datas["2022"]["rohel"]["may"]["entry"][19];
    oldProgress(0, 0, other, 0, chetanEntry, `${print}`, 0, kishanEntry, em, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 27 May 22
  twentySevenMay22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["may"]["entry"][20];
    let kishanEntry = datas["2022"]["kishan"]["may"]["entry"][20];
    let poukinEntry = datas["2022"]["poukin"]["may"]["entry"][20];
    let rohelEntry = datas["2022"]["rohel"]["may"]["entry"][20];
    oldProgress(0, 0, other, 0, chetanEntry, other, 0, kishanEntry, other, 0, poukinEntry, em, 0, rohelEntry, em);
  })

  // Function to display the stats for 28 May 22
  twentyEightMay22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["may"]["entry"][21];
    let kishanEntry = datas["2022"]["kishan"]["may"]["entry"][21];
    let poukinEntry = datas["2022"]["poukin"]["may"]["entry"][21];
    let rohelEntry = datas["2022"]["rohel"]["may"]["entry"][21];
    oldProgress(0, 0, abs, 0, chetanEntry, elec, 0, kishanEntry, elec, 0, poukinEntry, elec, 0, rohelEntry, elec);
  })

  // Function to display the stats for 30 May 22
  thirtyMay22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["may"]["entry"][22];
    let kishanEntry = datas["2022"]["kishan"]["may"]["entry"][22];
    let poukinEntry = datas["2022"]["poukin"]["may"]["entry"][22];
    let rohelEntry = datas["2022"]["rohel"]["may"]["entry"][22];
    oldProgress(0, 0, other, 0, chetanEntry, entryEnd, 0, kishanEntry, `IDs work, Entry Finished`, 0, poukinEntry, entryEnd, 0, rohelEntry, entryEnd);
  })

  // Function to display the stats for 31 May 22
  thirtyOneMay22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["may"]["entry"][23];
    let kishanScan = datas["2022"]["kishan"]["may"]["scan"][23];
    let poukinScan = datas["2022"]["poukin"]["may"]["scan"][23];
    let rohelScan = datas["2022"]["rohel"]["may"]["scan"][23];
    oldProgress(0, 0, other, 0, chetanEntry, `${print} & IDs Work`, kishanScan, 0, `IDs work, ${scanStart}`, poukinScan, 0, `${scanStart}`, rohelScan, 0, `${scanStart}`);
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

  // Function to display the stats for 09 June 22
  nineJune22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["june"]["pdf"][7];
    let chetanPdf = datas["2022"]["chetan"]["june"]["pdf"][7];
    let kishanPdf = datas["2022"]["kishan"]["june"]["pdf"][7];
    let poukinEntry = datas["2022"]["poukin"]["june"]["entry"][7];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, chetanPdf, 0, em, 0, 0, kishanPdf, 0, em, 0, poukinEntry, 0, 0, em, 0, 0, 0, 0, abs);
  })

  // Function to display the stats for 10 June 22
  tenJune22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["june"]["entry"][8];
    let kishanEntry = datas["2022"]["kishan"]["june"]["entry"][8];
    let poukinEntry = datas["2022"]["poukin"]["june"]["entry"][8];
    let rohelEntry = datas["2022"]["rohel"]["june"]["entry"][8];
    progress(0, 0, 0, 0, other, 0, chetanEntry, 0, 0, em, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, abs);
  })

  // Function to display the stats for 13 June 22
  thirteenJune22.addEventListener("click", () => {
    let chetanScan = datas["2022"]["chetan"]["june"]["scan"][9];
    let chetanEntry = datas["2022"]["chetan"]["june"]["entry"][9];
    let chetanPrint = datas["2022"]["chetan"]["june"]["print"][9];
    let kishanScan = datas["2022"]["kishan"]["june"]["scan"][9];
    let poukinScan = datas["2022"]["poukin"]["june"]["scan"][9];
    let rohelScan = datas["2022"]["rohel"]["june"]["scan"][9];
    progress(0, 0, 0, 0, other, chetanScan, chetanEntry, 0, chetanPrint, em, kishanScan, 0, 0, 0, `Other Resume Work`, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 14 June 22
  fourteenJune22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["june"]["entry"][10];
    let chetanPdf = datas["2022"]["chetan"]["june"]["pdf"][10];
    let poukinScan = datas["2022"]["poukin"]["june"]["scan"][10];
    let rohelScan = datas["2022"]["rohel"]["june"]["scan"][10];
    progress(0, 0, 0, 0, other, 0, chetanEntry, chetanPdf, 0, em, 0, 0, 0, 0, abs, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 15 June 22
  fifteenJune22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["june"]["pdf"][11];
    let poukinScan = datas["2022"]["poukin"]["june"]["scan"][11];
    let rohelScan = datas["2022"]["rohel"]["june"]["scan"][11];
    progress(0, 0, 0, 0, other, 0, 0, chetanPdf, 0, em, 0, 0, 0, 0, abs, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 16 June 22
  sixteenJune22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["june"]["pdf"][12];
    let poukinScan = datas["2022"]["poukin"]["june"]["scan"][12];
    let rohelScan = datas["2022"]["rohel"]["june"]["scan"][12];
    progress(0, 0, 0, 0, other, 0, 0, chetanPdf, 0, em, 0, 0, 0, 0, abs, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 17 June 22
  seventeenJune22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["june"]["pdf"][13];
    let poukinScan = datas["2022"]["poukin"]["june"]["scan"][13];
    let rohelScan = datas["2022"]["rohel"]["june"]["scan"][13];
    progress(0, 0, 0, 0, other, 0, 0, chetanPdf, 0, em, 0, 0, 0, 0, abs, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 20 June 22
  twentyJune22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["june"]["entry"][14];
    let poukinPdf = datas["2022"]["poukin"]["june"]["pdf"][14];
    let rohelPdf = datas["2022"]["rohel"]["june"]["pdf"][14];
    progress(0, 0, 0, 0, other, 0, chetanEntry, 0, 0, em, 0, 0, 0, 0, abs, 0, 0, poukinPdf, 0, em, 0, 0, rohelPdf, 0, em);
  })

  // Function to display the stats for 21 June 22
  twentyOneJune22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["june"]["entry"][15];
    let kishanScan = datas["2022"]["kishan"]["june"]["scan"][15];
    let poukinPdf = datas["2022"]["poukin"]["june"]["pdf"][15];
    let rohelPdf = datas["2022"]["rohel"]["june"]["pdf"][15];
    progress(0, 0, 0, 0, other, 0, chetanEntry, 0, 0, em, kishanScan, 0, 0, 0, em, 0, 0, poukinPdf, 0, em, 0, 0, rohelPdf, 0, em);
  })

  // Function to display the stats for 22 June 22
  twentyTwoJune22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["june"]["entry"][16];
    let kishanScan = datas["2022"]["kishan"]["june"]["scan"][16];
    let poukinPdf = datas["2022"]["poukin"]["june"]["pdf"][16];
    let rohelPdf = datas["2022"]["rohel"]["june"]["pdf"][16];
    progress(0, 0, 0, 0, other, 0, chetanEntry, 0, 0, em, kishanScan, 0, 0, 0, em, 0, 0, poukinPdf, 0, em, 0, 0, rohelPdf, 0, em);
  })

  // Function to display the stats for 23 June 22
  twentyThreeJune22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["june"]["entry"][17];
    let kishanScan = datas["2022"]["kishan"]["june"]["scan"][17];
    let poukinPdf = datas["2022"]["poukin"]["june"]["pdf"][17];
    progress(0, 0, 0, 0, other, 0, chetanEntry, 0, 0, `Entry completed for Book 1979-80`, kishanScan, 0, 0, 0, `Scan completed for Book 1981-82`, 0, 0, poukinPdf, 0, em, 0, 0, 0, 0, abs);
  })

  // Function to display the stats for 24 June 22
  twentyFourJune22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["june"]["entry"][18];
    let kishanScan = datas["2022"]["kishan"]["june"]["scan"][18];
    let poukinPdf = datas["2022"]["poukin"]["june"]["pdf"][18];
    let rohelPdf = datas["2022"]["rohel"]["june"]["pdf"][18];
    progress(0, 0, 0, 0, other, 0, chetanEntry, 0, 0, `Server Problem`, kishanScan, 0, 0, 0, `Scan started for Book 1986-87`, 0, 0, poukinPdf, 0, `PDF completed for Book 1983-84`, 0, 0, rohelPdf, 0, `PDF completed for Book 1982-83`);
  })

  // Function to display the stats for 25 June 22
  twentyFiveJune22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["june"]["entry"][19];
    let kishanScan = datas["2022"]["kishan"]["june"]["scan"][19];
    let poukinPdf = datas["2022"]["poukin"]["june"]["pdf"][19];
    let rohelPdf = datas["2022"]["rohel"]["june"]["pdf"][19];
    progress(0, 0, 0, 0, other, 0, chetanEntry, 0, 0, em, kishanScan, 0, 0, 0, em, 0, 0, poukinPdf, 0, em, 0, 0, rohelPdf, 0, em);
  })

  // Function to display the stats for 27 June 22
  twentySevenJune22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["june"]["pdf"][20];
    let kishanScan = datas["2022"]["kishan"]["june"]["scan"][20];
    let poukinScan = datas["2022"]["poukin"]["june"]["scan"][20];
    let rohelScan = datas["2022"]["rohel"]["june"]["scan"][20];
    progress(0, 0, 0, 0, other, 0, 0, chetanPdf, 0, em, kishanScan, 0, 0, 0, em, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 28 June 22
  twentyEightJune22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["june"]["pdf"][21];
    let kishanScan = datas["2022"]["kishan"]["june"]["scan"][21];
    let poukinScan = datas["2022"]["poukin"]["june"]["scan"][21];
    let rohelScan = datas["2022"]["rohel"]["june"]["scan"][21];
    progress(0, 0, 0, 0, other, 0, 0, chetanPdf, 0, elec, kishanScan, 0, 0, 0, `${elec}, Scan Completed for Book 1986-87`, poukinScan, 0, 0, 0, elec, rohelScan, 0, 0, 0, elec);
  })

  // Function to display the stats for 29 June 22
  twentyNineJune22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["june"]["pdf"][22];
    let kishanEntry = datas["2022"]["kishan"]["june"]["entry"][22];
    let poukinScan = datas["2022"]["poukin"]["june"]["scan"][22];
    let rohelScan = datas["2022"]["rohel"]["june"]["scan"][22];
    progress(0, 0, 0, 0, other, 0, 0, chetanPdf, 0, em, 0, kishanEntry, 0, 0, em, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 30 June 22
  thirtyJune22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["june"]["pdf"][23];
    let kishanEntry = datas["2022"]["kishan"]["june"]["entry"][23];
    let poukinScan = datas["2022"]["poukin"]["june"]["scan"][23];
    let poukinEntry = datas["2022"]["poukin"]["june"]["entry"][23];
    let rohelScan = datas["2022"]["rohel"]["june"]["scan"][23];
    progress(0, 0, 0, 0, other, 0, 0, chetanPdf, 0, em, 0, kishanEntry, 0, 0, em, poukinScan, poukinEntry, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to Trigger the Display of July 22 Data Entry Stats
  july22.addEventListener("click", () => {
    displayProgress(july22Content);
    removeActiveData();
    progress(angouchaJul22ScanTotal, angouchaJul22EntryTotal, angouchaJul22PdfTotal, angouchaJul22PrintTotal, em, chetanJul22ScanTotal, chetanJul22EntryTotal, chetanJul22PdfTotal, chetanJul22PrintTotal, em, kishanJul22ScanTotal, kishanJul22EntryTotal,  kishanJul22PdfTotal, kishanJul22PrintTotal, em, poukinJul22ScanTotal, poukinJul22EntryTotal, poukinJul22PdfTotal, poukinJul22PrintTotal, em, rohelJul22ScanTotal, rohelJul22EntryTotal, rohelJul22PdfTotal, rohelJul22PrintTotal, em);
  })

  // Function to display the stats for 02 July 22
  twoJuly22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["july"]["pdf"][0];
    let kishanEntry = datas["2022"]["kishan"]["july"]["entry"][0];
    let poukinEntry = datas["2022"]["poukin"]["july"]["entry"][0];
    let rohelScan = datas["2022"]["rohel"]["july"]["scan"][0];
    progress(0, 0, 0, 0, abs, 0, 0, chetanPdf, 0, elec, 0, kishanEntry, 0, 0, elec, 0, poukinEntry, 0, 0, elec, rohelScan, 0, 0, 0, elec);
  })

  // Function to display the stats for 04 July 22
  fourJuly22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["july"]["pdf"][1];
    let kishanEntry = datas["2022"]["kishan"]["july"]["entry"][1];
    let poukinEntry = datas["2022"]["poukin"]["july"]["entry"][1];
    let rohelEntry = datas["2022"]["rohel"]["july"]["entry"][1];
    progress(0, 0, 0, 0, other, 0, 0, chetanPdf, 0, em, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 05 July 22
  fiveJuly22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["july"]["pdf"][2];
    let kishanEntry = datas["2022"]["kishan"]["july"]["entry"][2];
    let poukinEntry = datas["2022"]["poukin"]["july"]["entry"][2];
    let rohelEntry = datas["2022"]["rohel"]["july"]["entry"][2];
    progress(0, 0, 0, 0, other, 0, 0, chetanPdf, 0, em, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 06 July 22
  sixJuly22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["july"]["pdf"][3];
    let kishanEntry = datas["2022"]["kishan"]["july"]["entry"][3];
    let poukinEntry = datas["2022"]["poukin"]["july"]["entry"][3];
    let rohelEntry = datas["2022"]["rohel"]["july"]["entry"][3];
    progress(0, 0, 0, 0, other, 0, 0, chetanPdf, 0, em, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 07 July 22
  sevenJuly22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["july"]["pdf"][4];
    let kishanEntry = datas["2022"]["kishan"]["july"]["entry"][4];
    let poukinEntry = datas["2022"]["poukin"]["july"]["entry"][4];
    let rohelEntry = datas["2022"]["rohel"]["july"]["entry"][4];
    progress(0, 0, 0, 0, other, 0, 0, chetanPdf, 0, em, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 08 July 22
  eightJuly22.addEventListener("click", () => {
    let chetanScan = datas["2022"]["chetan"]["july"]["scan"][5];
    let chetanPdf = datas["2022"]["chetan"]["july"]["pdf"][5];
    let chetanPrint = datas["2022"]["chetan"]["july"]["print"][5];
    let kishanEntry = datas["2022"]["kishan"]["july"]["entry"][5];
    let poukinEntry = datas["2022"]["poukin"]["july"]["entry"][5];
    let rohelEntry = datas["2022"]["rohel"]["july"]["entry"][5];
    progress(0, 0, 0, 0, other, chetanScan, 0, chetanPdf, chetanPrint, em, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 11 July 22
  elevenJuly22.addEventListener("click", () => {
    let chetanPrint = datas["2022"]["chetan"]["july"]["print"][6];
    let kishanEntry = datas["2022"]["kishan"]["july"]["entry"][6];
    let poukinEntry = datas["2022"]["poukin"]["july"]["entry"][6];
    let rohelEntry = datas["2022"]["rohel"]["july"]["entry"][6];
    progress(0, 0, 0, 0, abs, 0, 0, 0, chetanPrint, em, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 12 July 22
  twelveJuly22.addEventListener("click", () => {
    let chetanPrint = datas["2022"]["chetan"]["july"]["print"][7];
    let kishanEntry = datas["2022"]["kishan"]["july"]["entry"][7];
    let poukinEntry = datas["2022"]["poukin"]["july"]["entry"][7];
    let rohelEntry = datas["2022"]["rohel"]["july"]["entry"][7];
    progress(0, 0, 0, 0, other, 0, 0, 0, chetanPrint, elec, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 13 July 22
  thirteenJuly22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["july"]["entry"][8];
    let chetanPrint = datas["2022"]["chetan"]["july"]["print"][8];
    let kishanEntry = datas["2022"]["kishan"]["july"]["entry"][8];
    let poukinEntry = datas["2022"]["poukin"]["july"]["entry"][8];
    let rohelEntry = datas["2022"]["rohel"]["july"]["entry"][8];
    progress(0, angouchaEntry, 0, 0, elec, 0, 0, 0, chetanPrint, elec, 0, kishanEntry, 0, 0, elec, 0, poukinEntry, 0, 0, elec, 0, rohelEntry, 0, 0, elec);
  })

  // Function to display the stats for 14 July 22
  fourteenJuly22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["july"]["entry"][9];
    let chetanScan = datas["2022"]["chetan"]["july"]["scan"][9];
    let chetanPdf = datas["2022"]["chetan"]["july"]["pdf"][9];
    let chetanPrint = datas["2022"]["chetan"]["july"]["print"][9];
    let kishanEntry = datas["2022"]["kishan"]["july"]["entry"][9];
    let poukinEntry = datas["2022"]["poukin"]["july"]["entry"][9];
    let rohelEntry = datas["2022"]["rohel"]["july"]["entry"][9];
    progress(0, angouchaEntry, 0, 0, em, chetanScan, 0, chetanPdf, chetanPrint, em, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

   // Function to display the stats for 15 July 22
   fifteenJuly22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["july"]["entry"][10];
    let chetanScan = datas["2022"]["chetan"]["july"]["scan"][10];
    let chetanEntry = datas["2022"]["chetan"]["july"]["entry"][10];
    let chetanPdf = datas["2022"]["chetan"]["july"]["pdf"][10];
    let chetanPrint = datas["2022"]["chetan"]["july"]["print"][10];
    let kishanEntry = datas["2022"]["kishan"]["july"]["entry"][10];
    let kishanPrint = datas["2022"]["kishan"]["july"]["print"][10];
    let poukinEntry = datas["2022"]["poukin"]["july"]["entry"][10];
    let rohelEntry = datas["2022"]["rohel"]["july"]["entry"][10];
    progress(0, angouchaEntry, 0, 0, em, chetanScan, chetanEntry, chetanPdf, chetanPrint, em, 0, kishanEntry, 0, kishanPrint, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 16 July 22
  sixteenJuly22.addEventListener("click", () => {
    let angouchaPrint = datas["2022"]["angoucha"]["july"]["print"][11];
    let chetanEntry = datas["2022"]["chetan"]["july"]["entry"][11];
    let chetanPrint = datas["2022"]["chetan"]["july"]["print"][11];
    let kishanEntry = datas["2022"]["kishan"]["july"]["entry"][11];
    let poukinEntry = datas["2022"]["poukin"]["july"]["entry"][11];
    let rohelEntry = datas["2022"]["rohel"]["july"]["entry"][11];
    progress(0, 0, 0, angouchaPrint, em, 0, chetanEntry, 0, chetanPrint, em, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 17 July 22
  seventeenJuly22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["july"]["entry"][12];
    let chetanPrint = datas["2022"]["chetan"]["july"]["print"][12];
    let kishanPrint = datas["2022"]["kishan"]["july"]["print"][12];
    let rohelEntry = datas["2022"]["rohel"]["july"]["entry"][12];
    progress(0, 0, 0, 0, em, 0, chetanEntry, 0, chetanPrint, over, 0, 0, 0, kishanPrint, over, 0, 0, 0, 0, em, 0, rohelEntry, 0, 0, over);
  })

  // Function to display the stats for 18 July 22
  eighteenJuly22.addEventListener("click", () => {
    progress(0, 0, 0, 0, nwd, 0, 0, 0, 0, nwd, 0, 0, 0, 0, nwd, 0, 0, 0, 0, nwd, 0, 0, 0, 0, nwd);
  })

  // Function to display the stats for 19 July 22
  nineteenJuly22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["july"]["entry"][14];
    let chetanEntry = datas["2022"]["chetan"]["july"]["entry"][14];
    let kishanScan = datas["2022"]["kishan"]["july"]["scan"][14];
    let poukinScan = datas["2022"]["poukin"]["july"]["scan"][14];
    let rohelScan = datas["2022"]["rohel"]["july"]["scan"][14];
    progress(0, angouchaEntry, 0, 0, em, 0, chetanEntry, 0, 0, em, kishanScan, 0, 0, 0, em, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 20 July 22
  twentyJuly22.addEventListener("click", () => {
    let poukinScan = datas["2022"]["poukin"]["july"]["scan"][15];
    let rohelScan = datas["2022"]["rohel"]["july"]["scan"][15];
    progress(0, 0, 0, 0, other, 0, 0, 0, 0, abs, 0, 0, 0, 0, abs, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 21 July 22
  twentyOneJuly22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["july"]["pdf"][16];
    let chetanPdf = datas["2022"]["chetan"]["july"]["pdf"][16];
    let kishanScan = datas["2022"]["kishan"]["july"]["scan"][16];
    let poukinScan = datas["2022"]["poukin"]["july"]["scan"][16];
    let rohelScan = datas["2022"]["rohel"]["july"]["scan"][16];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, chetanPdf, 0, excel, kishanScan, 0, 0, 0, em, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 22 July 22
  twentyTwoJuly22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["july"]["pdf"][17];
    let kishanScan = datas["2022"]["kishan"]["july"]["scan"][17];
    let poukinScan = datas["2022"]["poukin"]["july"]["scan"][17];
    let rohelScan = datas["2022"]["rohel"]["july"]["scan"][17];
    progress(0, 0, 0, 0, other, 0, 0, chetanPdf, 0, excel, kishanScan, 0, 0, 0, `Phone Storage Problem`, poukinScan, 0, 0, 0, `Phone Storage Problem, Scan Completed`, rohelScan, 0, 0, 0, `Phone Storage Problem`);
  })

  // Function to display the stats for 23 July 22
  twentyThreeJuly22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["july"]["pdf"][18];
    let chetanScan = datas["2022"]["chetan"]["july"]["scan"][18];
    let chetanPdf = datas["2022"]["chetan"]["july"]["pdf"][18];
    let kishanScan = datas["2022"]["kishan"]["july"]["scan"][18];
    let poukinScan = datas["2022"]["poukin"]["july"]["scan"][18];
    let poukinEntry = datas["2022"]["poukin"]["july"]["entry"][18];
    let rohelScan = datas["2022"]["rohel"]["july"]["scan"][18];
    progress(0, 0, angouchaPdf, 0, em, chetanScan, 0, chetanPdf, 0, excel, kishanScan, 0, 0, 0, em, poukinScan, poukinEntry, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 25 July 22
  twentyFiveJuly22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["july"]["pdf"][19];
    let chetanPdf = datas["2022"]["chetan"]["july"]["pdf"][19];
    let kishanScan = datas["2022"]["kishan"]["july"]["scan"][19];
    let poukinEntry = datas["2022"]["poukin"]["july"]["entry"][19];
    let rohelScan = datas["2022"]["rohel"]["july"]["scan"][19];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, chetanPdf, 0, excel, kishanScan, 0, 0, 0, `Scan Completed`, 0, poukinEntry, 0, 0, em, rohelScan, 0, 0, 0, `Scan Completed`);
  })

  // Function to display the stats for 26 July 22
  twentySixJuly22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["july"]["pdf"][20];
    let chetanPdf = datas["2022"]["chetan"]["july"]["pdf"][20];
    let kishanEntry = datas["2022"]["kishan"]["july"]["entry"][20];
    let poukinEntry = datas["2022"]["poukin"]["july"]["entry"][20];
    let rohelScan = datas["2022"]["rohel"]["july"]["scan"][20];
    let rohelEntry = datas["2022"]["rohel"]["july"]["entry"][20];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, chetanPdf, 0, excel, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, rohelScan, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 27 July 22
  twentySevenJuly22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["july"]["pdf"][21];
    let chetanPdf = datas["2022"]["chetan"]["july"]["pdf"][21];
    let poukinEntry = datas["2022"]["poukin"]["july"]["entry"][21];
    let rohelEntry = datas["2022"]["rohel"]["july"]["entry"][21];
    progress(0, 0, angouchaPdf, 0, elec, 0, 0, chetanPdf, 0, elec, 0, 0, 0, 0, abs, 0, poukinEntry, 0, 0, elec, 0, rohelEntry, 0, 0, elec);
  })

  // Function to display the stats for 28 July 22
  twentyEightJuly22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["july"]["pdf"][22];
    let chetanPdf = datas["2022"]["chetan"]["july"]["pdf"][22];
    let kishanEntry = datas["2022"]["kishan"]["july"]["entry"][22];
    let poukinEntry = datas["2022"]["poukin"]["july"]["entry"][22];
    let rohelEntry = datas["2022"]["rohel"]["july"]["entry"][22];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, chetanPdf, 0, em, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 29 July 22
  twentyNineJuly22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["july"]["pdf"][23];
    let chetanEntry = datas["2022"]["chetan"]["july"]["entry"][23];
    let chetanPdf = datas["2022"]["chetan"]["july"]["pdf"][23];
    let kishanEntry = datas["2022"]["kishan"]["july"]["entry"][23];
    let poukinEntry = datas["2022"]["poukin"]["july"]["entry"][23];
    let rohelEntry = datas["2022"]["rohel"]["july"]["entry"][23];
    progress(0, 0, angouchaPdf, 0, em, 0, chetanEntry, chetanPdf, 0, em, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 30 July 22
  thirtyJuly22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["july"]["entry"][24];
    let chetanEntry = datas["2022"]["chetan"]["july"]["entry"][24];
    let chetanPdf = datas["2022"]["chetan"]["july"]["pdf"][24];
    let kishanEntry = datas["2022"]["kishan"]["july"]["entry"][24];
    let poukinEntry = datas["2022"]["poukin"]["july"]["entry"][24];
    let rohelEntry = datas["2022"]["rohel"]["july"]["entry"][24];
    progress(0, angouchaEntry, 0, 0, em, 0, chetanEntry, chetanPdf, 0, em, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to Trigger the Display of August 22 Data Entry Stats
  august22.addEventListener("click", () => {
    displayProgress(august22Content);
    removeActiveData();
    progress(angouchaAug22ScanTotal, angouchaAug22EntryTotal, angouchaAug22PdfTotal, angouchaAug22PrintTotal, em, chetanAug22ScanTotal, chetanAug22EntryTotal, chetanAug22PdfTotal, chetanAug22PrintTotal, em, kishanAug22ScanTotal, kishanAug22EntryTotal,  kishanAug22PdfTotal, kishanAug22PrintTotal, em, poukinAug22ScanTotal, poukinAug22EntryTotal, poukinAug22PdfTotal, poukinAug22PrintTotal, em, rohelAug22ScanTotal, rohelAug22EntryTotal, rohelAug22PdfTotal, rohelAug22PrintTotal, em);
  })

  // Function to display the stats for 01 August 22
  oneAugust22.addEventListener("click", () => {
    let angouchaEntry = datas["2022"]["angoucha"]["august"]["entry"][0];
    let chetanEntry = datas["2022"]["chetan"]["august"]["entry"][0];
    let kishanEntry = datas["2022"]["kishan"]["august"]["entry"][0];
    let poukinEntry = datas["2022"]["poukin"]["august"]["entry"][0];
    let rohelEntry = datas["2022"]["rohel"]["august"]["entry"][0];
    progress(0, angouchaEntry, 0, 0, em, 0, chetanEntry, 0, 0, em, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, `Entry Completed for Book 1988-89`, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 02 August 22
  twoAugust22.addEventListener("click", () => {
    let angouchaPrint = datas["2022"]["angoucha"]["august"]["print"][1];
    let chetanPrint = datas["2022"]["chetan"]["august"]["print"][1];
    let kishanEntry = datas["2022"]["kishan"]["august"]["entry"][1];
    let kishanPrint = datas["2022"]["kishan"]["august"]["print"][1];
    let rohelEntry = datas["2022"]["rohel"]["august"]["entry"][1];
    progress(0, 0, 0, angouchaPrint, em, 0, 0, 0, chetanPrint, em, 0, kishanEntry, 0, kishanPrint, `Entry Completed for Book 1987-88`, 0, 0, 0, 0, abs, 0, rohelEntry, 0, 0, `Entry Completed for Book 1989-90`);
  })

  // Function to display the stats for 03 August 22
  threeAugust22.addEventListener("click", () => {
    let angouchaPrint = datas["2022"]["angoucha"]["august"]["print"][2];
    let chetanPrint = datas["2022"]["chetan"]["august"]["print"][2];
    let kishanScan = datas["2022"]["kishan"]["august"]["scan"][2];
    let poukinScan = datas["2022"]["poukin"]["august"]["scan"][2];
    let rohelScan = datas["2022"]["rohel"]["august"]["scan"][2];
    progress(0, 0, 0, angouchaPrint, em, 0, 0, 0, chetanPrint, em, kishanScan, 0, 0, 0, `Scan Started for Book 1992-93`, poukinScan, 0, 0, 0, `Scan Started for Book 1991-92`, rohelScan, 0, 0, 0, `Scan Started for Book 1990-91`);
  })

  // Function to display the stats for 04 August 22
  fourAugust22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["august"]["pdf"][3];
    let chetanPdf = datas["2022"]["chetan"]["august"]["pdf"][3];
    let kishanScan = datas["2022"]["kishan"]["august"]["scan"][3];
    let poukinScan = datas["2022"]["poukin"]["august"]["scan"][3];
    let rohelScan = datas["2022"]["rohel"]["august"]["scan"][3];
    progress(0, 0, angouchaPdf, 0, elec, 0, 0, chetanPdf, 0, `${excel}, ${elec}`, kishanScan, 0, 0, 0, elec, poukinScan, 0, 0, 0, elec, rohelScan, 0, 0, 0, elec);
  })

  // Function to display the stats for 05 August 22
  fiveAugust22.addEventListener("click", () => {
    let kishanScan = datas["2022"]["kishan"]["august"]["scan"][4];
    let rohelScan = datas["2022"]["rohel"]["august"]["scan"][4];
    progress(0, 0, 0, 0, elec, 0, 0, 0, 0, elec, kishanScan, 0, 0, 0, elec, 0, 0, 0, 0, elec, rohelScan, 0, 0, 0, elec);
  })

  // Function to display the stats for 06 August 22
  sixAugust22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["august"]["pdf"][5];
    let kishanScan = datas["2022"]["kishan"]["august"]["scan"][5];
    let poukinScan = datas["2022"]["poukin"]["august"]["scan"][5];
    let rohelScan = datas["2022"]["rohel"]["august"]["scan"][5];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, 0, 0, abs, kishanScan, 0, 0, 0, em, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

   // Function to display the stats for 08 August 22
   eightAugust22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["august"]["pdf"][6];
    let chetanPrint = datas["2022"]["chetan"]["august"]["print"][6];
    let kishanScan = datas["2022"]["kishan"]["august"]["scan"][6];
    let poukinScan = datas["2022"]["poukin"]["august"]["scan"][6];
    let rohelScan = datas["2022"]["rohel"]["august"]["scan"][6];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, 0, chetanPrint, excel, kishanScan, 0, 0, 0, em, poukinScan, 0, 0, 0, `Scanning Completed`, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 09 August 22
  nineAugust22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["august"]["pdf"][7];
    let chetanPdf = datas["2022"]["chetan"]["august"]["pdf"][7];
    let chetanPrint = datas["2022"]["chetan"]["august"]["print"][7];
    let kishanScan = datas["2022"]["kishan"]["august"]["scan"][7];
    let poukinEntry = datas["2022"]["poukin"]["august"]["entry"][7];
    let rohelScan = datas["2022"]["rohel"]["august"]["scan"][7];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, chetanPdf, chetanPrint, excel, kishanScan, 0, 0, 0, em, 0, poukinEntry, 0, 0, `Entry Started`, rohelScan, 0, 0, 0, `Scanning Completed`);
  })

  // Function to display the stats for 10 August 22
  tenAugust22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["august"]["pdf"][8];
    let chetanPdf = datas["2022"]["chetan"]["august"]["pdf"][8];
    let kishanScan = datas["2022"]["kishan"]["august"]["scan"][8];
    let poukinEntry = datas["2022"]["poukin"]["august"]["entry"][8];
    let rohelEntry = datas["2022"]["rohel"]["august"]["entry"][8];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, chetanPdf, 0, `${excel}, ${other}`, kishanScan, 0, 0, 0, `${other}, Scanning Completed`, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, `Entry Started`);
  })

  // Function to display the stats for 11 August 22
  elevenAugust22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["august"]["pdf"][9];
    let chetanPdf = datas["2022"]["chetan"]["august"]["pdf"][9];
    let poukinEntry = datas["2022"]["poukin"]["august"]["entry"][9];
    progress(0, 0, angouchaPdf, 0, other, 0, 0, chetanPdf, 0, `${excel}, ${other}`, 0, 0, 0, 0, other, 0, poukinEntry, 0, 0, em, 0, 0, 0, 0, other);
  })

  // Function to display the stats for 12 August 22
  twelveAugust22.addEventListener("click", () => {
    let poukinEntry = datas["2022"]["poukin"]["august"]["entry"][10];
    progress(0, 0, 0, 0, other, 0, 0, 0, 0, other, 0, 0, 0, 0, other, 0, poukinEntry, 0, 0, em, 0, 0, 0, 0, other);
  })

  // Function to display the stats for 16 August 22
  sixteenAugust22.addEventListener("click", () => {
    let poukinEntry = datas["2022"]["poukin"]["august"]["entry"][11];
    progress(0, 0, 0, 0, other, 0, 0, 0, 0, other, 0, 0, 0, 0, other, 0, poukinEntry, 0, 0, em, 0, 0, 0, 0, other);
  })

  // Function to display the stats for 17 August 22
  seventeenAugust22.addEventListener("click", () => {
    let poukinEntry = datas["2022"]["poukin"]["august"]["entry"][12];
    progress(0, 0, 0, 0, other, 0, 0, 0, 0, other, 0, 0, 0, 0, other, 0, poukinEntry, 0, 0, em, 0, 0, 0, 0, other);
  })

  // Function to display the stats for 18 August 22
  eighteenAugust22.addEventListener("click", () => {
    let poukinEntry = datas["2022"]["poukin"]["august"]["entry"][13];
    progress(0, 0, 0, 0, other, 0, 0, 0, 0, other, 0, 0, 0, 0, other, 0, poukinEntry, 0, 0, em, 0, 0, 0, 0, other);
  })

  // Function to display the stats for 22 August 22
  twentyTwoAugust22.addEventListener("click", () => {
    let poukinEntry = datas["2022"]["poukin"]["august"]["entry"][14];
    progress(0, 0, 0, 0, other, 0, 0, 0, 0, other, 0, 0, 0, 0, other, 0, poukinEntry, 0, 0, em, 0, 0, 0, 0, other);
  })

  // Function to display the stats for 23 August 22
  twentyThreeAugust22.addEventListener("click", () => {
    let poukinEntry = datas["2022"]["poukin"]["august"]["entry"][15];
    progress(0, 0, 0, 0, other, 0, 0, 0, 0, other, 0, 0, 0, 0, other, 0, poukinEntry, 0, 0, em, 0, 0, 0, 0, other);
  })

  // Function to display the stats for 31 August 22
  thirtyOneAugust22.addEventListener("click", () => {
    let poukinScan = datas["2022"]["poukin"]["august"]["scan"][16];
    progress(0, 0, 0, 0, abs, 0, 0, 0, 0, abs, 0, 0, 0, 0, abs, poukinScan, 0, 0, 0, em, 0, 0, 0, 0, abs);
  })

  // Function to Trigger the Display of September 22 Data Entry Stats
  september22.addEventListener("click", () => {
    displayProgress(september22Content);
    removeActiveData();
    progress(angouchaSep22ScanTotal, angouchaSep22EntryTotal, angouchaSep22PdfTotal, angouchaSep22PrintTotal, em, chetanSep22ScanTotal, chetanSep22EntryTotal, chetanSep22PdfTotal, chetanSep22PrintTotal, em, kishanSep22ScanTotal, kishanSep22EntryTotal,  kishanSep22PdfTotal, kishanSep22PrintTotal, em, poukinSep22ScanTotal, poukinSep22EntryTotal, poukinSep22PdfTotal, poukinSep22PrintTotal, em, rohelSep22ScanTotal, rohelSep22EntryTotal, rohelSep22PdfTotal, rohelSep22PrintTotal, em);
  })

  // Function to display the stats for 01 September 22
  oneSeptember22.addEventListener("click", () => {
    let poukinScan = datas["2022"]["poukin"]["september"]["scan"][0];
    progress(0, 0, 0, 0, other, 0, 0, 0, 0, other, 0, 0, 0, 0, other, poukinScan, 0, 0, 0, em, 0, 0, 0, 0, other);
  })

  // Function to display the stats for 02 September 22
  twoSeptember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["september"]["pdf"][1];
    let kishanEntry = datas["2022"]["kishan"]["september"]["entry"][1];
    let poukinEntry = datas["2022"]["poukin"]["september"]["entry"][1];
    let rohelEntry = datas["2022"]["rohel"]["september"]["entry"][1];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, 0, 0, other, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 03 September 22
  threeSeptember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["september"]["pdf"][2];
    let chetanPdf = datas["2022"]["chetan"]["september"]["pdf"][2];
    let kishanEntry = datas["2022"]["kishan"]["september"]["entry"][2];
    let poukinEntry = datas["2022"]["poukin"]["september"]["entry"][2];
    let rohelEntry = datas["2022"]["rohel"]["september"]["entry"][2];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, chetanPdf, 0, other, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 05 September 22
  fiveSeptember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["september"]["pdf"][3];
    let chetanPdf = datas["2022"]["chetan"]["september"]["pdf"][3];
    let kishanEntry = datas["2022"]["kishan"]["september"]["entry"][3];
    let poukinEntry = datas["2022"]["poukin"]["september"]["entry"][3];
    let rohelEntry = datas["2022"]["rohel"]["september"]["entry"][3];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, chetanPdf, 0, em, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 06 September 22
  sixSeptember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["september"]["pdf"][4];
    let chetanEntry = datas["2022"]["chetan"]["september"]["entry"][4];
    let chetanPdf = datas["2022"]["chetan"]["september"]["pdf"][4];
    let kishanEntry = datas["2022"]["kishan"]["september"]["entry"][4];
    let poukinScan = datas["2022"]["poukin"]["september"]["scan"][4];
    let poukinEntry = datas["2022"]["poukin"]["september"]["entry"][4];
    let rohelEntry = datas["2022"]["rohel"]["september"]["entry"][4];
    progress(0, 0, angouchaPdf, 0, em, 0, chetanEntry, chetanPdf, 0, em, 0, kishanEntry, 0, 0, em, poukinScan, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
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
    } else if (td.textContent.includes("Ongoing")) {
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

// Function to display the stats for Holiday Days
otherWork.forEach(date => {
  date.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 0;
  angouchaPdf.innerText = 0;
  angouchaPrint.innerText = 0;
  angouchaRemarks.innerText = "Other Work";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 0;
  chetanPdf.innerText = 0;
  chetanPrint.innerText = 0;
  chetanRemarks.innerText = "Other Work";
  kishanPages.innerText = 0;
  kishanEntry.innerText = 0;
  kishanPdf.innerText = 0;
  kishanPrint.innerText = 0;
  kishanRemarks.innerText = "Other Work";
  poukinPages.innerText = 0;
  poukinEntry.innerText = 0;
  poukinPdf.innerText = 0;
  poukinPrint.innerText = 0;
  poukinRemarks.innerText = "Other Work";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 0;
  rohelPdf.innerText = 0;
  rohelPrint.innerText = 0;
  rohelRemarks.innerText = "Other Work";
  })
})