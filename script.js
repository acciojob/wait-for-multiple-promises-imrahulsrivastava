function createPromise(count) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(count);
    }, count);
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
  const promises = [createPromise(1), createPromise(2), createPromise(3)];

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
