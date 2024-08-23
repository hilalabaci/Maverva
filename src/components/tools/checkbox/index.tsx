import "./index.css";
type CheckboxPropsType = {
  check: boolean;
};

function Checkbox(props: CheckboxPropsType) {
  return (
    <label className="container">
      <input type="checkbox" checked={props.check} />
      <span className="checkmark"></span>
    </label>
  );
}
export default Checkbox;
