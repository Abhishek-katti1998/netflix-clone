import classes from "./button.module.css";
const Button = (props) => {
  const prevHandler = () => {
    props.prev();
  };
  const nextHandler = () => {
    props.next();
  };
  return (
    <div className={classes.container}>
      <div
        className={classes.prev}
        onClick={prevHandler}
        onMouseEnter={props.reRender}
      >
        &#8249;
      </div>
      <div
        className={classes.next}
        onClick={nextHandler}
        onMouseEnter={props.reRender}
      >
        &#8250;
      </div>
    </div>
  );
};
export default Button;
