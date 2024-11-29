import ActionIcon from "./ActionIcon";

function ActionBtn({ action = "rock", onActionSelected }) {
  return (
    <button className="btnRound" onClick={() => onActionSelected(action)}>
      <ActionIcon action={action} size={20} />
    </button>
  );
}

export default ActionBtn;
