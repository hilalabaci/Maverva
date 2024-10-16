import * as Tooltip from "@radix-ui/react-tooltip";
import { ReactNode } from "react";
import { TooltipContent, TooltipTrigger } from "./styles";

interface ToolTipProps {
  trigger: ReactNode;
  content: ReactNode;
  contentStyle?: { zIndex?: number };
}

export const ToolTip: React.FC<ToolTipProps> = ({
  trigger,
  content,
  contentStyle,
}) => {
  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root>
        <TooltipTrigger>{trigger}</TooltipTrigger>
        <Tooltip.Portal>
          <TooltipContent
            side="bottom"
            style={{ zIndex: contentStyle?.zIndex }}
            sideOffset={2}
          >
            {content}
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
