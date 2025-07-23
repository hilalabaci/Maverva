import { ToolTip } from "../../toolstip";
import { ApproveIcon, CloseIcon, Container, MoreIcon } from "./styles";

type IconType = "close" | "more" | "done";

type ActionButtonProps = {
  onClick?: () => void;
  icon: IconType;
  toolTipText?: string;
};

function ActionButtonIcon({ icon }: { icon: IconType }) {
  return (
    <>
      {icon === "close" && <CloseIcon />}
      {icon === "more" && <MoreIcon />}
      {icon === "done" && <ApproveIcon />}
    </>
  );
}

function ActionButton({ onClick, icon, toolTipText }: ActionButtonProps) {
  if (toolTipText) {
    return (
      <ToolTip
        trigger={
          <Container onClick={onClick}>
            <ActionButtonIcon icon={icon} />
          </Container>
        }
        content={toolTipText}
      ></ToolTip>
    );
  }
  return (
    <Container onClick={onClick}>
      <ActionButtonIcon icon={icon} />
    </Container>
  );
}
export default ActionButton;
