import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const theme = {
  dark: '#363636',
  red: '#F3797C',
  blue: '#99DADC',
  light: '#FFFAE1',
};

type ThemeType = typeof theme;

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${reset}

  @import url('https://fonts.googleapis.com/css?family=DM+Serif+Display&display=swap');

  html {
    background: ${props => props.theme.light};
  }

  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default theme;
