import GoalItem from "../GoalItem/GoalItem";

const GoalList = function (props) {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <GoalItem
          key={goal.id}
          id={goal.id}
          text={goal.text}
          onDelete={props.onDeleteItem}
        ></GoalItem>
      ))}
    </ul>
  );
};

export default GoalList;
