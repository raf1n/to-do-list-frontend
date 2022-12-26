import { Container } from "@material-ui/core";
import NavBar from "./components/AppBar/NavBar";
import InputField from "./components/InputField/InputField";
import TaskItem from "./components/TaskItem/TaskItem";

function App() {
  return (
    <Container>
      <NavBar></NavBar>
      <InputField></InputField>
      {[1, 2, 3, 4].map((indx, item) => (
        <TaskItem key={indx} item={item}></TaskItem>
      ))}
    </Container>
  );
}

export default App;
