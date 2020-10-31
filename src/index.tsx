import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider, CSSReset, theme, ColorModeProvider } from "@chakra-ui/core";

import reportWebVitals from './reportWebVitals';

const breakpoints: any = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={newTheme}>
      <ColorModeProvider>
        <CSSReset />
        <App />
      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
