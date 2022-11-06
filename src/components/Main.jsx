import nullCheckbox from "../images/check.png";
import remove from "../images/delete.png";
import checkbox from "../images/checkbox.png";
import style from "./styles/main.module.css";
const Main = (props) => {
  //
  //
  const deleteToDo = (id) => {
    const resultArr = props.arrTodo.filter((item) => item.id !== id);
    props.setArrTodo(resultArr);
  };
  //
  const complete = (id, e) => {
    const $inputEl = e.target.nextElementSibling;
    const resultArr = props.arrTodo.map((item, index) => {
      if (item.id === id && !item.complete) {
        $inputEl.className = "main_mainDecoration__CjTWi";
        return { ...item, complete: true };
      } else if (item.id === id && item.complete) {
        $inputEl.className = "main_main__UddNF";
        return { ...item, complete: false };
      }
      return { ...item };
    });
    props.setArrTodo(resultArr);
  };
  //====================================
  const readOnlyOff = (e) => {
    e.target.readOnly = false;
  };
  //====================================
  const readOnlyOn = (e) => {
    e.target.readOnly = true;
  };
  //=======================================
  const changeText = (e, id, title) => {
    const resultArr = props.arrTodo.map((item) => {
      if (item.id === id) {
        return { ...item, title: e.target.value };
      }
      return { ...item };
    });
    props.setArrTodo(resultArr);
  };
  //=============================================================
  return (
    <main className="main__todo">
      {props.arrTodo.map((todo) => (
        <div key={todo.id} className="main__todo-list">
          <img
            className="main__image-check"
            src={todo.complete ? checkbox : nullCheckbox}
            alt="text"
            onClick={(e) => complete(todo.id, e)}
          />
          <input
            className={props.buttonFlag ? style.mainDecoration : style.main}
            type="text"
            value={todo.title}
            onChange={(e) => changeText(e, todo.id, todo.title)}
            readOnly
            onDoubleClick={readOnlyOff}
            onBlur={readOnlyOn}
          />
          <img
            className="main__image-remove"
            src={remove}
            alt="text"
            onClick={() => deleteToDo(todo.id)}
          />
        </div>
      ))}
    </main>
  );
};
export default Main;
