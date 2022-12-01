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
    // console.log(currentBox);
  }
};

const checkWord = () => {
  const currentRow = gameboardRow[row];
  const currentRowLetters = currentRow.children;

  const currentRowLettersArray = Array.from(currentRowLetters);
  const letterArray = currentRowLettersArray.map((div) => {
    return div.innerText;
  });
  //   console.log(letterArray);

  letterArray.forEach((letter, index) => {
    const indexOfWordAnswer = wordAnswer.indexOf(letter);
    // console.log(indexOfWordAnswer);
    // console.log(wordAnswer[index]);
    if (indexOfWordAnswer === index) {
      currentRowLetters[index].classList.add("word--green");
    } else if (indexOfWordAnswer > 0) {
      currentRowLetters[index].classList.add("word--yellow");
    } else {
      currentRowLetters[index].classList.add("word--grey");
    }
  });
};

const clickEnter = () => {
  if (column < 5) {
    alert("Not enough letters");
  } else {
    checkWord();
  }
};

const clickDelete = () => {
  //   const currentRow = gameboardRow[row];
  //   const currentRowLetters = currentRow.children;

  //   for (let i = currentRowLetters.length - 1; i > 0; i--) {
  //     if (currentRowLetters[i].innerText !== "") {
  //       currentRowLetters[i].innerText == "";
  //       column--;
  //       break;
  // }
  //   }
  const currentRow = gameboardRow[row];
  const currentBox = currentRow.children[column];

  currentBox.innerHTML = "";
  column--;
  console.log(currentBox);
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
