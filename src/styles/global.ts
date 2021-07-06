import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0%;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    height: 100%;

    @media (max-width: 1000px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }
body {
  height: 100%;
  -webkit-font-smoothing: antialiased;
}
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: #f3f3f3;
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
    opacity: 0;
    transform: translateX(-100px);
    transition: all 700ms ease-in-out;
  }

  .ReactModal__Content--after-open  {
    opacity: 1;
    transform: translateX(0px);
  }

  .ReactModal__Content--before-close {
    opacity: 0;
    transform: translateX(-100px);
  }

  .required-form {
  span {
    font-weight: 600;
    font-size:1em
  }
    font-size: .8em !important;
    color: #d60000;
    margin: 0 0 20px 10px;
    padding: 0;
    font-weight: 500;
    text-align: left;
    margin-left: 4px !important;
    margin-top: -20px;
}
`;
