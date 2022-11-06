import style from "./styles/footer.module.css";
const Footer = (props) => {
  return (
    <footer className="footer__todo">
      {props.arrTodo.length > 0 && (
        <div className="footer__todo-item">
          <span>Total: {props.arrTodo.length}</span>
          <span>Completed: {props.arrTodo.length}</span>
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
