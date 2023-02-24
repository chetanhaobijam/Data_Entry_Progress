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

// Work Progress Coloring Variables
const bookScan = document.querySelectorAll(".book-scan");
const bookEntry = document.querySelectorAll(".book-entry");
const bookPrint = document.querySelectorAll(".book-print");

// Dates
// March 22 Dates
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

// April 22 Dates
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

// May 22 Dates
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

// June 22 Dates
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

// July 22 Dates
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

// August 22 Dates
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

// September 22 Dates
const september22 = document.querySelector("#september-22");
const september22Content = document.querySelector("#september-22-content");
const oneSeptember22 = document.querySelector("#one-september-22");
const twoSeptember22 = document.querySelector("#two-september-22");
const threeSeptember22 = document.querySelector("#three-september-22");
const fiveSeptember22 = document.querySelector("#five-september-22");
const sixSeptember22 = document.querySelector("#six-september-22");
const sevenSeptember22 = document.querySelector("#seven-september-22");
const eightSeptember22 = document.querySelector("#eight-september-22");
const nineSeptember22 = document.querySelector("#nine-september-22");
const twelveSeptember22 = document.querySelector("#twelve-september-22");
const thirteenSeptember22 = document.querySelector("#thirteen-september-22");
const fourteenSeptember22 = document.querySelector("#fourteen-september-22");
const fifteenSeptember22 = document.querySelector("#fifteen-september-22");
const sixteenSeptember22 = document.querySelector("#sixteen-september-22");
const seventeenSeptember22 = document.querySelector("#seventeen-september-22");
const nineteenSeptember22 = document.querySelector("#nineteen-september-22");
const twentySeptember22 = document.querySelector("#twenty-september-22");
const twentyOneSeptember22 = document.querySelector("#twenty-one-september-22");
const twentyTwoSeptember22 = document.querySelector("#twenty-two-september-22");
const twentyThreeSeptember22 = document.querySelector("#twenty-three-september-22");
const twentyFourSeptember22 = document.querySelector("#twenty-four-september-22");
const twentyNineSeptember22 = document.querySelector("#twenty-nine-september-22");
const thirtySeptember22 = document.querySelector("#thirty-september-22");

// October 22 Dates
const october22 = document.querySelector("#october-22");
const october22Content = document.querySelector("#october-22-content");
const oneOctober22 = document.querySelector("#one-october-22");
const fourOctober22 = document.querySelector("#four-october-22");
const fiveOctober22 = document.querySelector("#five-october-22");
const sixOctober22 = document.querySelector("#six-october-22");
const sevenOctober22 = document.querySelector("#seven-october-22");
const tenOctober22 = document.querySelector("#ten-october-22");
const elevenOctober22 = document.querySelector("#eleven-october-22");
const twelveOctober22 = document.querySelector("#twelve-october-22");
const thirteenOctober22 = document.querySelector("#thirteen-october-22");
const fourteenOctober22 = document.querySelector("#fourteen-october-22");
const seventeenOctober22 = document.querySelector("#seventeen-october-22");
const eighteenOctober22 = document.querySelector("#eighteen-october-22");
const nineteenOctober22 = document.querySelector("#nineteen-october-22");
const twentyOctober22 = document.querySelector("#twenty-october-22");
const twentyOneOctober22 = document.querySelector("#twenty-one-october-22");
const twentyTwoOctober22 = document.querySelector("#twenty-two-october-22");
const twentyFourOctober22 = document.querySelector("#twenty-four-october-22");
const twentySixOctober22 = document.querySelector("#twenty-six-october-22");
const twentyEightOctober22 = document.querySelector("#twenty-eight-october-22");
const twentyNineOctober22 = document.querySelector("#twenty-nine-october-22");
const thirtyOneOctober22 = document.querySelector("#thirty-one-october-22");

// November 22 Dates
const november22 = document.querySelector("#november-22");
const november22Content = document.querySelector("#november-22-content");
const twoNovember22 = document.querySelector("#two-november-22");
const threeNovember22 = document.querySelector("#three-november-22");
const fourNovember22 = document.querySelector("#four-november-22");
const fiveNovember22 = document.querySelector("#five-november-22");
const sevenNovember22 = document.querySelector("#seven-november-22");
const eightNovember22 = document.querySelector("#eight-november-22");
const nineNovember22 = document.querySelector("#nine-november-22");
const tenNovember22 = document.querySelector("#ten-november-22");
const elevenNovember22 = document.querySelector("#eleven-november-22");
const twelveNovember22 = document.querySelector("#twelve-november-22");
const fourteenNovember22 = document.querySelector("#fourteen-november-22");
const fifteenNovember22 = document.querySelector("#fifteen-november-22");
const sixteenNovember22 = document.querySelector("#sixteen-november-22");
const seventeenNovember22 = document.querySelector("#seventeen-november-22");
const eighteenNovember22 = document.querySelector("#eighteen-november-22");
const nineteenNovember22 = document.querySelector("#nineteen-november-22");
const twentyOneNovember22 = document.querySelector("#twenty-one-november-22");
const twentyTwoNovember22 = document.querySelector("#twenty-two-november-22");
const twentyThreeNovember22 = document.querySelector("#twenty-three-november-22");
const twentyFourNovember22 = document.querySelector("#twenty-four-november-22");
const twentyFiveNovember22 = document.querySelector("#twenty-five-november-22");
const twentySixNovember22 = document.querySelector("#twenty-six-november-22");
const twentyEightNovember22 = document.querySelector("#twenty-eight-november-22");
const twentyNineNovember22 = document.querySelector("#twenty-nine-november-22");
const thirtyNovember22 = document.querySelector("#thirty-november-22");

// December 22 Dates
const december22 = document.querySelector("#december-22");
const december22Content = document.querySelector("#december-22-content");
const oneDecember22 = document.querySelector("#one-december-22");
const twoDecember22 = document.querySelector("#two-december-22");
const threeDecember22 = document.querySelector("#three-december-22");
const fiveDecember22 = document.querySelector("#five-december-22");
const sixDecember22 = document.querySelector("#six-december-22");
const sevenDecember22 = document.querySelector("#seven-december-22");
const eightDecember22 = document.querySelector("#eight-december-22");
const nineDecember22 = document.querySelector("#nine-december-22");
const thirteenDecember22 = document.querySelector("#thirteen-december-22");
const fourteenDecember22 = document.querySelector("#fourteen-december-22");
const fifteenDecember22 = document.querySelector("#fifteen-december-22");
const sixteenDecember22 = document.querySelector("#sixteen-december-22");
const seventeenDecember22 = document.querySelector("#seventeen-december-22");
const nineteenDecember22 = document.querySelector("#nineteen-december-22");
const twentyDecember22 = document.querySelector("#twenty-december-22");
const twentyOneDecember22 = document.querySelector("#twenty-one-december-22");
const twentyTwoDecember22 = document.querySelector("#twenty-two-december-22");
const twentyThreeDecember22 = document.querySelector("#twenty-three-december-22");
const twentyFourDecember22 = document.querySelector("#twenty-four-december-22");
const twentySixDecember22 = document.querySelector("#twenty-six-december-22");
const twentySevenDecember22 = document.querySelector("#twenty-seven-december-22");
const twentyEightDecember22 = document.querySelector("#twenty-eight-december-22");
const twentyNineDecember22 = document.querySelector("#twenty-nine-december-22");
const thirtyDecember22 = document.querySelector("#thirty-december-22");
const thirtyOneDecember22 = document.querySelector("#thirty-one-december-22");

// January 23 Dates
const january23 = document.querySelector("#january-23");
const january23Content = document.querySelector("#january-23-content");
const twoJanuary23 = document.querySelector("#two-january-23");
const fiveJanuary23 = document.querySelector("#five-january-23");
const sixJanuary23 = document.querySelector("#six-january-23");
const sevenJanuary23 = document.querySelector("#seven-january-23");
const tenJanuary23 = document.querySelector("#ten-january-23");
const elevenJanuary23 = document.querySelector("#eleven-january-23");
const twelveJanuary23 = document.querySelector("#twelve-january-23");
const thirteenJanuary23 = document.querySelector("#thirteen-january-23");
const sixteenJanuary23 = document.querySelector("#sixteen-january-23");
const seventeenJanuary23 = document.querySelector("#seventeen-january-23");
const eighteenJanuary23 = document.querySelector("#eighteen-january-23");
const nineteenJanuary23 = document.querySelector("#nineteen-january-23");
const twentyJanuary23 = document.querySelector("#twenty-january-23");
const twentyOneJanuary23 = document.querySelector("#twenty-one-january-23");
const twentyThreeJanuary23 = document.querySelector("#twenty-three-january-23");
const twentyFourJanuary23 = document.querySelector("#twenty-four-january-23");
const twentyFiveJanuary23 = document.querySelector("#twenty-five-january-23");
const twentySevenJanuary23 = document.querySelector("#twenty-seven-january-23");
const twentyEightJanuary23 = document.querySelector("#twenty-eight-january-23");
const thirtyJanuary23 = document.querySelector("#thirty-january-23");
const thirtyOneJanuary23 = document.querySelector("#thirty-one-january-23");

// February 23 Dates
const february23 = document.querySelector("#february-23");
const february23Content = document.querySelector("#february-23-content");
const oneFebruary23 = document.querySelector("#one-february-23");
const twoFebruary23 = document.querySelector("#two-february-23");
const threeFebruary23 = document.querySelector("#three-february-23");
const fourFebruary23 = document.querySelector("#four-february-23");
const sixFebruary23 = document.querySelector("#six-february-23");
const sevenFebruary23 = document.querySelector("#seven-february-23");
const eightFebruary23 = document.querySelector("#eight-february-23");
const nineFebruary23 = document.querySelector("#nine-february-23");
const tenFebruary23 = document.querySelector("#ten-february-23");
const thirteenFebruary23 = document.querySelector("#thirteen-february-23");
const fourteenFebruary23 = document.querySelector("#fourteen-february-23");
const sixteenFebruary23 = document.querySelector("#sixteen-february-23");
const seventeenFebruary23 = document.querySelector("#seventeen-february-23");
const eighteenFebruary23 = document.querySelector("#eighteen-february-23");
const twentyFebruary23 = document.querySelector("#twenty-february-23");
const twentyOneFebruary23 = document.querySelector("#twenty-one-february-23");
const twentyTwoFebruary23 = document.querySelector("#twenty-two-february-23");
const twentyThreeFebruary23 = document.querySelector("#twenty-three-february-23");

const holiday = document.querySelectorAll(".holiday");
const otherWork = document.querySelectorAll(".other-work");
const elecOutage = document.querySelectorAll(".elec-outage");

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
const meet = "Office Meeting";

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
  october22Content.classList.add("hide");
  november22Content.classList.add("hide");
  december22Content.classList.add("hide");
  january23Content.classList.add("hide");
  february23Content.classList.add("hide");
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

  // October 22 Total Data
  let angouchaOct22ScanTotal = total(datas[2022]["angoucha"]["october"]["scan"]);
  let angouchaOct22EntryTotal = total(datas[2022]["angoucha"]["october"]["entry"]);
  let angouchaOct22PdfTotal = total(datas[2022]["angoucha"]["october"]["pdf"]);
  let angouchaOct22PrintTotal = total(datas[2022]["angoucha"]["october"]["print"]);
  let chetanOct22ScanTotal = total(datas[2022]["chetan"]["october"]["scan"]);
  let chetanOct22EntryTotal = total(datas[2022]["chetan"]["october"]["entry"]);
  let chetanOct22PdfTotal = total(datas[2022]["chetan"]["october"]["pdf"]);
  let chetanOct22PrintTotal = total(datas[2022]["chetan"]["october"]["print"]);
  let kishanOct22ScanTotal = total(datas[2022]["kishan"]["october"]["scan"]);
  let kishanOct22EntryTotal = total(datas[2022]["kishan"]["october"]["entry"]);
  let kishanOct22PdfTotal = total(datas[2022]["kishan"]["october"]["pdf"]);
  let kishanOct22PrintTotal = total(datas[2022]["kishan"]["october"]["print"]);
  let poukinOct22ScanTotal = total(datas[2022]["poukin"]["october"]["scan"]);
  let poukinOct22EntryTotal = total(datas[2022]["poukin"]["october"]["entry"]);
  let poukinOct22PdfTotal = total(datas[2022]["poukin"]["october"]["pdf"]);
  let poukinOct22PrintTotal = total(datas[2022]["poukin"]["october"]["print"]);
  let rohelOct22ScanTotal = total(datas[2022]["rohel"]["october"]["scan"]);
  let rohelOct22EntryTotal = total(datas[2022]["rohel"]["october"]["entry"]);
  let rohelOct22PdfTotal = total(datas[2022]["rohel"]["october"]["pdf"]);
  let rohelOct22PrintTotal = total(datas[2022]["rohel"]["october"]["print"]);

  // November 22 Total Data
  let angouchaNov22ScanTotal = total(datas[2022]["angoucha"]["november"]["scan"]);
  let angouchaNov22EntryTotal = total(datas[2022]["angoucha"]["november"]["entry"]);
  let angouchaNov22PdfTotal = total(datas[2022]["angoucha"]["november"]["pdf"]);
  let angouchaNov22PrintTotal = total(datas[2022]["angoucha"]["november"]["print"]);
  let chetanNov22ScanTotal = total(datas[2022]["chetan"]["november"]["scan"]);
  let chetanNov22EntryTotal = total(datas[2022]["chetan"]["november"]["entry"]);
  let chetanNov22PdfTotal = total(datas[2022]["chetan"]["november"]["pdf"]);
  let chetanNov22PrintTotal = total(datas[2022]["chetan"]["november"]["print"]);
  let kishanNov22ScanTotal = total(datas[2022]["kishan"]["november"]["scan"]);
  let kishanNov22EntryTotal = total(datas[2022]["kishan"]["november"]["entry"]);
  let kishanNov22PdfTotal = total(datas[2022]["kishan"]["november"]["pdf"]);
  let kishanNov22PrintTotal = total(datas[2022]["kishan"]["november"]["print"]);
  let poukinNov22ScanTotal = total(datas[2022]["poukin"]["november"]["scan"]);
  let poukinNov22EntryTotal = total(datas[2022]["poukin"]["november"]["entry"]);
  let poukinNov22PdfTotal = total(datas[2022]["poukin"]["november"]["pdf"]);
  let poukinNov22PrintTotal = total(datas[2022]["poukin"]["november"]["print"]);
  let rohelNov22ScanTotal = total(datas[2022]["rohel"]["november"]["scan"]);
  let rohelNov22EntryTotal = total(datas[2022]["rohel"]["november"]["entry"]);
  let rohelNov22PdfTotal = total(datas[2022]["rohel"]["november"]["pdf"]);
  let rohelNov22PrintTotal = total(datas[2022]["rohel"]["november"]["print"]);

  // December 22 Total Data
  let angouchaDec22ScanTotal = total(datas[2022]["angoucha"]["december"]["scan"]);
  let angouchaDec22EntryTotal = total(datas[2022]["angoucha"]["december"]["entry"]);
  let angouchaDec22PdfTotal = total(datas[2022]["angoucha"]["december"]["pdf"]);
  let angouchaDec22PrintTotal = total(datas[2022]["angoucha"]["december"]["print"]);
  let chetanDec22ScanTotal = total(datas[2022]["chetan"]["december"]["scan"]);
  let chetanDec22EntryTotal = total(datas[2022]["chetan"]["december"]["entry"]);
  let chetanDec22PdfTotal = total(datas[2022]["chetan"]["december"]["pdf"]);
  let chetanDec22PrintTotal = total(datas[2022]["chetan"]["december"]["print"]);
  let kishanDec22ScanTotal = total(datas[2022]["kishan"]["december"]["scan"]);
  let kishanDec22EntryTotal = total(datas[2022]["kishan"]["december"]["entry"]);
  let kishanDec22PdfTotal = total(datas[2022]["kishan"]["december"]["pdf"]);
  let kishanDec22PrintTotal = total(datas[2022]["kishan"]["december"]["print"]);
  let poukinDec22ScanTotal = total(datas[2022]["poukin"]["december"]["scan"]);
  let poukinDec22EntryTotal = total(datas[2022]["poukin"]["december"]["entry"]);
  let poukinDec22PdfTotal = total(datas[2022]["poukin"]["december"]["pdf"]);
  let poukinDec22PrintTotal = total(datas[2022]["poukin"]["december"]["print"]);
  let rohelDec22ScanTotal = total(datas[2022]["rohel"]["december"]["scan"]);
  let rohelDec22EntryTotal = total(datas[2022]["rohel"]["december"]["entry"]);
  let rohelDec22PdfTotal = total(datas[2022]["rohel"]["december"]["pdf"]);
  let rohelDec22PrintTotal = total(datas[2022]["rohel"]["december"]["print"]);

  // January 23 Total Data
  let angouchaJan23ScanTotal = total(datas[2023]["angoucha"]["january"]["scan"]);
  let angouchaJan23EntryTotal = total(datas[2023]["angoucha"]["january"]["entry"]);
  let angouchaJan23PdfTotal = total(datas[2023]["angoucha"]["january"]["pdf"]);
  let angouchaJan23PrintTotal = total(datas[2023]["angoucha"]["january"]["print"]);
  let chetanJan23ScanTotal = total(datas[2023]["chetan"]["january"]["scan"]);
  let chetanJan23EntryTotal = total(datas[2023]["chetan"]["january"]["entry"]);
  let chetanJan23PdfTotal = total(datas[2023]["chetan"]["january"]["pdf"]);
  let chetanJan23PrintTotal = total(datas[2023]["chetan"]["january"]["print"]);
  let kishanJan23ScanTotal = total(datas[2023]["kishan"]["january"]["scan"]);
  let kishanJan23EntryTotal = total(datas[2023]["kishan"]["january"]["entry"]);
  let kishanJan23PdfTotal = total(datas[2023]["kishan"]["january"]["pdf"]);
  let kishanJan23PrintTotal = total(datas[2023]["kishan"]["january"]["print"]);
  let poukinJan23ScanTotal = total(datas[2023]["poukin"]["january"]["scan"]);
  let poukinJan23EntryTotal = total(datas[2023]["poukin"]["january"]["entry"]);
  let poukinJan23PdfTotal = total(datas[2023]["poukin"]["january"]["pdf"]);
  let poukinJan23PrintTotal = total(datas[2023]["poukin"]["january"]["print"]);
  let rohelJan23ScanTotal = total(datas[2023]["rohel"]["january"]["scan"]);
  let rohelJan23EntryTotal = total(datas[2023]["rohel"]["january"]["entry"]);
  let rohelJan23PdfTotal = total(datas[2023]["rohel"]["january"]["pdf"]);
  let rohelJan23PrintTotal = total(datas[2023]["rohel"]["january"]["print"]);

  // February 23 Total Data
  let angouchaFeb23ScanTotal = total(datas[2023]["angoucha"]["february"]["scan"]);
  let angouchaFeb23EntryTotal = total(datas[2023]["angoucha"]["february"]["entry"]);
  let angouchaFeb23PdfTotal = total(datas[2023]["angoucha"]["february"]["pdf"]);
  let angouchaFeb23PrintTotal = total(datas[2023]["angoucha"]["february"]["print"]);
  let chetanFeb23ScanTotal = total(datas[2023]["chetan"]["february"]["scan"]);
  let chetanFeb23EntryTotal = total(datas[2023]["chetan"]["february"]["entry"]);
  let chetanFeb23PdfTotal = total(datas[2023]["chetan"]["february"]["pdf"]);
  let chetanFeb23PrintTotal = total(datas[2023]["chetan"]["february"]["print"]);
  let kishanFeb23ScanTotal = total(datas[2023]["kishan"]["february"]["scan"]);
  let kishanFeb23EntryTotal = total(datas[2023]["kishan"]["february"]["entry"]);
  let kishanFeb23PdfTotal = total(datas[2023]["kishan"]["february"]["pdf"]);
  let kishanFeb23PrintTotal = total(datas[2023]["kishan"]["february"]["print"]);
  let poukinFeb23ScanTotal = total(datas[2023]["poukin"]["february"]["scan"]);
  let poukinFeb23EntryTotal = total(datas[2023]["poukin"]["february"]["entry"]);
  let poukinFeb23PdfTotal = total(datas[2023]["poukin"]["february"]["pdf"]);
  let poukinFeb23PrintTotal = total(datas[2023]["poukin"]["february"]["print"]);
  let rohelFeb23ScanTotal = total(datas[2023]["rohel"]["february"]["scan"]);
  let rohelFeb23EntryTotal = total(datas[2023]["rohel"]["february"]["entry"]);
  let rohelFeb23PdfTotal = total(datas[2023]["rohel"]["february"]["pdf"]);
  let rohelFeb23PrintTotal = total(datas[2023]["rohel"]["february"]["print"]);

  // Total Data
  let angouchaTotalScan = oldAngouchaScan + angouchaMar22ScanTotal + angouchaApr22ScanTotal + angouchaMay22ScanTotal  + angouchaJun22ScanTotal + angouchaJul22ScanTotal + angouchaAug22ScanTotal + angouchaSep22ScanTotal + angouchaOct22ScanTotal + angouchaNov22ScanTotal + angouchaDec22ScanTotal + angouchaJan23ScanTotal + angouchaFeb23ScanTotal;
  let angouchaTotalEntry = oldAngouchaEntry + angouchaMar22EntryTotal + angouchaApr22EntryTotal + angouchaMay22EntryTotal + angouchaJun22EntryTotal + angouchaJul22EntryTotal + angouchaAug22EntryTotal + angouchaSep22EntryTotal + angouchaOct22EntryTotal + angouchaNov22EntryTotal + angouchaDec22EntryTotal + angouchaJan23EntryTotal + angouchaFeb23EntryTotal;
  let angouchaTotalPdf = angouchaJun22PdfTotal + angouchaJul22PdfTotal + angouchaAug22PdfTotal + angouchaSep22PdfTotal + angouchaOct22PdfTotal + angouchaNov22PdfTotal + angouchaDec22PdfTotal + angouchaJan23PdfTotal + angouchaFeb23PdfTotal;
  let angouchaTotalPrint = angouchaJun22PrintTotal + angouchaJul22PrintTotal + angouchaAug22PrintTotal + angouchaSep22PrintTotal + angouchaOct22PrintTotal + angouchaNov22PrintTotal + angouchaDec22PrintTotal + angouchaJan23PrintTotal + angouchaFeb23PrintTotal;
  let chetanTotalScan = oldChetanScan + chetanMar22ScanTotal + chetanApr22ScanTotal + chetanMay22ScanTotal + chetanJun22ScanTotal + chetanJul22ScanTotal + chetanAug22ScanTotal + chetanSep22ScanTotal + chetanOct22ScanTotal + chetanNov22ScanTotal + chetanDec22ScanTotal + chetanJan23ScanTotal + chetanFeb23ScanTotal;
  let chetanTotalEntry = oldChetanEntry + chetanMar22EntryTotal + chetanApr22EntryTotal + chetanMay22EntryTotal + chetanJun22EntryTotal + chetanJul22EntryTotal + chetanAug22EntryTotal + chetanSep22EntryTotal + chetanOct22EntryTotal + chetanNov22EntryTotal + chetanDec22EntryTotal + chetanJan23EntryTotal + chetanFeb23EntryTotal;
  let chetanTotalPdf = chetanJun22PdfTotal + chetanJul22PdfTotal + chetanAug22PdfTotal + chetanSep22PdfTotal + chetanOct22PdfTotal + chetanNov22PdfTotal + chetanDec22PdfTotal + chetanJan23PdfTotal + chetanFeb23PdfTotal;
  let chetanTotalPrint = chetanJun22PrintTotal + chetanJul22PrintTotal + chetanAug22PrintTotal + chetanSep22PrintTotal + chetanOct22PrintTotal + chetanNov22PrintTotal + chetanDec22PrintTotal + chetanJan23PrintTotal + chetanFeb23PrintTotal;
  let kishanTotalScan = oldKishanScan + kishanMar22ScanTotal + kishanApr22ScanTotal + kishanMay22ScanTotal + kishanJun22ScanTotal + kishanJul22ScanTotal + kishanAug22ScanTotal + kishanSep22ScanTotal + kishanOct22ScanTotal + kishanNov22ScanTotal + kishanDec22ScanTotal + kishanJan23ScanTotal + kishanFeb23ScanTotal;
  let kishanTotalEntry = oldKishanEntry + kishanMar22EntryTotal + kishanApr22EntryTotal + kishanMay22EntryTotal + kishanJun22EntryTotal + kishanJul22EntryTotal + kishanAug22EntryTotal + kishanSep22EntryTotal + kishanOct22EntryTotal + kishanNov22EntryTotal + kishanDec22EntryTotal + kishanJan23EntryTotal + kishanFeb23EntryTotal;
  let kishanTotalPdf = kishanJun22PdfTotal + kishanJul22PdfTotal + kishanAug22PdfTotal + kishanSep22PdfTotal + kishanOct22PdfTotal + kishanNov22PdfTotal + kishanDec22PdfTotal + kishanJan23PdfTotal + kishanFeb23PdfTotal;
  let kishanTotalPrint = kishanJun22PrintTotal + kishanJul22PrintTotal + kishanAug22PrintTotal + kishanSep22PrintTotal + kishanOct22PrintTotal + kishanNov22PrintTotal + kishanDec22PrintTotal + kishanJan23PrintTotal + kishanFeb23PrintTotal;
  let poukinTotalScan = oldPoukinScan + poukinMar22ScanTotal + poukinApr22ScanTotal + poukinMay22ScanTotal + poukinJun22ScanTotal + poukinJul22ScanTotal + poukinAug22ScanTotal + poukinSep22ScanTotal + poukinOct22ScanTotal + poukinNov22ScanTotal + poukinDec22ScanTotal + poukinJan23ScanTotal + poukinFeb23ScanTotal;
  let poukinTotalEntry = oldPoukinEntry + poukinMar22EntryTotal + poukinApr22EntryTotal + poukinMay22EntryTotal + poukinJun22EntryTotal + poukinJul22EntryTotal + poukinAug22EntryTotal + poukinSep22EntryTotal + poukinOct22EntryTotal + poukinNov22EntryTotal + poukinDec22EntryTotal + poukinJan23EntryTotal + poukinFeb23EntryTotal;
  let poukinTotalPdf = poukinJun22PdfTotal + poukinJul22PdfTotal + poukinAug22PdfTotal + poukinSep22PdfTotal + poukinOct22PdfTotal + poukinNov22PdfTotal + poukinDec22PdfTotal + poukinJan23PdfTotal + poukinFeb23PdfTotal;
  let poukinTotalPrint = poukinJun22PrintTotal +  + poukinJul22PrintTotal + poukinAug22PrintTotal + poukinSep22PrintTotal + poukinOct22PrintTotal + poukinNov22PrintTotal + poukinDec22PrintTotal + poukinJan23PrintTotal + poukinFeb23PrintTotal;
  let rohelTotalScan = oldRohelScan + rohelMar22ScanTotal + rohelApr22ScanTotal + rohelMay22ScanTotal + rohelJun22ScanTotal + rohelJul22ScanTotal + rohelAug22ScanTotal + rohelSep22ScanTotal + rohelOct22ScanTotal + rohelNov22ScanTotal + rohelDec22ScanTotal + rohelJan23ScanTotal + rohelFeb23ScanTotal;
  let rohelTotalEntry = oldRohelEntry + rohelMar22EntryTotal + rohelApr22EntryTotal + rohelMay22EntryTotal + rohelJun22EntryTotal + rohelJul22EntryTotal + rohelAug22EntryTotal + rohelSep22EntryTotal + rohelOct22EntryTotal + rohelNov22EntryTotal + rohelDec22EntryTotal + rohelJan23EntryTotal + rohelFeb23EntryTotal;
  let rohelTotalPdf = rohelJun22PdfTotal + rohelJul22PdfTotal + rohelAug22PdfTotal + rohelSep22PdfTotal + rohelOct22PdfTotal + rohelNov22PdfTotal + rohelDec22PdfTotal + rohelJan23PdfTotal + rohelFeb23PdfTotal;
  let rohelTotalPrint = rohelJun22PrintTotal + rohelJul22PrintTotal + rohelAug22PrintTotal + rohelSep22PrintTotal + rohelOct22PrintTotal + rohelNov22PrintTotal + rohelDec22PrintTotal + rohelJan23PrintTotal + rohelFeb23PrintTotal;
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
    let poukinEntry = datas["2022"]["poukin"]["september"]["entry"][0];
    progress(0, 0, 0, 0, other, 0, 0, 0, 0, other, 0, 0, 0, 0, other, poukinScan, poukinEntry, 0, 0, em, 0, 0, 0, 0, other);
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

  // Function to display the stats for 07 September 22
  sevenSeptember22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["september"]["entry"][5];
    let kishanEntry = datas["2022"]["kishan"]["september"]["entry"][5];
    let poukinEntry = datas["2022"]["poukin"]["september"]["entry"][5];
    let rohelEntry = datas["2022"]["rohel"]["september"]["entry"][5];
    progress(0, 0, 0, 0, em, 0, chetanEntry, 0, 0, em, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 08 September 22
  eightSeptember22.addEventListener("click", () => {
    let angouchaPrint = datas["2022"]["angoucha"]["september"]["print"][6];
    let chetanPdf = datas["2022"]["chetan"]["september"]["pdf"][6];
    let chetanPrint = datas["2022"]["chetan"]["september"]["print"][6];
    let kishanEntry = datas["2022"]["kishan"]["september"]["entry"][6];
    let poukinScan = datas["2022"]["poukin"]["september"]["scan"][6];
    let poukinEntry = datas["2022"]["poukin"]["september"]["entry"][6];
    let rohelEntry = datas["2022"]["rohel"]["september"]["entry"][6];
    progress(0, 0, 0, angouchaPrint, em, 0, 0, chetanPdf, chetanPrint, em, 0, kishanEntry, 0, 0, em, poukinScan, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 09 September 22
  nineSeptember22.addEventListener("click", () => {
    let angouchaPrint = datas["2022"]["angoucha"]["september"]["print"][7];
    let chetanPdf = datas["2022"]["chetan"]["september"]["pdf"][7];
    let chetanPrint = datas["2022"]["chetan"]["september"]["print"][7];
    let poukinScan = datas["2022"]["poukin"]["september"]["scan"][7];
    let poukinEntry = datas["2022"]["poukin"]["september"]["entry"][7];
    let rohelEntry = datas["2022"]["rohel"]["september"]["entry"][7];
    progress(0, 0, 0, angouchaPrint, em, 0, 0, chetanPdf, chetanPrint, em, 0, 0, 0, 0, abs, poukinScan, poukinEntry, 0, 0, `Entry completed for Book 1990-91`, 0, rohelEntry, 0, 0, `Entry completed for Book 1992-93`);
  })

  // Function to display the stats for 12 September 22
  twelveSeptember22.addEventListener("click", () => {
    let angouchaPrint = datas["2022"]["angoucha"]["september"]["print"][8];
    let kishanPdf = datas["2022"]["kishan"]["september"]["pdf"][8];
    let poukinScan = datas["2022"]["poukin"]["september"]["scan"][8];
    let poukinEntry = datas["2022"]["poukin"]["september"]["entry"][8];
    let rohelScan = datas["2022"]["rohel"]["september"]["scan"][8];
    progress(0, 0, 0, angouchaPrint, em, 0, 0, 0, 0, other, 0, 0, kishanPdf, 0, em, poukinScan, poukinEntry, 0, 0, `Scan completed for Book 1993-94`, rohelScan, 0, 0, 0, `Scan started for Book 1994-95`);
  })

  // Function to display the stats for 13 September 22
  thirteenSeptember22.addEventListener("click", () => {
    let angouchaPrint = datas["2022"]["angoucha"]["september"]["print"][9];
    let chetanPdf = datas["2022"]["chetan"]["september"]["pdf"][9];
    let kishanPdf = datas["2022"]["kishan"]["september"]["pdf"][9];
    let poukinEntry = datas["2022"]["poukin"]["september"]["entry"][9];
    let rohelScan = datas["2022"]["rohel"]["september"]["scan"][9];
    progress(0, 0, 0, angouchaPrint, em, 0, 0, chetanPdf, 0, em, 0, 0, kishanPdf, 0, em, 0, poukinEntry, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 14 September 22
  fourteenSeptember22.addEventListener("click", () => {
    let angouchaPrint = datas["2022"]["angoucha"]["september"]["print"][10];
    let chetanPdf = datas["2022"]["chetan"]["september"]["pdf"][10];
    let chetanPrint = datas["2022"]["chetan"]["september"]["print"][10];
    let poukinEntry = datas["2022"]["poukin"]["september"]["entry"][10];
    let poukinPrint = datas["2022"]["poukin"]["september"]["print"][10];
    let rohelScan = datas["2022"]["rohel"]["september"]["scan"][10];
    progress(0, 0, 0, angouchaPrint, elec, 0, 0, chetanPdf, chetanPrint, elec, 0, 0, 0, 0, abs, 0, poukinEntry, 0, poukinPrint, elec, rohelScan, 0, 0, 0, elec);
  })

  // Function to display the stats for 15 September 22
  fifteenSeptember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["september"]["pdf"][11];
    let chetanEntry = datas["2022"]["chetan"]["september"]["entry"][11];
    let kishanScan = datas["2022"]["kishan"]["september"]["scan"][11];
    let poukinEntry = datas["2022"]["poukin"]["september"]["entry"][11];
    let rohelScan = datas["2022"]["rohel"]["september"]["scan"][11];
    progress(0, 0, angouchaPdf, 0, em, 0, chetanEntry, 0, 0, em, kishanScan, 0, 0, 0, em, 0, poukinEntry, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 16 September 22
  sixteenSeptember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["september"]["pdf"][12];
    let angouchaPrint = datas["2022"]["angoucha"]["september"]["print"][12];
    let chetanPrint = datas["2022"]["chetan"]["september"]["print"][12];
    let kishanScan = datas["2022"]["kishan"]["september"]["scan"][12];
    let poukinEntry = datas["2022"]["poukin"]["september"]["entry"][12];
    let rohelScan = datas["2022"]["rohel"]["september"]["scan"][12];
    progress(0, 0, angouchaPdf, angouchaPrint, em, 0, 0, 0, chetanPrint, em, kishanScan, 0, 0, 0, em, 0, poukinEntry, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 17 September 22
  seventeenSeptember22.addEventListener("click", () => {
    let angouchaPrint = datas["2022"]["angoucha"]["september"]["print"][13];
    let chetanScan = datas["2022"]["chetan"]["september"]["scan"][13];
    let chetanEntry = datas["2022"]["chetan"]["september"]["entry"][13];
    let chetanPdf = datas["2022"]["chetan"]["september"]["pdf"][13];
    let chetanPrint = datas["2022"]["chetan"]["september"]["print"][13];
    let kishanScan = datas["2022"]["kishan"]["september"]["scan"][13];
    let poukinScan = datas["2022"]["poukin"]["september"]["scan"][13];
    let poukinEntry = datas["2022"]["poukin"]["september"]["entry"][13];
    let rohelScan = datas["2022"]["rohel"]["september"]["scan"][13];
    progress(0, 0, 0, angouchaPrint, em, chetanScan, chetanEntry, chetanPdf, chetanPrint, em, kishanScan, 0, 0, 0, `Scan completed for Book 1995-96`, poukinScan, poukinEntry, 0, 0, `Entry completed for Book 1993-94`, rohelScan, 0, 0, 0, `Scan completed for Book 1994-95`);
  })

  // Function to display the stats for 19 September 22
  nineteenSeptember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["september"]["pdf"][14];
    let chetanPdf = datas["2022"]["chetan"]["september"]["pdf"][14];
    let kishanEntry = datas["2022"]["kishan"]["september"]["entry"][14];
    let poukinScan = datas["2022"]["poukin"]["september"]["scan"][14];
    let rohelEntry = datas["2022"]["rohel"]["september"]["entry"][14];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, chetanPdf, 0, em, 0, kishanEntry, 0, 0, em, poukinScan, 0, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 20 September 22
  twentySeptember22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["september"]["pdf"][15];
    let kishanEntry = datas["2022"]["kishan"]["september"]["entry"][15];
    let poukinScan = datas["2022"]["poukin"]["september"]["scan"][15];
    let rohelEntry = datas["2022"]["rohel"]["september"]["entry"][15];
    progress(0, 0, 0, 0, other, 0, 0, chetanPdf, 0, em, 0, kishanEntry, 0, 0, em, poukinScan, 0, 0, 0, em, 0, rohelEntry, 0, 0, other);
  })

  // Function to display the stats for 21 September 22
  twentyOneSeptember22.addEventListener("click", () => {
    let poukinScan = datas["2022"]["poukin"]["september"]["scan"][16];
    let poukinEntry = datas["2022"]["poukin"]["september"]["entry"][16];
    progress(0, 0, 0, 0, `Holiday`, 0, 0, 0, 0, `Holiday`, 0, 0, 0, 0, `Holiday`, poukinScan, poukinEntry, 0, 0, em, 0, 0, 0, 0, `Holiday`);
  })

  // Function to display the stats for 22 September 22
  twentyTwoSeptember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["september"]["pdf"][17];
    let angouchaPrint = datas["2022"]["angoucha"]["september"]["print"][17];
    let chetanPdf = datas["2022"]["chetan"]["september"]["pdf"][17];
    let kishanEntry = datas["2022"]["kishan"]["september"]["entry"][17];
    let poukinScan = datas["2022"]["poukin"]["september"]["scan"][17];
    let poukinEntry = datas["2022"]["poukin"]["september"]["entry"][17];
    let rohelEntry = datas["2022"]["rohel"]["september"]["entry"][17];
    progress(0, 0, angouchaPdf, angouchaPrint, em, 0, 0, chetanPdf, 0, em, 0, kishanEntry, 0, 0, em, poukinScan, poukinEntry, 0, 0, `Scanning Completed for Book 1996-97`, 0, rohelEntry, 0, 0, other);
  })

  // Function to display the stats for 23 September 22
  twentyThreeSeptember22.addEventListener("click", () => {
    let angouchaPrint = datas["2022"]["angoucha"]["september"]["print"][18];
    let chetanPdf = datas["2022"]["chetan"]["september"]["pdf"][18];
    let kishanEntry = datas["2022"]["kishan"]["september"]["entry"][18];
    let poukinEntry = datas["2022"]["poukin"]["september"]["entry"][18];
    let rohelEntry = datas["2022"]["rohel"]["september"]["entry"][18];
    progress(0, 0, 0, angouchaPrint, em, 0, 0, chetanPdf, 0, em, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, other);
  })

  // Function to display the stats for 24 September 22
  twentyFourSeptember22.addEventListener("click", () => {
    let angouchaPrint = datas["2022"]["angoucha"]["september"]["print"][19];
    let chetanPdf = datas["2022"]["chetan"]["september"]["pdf"][19];
    let chetanPrint = datas["2022"]["chetan"]["september"]["print"][19];
    let kishanEntry = datas["2022"]["kishan"]["september"]["entry"][19];
    let poukinEntry = datas["2022"]["poukin"]["september"]["entry"][19];
    let rohelEntry = datas["2022"]["rohel"]["september"]["entry"][19];
    progress(0, 0, 0, angouchaPrint, em, 0, 0, chetanPdf, chetanPrint, em, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 29 September 22
  twentyNineSeptember22.addEventListener("click", () => {
    let angouchaPrint = datas["2022"]["angoucha"]["september"]["print"][20];
    let chetanEntry = datas["2022"]["chetan"]["september"]["entry"][20];
    let kishanEntry = datas["2022"]["kishan"]["september"]["entry"][20];
    let poukinEntry = datas["2022"]["poukin"]["september"]["entry"][20];
    let rohelEntry = datas["2022"]["rohel"]["september"]["entry"][20];
    progress(0, 0, 0, angouchaPrint, em, 0, chetanEntry, 0, 0, em, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 30 September 22
  thirtySeptember22.addEventListener("click", () => {
    let poukinEntry = datas["2022"]["poukin"]["september"]["entry"][21];
    progress(0, 0, 0, 0, `Office Holiday`, 0, 0, 0, 0, `Office Holiday`, 0, 0, 0, 0, `Office Holiday`, 0, poukinEntry, 0, 0, em, 0, 0, 0, 0, `Office Holiday`);
  })

  // Function to Trigger the Display of October 22 Data Entry Stats
  october22.addEventListener("click", () => {
    displayProgress(october22Content);
    removeActiveData();
    progress(angouchaOct22ScanTotal, angouchaOct22EntryTotal, angouchaOct22PdfTotal, angouchaOct22PrintTotal, em, chetanOct22ScanTotal, chetanOct22EntryTotal, chetanOct22PdfTotal, chetanOct22PrintTotal, em, kishanOct22ScanTotal, kishanOct22EntryTotal,  kishanOct22PdfTotal, kishanOct22PrintTotal, em, poukinOct22ScanTotal, poukinOct22EntryTotal, poukinOct22PdfTotal, poukinOct22PrintTotal, em, rohelOct22ScanTotal, rohelOct22EntryTotal, rohelOct22PdfTotal, rohelOct22PrintTotal, em);
  })

  // Function to display the stats for 01 October 22
  oneOctober22.addEventListener("click", () => {
    let angouchaPrint = datas["2022"]["angoucha"]["october"]["print"][0];
    let chetanPrint = datas["2022"]["chetan"]["october"]["print"][0];
    let kishanEntry = datas["2022"]["kishan"]["october"]["entry"][0];
    let poukinEntry = datas["2022"]["poukin"]["october"]["entry"][0];
    let rohelEntry = datas["2022"]["rohel"]["october"]["entry"][0];
    progress(0, 0, 0, angouchaPrint, em, 0, 0, 0, chetanPrint, em, 0, kishanEntry, 0, 0, `Completed Entry of Book 1995-96`, 0, poukinEntry, 0, 0, `Completed Entry of Book 1996-97`, 0, rohelEntry, 0, 0, `Completed Entry of Book 1994-95`);
  })

  // Function to display the stats for 04 October 22
  fourOctober22.addEventListener("click", () => {
    progress(0, 0, 0, 0, abs, 0, 0, 0, 0, abs, 0, 0, 0, 0, abs, 0, 0, 0, 0, `Leave`, 0, 0, 0, 0, abs);
  })

  // Function to display the stats for 05 October 22
  fiveOctober22.addEventListener("click", () => {
    let angouchaPrint = datas["2022"]["angoucha"]["october"]["print"][1];
    let chetanPrint = datas["2022"]["chetan"]["october"]["print"][1];
    let kishanScan = datas["2022"]["kishan"]["october"]["scan"][1];
    let rohelScan = datas["2022"]["rohel"]["october"]["scan"][1];
    progress(0, 0, 0, angouchaPrint, `Print completed for Book 1995-96`, 0, 0, 0, chetanPrint, `Print Completed for Book 1994-95`, kishanScan, 0, 0, 0, `Scanning Started for Book 1997-98`, 0, 0, 0, 0, `Leave`, rohelScan, 0, 0, 0, `Scanning Started for Book 1998-99`);
  })

  // Function to display the stats for 06 October 22
  sixOctober22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["october"]["pdf"][2];
    let chetanPdf = datas["2022"]["chetan"]["october"]["pdf"][2];
    let kishanScan = datas["2022"]["kishan"]["october"]["scan"][2];
    let rohelScan = datas["2022"]["rohel"]["october"]["scan"][2];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, chetanPdf, 0, em, kishanScan, 0, 0, 0, em, 0, 0, 0, 0, `Leave`, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 07 October 22
  sevenOctober22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["october"]["pdf"][3];
    let kishanScan = datas["2022"]["kishan"]["october"]["scan"][3];
    let rohelScan = datas["2022"]["rohel"]["october"]["scan"][3];
    progress(0, 0, 0, 0, other, 0, 0, chetanPdf, 0, em, kishanScan, 0, 0, 0, em, 0, 0, 0, 0, `Leave`, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 10 October 22
  tenOctober22.addEventListener("click", () => {
    progress(0, 0, 0, 0, `Office Foundation Day`, 0, 0, 0, 0, abs, 0, 0, 0, 0, `Office Foundation Day`, 0, 0, 0, 0, `Leave`, 0, 0, 0, 0, `Office Foundation Day`);
  })

  // Function to display the stats for 11 October 22
  elevenOctober22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["october"]["pdf"][4];
    let rohelScan = datas["2022"]["rohel"]["october"]["scan"][4];
    progress(0, 0, 0, 0, other, 0, 0, chetanPdf, 0, em, 0, 0, 0, 0, abs, 0, 0, 0, 0, `Leave`, rohelScan, 0, 0, 0, `Scanning Completed for Book 1998-99`);
  })

  // Function to display the stats for 12 October 22
  twelveOctober22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["october"]["pdf"][5];
    let kishanScan = datas["2022"]["kishan"]["october"]["scan"][5];
    progress(0, 0, 0, 0, other, 0, 0, chetanPdf, 0, em, kishanScan, 0, 0, 0, `Scanning Completed for Book 1997-98`, 0, 0, 0, 0, `Gazette ID Verification`, 0, 0, 0, 0, `No Work Done`);
  })

  // Function to display the stats for 13 October 22
  thirteenOctober22.addEventListener("click", () => {
    let chetanScan = datas["2022"]["chetan"]["october"]["scan"][6];
    let chetanEntry = datas["2022"]["chetan"]["october"]["entry"][6];
    let chetanPdf = datas["2022"]["chetan"]["october"]["pdf"][6];
    let chetanPrint = datas["2022"]["chetan"]["october"]["print"][6];
    let kishanPdf = datas["2022"]["kishan"]["october"]["pdf"][6];
    let poukinScan = datas["2022"]["poukin"]["october"]["scan"][6];
    let rohelEntry = datas["2022"]["rohel"]["october"]["entry"][6];
    progress(0, 0, 0, 0, other, chetanScan, chetanEntry, chetanPdf, chetanPrint, `PDF Completed for Book 1998-99`, 0, 0, kishanPdf, 0, `PDF Completed for Book 1997-98`, poukinScan, 0, 0, 0, `Gazette ID Verification, Scanning Started for Book 1999-2000`, 0, rohelEntry, 0, 0, other);
  })

  // Function to display the stats for 14 October 22
  fourteenOctober22.addEventListener("click", () => {
    let chetanPrint = datas["2022"]["chetan"]["october"]["print"][7];
    let kishanEntry = datas["2022"]["kishan"]["october"]["entry"][7];
    let poukinScan = datas["2022"]["poukin"]["october"]["scan"][7];
    let rohelEntry = datas["2022"]["rohel"]["october"]["entry"][7];
    progress(0, 0, 0, 0, other, 0, 0, 0, chetanPrint, `Other Gazette Work; Print Completed for Book 1996-97`, 0, kishanEntry, 0, 0, `Other Gazette Work`, poukinScan, 0, 0, 0, em, 0, rohelEntry, 0, 0, other);
  })

  // Function to display the stats for 17 October 22
  seventeenOctober22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["october"]["entry"][8];
    let chetanPdf = datas["2022"]["chetan"]["october"]["pdf"][8];
    let poukinScan = datas["2022"]["poukin"]["october"]["scan"][8];
    let rohelEntry = datas["2022"]["rohel"]["october"]["entry"][8];
    progress(0, 0, 0, 0, other, 0, chetanEntry, chetanPdf, 0, em, 0, 0, 0, 0, abs, poukinScan, 0, 0, 0, em, 0, rohelEntry, 0, 0, other);
  })

  // Function to display the stats for 18 October 22
  eighteenOctober22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["october"]["entry"][9];
    let poukinScan = datas["2022"]["poukin"]["october"]["scan"][9];
    let rohelEntry = datas["2022"]["rohel"]["october"]["entry"][9];
    progress(0, 0, 0, 0, other, 0, chetanEntry, 0, 0, `Training`, 0, 0, 0, 0, abs, poukinScan, 0, 0, 0, em, 0, rohelEntry, 0, 0, other);
  })

  // Function to display the stats for 19 October 22
  nineteenOctober22.addEventListener("click", () => {
    let poukinScan = datas["2022"]["poukin"]["october"]["scan"][10];
    progress(0, 0, 0, 0, other, 0, 0, 0, 0, other, 0, 0, 0, 0, other, poukinScan, 0, 0, 0, `Scan Completed for Book 1999-2000`, 0, 0, 0, 0, other);
  })

  // Function to display the stats for 20 October 22
  twentyOctober22.addEventListener("click", () => {
    progress(0, 0, 0, 0, `Office Function`, 0, 0, 0, 0, `Office Function`, 0, 0, 0, 0, `Office Function`, 0, 0, 0, 0, `Office Function`, 0, 0, 0, 0, `Office Function`);
  })

  // Function to display the stats for 21 October 22
  twentyOneOctober22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["october"]["pdf"][11];
    let poukinEntry = datas["2022"]["poukin"]["october"]["entry"][11];
    let rohelEntry = datas["2022"]["rohel"]["october"]["entry"][11];
    progress(0, 0, 0, 0, other, 0, 0, chetanPdf, 0, `Training`, 0, 0, 0, 0, abs, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 22 October 22
  twentyTwoOctober22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["october"]["pdf"][12];
    let kishanEntry = datas["2022"]["kishan"]["october"]["entry"][12];
    let poukinEntry = datas["2022"]["poukin"]["october"]["entry"][12];
    let rohelEntry = datas["2022"]["rohel"]["october"]["entry"][12];
    progress(0, 0, 0, 0, other, 0, 0, chetanPdf, 0, em, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 24 October 22
  twentyFourOctober22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["october"]["pdf"][13];
    let chetanEntry = datas["2022"]["chetan"]["october"]["entry"][13];
    let chetanPdf = datas["2022"]["chetan"]["october"]["pdf"][13];
    let kishanEntry = datas["2022"]["kishan"]["october"]["entry"][13];
    let poukinEntry = datas["2022"]["poukin"]["october"]["entry"][13];
    let rohelEntry = datas["2022"]["rohel"]["october"]["entry"][13];
    progress(0, 0, angouchaPdf, 0, other, 0, chetanEntry, chetanPdf, 0, em, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 26 October 22
  twentySixOctober22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["october"]["entry"][14];
    let chetanPdf = datas["2022"]["chetan"]["october"]["pdf"][14];
    let chetanPrint = datas["2022"]["chetan"]["october"]["print"][14];
    let poukinEntry = datas["2022"]["poukin"]["october"]["entry"][14];
    progress(0, 0, 0, 0, other, 0, chetanEntry, chetanPdf, chetanPrint, em, 0, 0, 0, 0, abs, 0, poukinEntry, 0, 0, em, 0, 0, 0, 0, abs);
  })

   // Function to display the stats for 28 October 22
   twentyEightOctober22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["october"]["entry"][15];
    let chetanPrint = datas["2022"]["chetan"]["october"]["print"][15];
    let kishanEntry = datas["2022"]["kishan"]["october"]["entry"][15];
    let poukinEntry = datas["2022"]["poukin"]["october"]["entry"][15];
    let rohelEntry = datas["2022"]["rohel"]["october"]["entry"][15];
    progress(0, 0, 0, 0, abs, 0, chetanEntry, 0, chetanPrint, em, 0, kishanEntry, 0, 0, `Entry Completed`, 0, poukinEntry, 0, 0, `Entry Completed`, 0, rohelEntry, 0, 0, `Entry Completed`);
  })

  // Function to display the stats for 29 October 22
  twentyNineOctober22.addEventListener("click", () => {
    let chetanPrint = datas["2022"]["chetan"]["october"]["print"][16];
    progress(0, 0, 0, 0, abs, 0, 0, 0, chetanPrint, `Printing Completed for Book 1998-99`, 0, 0, 0, 0, other, 0, 0, 0, 0, `Downloaded 2012 Gazettes`, 0, 0, 0, 0, abs);
  })

  // Function to display the stats for 31 October 22
  thirtyOneOctober22.addEventListener("click", () => {
    let chetanPrint = datas["2022"]["chetan"]["october"]["print"][17];
    let poukinPrint = datas["2022"]["poukin"]["october"]["print"][17];
    let rohelPrint = datas["2022"]["rohel"]["october"]["print"][17];
    progress(0, 0, 0, 0, abs, 0, 0, 0, chetanPrint, `Printing Completed for Book 1999-2000`, 0, 0, 0, 0, abs, 0, 0, 0, poukinPrint, `Printing Completed`, 0, 0, 0, rohelPrint, `Printing Completed`);
  })

  // Function to Trigger the Display of November 22 Data Entry Stats
  november22.addEventListener("click", () => {
    displayProgress(november22Content);
    removeActiveData();
    progress(angouchaNov22ScanTotal, angouchaNov22EntryTotal, angouchaNov22PdfTotal, angouchaNov22PrintTotal, em, chetanNov22ScanTotal, chetanNov22EntryTotal, chetanNov22PdfTotal, chetanNov22PrintTotal, em, kishanNov22ScanTotal, kishanNov22EntryTotal,  kishanNov22PdfTotal, kishanNov22PrintTotal, em, poukinNov22ScanTotal, poukinNov22EntryTotal, poukinNov22PdfTotal, poukinNov22PrintTotal, em, rohelNov22ScanTotal, rohelNov22EntryTotal, rohelNov22PdfTotal, rohelNov22PrintTotal, em);
  })

  // Function to display the stats for 02 November 22
  twoNovember22.addEventListener("click", () => {
    progress(0, 0, 0, 0, meet, 0, 0, 0, 0, meet, 0, 0, 0, 0, meet, 0, 0, 0, 0, meet, 0, 0, 0, 0, meet);
  })

  // Function to display the stats for 03 November 22
  threeNovember22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["november"]["entry"][0];
    let kishanScan = datas["2022"]["kishan"]["november"]["scan"][0];
    let poukinScan = datas["2022"]["poukin"]["november"]["scan"][0];
    progress(0, 0, 0, 0, abs, 0, chetanEntry, 0, 0, `Entry for year 2012`, kishanScan, 0, 0, 0, `Scan started for Book 2000-01`, poukinScan, 0, 0, 0, `Scan started for Book 2001-02`, 0, 0, 0, 0, other);
  })

  // Function to display the stats for 04 November 22
  fourNovember22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["november"]["entry"][1];
    let chetanPdf = datas["2022"]["chetan"]["november"]["pdf"][1];
    let kishanScan = datas["2022"]["kishan"]["november"]["scan"][1];
    let poukinScan = datas["2022"]["poukin"]["november"]["scan"][1];
    let rohelScan = datas["2022"]["rohel"]["november"]["scan"][1];
    progress(0, 0, 0, 0, abs, 0, chetanEntry, chetanPdf, 0, em, kishanScan, 0, 0, 0, em, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, `Scan started for Book 2002-03`);
  })

  // Function to display the stats for 05 November 22
  fiveNovember22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["november"]["pdf"][2];
    let kishanScan = datas["2022"]["kishan"]["november"]["scan"][2];
    let poukinScan = datas["2022"]["poukin"]["november"]["scan"][2];
    let rohelScan = datas["2022"]["rohel"]["november"]["scan"][2];
    progress(0, 0, 0, 0, abs, 0, 0, chetanPdf, 0, em, kishanScan, 0, 0, 0, em, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 07 November 22
  sevenNovember22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["november"]["pdf"][3];
    let kishanScan = datas["2022"]["kishan"]["november"]["scan"][3];
    let poukinScan = datas["2022"]["poukin"]["november"]["scan"][3];
    progress(0, 0, 0, 0, abs, 0, 0, chetanPdf, 0, em, kishanScan, 0, 0, 0, `Scan completed for Book 2000-01`, poukinScan, 0, 0, 0, `Scan completed for Book 2001-02`, 0, 0, 0, 0, abs);
  })
  
  // Function to display the stats for 08 November 22
  eightNovember22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["november"]["pdf"][4];
    let kishanPdf = datas["2022"]["kishan"]["november"]["pdf"][4];
    let rohelScan = datas["2022"]["rohel"]["november"]["scan"][4];
    progress(0, 0, 0, 0, abs, 0, 0, chetanPdf, 0, `PDF completed for Book 2000-01`, 0, 0, kishanPdf, 0, em, 0, 0, 0, 0, abs, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 09 November 22
  nineNovember22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["november"]["pdf"][5];
    let kishanEntry = datas["2022"]["kishan"]["november"]["entry"][5];
    let kishanPdf = datas["2022"]["kishan"]["november"]["pdf"][5];
    let poukinEntry = datas["2022"]["poukin"]["november"]["entry"][5];
    let rohelScan = datas["2022"]["rohel"]["november"]["scan"][5];
    progress(0, 0, 0, 0, abs, 0, 0, chetanPdf, 0, `PDF completed for Book 2001-02`, 0, kishanEntry, kishanPdf, 0, `Entry started for Book 2000-01`, 0, poukinEntry, 0, 0, `Entry started for Book 2001-02`, rohelScan, 0, 0, 0, `Scan completed for Book 2002-03`);
  })

  // Function to display the stats for 10 November 22
  tenNovember22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["november"]["pdf"][6];
    let kishanEntry = datas["2022"]["kishan"]["november"]["entry"][6];
    let poukinEntry = datas["2022"]["poukin"]["november"]["entry"][6];
    let rohelEntry = datas["2022"]["rohel"]["november"]["entry"][6];
    progress(0, 0, 0, 0, abs, 0, 0, chetanPdf, 0, `PDF completed for Book 2002-03`, 0, kishanEntry, 0, 0, `CPU Problem`, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 11 November 22
  elevenNovember22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["november"]["entry"][7];
    let kishanEntry = datas["2022"]["kishan"]["november"]["entry"][7];
    let poukinEntry = datas["2022"]["poukin"]["november"]["entry"][7];
    let rohelEntry = datas["2022"]["rohel"]["november"]["entry"][7];
    progress(0, 0, 0, 0, abs, 0, chetanEntry, 0, 0, em, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 12 November 22
  twelveNovember22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["november"]["entry"][8];
    let kishanEntry = datas["2022"]["kishan"]["november"]["entry"][8];
    let poukinEntry = datas["2022"]["poukin"]["november"]["entry"][8];
    let rohelEntry = datas["2022"]["rohel"]["november"]["entry"][8];
    progress(0, 0, 0, 0, abs, 0, chetanEntry, 0, 0, `Network problem`, 0, kishanEntry, 0, 0, `Network problem`, 0, poukinEntry, 0, 0, `Network problem`, 0, rohelEntry, 0, 0, `Network problem`);
  })

  // Function to display the stats for 14 November 22
  fourteenNovember22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["november"]["entry"][9];
    let kishanEntry = datas["2022"]["kishan"]["november"]["entry"][9];
    let poukinEntry = datas["2022"]["poukin"]["november"]["entry"][9];
    let rohelEntry = datas["2022"]["rohel"]["november"]["entry"][9];
    progress(0, 0, 0, 0, abs, 0, chetanEntry, 0, 0, em, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 15 November 22
  fifteenNovember22.addEventListener("click", () => {
    progress(0, 0, 0, 0, abs, 0, 0, 0, 0, `Office Picnic`, 0, 0, 0, 0, `Office Picnic`, 0, 0, 0, 0, `Office Picnic`, 0, 0, 0, 0, `Office Picnic`);
  })

  // Function to display the stats for 16 November 22
  sixteenNovember22.addEventListener("click", () => {
    let kishanEntry = datas["2022"]["kishan"]["november"]["entry"][10];
    let poukinEntry = datas["2022"]["poukin"]["november"]["entry"][10];
    let rohelEntry = datas["2022"]["rohel"]["november"]["entry"][10];
    progress(0, 0, 0, 0, abs, 0, 0, 0, 0, abs, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 17 November 22
  seventeenNovember22.addEventListener("click", () => {
    let chetanPrint = datas["2022"]["chetan"]["november"]["print"][11];
    let kishanEntry = datas["2022"]["kishan"]["november"]["entry"][11];
    let poukinEntry = datas["2022"]["poukin"]["november"]["entry"][11];
    let rohelEntry = datas["2022"]["rohel"]["november"]["entry"][11];
    progress(0, 0, 0, 0, abs, 0, 0, 0, chetanPrint, `Sangai Festival Work`, 0, kishanEntry, 0, 0, `Sangai Festival Work`, 0, poukinEntry, 0, 0, `Sangai Festival Work`, 0, rohelEntry, 0, 0, `Sangai Festival Work`);
  })

  // Function to display the stats for 18 November 22
  eighteenNovember22.addEventListener("click", () => {
    let poukinEntry = datas["2022"]["poukin"]["november"]["entry"][12];
    progress(0, 0, 0, 0, abs, 0, 0, 0, 0, `Sangai Festival Work`, 0, 0, 0, 0, `Sangai Festival Work`, 0, poukinEntry, 0, 0, `Sangai Festival Work`, 0, 0, 0, 0, `Sangai Festival Work`);
  })

  // Function to display the stats for 19 November 22
  nineteenNovember22.addEventListener("click", () => {
    progress(0, 0, 0, 0, abs, 0, 0, 0, 0, `Sangai Festival Work`, 0, 0, 0, 0, `Sangai Festival Work`, 0, 0, 0, 0, `Sangai Festival Work`, 0, 0, 0, 0, `Sangai Festival Work`);
  })

  // Function to display the stats for 21 November 22
  twentyOneNovember22.addEventListener("click", () => {
    let poukinEntry = datas["2022"]["poukin"]["november"]["entry"][14];
    progress(0, 0, 0, 0, abs, 0, 0, 0, 0, `Sangai Festival Work`, 0, 0, 0, 0, `Sangai Festival Work`, 0, poukinEntry, 0, 0, `Sangai Festival Work`, 0, 0, 0, 0, `Sangai Festival Work`);
  })

  // Function to display the stats for 22 November 22
  twentyTwoNovember22.addEventListener("click", () => {
    let poukinEntry = datas["2022"]["poukin"]["november"]["entry"][15];
    progress(0, 0, 0, 0, abs, 0, 0, 0, 0, `Sangai Festival Work`, 0, 0, 0, 0, `Sangai Festival Work`, 0, poukinEntry, 0, 0, `Sangai Festival Work`, 0, 0, 0, 0, `Sangai Festival Work`);
  })

  // Function to display the stats for 23 November 22
  twentyThreeNovember22.addEventListener("click", () => {
    let chetanPrint = datas["2022"]["chetan"]["november"]["print"][16];
    let poukinEntry = datas["2022"]["poukin"]["november"]["entry"][16];
    progress(0, 0, 0, 0, abs, 0, 0, 0, chetanPrint, `Sangai Festival Work`, 0, 0, 0, 0, `Sangai Festival Work`, 0, poukinEntry, 0, 0, `Sangai Festival Work`, 0, 0, 0, 0, `Sangai Festival Work`);
  })

  // Function to display the stats for 24 November 22
  twentyFourNovember22.addEventListener("click", () => {
    let chetanPrint = datas["2022"]["chetan"]["november"]["print"][17];
    let poukinEntry = datas["2022"]["poukin"]["november"]["entry"][17];
    let rohelEntry = datas["2022"]["rohel"]["november"]["entry"][17];
    progress(0, 0, 0, 0, abs, 0, 0, 0, chetanPrint, `Print finished for Book 2001-02`, 0, 0, 0, 0, abs, 0, poukinEntry, 0, 0, `Entry finished for Book 2001-02`, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 25 November 22
  twentyFiveNovember22.addEventListener("click", () => {
    let chetanPrint = datas["2022"]["chetan"]["november"]["print"][18];
    let poukinEntry = datas["2022"]["poukin"]["november"]["entry"][18];
    progress(0, 0, 0, 0, abs, 0, 0, 0, chetanPrint, em, 0, 0, 0, 0, abs, 0, poukinEntry, 0, 0, em, 0, 0, 0, 0, abs);
  })

  // Function to display the stats for 26 November 22
  twentySixNovember22.addEventListener("click", () => {
    progress(0, 0, 0, 0, abs, 0, 0, 0, 0, abs, 0, 0, 0, 0, `Network Problem`, 0, 0, 0, 0, `Network Problem`, 0, 0, 0, 0, `Network Problem`);
  })

  // Function to display the stats for 28 November 22
  twentyEightNovember22.addEventListener("click", () => {
    let chetanEntry = datas["2022"]["chetan"]["november"]["entry"][20];
    let chetanPrint = datas["2022"]["chetan"]["november"]["print"][20];
    let kishanEntry = datas["2022"]["kishan"]["november"]["entry"][20];
    let poukinScan = datas["2022"]["poukin"]["november"]["scan"][20];
    let poukinEntry = datas["2022"]["poukin"]["november"]["entry"][20];
    progress(0, 0, 0, 0, other, 0, chetanEntry, 0, chetanPrint, `Printing completed for Book 2000-01`, 0, kishanEntry, 0, 0, `Entry completed for Book 2000-01`, poukinScan, poukinEntry, 0, 0, `Scanning started for Book 2003-04`, 0, 0, 0, 0, abs);
  })

  // Function to display the stats for 29 November 22
  twentyNineNovember22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["november"]["pdf"][21];
    let kishanScan = datas["2022"]["kishan"]["november"]["scan"][21];
    let poukinScan = datas["2022"]["poukin"]["november"]["scan"][21];
    let rohelScan = datas["2022"]["rohel"]["november"]["scan"][21];
    progress(0, 0, 0, 0, other, 0, 0, chetanPdf, 0, em, kishanScan, 0, 0, 0, `Scanning started for Book 2004-05`, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, `Scanning started for Book 2005-06`);
  })

  // Function to display the stats for 30 November 22
  thirtyNovember22.addEventListener("click", () => {
    let poukinScan = datas["2022"]["poukin"]["november"]["scan"][22];
    let poukinEntry = datas["2022"]["poukin"]["november"]["entry"][22];
    progress(0, 0, 0, 0, abs, 0, 0, 0, 0, abs, 0, 0, 0, 0, abs, poukinScan, poukinEntry, 0, 0, `Entry started for Book 2003-04`, 0, 0, 0, 0, abs);
  })

  // Function to Trigger the Display of December 22 Data Entry Stats
  december22.addEventListener("click", () => {
    displayProgress(december22Content);
    removeActiveData();
    progress(angouchaDec22ScanTotal, angouchaDec22EntryTotal, angouchaDec22PdfTotal, angouchaDec22PrintTotal, em, chetanDec22ScanTotal, chetanDec22EntryTotal, chetanDec22PdfTotal, chetanDec22PrintTotal, em, kishanDec22ScanTotal, kishanDec22EntryTotal,  kishanDec22PdfTotal, kishanDec22PrintTotal, em, poukinDec22ScanTotal, poukinDec22EntryTotal, poukinDec22PdfTotal, poukinDec22PrintTotal, em, rohelDec22ScanTotal, rohelDec22EntryTotal, rohelDec22PdfTotal, rohelDec22PrintTotal, em);
  })

  // Function to display the stats for 01 December 22
  oneDecember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["december"]["pdf"][0];
    let chetanPdf = datas["2022"]["chetan"]["december"]["pdf"][0];
    let chetanPrint = datas["2022"]["chetan"]["december"]["print"][0];
    let kishanScan = datas["2022"]["kishan"]["december"]["scan"][0];
    let poukinScan = datas["2022"]["poukin"]["december"]["scan"][0];
    let rohelScan = datas["2022"]["rohel"]["december"]["scan"][0];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, chetanPdf, chetanPrint, `Print completed for Book 2002-03`, kishanScan, 0, 0, 0, `Scan completed for Book 2004-05`, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 02 December 22
  twoDecember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["december"]["pdf"][1];
    let chetanPdf = datas["2022"]["chetan"]["december"]["pdf"][1];
    let kishanScan = datas["2022"]["kishan"]["december"]["scan"][1];
    let poukinScan = datas["2022"]["poukin"]["december"]["scan"][1];
    let poukinEntry = datas["2022"]["poukin"]["december"]["entry"][1];
    progress(0, 0, angouchaPdf, 0, other, 0, 0, chetanPdf, 0, em, kishanScan, 0, 0, 0, `Scan started for Book 2006-07, ${other}`, poukinScan, poukinEntry, 0, 0, `Scan completed for Book 2003-04`, 0, 0, 0, 0, abs);
  })

  // Function to display the stats for 03 December 22
  threeDecember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["december"]["pdf"][2];
    let chetanPdf = datas["2022"]["chetan"]["december"]["pdf"][2];
    let kishanScan = datas["2022"]["kishan"]["december"]["scan"][2];
    let poukinScan = datas["2022"]["poukin"]["december"]["scan"][2];
    let rohelScan = datas["2022"]["rohel"]["december"]["scan"][2];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, chetanPdf, 0, em, kishanScan, 0, 0, 0, em, poukinScan, 0, 0, 0, `Scan started for Book 2007-08`, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 05 December 22
  fiveDecember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["december"]["pdf"][3];
    let chetanPdf = datas["2022"]["chetan"]["december"]["pdf"][3];
    let kishanScan = datas["2022"]["kishan"]["december"]["scan"][3];
    let poukinEntry = datas["2022"]["poukin"]["december"]["entry"][3];
    let rohelScan = datas["2022"]["rohel"]["december"]["scan"][3];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, chetanPdf, 0, em, kishanScan, 0, 0, 0, em, 0, poukinEntry, 0, 0, `Entry started for Book 2003-04`, rohelScan, 0, 0, 0, other);
  })

  // Function to display the stats for 06 December 22
  sixDecember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["december"]["pdf"][4];
    let chetanPdf = datas["2022"]["chetan"]["december"]["pdf"][4];
    let kishanScan = datas["2022"]["kishan"]["december"]["scan"][4];
    let poukinEntry = datas["2022"]["poukin"]["december"]["entry"][4];
    let rohelScan = datas["2022"]["rohel"]["december"]["scan"][4];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, chetanPdf, 0, em, kishanScan, 0, 0, 0, `Scan completed for Book 2006-07`, 0, poukinEntry, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 07 December 22
  sevenDecember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["december"]["pdf"][5];
    let chetanPdf = datas["2022"]["chetan"]["december"]["pdf"][5];
    let poukinEntry = datas["2022"]["poukin"]["december"]["entry"][5];
    let rohelScan = datas["2022"]["rohel"]["december"]["scan"][5];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, chetanPdf, 0, em, 0, 0, 0, 0, abs, 0, poukinEntry, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 08 December 22
  eightDecember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["december"]["pdf"][6];
    let kishanEntry = datas["2022"]["kishan"]["december"]["entry"][6];
    let poukinScan = datas["2022"]["poukin"]["december"]["scan"][6];
    let poukinEntry = datas["2022"]["poukin"]["december"]["entry"][6];
    let rohelScan = datas["2022"]["rohel"]["december"]["scan"][6];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, 0, 0, abs, 0, kishanEntry, 0, 0, `Entry started for Book 2004-05`, poukinScan, poukinEntry, 0, 0, em, rohelScan, 0, 0, 0, `Scan completed for Book 2005-06`);
  })

  // Function to display the stats for 09 December 22
  nineDecember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["december"]["pdf"][7];
    let chetanPdf = datas["2022"]["chetan"]["december"]["pdf"][7];
    let kishanEntry = datas["2022"]["kishan"]["december"]["entry"][7];
    let poukinEntry = datas["2022"]["poukin"]["december"]["entry"][7];
    let rohelScan = datas["2022"]["rohel"]["december"]["scan"][7];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, chetanPdf, 0, em, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, rohelScan, 0, 0, 0, `Scan started for Book 2008-09`);
  })

  // Function to display the stats for 13 December 22
  thirteenDecember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["december"]["pdf"][8];
    let chetanEntry = datas["2022"]["chetan"]["december"]["entry"][8];
    let chetanPdf = datas["2022"]["chetan"]["december"]["pdf"][8];
    let kishanEntry = datas["2022"]["kishan"]["december"]["entry"][8];
    let poukinScan = datas["2022"]["poukin"]["december"]["scan"][8];
    let poukinEntry = datas["2022"]["poukin"]["december"]["entry"][8];
    let rohelScan = datas["2022"]["rohel"]["december"]["scan"][8];
    progress(0, 0, angouchaPdf, 0, em, 0, chetanEntry, chetanPdf, 0, `Entry started for Book 2005-06`, 0, kishanEntry, 0, 0, `Entry completed for Book 2004-05`, poukinScan, poukinEntry, 0, 0, `Entry completed for Book 2003-04`, rohelScan, 0, 0, 0, em);
  })
  
  // Function to display the stats for 14 December 22
  fourteenDecember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["december"]["pdf"][9];
    let chetanPdf = datas["2022"]["chetan"]["december"]["pdf"][9];
    let kishanScan = datas["2022"]["kishan"]["december"]["scan"][9];
    let poukinScan = datas["2022"]["poukin"]["december"]["scan"][9];
    let rohelScan = datas["2022"]["rohel"]["december"]["scan"][9];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, chetanPdf, 0, em, kishanScan, 0, 0, 0, `Scan started for Book 2009-10`, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 15 December 22
  fifteenDecember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["december"]["pdf"][10];
    let chetanPdf = datas["2022"]["chetan"]["december"]["pdf"][10];
    let chetanPrint = datas["2022"]["chetan"]["december"]["print"][10];
    let kishanScan = datas["2022"]["kishan"]["december"]["scan"][10];
    let poukinScan = datas["2022"]["poukin"]["december"]["scan"][10];
    let rohelScan = datas["2022"]["rohel"]["december"]["scan"][10];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, chetanPdf, chetanPrint, `Print started for Book 2003-04`, kishanScan, 0, 0, 0, em, poukinScan, 0, 0, 0, `Scan completed for Book 2007-08`, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 16 December 22
  sixteenDecember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["december"]["pdf"][11];
    let chetanEntry = datas["2022"]["chetan"]["december"]["entry"][11];
    let chetanPrint = datas["2022"]["chetan"]["december"]["print"][11];
    let kishanScan = datas["2022"]["kishan"]["december"]["scan"][11];
    let poukinEntry = datas["2022"]["poukin"]["december"]["entry"][11];
    let rohelScan = datas["2022"]["rohel"]["december"]["scan"][11];
    progress(0, 0, angouchaPdf, 0, em, 0, chetanEntry, 0, chetanPrint, `Print completed for Book 2003-04; Print started for Book 2004-05`, kishanScan, 0, 0, 0, em, 0, poukinEntry, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 17 December 22
  seventeenDecember22.addEventListener("click", () => {
    let chetanPrint = datas["2022"]["chetan"]["december"]["print"][12];
    let kishanScan = datas["2022"]["kishan"]["december"]["scan"][12];
    let poukinEntry = datas["2022"]["poukin"]["december"]["entry"][12];
    progress(0, 0, 0, 0, elec, 0, 0, 0, chetanPrint, elec, kishanScan, 0, 0, 0, elec, 0, poukinEntry, 0, 0, elec, 0, 0, 0, 0, elec);
  })

  // Function to display the stats for 19 December 22
  nineteenDecember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["december"]["pdf"][13];
    let chetanEntry = datas["2022"]["chetan"]["december"]["entry"][13];
    let chetanPrint = datas["2022"]["chetan"]["december"]["print"][13];
    let poukinEntry = datas["2022"]["poukin"]["december"]["entry"][13];
    let rohelScan = datas["2022"]["rohel"]["december"]["scan"][13];
    progress(0, 0, angouchaPdf, 0, em, 0, chetanEntry, 0, chetanPrint, `Print completed for Book 2004-05; Entry started for Book 2006-07`, 0, 0, 0, 0, abs, 0, poukinEntry, 0, 0, em, rohelScan, 0, 0, 0, `Scan completed for Book 2008-09`);
  })

  // Function to display the stats for 20 December 22
  twentyDecember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["december"]["pdf"][14];
    let chetanEntry = datas["2022"]["chetan"]["december"]["entry"][14];
    let chetanPdf = datas["2022"]["chetan"]["december"]["pdf"][14];
    let kishanScan = datas["2022"]["kishan"]["december"]["scan"][14];
    let poukinEntry = datas["2022"]["poukin"]["december"]["entry"][14];
    let rohelEntry = datas["2022"]["rohel"]["december"]["entry"][14];
    progress(0, 0, angouchaPdf, 0, em, 0, chetanEntry, chetanPdf, 0, em, kishanScan, 0, 0, 0, `Scan completed for Book 2009-10`, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 21 December 22
  twentyOneDecember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["december"]["pdf"][15];
    let chetanEntry = datas["2022"]["chetan"]["december"]["entry"][15];
    let chetanPdf = datas["2022"]["chetan"]["december"]["pdf"][15];
    let kishanEntry = datas["2022"]["kishan"]["december"]["entry"][15];
    let poukinEntry = datas["2022"]["poukin"]["december"]["entry"][15];
    let rohelEntry = datas["2022"]["rohel"]["december"]["entry"][15];
    progress(0, 0, angouchaPdf, 0, em, 0, chetanEntry, chetanPdf, 0, em, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, `Entry completed for 2005-06`, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 22 December 22
  twentyTwoDecember22.addEventListener("click", () => {
    let chetanPrint = datas["2022"]["chetan"]["december"]["print"][16];
    let kishanEntry = datas["2022"]["kishan"]["december"]["entry"][16];
    let poukinEntry = datas["2022"]["poukin"]["december"]["entry"][16];
    let rohelEntry = datas["2022"]["rohel"]["december"]["entry"][16];
    progress(0, 0, 0, 0, abs, 0, 0, 0, chetanPrint, `${meet}, Print started for Book 2005-06`, 0, kishanEntry, 0, 0, meet, 0, poukinEntry, 0, 0, meet, 0, rohelEntry, 0, 0, meet);
  })

  // Function to display the stats for 23 December 22
  twentyThreeDecember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["december"]["pdf"][17];
    let chetanEntry = datas["2022"]["chetan"]["december"]["entry"][17];
    let chetanPdf = datas["2022"]["chetan"]["december"]["pdf"][17];
    let chetanPrint = datas["2022"]["chetan"]["december"]["print"][17];
    let kishanEntry = datas["2022"]["kishan"]["december"]["entry"][17];
    let poukinEntry = datas["2022"]["poukin"]["december"]["entry"][17];
    let rohelEntry = datas["2022"]["rohel"]["december"]["entry"][17];
    progress(0, 0, angouchaPdf, 0, em, 0, chetanEntry, chetanPdf, chetanPrint, `Print completed for Book 2005-06`, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 24 December 22
  twentyFourDecember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["december"]["pdf"][18];
    let chetanScan = datas["2022"]["chetan"]["december"]["scan"][18];
    let chetanEntry = datas["2022"]["chetan"]["december"]["entry"][18];
    let chetanPrint = datas["2022"]["chetan"]["december"]["print"][18];
    let kishanEntry = datas["2022"]["kishan"]["december"]["entry"][18];
    let poukinEntry = datas["2022"]["poukin"]["december"]["entry"][18];
    let rohelEntry = datas["2022"]["rohel"]["december"]["entry"][18];
    progress(0, 0, angouchaPdf, 0, em, chetanScan, chetanEntry, 0, chetanPrint, `Print started for Book 2005-06`, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })
  
  // Function to display the stats for 26 December 22
  twentySixDecember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["december"]["pdf"][19];
    let chetanScan = datas["2022"]["chetan"]["december"]["scan"][19];
    let chetanEntry = datas["2022"]["chetan"]["december"]["entry"][19];
    let chetanPdf = datas["2022"]["chetan"]["december"]["pdf"][19];
    let chetanPrint = datas["2022"]["chetan"]["december"]["print"][19];
    let kishanEntry = datas["2022"]["kishan"]["december"]["entry"][19];
    let poukinScan = datas["2022"]["poukin"]["december"]["scan"][19];
    let rohelScan = datas["2022"]["rohel"]["december"]["scan"][19];
    progress(0, 0, angouchaPdf, 0, `PDF completed for Book 2009-10`, chetanScan, chetanEntry, chetanPdf, chetanPrint, `Print completed for Book 2005-06`, 0, kishanEntry, 0, 0, `Entry completed for Book 2008-09`, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 27 December 22
  twentySevenDecember22.addEventListener("click", () => {
    let chetanPdf = datas["2022"]["chetan"]["december"]["pdf"][20];
    let chetanPrint = datas["2022"]["chetan"]["december"]["print"][20];
    let kishanEntry = datas["2022"]["kishan"]["december"]["entry"][20];
    let poukinScan = datas["2022"]["poukin"]["december"]["scan"][20];
    let rohelScan = datas["2022"]["rohel"]["december"]["scan"][20];
    progress(0, 0, 0, 0, abs, 0, 0, chetanPdf, chetanPrint, em, 0, kishanEntry, 0, 0, em, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 28 December 22
  twentyEightDecember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["december"]["pdf"][21];
    let chetanEntry = datas["2022"]["chetan"]["december"]["entry"][21];
    let chetanPdf = datas["2022"]["chetan"]["december"]["pdf"][21];
    let chetanPrint = datas["2022"]["chetan"]["december"]["print"][21];
    let kishanEntry = datas["2022"]["kishan"]["december"]["entry"][21];
    let kishanPdf = datas["2022"]["kishan"]["december"]["pdf"][21];
    let poukinEntry = datas["2022"]["poukin"]["december"]["entry"][21];
    let rohelEntry = datas["2022"]["rohel"]["december"]["entry"][21];
    progress(0, 0, angouchaPdf, 0, em, 0, chetanEntry, chetanPdf, chetanPrint, `Print completed for Book 2007-09`, 0, kishanEntry, kishanPdf, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 29 December 22
  twentyNineDecember22.addEventListener("click", () => {
    let angouchaPdf = datas["2022"]["angoucha"]["december"]["pdf"][22];
    let angouchaPrint = datas["2022"]["angoucha"]["december"]["print"][22];
    let chetanEntry = datas["2022"]["chetan"]["december"]["entry"][22];
    let chetanPrint = datas["2022"]["chetan"]["december"]["print"][22];
    let kishanEntry = datas["2022"]["kishan"]["december"]["entry"][22];
    let poukinEntry = datas["2022"]["poukin"]["december"]["entry"][22];
    let rohelEntry = datas["2022"]["rohel"]["december"]["entry"][22];
    progress(0, 0, angouchaPdf, angouchaPrint, em, 0, chetanEntry, 0, chetanPrint, `Print completed for Book 2008-09`, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 30 December 22
  thirtyDecember22.addEventListener("click", () => {
    let angouchaPrint = datas["2022"]["angoucha"]["december"]["print"][23];
    let chetanScan = datas["2022"]["chetan"]["december"]["scan"][23];
    let chetanEntry = datas["2022"]["chetan"]["december"]["entry"][23];
    let chetanPdf = datas["2022"]["chetan"]["december"]["pdf"][23];
    let chetanPrint = datas["2022"]["chetan"]["december"]["print"][23];
    let kishanPrint = datas["2022"]["kishan"]["december"]["print"][23];
    let poukinScan = datas["2022"]["poukin"]["december"]["scan"][23];
    progress(0, 0, 0, angouchaPrint, other, chetanScan, chetanEntry, chetanPdf, chetanPrint, em, 0, 0, 0, kishanPrint, em, poukinScan, 0, 0, 0, em, 0, 0, 0, 0, abs);
  })

  // Function to display the stats for 31 December 22
  thirtyOneDecember22.addEventListener("click", () => {
    progress(0, 0, 0, 0, nwd, 0, 0, 0, 0, nwd, 0, 0, 0, 0, nwd, 0, 0, 0, 0, nwd, 0, 0, 0, 0, nwd);
  })

  // Function to Trigger the Display of January 23 Data Entry Stats
  january23.addEventListener("click", () => {
    displayProgress(january23Content);
    removeActiveData();
    progress(angouchaJan23ScanTotal, angouchaJan23EntryTotal, angouchaJan23PdfTotal, angouchaJan23PrintTotal, em, chetanJan23ScanTotal, chetanJan23EntryTotal, chetanJan23PdfTotal, chetanJan23PrintTotal, em, kishanJan23ScanTotal, kishanJan23EntryTotal,  kishanJan23PdfTotal, kishanJan23PrintTotal, em, poukinJan23ScanTotal, poukinJan23EntryTotal, poukinJan23PdfTotal, poukinJan23PrintTotal, em, rohelJan23ScanTotal, rohelJan23EntryTotal, rohelJan23PdfTotal, rohelJan23PrintTotal, em);
  })

  // Function to display the stats for 02 January 23
  twoJanuary23.addEventListener("click", () => {
    progress(0, 0, 0, 0, nwd, 0, 0, 0, 0, abs, 0, 0, 0, 0, abs, 0, 0, 0, 0, nwd, 0, 0, 0, 0, abs);
  })

  // Function to display the stats for 05 January 23
  fiveJanuary23.addEventListener("click", () => {
    let kishanEntry = datas["2023"]["kishan"]["january"]["entry"][0];
    progress(0, 0, 0, 0, other, 0, 0, 0, 0, `Downloading Gazettes`, 0, kishanEntry, 0, 0, `Gazette Collection`, 0, 0, 0, 0, abs, 0, 0, 0, 0, `Gazette Collection`);
  })

  // Function to display the stats for 06 January 23
  sixJanuary23.addEventListener("click", () => {
    let chetanEntry = datas["2023"]["chetan"]["january"]["entry"][1];
    let kishanEntry = datas["2023"]["kishan"]["january"]["entry"][1];
    let poukinEntry = datas["2023"]["poukin"]["january"]["entry"][1];
    let rohelEntry = datas["2023"]["rohel"]["january"]["entry"][1];
    progress(0, 0, 0, 0, other, 0, chetanEntry, 0, 0, em, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 07 January 23
  sevenJanuary23.addEventListener("click", () => {
    let chetanEntry = datas["2023"]["chetan"]["january"]["entry"][2];
    let poukinEntry = datas["2023"]["poukin"]["january"]["entry"][2];
    let rohelEntry = datas["2023"]["rohel"]["january"]["entry"][2];
    progress(0, 0, 0, 0, other, 0, chetanEntry, 0, 0, em, 0, 0, 0, 0, abs, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 10 January 23
  tenJanuary23.addEventListener("click", () => {
    let chetanEntry = datas["2023"]["chetan"]["january"]["entry"][3];
    progress(0, 0, 0, 0, other, 0, chetanEntry, 0, 0, em, 0, 0, 0, 0, abs, 0, 0, 0, 0, other, 0, 0, 0, 0, other);
  })

  // Function to display the stats for 11 January 23
  elevenJanuary23.addEventListener("click", () => {
    let chetanEntry = datas["2023"]["chetan"]["january"]["entry"][4];
    let kishanEntry = datas["2023"]["kishan"]["january"]["entry"][4];
    let rohelEntry = datas["2023"]["rohel"]["january"]["entry"][4];
    progress(0, 0, 0, 0, other, 0, chetanEntry, 0, 0, em, 0, kishanEntry, 0, 0, em, 0, 0, 0, 0, em, 0, rohelEntry, 0, 0, other);
  })

  // Function to display the stats for 12 January 23
  twelveJanuary23.addEventListener("click", () => {
    progress(0, 0, 0, 0, elec, 0, 0, 0, 0, elec, 0, 0, 0, 0, elec, 0, 0, 0, 0, elec, 0, 0, 0, 0, elec);
  })

  // Function to display the stats for 13 January 23
  thirteenJanuary23.addEventListener("click", () => {
    let chetanEntry = datas["2023"]["chetan"]["january"]["entry"][5];
    let kishanEntry = datas["2023"]["kishan"]["january"]["entry"][5];
    let poukinEntry = datas["2023"]["poukin"]["january"]["entry"][5];
    let rohelEntry = datas["2023"]["rohel"]["january"]["entry"][5];
    progress(0, 0, 0, 0, abs, 0, chetanEntry, 0, 0, `No entry left`, 0, kishanEntry, 0, 0, `No entry left`, 0, poukinEntry, 0, 0, `No entry left`, 0, rohelEntry, 0, 0, `No entry left`);
  })

  // Function to display the stats for 16 January 23
  sixteenJanuary23.addEventListener("click", () => {
    let kishanScan = datas["2023"]["kishan"]["january"]["scan"][6];
    let poukinScan = datas["2023"]["poukin"]["january"]["scan"][6];
    progress(0, 0, 0, 0, other, 0, 0, 0, 0, `No work available`, kishanScan, 0, 0, 0, em, poukinScan, 0, 0, 0, em, 0, 0, 0, 0, `No work done`);
  })

  // Function to display the stats for 17 January 23
  seventeenJanuary23.addEventListener("click", () => {
    let chetanScan = datas["2023"]["chetan"]["january"]["scan"][7];
    let chetanPdf = datas["2023"]["chetan"]["january"]["pdf"][7];
    let poukinScan = datas["2023"]["poukin"]["january"]["scan"][7];
    progress(0, 0, 0, 0, other, chetanScan, 0, chetanPdf, 0, `No work left`, 0, 0, 0, 0, abs, poukinScan, 0, 0, 0, em, 0, 0, 0, 0, abs);
  })

  // Function to display the stats for 18 January 23
  eighteenJanuary23.addEventListener("click", () => {
    let chetanPdf = datas["2023"]["chetan"]["january"]["pdf"][8];
    let kishanScan = datas["2023"]["kishan"]["january"]["scan"][8];
    let poukinScan = datas["2023"]["poukin"]["january"]["scan"][8];
    let rohelScan = datas["2023"]["rohel"]["january"]["scan"][8];
    progress(0, 0, 0, 0, other, 0, 0, chetanPdf, 0, `No work left`, kishanScan, 0, 0, 0, em, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 19 January 23
  nineteenJanuary23.addEventListener("click", () => {
    let chetanScan = datas["2023"]["chetan"]["january"]["scan"][9];
    let chetanPdf = datas["2023"]["chetan"]["january"]["pdf"][9];
    let poukinScan = datas["2023"]["poukin"]["january"]["scan"][9];
    let rohelScan = datas["2023"]["rohel"]["january"]["scan"][9];
    progress(0, 0, 0, 0, abs, chetanScan, 0, chetanPdf, 0, em, 0, 0, 0, 0, abs, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 20 January 23
  twentyJanuary23.addEventListener("click", () => {
    let chetanPdf = datas["2023"]["chetan"]["january"]["pdf"][10];
    let kishanScan = datas["2023"]["kishan"]["january"]["scan"][10];
    let kishanEntry = datas["2023"]["kishan"]["january"]["entry"][10];
    let poukinScan = datas["2023"]["poukin"]["january"]["scan"][10];
    let rohelScan = datas["2023"]["rohel"]["january"]["scan"][10];
    progress(0, 0, 0, 0, other, 0, 0, chetanPdf, 0, em, kishanScan, kishanEntry, 0, 0, `Scan completed for Book 2012-13`, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, `Scan completed for Book 2013-14`);
  })
  
  // Function to display the stats for 21 January 23
  twentyOneJanuary23.addEventListener("click", () => {
    let chetanPdf = datas["2023"]["chetan"]["january"]["pdf"][11];
    let kishanEntry = datas["2023"]["kishan"]["january"]["entry"][11];
    let poukinScan = datas["2023"]["poukin"]["january"]["scan"][11];
    let rohelScan = datas["2023"]["rohel"]["january"]["scan"][11];
    progress(0, 0, 0, 0, abs, 0, 0, chetanPdf, 0, em, 0, kishanEntry, 0, 0, em, poukinScan, 0, 0, 0, `Scan completed for Book 2011-12`, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 23 January 23
  twentyThreeJanuary23.addEventListener("click", () => {
    let poukinEntry = datas["2023"]["poukin"]["january"]["entry"][12];
    progress(0, 0, 0, 0, abs, 0, 0, 0, 0, abs, 0, 0, 0, 0, abs, 0, poukinEntry, 0, 0, em, 0, 0, 0, 0, abs);
  })

  // Function to display the stats for 24 January 23
  twentyFourJanuary23.addEventListener("click", () => {
    let angouchaPdf = datas["2023"]["angoucha"]["january"]["pdf"][13];
    let chetanEntry = datas["2023"]["chetan"]["january"]["entry"][13];
    let chetanPdf = datas["2023"]["chetan"]["january"]["pdf"][13];
    let poukinEntry = datas["2023"]["poukin"]["january"]["entry"][13];
    progress(0, 0, angouchaPdf, 0, em, 0, chetanEntry, chetanPdf, 0, em, 0, 0, 0, 0, abs, 0, poukinEntry, 0, 0, em, 0, 0, 0, 0, other);
  })

  // Function to display the stats for 25 January 23
  twentyFiveJanuary23.addEventListener("click", () => {
    let angouchaPdf = datas["2023"]["angoucha"]["january"]["pdf"][14];
    let chetanPdf = datas["2023"]["chetan"]["january"]["pdf"][14];
    let poukinEntry = datas["2023"]["poukin"]["january"]["entry"][14];
    let rohelEntry = datas["2023"]["rohel"]["january"]["entry"][14];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, chetanPdf, 0, em, 0, 0, 0, 0, abs, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 27 January 23
  twentySevenJanuary23.addEventListener("click", () => {
    let chetanPdf = datas["2023"]["chetan"]["january"]["pdf"][15];
    let poukinEntry = datas["2023"]["poukin"]["january"]["entry"][15];
    let rohelEntry = datas["2023"]["rohel"]["january"]["entry"][15];
    progress(0, 0, 0, 0, abs, 0, 0, chetanPdf, 0, em, 0, 0, 0, 0, abs, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 28 January 23
  twentyEightJanuary23.addEventListener("click", () => {
    let chetanEntry = datas["2023"]["chetan"]["january"]["entry"][16];
    let kishanEntry = datas["2023"]["kishan"]["january"]["entry"][16];
    let poukinEntry = datas["2023"]["poukin"]["january"]["entry"][16];
    let rohelEntry = datas["2023"]["rohel"]["january"]["entry"][16];
    progress(0, 0, 0, 0, abs, 0, chetanEntry, 0, 0, `Presentation Work`, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 30 January 23
  thirtyJanuary23.addEventListener("click", () => {
    let rohelEntry = datas["2023"]["rohel"]["january"]["entry"][17];
    progress(0, 0, 0, 0, `Presentation Work`, 0, 0, 0, 0, `Presentation Work`, 0, 0, 0, 0, `Presentation Work`, 0, 0, 0, 0, `No Work Done`, 0, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 31 January 23
  thirtyOneJanuary23.addEventListener("click", () => {
    let poukinEntry = datas["2023"]["poukin"]["january"]["entry"][18];
    let rohelEntry = datas["2023"]["rohel"]["january"]["entry"][18];
    progress(0, 0, 0, 0, other, 0, 0, 0, 0, `Gazette Training`, 0, 0, 0, 0, abs, 0, poukinEntry, 0, 0, `Gazette Training`, 0, rohelEntry, 0, 0, `Gazette Training`);
  })

  // Function to Trigger the Display of February 23 Data Entry Stats
  february23.addEventListener("click", () => {
    displayProgress(february23Content);
    removeActiveData();
    progress(angouchaFeb23ScanTotal, angouchaFeb23EntryTotal, angouchaFeb23PdfTotal, angouchaFeb23PrintTotal, em, chetanFeb23ScanTotal, chetanFeb23EntryTotal, chetanFeb23PdfTotal, chetanFeb23PrintTotal, em, kishanFeb23ScanTotal, kishanFeb23EntryTotal,  kishanFeb23PdfTotal, kishanFeb23PrintTotal, em, poukinFeb23ScanTotal, poukinFeb23EntryTotal, poukinFeb23PdfTotal, poukinFeb23PrintTotal, em, rohelFeb23ScanTotal, rohelFeb23EntryTotal, rohelFeb23PdfTotal, rohelFeb23PrintTotal, em);
  })

  // Function to display the stats for 01 February 23
  oneFebruary23.addEventListener("click", () => {
    let kishanEntry = datas["2023"]["kishan"]["february"]["entry"][0];
    let poukinEntry = datas["2023"]["poukin"]["february"]["entry"][0];
    let rohelScan = datas["2023"]["rohel"]["february"]["scan"][0];
    let rohelEntry = datas["2023"]["rohel"]["february"]["entry"][0];
    progress(0, 0, 0, 0, other, 0, 0, 0, 0, other, 0, kishanEntry, 0, 0, em, 0, poukinEntry, 0, 0, em, rohelScan, rohelEntry, 0, 0, em);
  })

  // Function to display the stats for 02 February 23
  twoFebruary23.addEventListener("click", () => {
    let angouchaPrint = datas["2023"]["angoucha"]["february"]["print"][1];
    let chetanPdf = datas["2023"]["chetan"]["february"]["pdf"][1];
    let chetanPrint = datas["2023"]["chetan"]["february"]["print"][1];
    let kishanScan = datas["2023"]["kishan"]["february"]["scan"][1];
    let rohelScan = datas["2023"]["rohel"]["february"]["scan"][1];
    progress(0, 0, 0, angouchaPrint, em, 0, 0, chetanPdf, chetanPrint, em, kishanScan, 0, 0, 0, em, 0, 0, 0, 0, nwd, rohelScan, 0, 0, 0, other);
  })

  // Function to display the stats for 03 February 23
  threeFebruary23.addEventListener("click", () => {
    let poukinEntry = datas["2023"]["poukin"]["february"]["entry"][2];
    progress(0, 0, 0, 0, abs, 0, 0, 0, 0, abs, 0, 0, 0, 0, abs, 0, poukinEntry, 0, 0, em, 0, 0, 0, 0, abs);
  })

  // Function to display the stats for 04 February 23
  fourFebruary23.addEventListener("click", () => {
    let angouchaPrint = datas["2023"]["angoucha"]["february"]["print"][3];
    let chetanPrint = datas["2023"]["chetan"]["february"]["print"][3];
    let kishanScan = datas["2023"]["kishan"]["february"]["scan"][3];
    progress(0, 0, 0, angouchaPrint, em, 0, 0, 0, chetanPrint, em, kishanScan, 0, 0, 0, em, 0, 0, 0, 0, nwd, 0, 0, 0, 0, abs);
  })

  // Function to display the stats for 06 February 23
  sixFebruary23.addEventListener("click", () => {
    let angouchaPrint = datas["2023"]["angoucha"]["february"]["print"][4];
    let chetanPdf = datas["2023"]["chetan"]["february"]["pdf"][4];
    let chetanPrint = datas["2023"]["chetan"]["february"]["print"][4];
    let poukinScan = datas["2023"]["poukin"]["february"]["scan"][4];
    progress(0, 0, 0, angouchaPrint, em, 0, 0, chetanPdf, chetanPrint, em, 0, 0, 0, 0, abs, poukinScan, 0, 0, 0, em, 0, 0, 0, 0, abs);
  })

  // Function to display the stats for 07 February 23
  sevenFebruary23.addEventListener("click", () => {
    let kishanScan = datas["2023"]["kishan"]["february"]["scan"][5];
    let poukinScan = datas["2023"]["poukin"]["february"]["scan"][5];
    progress(0, 0, 0, 0, other, 0, 0, 0, 0, abs, kishanScan, 0, 0, 0, elec, poukinScan, 0, 0, 0, elec, 0, 0, 0, 0, nwd);
  })

  // Function to display the stats for 08 February 23
  eightFebruary23.addEventListener("click", () => {
    let chetanPdf = datas["2023"]["chetan"]["february"]["pdf"][6];
    let chetanPrint = datas["2023"]["chetan"]["february"]["print"][6];
    let kishanScan = datas["2023"]["kishan"]["february"]["scan"][6];
    let poukinScan = datas["2023"]["poukin"]["february"]["scan"][6];
    progress(0, 0, 0, 0, abs, 0, 0, chetanPdf, chetanPrint, em, kishanScan, 0, 0, 0, other, poukinScan, 0, 0, 0, em, 0, 0, 0, 0, abs);
  })

  // Function to display the stats for 09 February 23
  nineFebruary23.addEventListener("click", () => {
    progress(0, 0, 0, 0, elec, 0, 0, 0, 0, elec, 0, 0, 0, 0, elec, 0, 0, 0, 0, elec, 0, 0, 0, 0, elec);
  })

  // Function to display the stats for 10 February 23
  tenFebruary23.addEventListener("click", () => {
    let chetanPdf = datas["2023"]["chetan"]["february"]["pdf"][7];
    let kishanScan = datas["2023"]["kishan"]["february"]["scan"][7];
    let poukinScan = datas["2023"]["poukin"]["february"]["scan"][7];
    let rohelScan = datas["2023"]["rohel"]["february"]["scan"][7];
    progress(0, 0, 0, 0, other, 0, 0, chetanPdf, 0, em, kishanScan, 0, 0, 0, em, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 13 February 23
  thirteenFebruary23.addEventListener("click", () => {
    let poukinScan = datas["2023"]["poukin"]["february"]["scan"][8];
    progress(0, 0, 0, 0, elec, 0, 0, 0, 0, elec, 0, 0, 0, 0, elec, poukinScan, 0, 0, 0, elec, 0, 0, 0, 0, elec);
  })

  // Function to display the stats for 14 February 23
  fourteenFebruary23.addEventListener("click", () => {
    let chetanPdf = datas["2023"]["chetan"]["february"]["pdf"][9];
    let kishanScan = datas["2023"]["kishan"]["february"]["scan"][9];
    let poukinScan = datas["2023"]["poukin"]["february"]["scan"][9];
    let rohelScan = datas["2023"]["rohel"]["february"]["scan"][9];
    progress(0, 0, 0, 0, elec, 0, 0, chetanPdf, 0, elec, kishanScan, 0, 0, 0, elec, poukinScan, 0, 0, 0, elec, rohelScan, 0, 0, 0, elec);
  })

  // Function to display the stats for 16 February 23
  sixteenFebruary23.addEventListener("click", () => {
    let chetanPdf = datas["2023"]["chetan"]["february"]["pdf"][10];
    let kishanScan = datas["2023"]["kishan"]["february"]["scan"][10];
    let poukinScan = datas["2023"]["poukin"]["february"]["scan"][10];
    let rohelScan = datas["2023"]["rohel"]["february"]["scan"][10];
    progress(0, 0, 0, 0, elec, 0, 0, chetanPdf, 0, elec, kishanScan, 0, 0, 0, elec, poukinScan, 0, 0, 0, elec, rohelScan, 0, 0, 0, elec);
  })

  // Function to display the stats for 17 February 23
  seventeenFebruary23.addEventListener("click", () => {
    let chetanPdf = datas["2023"]["chetan"]["february"]["pdf"][11];
    let kishanScan = datas["2023"]["kishan"]["february"]["scan"][11];
    let poukinScan = datas["2023"]["poukin"]["february"]["scan"][11];
    let rohelScan = datas["2023"]["rohel"]["february"]["scan"][11];
    progress(0, 0, 0, 0, other, 0, 0, chetanPdf, 0, em, kishanScan, 0, 0, 0, em, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 18 February 23
  eighteenFebruary23.addEventListener("click", () => {
    let chetanPdf = datas["2023"]["chetan"]["february"]["pdf"][12];
    let kishanScan = datas["2023"]["kishan"]["february"]["scan"][12];
    let poukinScan = datas["2023"]["poukin"]["february"]["scan"][12];
    let rohelScan = datas["2023"]["rohel"]["february"]["scan"][12];
    progress(0, 0, 0, 0, other, 0, 0, chetanPdf, 0, em, kishanScan, 0, 0, 0, em, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 20 February 23
  twentyFebruary23.addEventListener("click", () => {
    let kishanScan = datas["2023"]["kishan"]["february"]["scan"][13];
    let poukinScan = datas["2023"]["poukin"]["february"]["scan"][13];
    let rohelScan = datas["2023"]["rohel"]["february"]["scan"][13];
    progress(0, 0, 0, 0, other, 0, 0, 0, 0, abs, kishanScan, 0, 0, 0, em, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 21 February 23
  twentyOneFebruary23.addEventListener("click", () => {
    let angouchaPdf = datas["2023"]["angoucha"]["february"]["pdf"][14];
    let chetanPdf = datas["2023"]["chetan"]["february"]["pdf"][14];
    let kishanScan = datas["2023"]["kishan"]["february"]["scan"][14];
    let poukinScan = datas["2023"]["poukin"]["february"]["scan"][14];
    let rohelScan = datas["2023"]["rohel"]["february"]["scan"][14];
    progress(0, 0, angouchaPdf, 0, em, 0, 0, chetanPdf, 0, em, kishanScan, 0, 0, 0, em, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })

  // Function to display the stats for 22 February 23
  twentyTwoFebruary23.addEventListener("click", () => {
    progress(0, 0, 0, 0, abs, 0, 0, 0, 0, abs, 0, 0, 0, 0, abs, 0, 0, 0, 0, abs, 0, 0, 0, 0, abs);
  })

  // Function to display the stats for 23 February 23
  twentyThreeFebruary23.addEventListener("click", () => {
    let chetanPdf = datas["2023"]["chetan"]["february"]["pdf"][15];
    let kishanScan = datas["2023"]["kishan"]["february"]["scan"][15];
    let poukinScan = datas["2023"]["poukin"]["february"]["scan"][15];
    let rohelScan = datas["2023"]["rohel"]["february"]["scan"][15];
    progress(0, 0, 0, 0, other, 0, 0, chetanPdf, 0, em, kishanScan, 0, 0, 0, em, poukinScan, 0, 0, 0, em, rohelScan, 0, 0, 0, em);
  })
}


getData();

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

// Function to display the stats for Days with Electricity Outage
elecOutage.forEach(date => {
  date.addEventListener("click", () => {
  angouchaPages.innerText = 0;
  angouchaEntry.innerText = 0;
  angouchaPdf.innerText = 0;
  angouchaPrint.innerText = 0;
  angouchaRemarks.innerText = "Electricity Outage";
  chetanPages.innerText = 0;
  chetanEntry.innerText = 0;
  chetanPdf.innerText = 0;
  chetanPrint.innerText = 0;
  chetanRemarks.innerText = "Electricity Outage";
  kishanPages.innerText = 0;
  kishanEntry.innerText = 0;
  kishanPdf.innerText = 0;
  kishanPrint.innerText = 0;
  kishanRemarks.innerText = "Electricity Outage";
  poukinPages.innerText = 0;
  poukinEntry.innerText = 0;
  poukinPdf.innerText = 0;
  poukinPrint.innerText = 0;
  poukinRemarks.innerText = "Electricity Outage";
  rohelPages.innerText = 0;
  rohelEntry.innerText = 0;
  rohelPdf.innerText = 0;
  rohelPrint.innerText = 0;
  rohelRemarks.innerText = "Electricity Outage";
  })
})

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

workProgressColoring();

const showWorkProgress = () => {
  displayProgress(workProgressContent);
  dataEntry.classList.add("hide");
  removeActiveData();
}

workProgress.addEventListener("click", () => {
  showWorkProgress();
})
