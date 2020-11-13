import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './velha.css';
import './jogoVelha'

function jogoVelha() {
  const empytBoard = Array(9).fill("");

const [bord, setBord] = useState(empytBoard);
const [currentPlayer, setCurrentPlayer] = useState("O");
const [winner, setWinner] = useState();

const handleCellClick =(index)=>{
  if(winner) {
    return null;
  }
  if(bord[index] !== "") {
    return null;
  }
  

  setBord(board.map((item, Itemindex)=> Itemindex === index ? currentPlayer : item));
  setCurrentPlayer(currentPlayer === "X"? "O": "X");
}
const checkWinner = ()=>{
  const possibleWaysTowin =[
    [bord[0], bord[1], bord[2]],
    [bord[3], bord[4], bord[5]],
    [bord[6], bord[7], bord[8]],

    [bord[0], bord[3], bord[6]],
    [bord[1], bord[4], bord[7]],
    [bord[2], bord[5], bord[8]],

    [bord[0], bord[4], bord[8]],
    [bord[2], bord[4], bord[6]],
  ];
  possibleWaysTowin.forEach(cells =>{
    if(cells.every(cell => cell === "O"))setWinner("O venceu");
    if(cells.every(cell => cell === "X"))setWinner("X venceu");
  });
  checkDraw();
}
const checkDraw=()=>{
  if(board.every(item => item !== "")){
    setWinner("E");
  }
}
useEffect(checkWinner, [bord]);
const resetGame=()=>{
  setCurrentPlayer("O");
  setBord(empytBoard);
  setWinner(null);
}
  return (
    <main>
    <h1>Jogo da velha</h1>

    <div className={`board ${winner ? "game-over" : ""}`}>
      {board.map((Item, index) => (
      <div  key={index} className={`cell ${item}`} 
      onClick={()=>handleCellClick(index)}>
      {item}
      </div>
      ))}
    
    </div>
    {winner &
    <footer>
        {winner === "E" ? 
          <h2 className="winner-message">
          <span className={winner}>
         empatou!
          </span>
        
        </h2>
        :
      <h2 className="winner-message">
        <span className={winner}>
        {winner}
        </span>
        venceu!
      </h2>
}
      <button onClick={resetGame}>Reiniciar jogo</button>
    </footer>
}
    </main>
  );
}

export default jogoVelha;
