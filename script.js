function createPromise(min, max) {
  const randomTime = Math.floor(Math.random() * (max - min + 1) + min) * 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(randomTime / 1000);
    }, randomTime);
  });
}

function addLoadingText() {
  const output = document.getElementById("output");
  output.innerHTML += `<tr id="loading"><td colspan="2">Loading...</td></tr>`;
}

function removeLoadingText() {
  const output = document.getElementById("output");
  output.innerHTML = "";
}

function updateTable(results) {
  const output = document.getElementById("output");
  results.forEach((time, index) => {
    output.innerHTML += `<tr><td>Promise ${
      index + 1
    }</td><td>${time}</td></tr>`;
  });

  const totalTime = results.reduce((acc, curr) => acc + curr, 0);
  output.innerHTML += `<tr><td>Total</td><td>${totalTime.toFixed(3)}</td></tr>`;
}

function main() {
  const promises = [
    createPromise(1, 3),
    createPromise(1, 3),
    createPromise(1, 3),
  ];

  addLoadingText();

  Promise.all(promises)
    .then((results) => {
      removeLoadingText();
      updateTable(results);
    })
    .catch((error) => {
      console.error("Error occurred:", error);
    });
}

window.onload = main;
