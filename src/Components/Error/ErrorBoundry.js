import { useSelector } from "react-redux";
const ErrorBoundry = (props) => {
  const err = useSelector((sel) => sel.error);

  return (
    <div>{err ? <h1 style={{ color: "red" }}> {err}</h1> : props.children}</div>
  );
};
export default ErrorBoundry;
