const letterKeys = document.querySelectorAll("button");
const gameboardRow = document.querySelectorAll(".gameboard__row");

const wordAnswer = "SOUND";

let row = 0;
let column = 0;

const inputLetter = (letter) => {
  if (column < 5) {
    const currentRow = gameboardRow[row];
    const currentBox = currentRow.children[column];
    currentBox.innerText += letter;
    column++;
    console.log(currentBox);
  }
};

const checkWord = () => {
  const currentRow = gameboardRow[row];
  const currentRowLetters = currentRow.children;

  const currentRowLettersArray = Array.from(currentRowLetters);
  const letterArray = currentRowLettersArray.map((div) => {
    return div.innerText;
  });
  console.log(letterArray);

  letterArray.forEach((letter) => {
    const indexOfWordAnswer = wordAnswer.indexOf(letter);
    console.log(indexOfWordAnswer);
  });

  //   if (currentRowLetters === wordAnswer.indexOf(wordAnswer)) {
  //     alert("Correct");
  //   } else {
  //     alert("Incorrect");
  //   }
  //   currentRowLetters.forEach((letter) => {
  //     const indexOfWordAnswer = wordAnswer.indexOf(letter);
  //     console.log(indexOfWordAnswer);
  //   });
};

const clickEnter = () => {
  if (column < 5) {
    alert("Not enough letters");
  } else {
    checkWord();
  }
};

const inputKey = (event) => {
  const key = event.target.innerText;
  if (key === "ENTER") {
    clickEnter();
    // row++;
  } else if (key === "&larr;") {
    // backspace
  } else {
    inputLetter(key);
  }
};

letterKeys.forEach((element) => {
  element.addEventListener("click", inputKey);
});
