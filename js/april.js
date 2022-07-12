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
