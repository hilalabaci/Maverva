import { ButtonInput } from "./styles";
type ButtonPropsType = {
  value: string;
  onClick: () => void;
};

function Button(props: ButtonPropsType) {
  return <ButtonInput onClick={props.onClick}>{props.value}</ButtonInput>;
}
export default Button;
