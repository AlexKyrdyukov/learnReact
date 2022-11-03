import nullCheckbox from "../images/check.png";
import remove from "../images/delete.png";
import checkbox from   "../images/checkbox.png";
const Main = (props) => {
  return (
    <main className="main__todo">
      {props.arrTodo.map((todo) => (
        <div key={todo.id} className="main__todo-list">
          <img className="main__image-check" src={nullCheckbox} alt="text" />
          <p className="main__title-text">{todo.title}</p>
          <img className="main__image-remove" src={remove} alt="text" />
        </div>
      ))}
    </main>
  );
};

export default Main;
