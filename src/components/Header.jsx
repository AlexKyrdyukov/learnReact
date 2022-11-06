import checkMark from "../images/checkMark.png";
const Header = (props) => {
  //============================================
  const changeStyle = (event) => {
    const buttonOpacity = event.target;
    buttonOpacity.classList.toggle("opacity");
    const resultArr = props.arrTodo.map((item, index) => {
      if (props.buttonFlag) {
        return { ...item, complete: false };
      } else if (!props.buttonFlag) {
        return { ...item, complete: true };
      }
    });
    props.setArrTodo(resultArr);
    props.setButtonFlag((prevState) => !prevState);
  };
  //=============================================
  return (
    <header className="header__todo">
      <h1>todos</h1>
      <div className="header__block-input">
        <div className="header__button-block">
          {props.arrTodo.length > 0 && (
            <button className="header__button">
              <img
                onClick={changeStyle}
                className="header__check-mark opacity"
                alt="text"
                src={checkMark}
              />
            </button>
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
