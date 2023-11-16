import React from "react";
import "./TicTacToe.css";
const TicTacToe = () => {
  const [board, setBoard] = React.useState(Array(9).fill(""));
  const [data, setData] = React.useState("x");
  const click_box = (e) => {
    let box = [...board];
    if (board[e] !== "") {
      alert("already clicked");
      return;
    }
    box[e] = data;
    setBoard(box);
    if (data === "x") {
      setData("o");
    } else {
      setData("x");
    }
    if (winner(box)) {
      box.fill("");
      setBoard(box);
      alert("winner");
    }
    if (draw(box)) {
      alert("Match draw");
      box.fill("");
      setBoard(box);
    }
  };
  const draw = (board) => {
    let x = 0;
    board.forEach((element) => {
      if (element !== "") {
        x++;
      }
    });
    if (x >= 9) {
      return true;
    } else {
      return false;
    }
  };
  const winner = (board) => {
    const conditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let flag = false;
    conditions.forEach((el) => {
      if (board[el[0]] !== "" && board[el[1]] !== "" && board[el[2]] !== "") {
        if (board[el[0]] === board[el[1]] && board[el[1]] === board[el[2]]) {
          flag = true;
        }
      }
    });
    return flag;
  };

  return (
    <div>
      <h1 className="heading">Tic - Tac - Toe</h1>
      <div className="table">
        <table>
          <tbody>
            <tr>
              <td onClick={() => click_box(0)}>{board[0]}</td>
              <td onClick={() => click_box(1)}>{board[1]}</td>
              <td onClick={() => click_box(2)}>{board[2]}</td>
            </tr>
            <tr>
              <td onClick={() => click_box(3)}>{board[3]}</td>
              <td onClick={() => click_box(4)}>{board[4]}</td>
              <td onClick={() => click_box(5)}>{board[5]}</td>
            </tr>
            <tr>
              <td onClick={() => click_box(6)}>{board[6]}</td>
              <td onClick={() => click_box(7)}>{board[7]}</td>
              <td onClick={() => click_box(8)}>{board[8]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicTacToe;
