import React, { useState } from "react";

const TaskInput = ({handleAdd}) => {
  const [list,setList] = useState("");

  const handleInputChange = (e) => {
    setList(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter new task"
        value={list}
        onChange={handleInputChange}
      />
      <button onClick={() => {
        if (list) {
          handleAdd(list);
          setList("");
        }
      }}>Add Here the Task List</button>
    </div>
  );
};

const TaskList = ({lists, handleDeleteTask }) => {
  return (
    <ul>
      {lists.map((list, index) => (
        <li key={index}>
          {list}
          <button onClick={() => handleDeleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  const [lists, setLists] = useState([]);

  const handleAdd = (list) => {
    setLists([...lists, list]);
  };

  const handleDeleteTask = (index) => {
    const newTasks = lists.filter((x, i) => i !== index);
    setLists(newTasks);
  };

  return (
    <div>
      <TaskInput handleAdd={handleAdd} />
      <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default App;
