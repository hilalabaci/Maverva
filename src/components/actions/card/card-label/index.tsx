import { LabelContainer } from "./styles";
type LabelPropsType = {
  colour: string;
};
function Label(props: LabelPropsType) {
  return (
    <LabelContainer
      className="label-container"
      style={{ backgroundColor: props.colour }}
    ></LabelContainer>
  );
}
export default Label;
