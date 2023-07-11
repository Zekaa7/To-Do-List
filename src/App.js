import React, { useState } from "react";
import "./index.css";

import "./App.css";

import CourseInput from "./Controller/CourseInput";
import GoalList from "./Controller/GoalList/GoalList";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Being productive!", id: "g1" },
    { text: "Start your day!", id: "g2" },
  ]);

  const addGoalHandler = function (input) {
    setCourseGoals((prevGoals) => {
      const updateGoals = [...prevGoals];
      updateGoals.unshift({ text: input, id: Math.random().toString() });
      return updateGoals;
    });
  };

  const deleteItemHandler = function (id) {
    setCourseGoals((prevGoals) => {
      const updateGoals = prevGoals.filter((goal) => goal.id !== id);
      return updateGoals;
    });
  };

  let errorMess = (
    <p style={{ textAlign: "center", fontSize: "1.8rem" }}>
      No goals found. Maybe add one?
    </p>
  );

  return (
    <div className="main-div">
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>

      <section id="goals">
        <GoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
        {courseGoals.length === 0 ? errorMess : ``}
      </section>
    </div>
  );
};

export default App;
