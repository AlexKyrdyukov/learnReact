const Main = (props) => {
  return (
    <main className="main__todo">
      {props.arrTodo.map((todo) => (
        <div key={todo.id} className="main__todo-list">
        <img src='../public/im'
        className="todo-list__checkbox"
         />
          <p>{todo.title}</p>
          <img className="todo-list__delete"/>
        </div>
      ))}
    </main>
  );
};

export default Main;
Ы