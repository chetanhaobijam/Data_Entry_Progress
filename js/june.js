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