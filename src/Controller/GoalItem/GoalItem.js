const GoalItem = function (props) {
  const deleteHandler = function () {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.text}
    </li>
  );
};

export default GoalItem;
