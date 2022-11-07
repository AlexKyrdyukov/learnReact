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
        { complete: false, title: todo.trim(), id: uuidv1(), hide: false },
      ]);
    }
    setTodo("");
  };
  //==============================
  const showAll = () => {
    const resultArr = arrTodo.map((item) => {
      return { ...item, hide: false };
    });
    setArrTodo(resultArr);
  };
  const showActive = () => {
    const resultArr = arrTodo.map((item) => {
      if (item.complete) {
        return { ...item, hide: true };
      } else if (!item.complete) {
        return { ...item, hide: false };
      }
    });
    setArrTodo(resultArr);
  };
  const showCompleted = () => {
    const resultArr = arrTodo.map((item) => {
      if (item.complete) {
        return { ...item, hide: false };
      } else if (!item.complete) {
        return { ...item, hide: true };
      }
    });
    setArrTodo(resultArr);
  };
  const deleteComplete = () => {
    const resultArr = arrTodo.slice().filter((item) => item.complete === false);
    setArrTodo(resultArr);
    setButtonFlag(false);
  };
  return (
    <div >
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
        showAll={showAll}
        showCompleted={showCompleted}
        showActive={showActive}
        deleteComplete={deleteComplete}
      />
    </div>
  );
}

export default App;
