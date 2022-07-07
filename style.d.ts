import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      yelow: string[]
      black: string[]
      green: string[]
    };
    fonts: string[];
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
