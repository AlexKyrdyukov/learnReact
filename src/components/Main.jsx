import nullCheckbox from "../images/check.png";
import remove from "../images/delete.png";
import checkbox from "../images/checkbox.png";
const Main = (props) => {
  const deleteToDo = (id) => {
    const resultArr = props.arrTodo.filter((item) => item.id !== id);
    props.setArrTodo(resultArr);
  };
  const complete = (id) => {
    const resultArr = props.arrTodo.map((item, index) => {
      if (item.id === id && !item.complete) {
        return { ...item, complete: true };
      } else if (item.id === id && item.complete) {
        return { ...item, complete: false };
      }
      return { ...item };
    });
    props.setArrTodo(resultArr);
  };
  const readOnlyOff = (e) => {
    e.target.readOnly = false;
  };
  const readOnlyOn = (e) => {
    e.target.readOnly = true;
  };

  const changeText = (id, e) => {
    console.log();
    e.target.value = value;
    // console.log(e.target.defaultValue);
    console.log(e);
    // const resultArr = props.arrTodo.map((item, index) => {
    //   if (item.id === id) {
    //     console.log(id, e);
    //   }
    // });
  };

  return (
    <main className="main__todo">
      {props.arrTodo.map((todo) => (
        <div key={todo.id} className="main__todo-list">
          <img
            className="main__image-check"
            src={todo.complete ? checkbox : nullCheckbox}
            alt="text"
            onClick={() => complete(todo.id)}
          />
          <input
            className="main__title-text"
            value={todo.title}
            readOnly
            onDoubleClick={readOnlyOff}
            onBlur={readOnlyOn}
            onChange={(e) => changeText(todo.id, e)}
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
