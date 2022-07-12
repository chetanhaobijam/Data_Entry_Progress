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