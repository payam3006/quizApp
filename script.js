const q = console.log;

//use 100vh for mobile responsive
//COP!!!
const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight);
documentHeight();
///////////////////////////////////////////

// q(document.getElementById("rangeContainer").getBoundingClientRect());
const lable = document.getElementById("lable");
const range = document.getElementById("range");

lable.innerText = `${range.value}`;

range.addEventListener("input", () => {
  lable.innerText = `${range.value}`;
  lable.style = `left: ${-10 + (225 * range.value) / 100}px`;
  // q(range.value);
});
