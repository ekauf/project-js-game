The Game: Wordle

How the game works.

- each guess must be a valid 5 letter word
- colour of the titles will change to show how close your guess is to the word.
- colour: 'green' - correct letter in correct spot, 'yellow' - correct letter in the wrong spot, 'grey' - incorrect letter

HTML

- heading: game title (centre), buttons (right) - help, statistics, settings - will open up pop-out.
- score/streak board
- section 1 main word grid - empty button grid - 5x6 (input letters) 'use input - read only'/span
- section 2 main - button grid - onscreen keyboard - each key will have a letter/function (enter/backspace) data attribute

CSS

- styling - fonts/colours - plain aesthetic look
- grid layout
- responsiveness (after 1024px adapt to web screen)

JavaScript
(word database)

- array of 5-lettered words - will import into main js file - how many ? - official wordle game - 12,972

(game mechanics)

- randomly select word from word database
- register user input (letters to appear in grid) - use event listener to respond when user clicks on any of the letters/function - add keyboard functionality (extra).
- keep track of the buttons pressed
- show letters on grid (top to bottom, left to right) - innerhtml
- once a tile has a value (letter) - move onto the next tile
- delete function - remove letter from tile and the next tile (going backwards) until row is empty.
- enter function - submit typed word for evaluation against randomly chosen 5 lettered word - algorithm for finding correct/incorrect letters.
- apply correct colour to letters in both word grid and keyboard after evaluation
- enter function - if clicked - no 5 letters in row - alert 'not enough letters'
- enter function - if clicked - if entered word is not in database - alert - 'not a valid word (optional extra)

- if correct word is guessed - add 1 score, reset word, word grid and word keyboard.
- if word not guessed - move onto next row - continue untill all 6 rows filled.
- if word not guessed after 6 attempts - reset score - reset word, word grid and word keyboard.
