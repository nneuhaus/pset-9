///////////////////// CONSTANTS /////////////////////////////////////
const winningConditions = [
  [0, 10, 20],
  [30, 40, 50],
  [60, 70, 80],
  [0, 30, 60],
  [10, 40, 70],
  [20, 50, 80],
  [0, 40, 80],
  [20, 40, 60]
];

const sqaureWin = [
  //box1
  [1,2,3]
  [4,5,6]
  [7,8,9]
  [3,5,7]
  [2,5,8]
  [3,6,9]
  [1,5,9]
  [1,4,7]

  //box2
  //box3
  //box4
  //box5
  //box6
  //box7
  //box8
  //box8
  //box9
]
///////////////////// APP STATE (VARIABLES) /////////////////////////

let board;
let turn;
let sqaureWin;
let fullWin
let xwon = 0;
let owon = 0;
let tieScore = 0;
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
const squares = Array.from(document.querySelectorAll("#board div"))
const message = document.querySelector("h2");
///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = init;
document.getElementById("firstX").onclick = firstX;
document.getElementById("firstO").onclick = firstO;
document.getElementById("board").onclick = takeTurn;
document.getElementById("reset-button").onclick = init;
document.getElementById("firstX").onclick = init2;
document.getElementById("firstO").onclick = init3;
///////////////////// FUNCTIONS /////////////////////////////////////
function init() {
  board = [
    "", "", "",
    "", "", "",
    "", "","",
  ];

  turn = turn;
  win = null;

  render();
}

function init2() {
  board = [
    "", "", "",
    "", "", "",
    "", "","",
  ];

  turn = "X";
  win = null;

  render();

};

function init3() {
  board = [
    "", "", "",
    "", "", "",
    "", "","",
  ];
  turn = "O"
  win = null;

  render();
}

function firstX(){
  document.getElementById("change").innerHTML = "Turn: X";
  turn = "X";

};

function firstO(){
  document.getElementById("change").innerHTML = "Turn: O";
  turn = "O";
};

function render() {
  board.forEach(function(mark, index) {
    squares[index].textContent = mark;
  });

  message.textContent =
    win === "T" ? "It's a tie!" : win ? `${win} wins!` : `Turn: ${turn}`;
}

function takeTurn(e) {
  if (!win) {
    let index = squares.findIndex(function(square) {
      return square === e.target;
    });

    if (board[index] === "") {
      board[index] = turn;
      turn = turn === "X" ? "O" : "X";
      win = getWinner();

      render();
    }
    if (win === "T") {
      tieScore++;
      document.getElementById("thirdList").innerHTML = tieScore;
    };
  };
};

function getWinner() {
  let winner = null;

  winningConditions.forEach(function(condition, index) {
    if (
      board[condition[0]] &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]]
    ) {
      winner = board[condition[0]];
      if (winner === "X") {
        xwon++;
        document.getElementById("firstList").innerHTML = xwon
      };
      if (winner === "O") {
        owon++;
        document.getElementById("secondList").innerHTML = owon
      };
    };
  });
  return winner ? winner : board.includes("") ? null : "T";
};
