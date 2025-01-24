import { ButtonInput } from "./styles";
type ButtonPropsType = {
  value: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
};

function Button(props: ButtonPropsType) {
  return (
    <ButtonInput onClick={props.onClick} type={props.type}>
      {props.value}
    </ButtonInput>
  );
}
export default Button;
