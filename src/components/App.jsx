import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import { v4 as uuidv1 } from "uuid";
import Footer from "./Footer";

function App() {
  const [todo, setTodo] = useState("");
  const [arrTodo, setArrTodo] = useState([]);

  const changeInput = (e) => {
    setTodo(e.target.value);
  };
  const eventSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      setArrTodo((prevTodo) => [
        ...prevTodo,
        { complete: false, title: todo.trim(), id: uuidv1() },
      ]);
    }
    setTodo("");
  };
  return (
    <div className="App">
      <Header
        todo={todo}
        arrTodo={arrTodo}
        changeInput={changeInput}
        eventSubmit={eventSubmit}
      />
      <Main arrTodo={arrTodo} />
      <Footer todo={todo} arrTodo={arrTodo} />
    </div>
  );
}

export default App;
