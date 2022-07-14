import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      yelow: string[]
      black: string[]
      green: string[]
      grey: string[]
      white: string[]
      boxShadow: string[]
    };
    fonts: string[];
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
