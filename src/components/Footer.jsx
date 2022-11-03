const Footer = (props) => {
  return (
    <footer className="footer__todo">
      {props.arrTodo.length > 0 && (
        <div className="footer__todo-item">
          <span>{props.arrTodo.length} items left</span>
        </div>
      )}
    </footer>
  );
};
export default Footer;
