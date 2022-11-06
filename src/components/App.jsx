import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import { v4 as uuidv1 } from "uuid";
import Footer from "./Footer";

function App() {
  const [buttonFlag, setButtonFlag] = useState(false);
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
  //==============================
  const showAll = () => {
    console.log(arrTodo);
    setArrTodo(arrTodo);
  };
  const showActive = () => {
    const resultArr = arrTodo.filter((item) => item.complete === false);
    setArrTodo(resultArr);
  };
  const showCompleted = () => {};
  const deleteComplete = () => {
    const resultArr = arrTodo.filter((item) => item.complete === false);
    setArrTodo(resultArr);
    setButtonFlag(false);
  };
  return (
    <div className="App">
      <Header
        todo={todo}
        arrTodo={arrTodo}
        changeInput={changeInput}
        eventSubmit={eventSubmit}
        setArrTodo={setArrTodo}
        buttonFlag={buttonFlag}
        setButtonFlag={setButtonFlag}
      />
      <Main
        arrTodo={arrTodo}
        setArrTodo={setArrTodo}
        buttonFlag={buttonFlag}
        setButtonFlag={setButtonFlag}
      />
      <Footer
        arrTodo={arrTodo}
        showCompleted={showCompleted}
        showAll={showAll}
        showActive={showActive}
        deleteComplete={deleteComplete}
      />
    </div>
  );
}

export default App;
