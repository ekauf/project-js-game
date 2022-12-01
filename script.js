const letterKeys = document.querySelectorAll("button");
const gameboardRow = document.querySelectorAll(".gameboard__row");

let row = 0;
let column = 0;

const inputLetter = (letter) => {
  if (column < 5) {
    const currentRow = gameboardRow[row];
    const currentBox = currentRow.children[column];
    currentBox.innerHTML += letter;
    column++;
    console.log(currentBox);
  }
};

const inputKey = (event) => {
  const key = event.target.innerHTML;
  if (key === "ENTER") {
    // when click enter, go to next row
    row++;
  } else if (key === "&larr;") {
    // backspace
  } else {
    inputLetter(key);
  }
};

letterKeys.forEach((element) => {
  element.addEventListener("click", inputKey);
});
