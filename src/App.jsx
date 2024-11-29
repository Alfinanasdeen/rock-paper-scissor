import { useState } from "react";
import "./App.css";
import Player from "./components/Player";
import ActionBtn from "./components/ActionBtn";
import ShowWinner from "./components/ShowWinner";
import { randomAction, calculateWinner } from "./utils/gameLogic";

function App() {
  const [playerAction, setPlayerAction] = useState("");
  const [computerAction, setComputerAction] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [winner, setWinner] = useState(0);

  const onActionSelected = (selectedAction) => {
    setPlayerAction(selectedAction);
    const newComputerAction = randomAction();
    setComputerAction(newComputerAction);

    const newWinner = calculateWinner(selectedAction, newComputerAction);
    setWinner(newWinner);

    if (newWinner === -1) {
      setPlayerScore((prevScore) => prevScore + 1);
    } else if (newWinner === 1) {
      setComputerScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <div className="center">
      <h1>Rock Paper Scissors</h1>
      <div className="container">
        <Player name="You" score={playerScore} action={playerAction} />
        <Player name="Computer" score={computerScore} action={computerAction} />
      </div>
      <div className="action-buttons">
        <ActionBtn action="rock" onActionSelected={onActionSelected} />
        <ActionBtn action="paper" onActionSelected={onActionSelected} />
        <ActionBtn action="scissors" onActionSelected={onActionSelected} />
      </div>
      <ShowWinner winner={winner} />
    </div>
  );
}

export default App;
