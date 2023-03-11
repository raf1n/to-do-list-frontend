import { Container } from "@material-ui/core";
import NavBar from "./components/AppBar/NavBar";
import InputField from "./components/InputField/InputField";
import TaskItem from "./components/TaskItem/TaskItem";
import { useEffect, useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [taskItem, setTaskItem] = useState("");

  const handleTaskItem = (e) => {
    console.log(taskItem);
    const isChecked = false;
    const isDeleted = false;
    let task = { name: taskItem, isChecked, isDeleted };
    fetch("https://to-do.adaptable.app/users", {
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
    fetch("https://to-do.adaptable.app/users")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [refresh]);

  // const [isTickChecked, setIsTickChecked] = useState(taskItem?.isChecked);
  // const handleCheckUpdate = () => {
  //   setIsTickChecked(!isTickChecked);
  // };
  const handleDelete = (id) => {
    console.log(id);
    const newTask = tasks.find((task) => task._id === id);
    const updatedTask = { ...newTask, isDeleted: !newTask?.isDeleted };

    fetch(`https://to-do.adaptable.app/users/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setRefresh(!refresh);
        }
      });
  };
  const handleUpdate = (id) => {
    // handleCheckUpdate();
    const newTask = tasks.find((task) => task._id === id);
    const updatedTask = { ...newTask, isChecked: !newTask?.isChecked };
    console.log(updatedTask);
    console.log(id);
    fetch(`https://to-do.adaptable.app/users/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setTaskItem(updatedTask);
          setRefresh(!refresh);
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
          // handleTaskUpdate={handleTaskUpdate}
          // handleEdit={handleEdit}
          // editable={editable}
          // handleClickOpen={handleClickOpen}
          refresh={refresh}
          setRefresh={setRefresh}
          handleDelete={handleDelete}
          tasks={tasks}
          key={item?._id}
          handleUpdate={handleUpdate}
          item={item}
          // handleClose={handleClose}
          // handleDelete={handleDelete}
          // setOpen={setOpen}
          // open={open}
        ></TaskItem>
      ))}
    </Container>
  );
}

export default App;
