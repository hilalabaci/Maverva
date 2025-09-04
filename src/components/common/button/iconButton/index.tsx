import { ToolTip } from "../../toolstip";
import { ApproveIcon, CloseIcon, Container, MoreIcon } from "./styles";

type IconType = "close" | "more" | "done";

type IconButtonProps = {
  onClick?: () => void;
  icon?: IconType;
  toolTipText?: string;
  boxShadow?: boolean;
  size?: "small" | "medium" | "large";
  ariaLabel?: string;
};

function IconButtonIcon({
  icon,
  size,
}: {
  icon?: IconType;
  size?: "small" | "medium" | "large";
}) {
  return (
    <>
      {icon === "close" && <CloseIcon size={size} />}
      {icon === "more" && <MoreIcon size={size} />}
      {icon === "done" && <ApproveIcon size={size} />}
    </>
  );
}

function IconOrTextButton({
  onClick,
  icon,
  toolTipText,
  boxShadow,
  size,
  ariaLabel,
}: IconButtonProps) {
  if (toolTipText) {
    return (
      <ToolTip
        trigger={
          <Container
            onClick={onClick}
            boxShadow={boxShadow}
            size={size}
            type="button"
            aria-label={ariaLabel}
          >
            <IconButtonIcon icon={icon} size={size} />
          </Container>
        }
        content={toolTipText}
      ></ToolTip>
    );
  }
  return (
    <Container
      onClick={onClick}
      boxShadow={boxShadow}
      size={size}
      type="button"
      aria-label={ariaLabel}
    >
      <IconButtonIcon icon={icon} size={size} />
    </Container>
  );
}
export default IconOrTextButton;
