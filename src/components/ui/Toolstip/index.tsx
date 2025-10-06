import * as Tooltip from "@radix-ui/react-tooltip";
import { forwardRef, ReactNode } from "react";
import { TooltipContent, TooltipTrigger } from "./styles";

interface ToolTipProps {
  trigger: ReactNode;
  content: ReactNode;
  contentStyle?: { zIndex?: number };
  fontSize?: string;
}

export const ToolTip: React.FC<ToolTipProps> = forwardRef<
  HTMLDivElement,
  ToolTipProps
>(({ trigger, content, contentStyle, fontSize }, ref) => {
  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root>
        <TooltipTrigger>{trigger}</TooltipTrigger>
        <Tooltip.Portal>
          <TooltipContent
            ref={ref}
            fontSize={fontSize}
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
});
