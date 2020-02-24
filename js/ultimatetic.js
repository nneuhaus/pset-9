///////////////////// CONSTANTS /////////////////////////////////////

const winningConditionsTotal = [

  [0, 10, 20],
  [30, 40, 50],
  [60, 70, 80],
  [0, 30, 60],
  [10, 40, 70],
  [20, 50, 80],
  [0, 40, 80],
  [20, 40, 60]
];

const smallWinningConditions = [

  //1
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
  // 2
  [11, 12, 13],
  [14, 15, 16],
  [17, 18, 19],
  [11, 14, 17],
  [12, 15, 18],
  [13, 16, 19],
  [11, 15, 19],
  [13, 15, 17],
  //3
  [21, 22, 23],
  [24, 25, 26],
  [27, 28, 29],
  [21, 24, 27],
  [22, 25, 28],
  [23, 26, 29],
  [21, 25, 29],
  [23, 25, 27],
  //4
  [31, 32, 33],
  [34, 35, 36],
  [37, 38, 39],
  [31, 34, 37],
  [32, 35, 38],
  [33, 36, 39],
  [31, 35, 39],
  [33, 35, 37],
  //5
  [41, 42, 43],
  [44, 45, 46],
  [47, 48, 49],
  [41, 44, 47],
  [42, 45, 48],
  [43, 46, 49],
  [41, 45, 49],
  [43, 45, 47],
  // 6
  [51, 52, 53],
  [54, 55, 56],
  [57, 58, 59],
  [51, 54, 57],
  [52, 55, 58],
  [53, 56, 59],
  [51, 55, 59],
  [53, 55, 57],

  // 7

  [61, 62, 63],
  [64, 65, 66],
  [67, 68, 69],
  [61, 64, 67],
  [62, 65, 68],
  [63, 66, 69],
  [61, 65, 69],
  [63, 65, 67],
  //8
  [71, 72, 73],
  [74, 75, 76],
  [77, 78, 79],
  [71, 74, 77],
  [72, 75, 78],
  [73, 76, 79],
  [71, 75, 79],
  [73, 75, 77],
//9
  [81, 82, 83],
  [84, 85, 86],
  [87, 88, 89],
  [81, 84, 87],
  [82, 85, 88],
  [83, 86, 89],
  [81, 85, 89],
  [83, 85, 87],
]

///////////////////// APP STATE (VARIABLES) /////////////////////////

let board;
let turn;
let totalWin = false;;
let sqaureWin1 = false;
let smallWin2 = false;
let smallWin3 = false;
let smallWin4 = false;
let smallWin5 = false;
let smallWin6 = false;
let smallWin7 = false;
let smallWin8 = false;
let smallWin9 = false;
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
const squares = Array.from(document.querySelectorAll("#board div"));
const message = document.querySelector("h2");

///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = init;

document.getElementById("board").onclick = takeTurn;

document.getElementById("reset-button").onclick = init;


//////////////////// FUNCTIONS /////////////////////////////////////
function init() {

  board = [

  ];

  turn = "X";
  render();
}

function render() {
  board.forEach(function(mark, index) {
    squares[index].textContent = mark;
  });
  message.textContent = win ? `${overallWin} wins!` : `Turn: ${turn}`;
}

function takeTurn(e) {
  if (!overallWin) {
    let index = squares.findIndex(function(square) {
      return square === e.target;
    });

    if (squares[index].textContent !== "X" && squares[index].textContent !== "O") {
      board[index] = turn;

      if(smallWin1 === "X" || smallWin1 === "O") {

      } else {

        smallWin1 = getsmallWinner1(e);
      }

      if(smallWin2 === "X" || smallWin2 === "O") {

        //don't run this function again

      } else {

        smallWin2 = getsmallWinner2(e);

      }



      if(smallWin3 === "X" || smallWin3 === "O") {

        //don't run this function again

      } else {

        smallWin3 = getsmallWinner3(e);

      }



      if(smallWin4 === "X" || smallWin4 === "O") {

        //don't run this function again

      } else {

        smallWin4 = getsmallWinner4(e);

      }



      if(smallWin5 === "X" || smallWin5 === "O") {

        //don't run this function again

      } else {

        smallWin5 = getsmallWinner5(e);

      }



      if(smallWin6 === "X" || smallWin6 === "O") {

        //don't run this function again

      } else {

        smallWin6 = getsmallWinner6(e);

      }



      if(smallWin7 === "X" || smallWin7 === "O") {

        //don't run this function again

      } else {

        smallWin7 = getsmallWinner7(e);

      }



      if(smallWin8 === "X" || smallWin8 === "O") {

        //don't run this function again

      } else {

        smallWin8 = getsmallWinner8(e);

      }



      if(smallWin9 === "X" || smallWin9 === "O") {

        //don't run this function again

      } else {

        smallWin9 = getsmallWinner9(e);

      }





      overallWin = getOverallWinner();



      turn = turn === "X" ? "O" : "X";

    }

/*

    if(squareWin1 === true) {

      let bigIndex = Math.floor((index/10));

      if (bigIndex !== 0) {

        bigIndex = bigIndex * 10;

      }

      turn = turn === "X" ? "O" : "X";

      squares[bigIndex].textContent = turn;



    }

    if(squareWin2 === true) {

      let bigIndex = Math.floor((index/10));

      if (bigIndex !== 0) {

        bigIndex = bigIndex * 10;

      }

      turn = turn === "X" ? "O" : "X";

      squares[bigIndex].textContent = turn;



    }

*/

    render();

  }

}



function getsmallWinner1(e){

  let winner = false;



  miniWinningConditions1.forEach(function(condition, index) {

    if (

      board[condition[0]] &&

      board[condition[0]] === board[condition[1]] &&

      board[condition[1]] === board[condition[2]]

    ) {



    winner = board[condition[0]];

    smallWin1 = true;

    console.log("small WINNER 1");

  }

  });



  return winner;

}



function getsmallWinner2(e){

  let winner = false;



  miniWinningConditions2.forEach(function(condition, index) {

    if (

      board[condition[0]] &&

      board[condition[0]] === board[condition[1]] &&

      board[condition[1]] === board[condition[2]]

    ) {



    winner = board[condition[0]];

    smallWin2 = true;

    console.log("small WINNER 2");

    }

  });



  return winner;

}



function getsmallWinner3(e){

  let winner = false;



  miniWinningConditions3.forEach(function(condition, index) {

    if (

      board[condition[0]] &&

      board[condition[0]] === board[condition[1]] &&

      board[condition[1]] === board[condition[2]]

    ) {



    winner = board[condition[0]];

    smallWin3 = true;

    console.log("small WINNER 3");

    }

  });



  return winner;

}



function getsmallWinner4(e){

  let winner = false;



  miniWinningConditions4.forEach(function(condition, index) {

    if (

      board[condition[0]] &&

      board[condition[0]] === board[condition[1]] &&

      board[condition[1]] === board[condition[2]]

    ) {



    winner = board[condition[0]];

    smallWin4 = true;

    console.log("small WINNER 4");

    }

  });



  return winner;

}



function getsmallWinner5(e){

  let winner = false;



  miniWinningConditions5.forEach(function(condition, index) {

    if (

      board[condition[0]] &&

      board[condition[0]] === board[condition[1]] &&

      board[condition[1]] === board[condition[2]]

    ) {



    winner = board[condition[0]];

    smallWin5 = true;

    console.log("small WINNER 5");

    }

  });



  return winner;

}



function getsmallWinner6(e){

  let winner = false;



  miniWinningConditions6.forEach(function(condition, index) {

    if (

      board[condition[0]] &&

      board[condition[0]] === board[condition[1]] &&

      board[condition[1]] === board[condition[2]]

    ) {



    winner = board[condition[0]];

    smallWin6 = true;

    console.log("small WINNER 6");

    }

  });



  return winner;

}



function getsmallWinner7(e){

  let winner = false;



  miniWinningConditions7.forEach(function(condition, index) {

    if (

      board[condition[0]] &&

      board[condition[0]] === board[condition[1]] &&

      board[condition[1]] === board[condition[2]]

    ) {



    winner = board[condition[0]];

    smallWin7 = true;

    console.log("small WINNER 7");

    }

  });



  return winner;

}



function getsmallWinner8(e){

  let winner = false;



  miniWinningConditions8.forEach(function(condition, index) {

    if (

      board[condition[0]] &&

      board[condition[0]] === board[condition[1]] &&

      board[condition[1]] === board[condition[2]]

    ) {



    winner = board[condition[0]];

    smallWin8 = true;

    console.log("small WINNER 8");

    }

  });



  return winner;

}



function getsmallWinner9(e){

  let winner = false;



  miniWinningConditions9.forEach(function(condition, index) {

    if (

      board[condition[0]] &&

      board[condition[0]] === board[condition[1]] &&

      board[condition[1]] === board[condition[2]]

    ) {



    winner = board[condition[0]];

    smallWin9 = true;

    console.log("small WINNER 9");

    }

  });



  return winner;

}



function getOverallWinner(){

  let winner = false;



  if (

    (smallWin1 === "X" && smallWin2 === "X" && smallWin3 === "X") ||

    (smallWin4 === "X" && smallWin5 === "X" && smallWin6 === "X") ||

    (smallWin7 === "X" && smallWin8 === "X" && smallWin9 === "X") ||

    (smallWin1 === "X" && smallWin4 === "X" && smallWin7 === "X") ||

    (smallWin2 === "X" && smallWin5 === "X" && smallWin8 === "X") ||

    (smallWin5 === "X" && smallWin6 === "X" && smallWin9 === "X") ||

    (smallWin1 === "X" && smallWin5 === "X" && smallWin9 === "X") ||

    (smallWin3 === "X" && smallWin5 === "X" && smallWin7 === "X")

  ) {

    console.log("X is the ultimate winner!");

    overallWin = "X";

    win = true;

  } else if (

    (smallWin1 === "O" && smallWin2 === "O" && smallWin3 === "O") ||

    (smallWin4 === "O" && smallWin5 === "O" && smallWin6 === "O") ||

    (smallWin7 === "O" && smallWin8 === "O" && smallWin9 === "O") ||

    (smallWin1 === "O" && smallWin4 === "O" && smallWin7 === "O") ||

    (smallWin2 === "O" && smallWin5 === "O" && smallWin8 === "O") ||

    (smallWin5 === "O" && smallWin6 === "O" && smallWin9 === "O") ||

    (smallWin1 === "O" && smallWin5 === "O" && smallWin9 === "O") ||

    (smallWin3 === "O" && smallWin5 === "O" && smallWin7 === "O")

  ) {

    console.log("O is the OVERALL WINNER");

    overallWin = "O";

    win = true;

  } else {

    //null

  }



  //return winner ? winner : board.includes("") ? null : "T";

}
