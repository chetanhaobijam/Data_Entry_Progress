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