let table = document.querySelector("#output");
 
function createRow(i, delay) {
  // Create a new row
  let newRow = table.insertRow();
 
  // Insert two cells (columns) into the new row
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
 
  // Add data to the cells
  if (typeof i == "number") {
    cell1.innerHTML = `Promise ${i}`;
  } else {
    cell1.innerHTML = i;
  }
  cell2.innerHTML = delay;
}
 
createRow("Loading...", "Loading...");
 
function generateRandom() {
  const randomNumber = (Math.random() * (3 - 1) + 1).toFixed(3);
  return parseFloat(randomNumber);
}
 
const p1 = new Promise((resolve) => {
  let delay = generateRandom();
 
  setTimeout(() => {
    resolve({ message: "P1 Passed", time: delay });
  }, delay * 1000);
});
 
const p2 = new Promise((resolve) => {
  let delay = generateRandom();
 
  setTimeout(() => {
    resolve({ message: "P2 Passed", time: delay });
  }, delay * 1000);
});
 
const p3 = new Promise((resolve) => {
  let delay = generateRandom();
 
  setTimeout(() => {
    resolve({ message: "P2 Passed", time: delay });
  }, delay * 1000);
});
 
let promiseArr = [p1, p2, p3];
 
Promise.all(promiseArr).then((values) => {
  table.children[0].remove();
  createRow(1, "");
  createRow(2, "");
  createRow(3, "");
  let total = 0;
  values.forEach((result, i) => {
    total += result.time;
    table.children[i].children[1].textContent = result.time;
  });
 
  createRow("Total", parseFloat(total.toFixed(3)));
});