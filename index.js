const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Initialize the game board
const board = Array(100).fill(0);

// Define the positions of the snakes and ladders

board[6] = 33; // ladder from 7 to 33
board[35] = 19; // snake from 36 to 19
board[36] = 85; // ladder from 37 to 85
board[50] = 72; // ladder from 51 to 72
board[62] = 99; // ladder from 63 to 99 
board[64] = 35; // snake from 65 to 35
board[86] = 32; // snake from 87 to 32
board[96] = 21; // snake from 97 to 21


// console.log(board.join(" - "))


// Initialize the player's position
let position = 0;
// Loop until the player reaches 100
let i = 1;
// Simulate a dice roll
function rollDice() {
  return Math.ceil(Math.random() * 6) + 1;
}


function playGame() {

  // while (position < 100) {

  // Roll the dice
  const dice = rollDice();

  // Update the player's position based on the dice roll
  position += dice;
  // position = position+ dice

  // Check if the player has won
  if (position === 100) {
    
    console.log(`Turn: ${i++}`)
    console.log(`Dice value: ${dice}`)

    console.log(`Yay!! You won!! and Your Possition are : ${position} \n\n\n\n\n\n\n`);

    rl.question('Do you want to play again?(y/n)', (answer) => {
      if (answer === "y" || answer === "Y") {
        position = 1;
        i = 1;
        playGame(); // Play the next turn of the game
      } else if (answer === "n" || answer === "N") {
        console.log('Thank for Your time.');
        return;
      } else {
        console.log('Invalid input!');
        console.log('Thank for Your time.');
        return;
      }
    });

  }

  // Check if the player has gone past 100

  if (position > 100) {
    position -= dice;
  }

  // Check if the player has landed on a ladder or a snake
  const cellValue = board[position - 1]; // 33
  if (cellValue > 0) {
    if (cellValue > position) {
      console.log(`Ladder from ${position} to ${cellValue}`);
    } else {
      console.log(`Snake from ${position} to ${cellValue}`);
    }
    position = cellValue;
  }

  // Display the player's current position
  if (position !== 100) {
    console.log(`Turn: ${i++}`)
    console.log(`Dice value: ${dice}`)
    console.log(`New position: ${position}\n`);

    rl.question('Press enter to roll the dice', (answer) => {
      // This code will be executed when the user presses enter
      console.log('The user pressed enter');
      playGame(); // Play the next turn of the game
    });
  }

  // }

}

rl.question(`'Press enter to start the game`, (answer) => {
  playGame();
});







// ************************ New Way ******************************


// // Define snakes and ladders
// const ladders = [[7, 33], [37, 85], [51, 72]];
// const snakes = [[36, 19], [65, 35], [87, 32]];

// // Initialize player position
// let position = 0;

// // Roll the dice and move the player accordingly
// function rollDice() {
//   const dice = Math.floor(Math.random() * 6) + 1;
//   console.log("Dice roll:", dice);
//   const newPosition = position + dice;
//   if (newPosition > 100) {
//     console.log("New position:", position);
//   } else {
//     position = getNewPosition(newPosition);
//     console.log("New position:", position);
//     if (position === 100) {
//       console.log("Yay!! You won!!");
//     }
//   }
// }

// // Get the new position after accounting for snakes and ladders
// function getNewPosition(newPosition) {
//   for (let ladder of ladders) {
//     if (ladder[0] === newPosition) {
//       console.log(`Ladder from ${ladder[0]} to ${ladder[1]}`);
//       return ladder[1];
//     }
//   }
//   for (let snake of snakes) {
//     if (snake[0] === newPosition) {
//       console.log(`Snake from ${snake[0]} to ${snake[1]}`);
//       return snake[1];
//     }
//   }
//   return newPosition;
// }

// // Play the game for 10 turns
// for (let i = 1; i <= 10; i++) {
//   console.log(`Turn ${i}:`);
//   rollDice();
// }
