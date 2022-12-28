import { Container } from "@material-ui/core";
import NavBar from "./components/AppBar/NavBar";
import InputField from "./components/InputField/InputField";
import TaskItem from "./components/TaskItem/TaskItem";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [tasks]);
  return (
    <Container>
      <NavBar></NavBar>
      <InputField></InputField>
      {tasks.map((item) => (
        <TaskItem key={item._id} item={item}></TaskItem>
      ))}
    </Container>
  );
}

export default App;
