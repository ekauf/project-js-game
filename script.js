const letterKeys = document.querySelectorAll("button");
const gameboardRow = document.querySelectorAll(".gameboard__row");
const scoreBoard = document.querySelector(".scoreBoard");

import { wordsArr } from "./wordsArr.js";

const capitalsWordsArr = wordsArr.map((word) => word.toUpperCase());

const wordAnswer =
  capitalsWordsArr[Math.floor(Math.random() * capitalsWordsArr.length)];

// console.log(wordAnswer);

let row = 0;
let column = 0;
let score = 0;
let gameOver = false;

const inputLetter = (letter) => {
  if (column < 5) {
    const currentRow = gameboardRow[row];
    const currentBox = currentRow.children[column];
    currentBox.innerText += letter;
    column++;
  }
};

const checkWord = () => {
  const currentRow = gameboardRow[row];
  const currentRowLetters = currentRow.children;

  let nCorrectLetters = 0;

  const currentRowLettersArray = Array.from(currentRowLetters);
  const letterArray = currentRowLettersArray.map((div) => {
    return div.innerText;
  });

  letterArray.forEach((letter, index) => {
    const indexOfWordAnswer = wordAnswer.indexOf(letter);

    if (indexOfWordAnswer === index) {
      nCorrectLetters += 1;
      currentRowLetters[index].classList.add("word--green");
    } else if (indexOfWordAnswer > 0) {
      currentRowLetters[index].classList.add("word--yellow");
    } else {
      currentRowLetters[index].classList.add("word--grey");
    }
  });

  if (nCorrectLetters === 5) {
    alert("CORRECT GUESS");
    score++, (scoreBoard.innerHTML = `<p>Score: ${score}</p>`);
  } else if (row === 5) {
    gameOver = true;
    alert("You failed. Better luck next time kid. Your score was " + score);
  }
};

const clickEnter = () => {
  if (column < 5) {
    alert("Not enough letters");
  } else {
    checkWord();
    row += 1;
    column = 0;
  }
};

const clickDelete = () => {
  const currentRow = gameboardRow[row];
  const currentBox = currentRow.children[column];

  currentBox.innerHTML = "";
  column--;
};

const inputKey = (event) => {
  const key = event.target.innerText;
  if (key === "ENTER") {
    clickEnter();
  } else if (key === "DEL") {
    clickDelete();
  } else {
    inputLetter(key);
  }
};

letterKeys.forEach((element) => {
  element.addEventListener("click", inputKey);
});
