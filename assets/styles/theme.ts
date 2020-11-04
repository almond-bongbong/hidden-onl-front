import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  primaryColor: '#228855',
  primaryRgba: (alpha = 1): string => `rgba(34, 136, 85, ${alpha})`,
  color2: '#a9f6ff',
  color3: '#07dff7',
  basicFont: `'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif;`,
  primaryFont: `'Gugi', 'Noto Sans KR', cursive`,
  basicTextShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
};

export { theme };
