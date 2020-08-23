import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string;
    primaryRgba: (alpha?) => string;
    color2: string;
    color3: string;
    basicFont: string;
    primaryFont: string;
    basicTextShadow: string;
  }
}
