import { ToolTip } from "../../toolstip";
import { Container } from "./styles";

type TextButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  toolTipText?: string;
  boxShadow?: boolean;
  size?: "small" | "medium" | "large";
  ariaLabel?: string;
};

function TextButton({
  children,
  onClick,
  toolTipText,
  boxShadow,
  size,
  ariaLabel,
}: TextButtonProps) {
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
            {children}
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
      {children}
    </Container>
  );
}
export default TextButton;
