///////////////////// CONSTANTS /////////////////////////////////////
const winningConditions = [
  [35,36,37,38] //across bottom
  [36,37,38,39]//across bottom
  [37,38,39,40]//across bottom
  [38,39,40,41]//across bottom
  [39.40,41,42]//across bottom
  [35,28,21,14]//up
  [28,21,14,7]//up
  [21,14,7,0]//up
  [36,29,22,15]//up
  [29,22,15,8]//up
  [22,15,8,1]//up
  [37,30,23,16]//up
  [30,23,16,9]//up
  [23,16,9,2]//up
  [38,31,24,17]//up
  [31,24,17,10]//up
  [24,17,10,3]//up
  [39,32,25,18]//up
  [32,25,18,11]//up
  [25,18,11,4]//up
  [40,33,26,19]//up
  [33,26,19,12]//up
  [26,19,12,5]//up
  [41,34,27,20]//up
  [34,27,20,13]//up
  [27,20,13,6]//up
  [35,29,23,17]//diagonala
  [36,30,24,18]//diagonala
  [37,31,25,19]//diagonala
  [38,32,26,20]//diagonala
  [28,22,16,10]//diagonalb
  [29,23,17,11]//diagonalb
  [30,24,18,12]//diagonalb
  [31,25,19,13]//diagonalb
  [21,15,9,3] //diagonalc
  [22,16,10,4] //diagonalc
  [23,17,11,5] //diagonalc
  [24,18,12,6] //diagonalc
  [41,33,25,17]//diagonald
  [40,32,24,16]//diagonald
  [39,31,23,15]//diagonald
  [38,30,22,14]//diagonald
  [34,26,18,10] //diagonale
  [33,25,17,9]//diagonale
  [32,24,16,8]//diagonale
  [31,23,15,7]//diagonale
  [27,19,11,3]//diagonalf
  [26,18,10,2]//diagonalf
  [25,17,9,1]//diagonalf
  [24,16,8,0]//diagonalf

];
///////////////////// APP STATE (VARIABLES) /////////////////////////
let board;
let turn;
let win;
let rwon = 0;
let ywon = 0;
let tieScore = 0;
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
const message = document.querySelector("h2");
///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = init;
document.getElementById("firstX").onclick = firstX;
document.getElementById("firstO").onclick = firstO;
document.getElementById("board").onclick = takeTurn;
document.getElementById("reset-button").onclick = init;
document.getElementById("firstX").onclick = init2;
document.getElementById("firstO").onclick = init3;
///////////////////// FUNCTIONS //////////////////////////////////////
function init() {
  board = [
    "", "", "", "", "","", ""
    "", "", "", "", "","", ""
    "", "", "", "", "","", ""
    "", "", "", "", "","", ""
    "", "", "", "", "","", ""
    "", "", "", "", "","", ""
  ];

  turn = turn;
  win = null;

  render();
}

function init2() {
  board = [
    "", "", "", "", "","", ""
    "", "", "", "", "","", ""
    "", "", "", "", "","", ""
    "", "", "", "", "","", ""
    "", "", "", "", "","", ""
    "", "", "", "", "","", ""
  ];

  turn = "yellow";
  win = null;

  render();

};

function init3() {
  board = [
    "", "", "", "", "","", ""
    "", "", "", "", "","", ""
    "", "", "", "", "","", ""
    "", "", "", "", "","", ""
    "", "", "", "", "","", ""
    "", "", "", "", "","", ""
  ];
  turn = "red"
  win = null;

  render();
}

function firstr(){
  document.getElementById("change").innerHTML = "Turn: Red";
  turn = "Red";

};

function firsty(){
  document.getElementById("change").innerHTML = "Turn: Yellow";
  turn = "Yellow";
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
      turn = turn === "Red" ? "Yellow" : "Red";
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
      board[condition[1]] === board[condition[2]] &&

    ) {
      winner = board[condition[0]];
      if (winner === "Red") {
        rwon++;
        document.getElementById("firstList").innerHTML = rwon
      };
      if (winner === "Yellow") {
        ywon++;
        document.getElementById("secondList").innerHTML = ywon
      };
    };
  });
  return winner ? winner : board.includes("") ? null : "T";
};
