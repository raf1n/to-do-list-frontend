import { Container } from "@material-ui/core";
import NavBar from "./components/AppBar/NavBar";
import InputField from "./components/InputField/InputField";
import TaskItem from "./components/TaskItem/TaskItem";
import { useEffect, useState } from "react";

function App() {
  const [taskItem, setTaskItem] = useState("");
  const handleTaskItem = (e) => {
    console.log(taskItem);
    const isChecked = false;
    const isDeleted = false;
    let task = { name: taskItem, isChecked, isDeleted };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        handleAddTask(data);
      });
  };
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [tasks]);

  // const [isTickChecked, setIsTickChecked] = useState(taskItem?.isChecked);
  // const handleCheckUpdate = () => {
  //   setIsTickChecked(!isTickChecked);
  // };
  const handleUpdate = (id) => {
    // handleCheckUpdate();
    const newTask = tasks.find((task) => task._id === id);
    const updatedTask = { ...newTask, isChecked: !newTask?.isChecked };
    console.log(updatedTask);
    console.log(id);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...updatedTask }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setTaskItem(updatedTask);
        }
      });
  };

  return (
    <Container>
      <NavBar></NavBar>
      <InputField
        handleTaskItem={handleTaskItem}
        setTaskItem={setTaskItem}
      ></InputField>
      {tasks?.map((item) => (
        <TaskItem
          key={item?._id}
          handleUpdate={handleUpdate}
          item={item}
        ></TaskItem>
      ))}
    </Container>
  );
}

export default App;
