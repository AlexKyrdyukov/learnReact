import style from "./styles/footer.module.css";
import { useMemo } from "react";

const counterCompletTodo = (arrTodo) => {
  let count = 0;
  arrTodo.map((item) => {
    if (item.complete) {
      return count++;
    } else if (!item.complete) {
      return count;
    }
  });
  return count;
};
const Footer = (props) => {
  const counter = useMemo(
    () => counterCompletTodo(props.arrTodo),
    [props.arrTodo]
  );
  return (
    <footer className="footer__todo">
      {props.arrTodo.length > 0 && (
        <div className="footer__todo-item">
          <span>Total: {props.arrTodo.length}</span>
          <span>Completed: {counter}</span>
          <button onClick={props.showAll} className={style.button}>
            All
          </button>
          <button onClick={props.showActive} className={style.button}>
            Active
          </button>
          <button onClick={props.showCompleted} className={style.button}>
            Completed
          </button>
          <button onClick={props.deleteComplete} className={style.button}>
            Delete completed
          </button>
        </div>
      )}
    </footer>
  );
};
export default Footer;
