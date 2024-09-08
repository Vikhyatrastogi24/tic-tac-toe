//accessing all the elements
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg");

let turnO = true; //player 0, player X
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
//to display draw condition
const showDraw = () => {
  message.innerText = "Game is a Draw";
  msgContainer.classList.remove("hide");
  count = 0;
};
//functionality of games boxes
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //player O
      box.style.color = "#815355";
      box.innerText = "O";
      turnO = false;
    } else {
      //player X
      box.style.color = "#523249";
      box.innerText = "X";
      turnO = true;
    }
    count++;
    console.log(count);
    box.disabled = true;
    if (count >= 9) {
      showDraw();
    }
    checkWinner();
  });
});
//disabling the boxes after winner is declared
const disable_boxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

//enabling the boxes again for new game or reset game
const enable_boxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

//displaying winner
const showWinner = (winner) => {
  message.innerText = `Congratulations! Winner Winner Chicken Dinner ${winner}`;
  msgContainer.classList.remove("hide");
  disable_boxes();
};

//checking winner
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    }
  }
};
//reset game button
const reset_Game = () => {
  turnO = true;
  enable_boxes();
  msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click", reset_Game);
resetBtn.addEventListener("click", reset_Game);
