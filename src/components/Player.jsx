import ActionIcon from "./ActionIcon";

function Player({ name = "Player", score = 0, action = "paper" }) {
  return (
    <div className="player">
      <div className="score">{`${name}: ${score}`}</div>
      <div className="action">
        {action && <ActionIcon action={action} size={50} />}
      </div>
    </div>
  );
}

export default Player;
