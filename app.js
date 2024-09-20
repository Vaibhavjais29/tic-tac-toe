let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");

let oturn = true;
let count = 0;

const winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (oturn === true) {
      box.innerText = "O";
      box.classList.add("o");
      oturn = false;
    } else {
      box.innerText = "X";
      box.classList.add("x");
      oturn = true;
    }
    box.disabled = true;
    count++;
    if (count === 9) {
      draw();
    }
    checkWinner();
  });
});

const draw = () => {
  msg.innerText = "Match is draw! ";
  msgContainer.classList.remove("hide");
};

const resetGame = () => {
  oturn = true;
  count = 0;
  msgContainer.classList.add("hide");
  boxes.forEach((box) => {
    box.classList.remove("o");
    box.classList.remove("x");
  });
  enableBoxes();
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is  ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const checkWinner = () => {
  for (let pattern of winningPattern) {
    // if (
    //   (boxes[pattern[0]].innerText == "X" && boxes[pattern[1]].innerText == "X" && boxes[pattern[2]].innerText == "X") ||
    //   (boxes[pattern[0]].innerText == "O" && boxes[pattern[1]].innerText == "O" && boxes[pattern[2]].innerText == "O")) {
    //   console.log("game over");}
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        // console.log("Winner", pos1);
        showWinner(pos1);
      }
    }
  }
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
