// Variables
const aside = document.querySelector("aside");
const asideTrigger = document.querySelector("#aside-trigger");
const totalProgress = document.querySelector("#total-progress");
const totalProgressContent = document.querySelector("#total-progress-content");
const march22 = document.querySelector("#march-22");
const march22content = document.querySelector("#march-22-content");

totalProgressContent.classList.remove("hide");
march22content.classList.add("hide");

// Function to Trigger the Display of Aside Section
asideTrigger.addEventListener("click", () => {
  aside.classList.toggle("hide");
})

// Function to Trigger the Display of Total Data Entry Progress
totalProgress.addEventListener("click", () => {
  totalProgressContent.classList.remove("hide");
  march22content.classList.add("hide");
})

// Function to Trigger the Display of March 22 Data Entry Stats
march22.addEventListener("click", () => {
  totalProgressContent.classList.add("hide");
  march22content.classList.remove("hide");
})
