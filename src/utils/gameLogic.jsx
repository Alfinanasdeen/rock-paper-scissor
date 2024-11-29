const actions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  
  export function randomAction() {
    const keys = Object.keys(actions);
    const index = Math.floor(Math.random() * keys.length);
    return keys[index];
  }
  
  export function calculateWinner(action1, action2) {
    if (action1 === action2) {
      return 0;
    } else if (actions[action1] === action2) {
      return -1;
    } else if (actions[action2] === action1) {
      return 1;
    }
    return null;
  }
  