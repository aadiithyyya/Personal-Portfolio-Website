import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    font-family: 'Quicksand', 'Playfair Display', 'Lora', 'Source Sans Pro', 'Merriweather', sans-serif;
    transition: all 0.25s linear;
  }`;
