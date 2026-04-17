import "styled-components";
import { ThemeColors } from "./theme/colours/types";

declare module "styled-components" {
  export interface DefaultTheme {
    colour: ThemeColors;
    borderRadius: {
      none: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      full: string;
    };
    fontSize: {
      default: string;
      title: string;
      subtitle: string;
    };
    // Legacy flat properties used in some components
    [key: string]: any;
  }
}
