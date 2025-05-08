const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];
let _curLine = 0;

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

function solve() {
  const n = readInt();
  const arr = readArray();
  const windowSize = readInt();
  process.stdout.write(`${movingAverage(arr, windowSize).join(" ")}`);
}

function readInt() {
  const n = Number(_inputLines[_curLine]);
  _curLine++;
  return n;
}

function readArray() {
  var arr = _inputLines[_curLine]
    .trim(" ")
    .split(" ")
    .map((num) => Number(num));
  _curLine++;
  return arr;
}

function movingAverage(array, windowSize) {
  let result = [];
  let currentSum = 0;

  for (let i = 0; i < windowSize; i++) {
    currentSum += array[i];
  }

  result.push(currentSum / windowSize);

  for (let i = 0; i < array.length - windowSize; i++) {
    currentSum -= array[i];
    currentSum += array[i + windowSize];
    result.push(currentSum / windowSize);
  }

  return result;
}
