
const Header = (props) => {

  return (
    <header className="header__todo">
      <h1>todos</h1>
      <div className="header__block-input">
        <div className="header__button-block">
          {props.arrTodo.length > 0 && (
            <button className="header__button">click</button>
          )}
        </div>
        <form onSubmit={props.eventSubmit} className="header__form">
          <input
            className="header__input"
            type="text"
            value={props.todo}
            placeholder="Whats needs to be done?"
            onChange={props.changeInput}
          />
        </form>
      </div>
    </header>
  );
};
export default Header;
