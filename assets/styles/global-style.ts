import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  // *,
  // *:before,
  // *:after {
  //    margin: 0;
  //    padding: 0;
  //    box-sizing: border-box;
  //    -webkit-tap-highlight-color: transparent;
  // }
  // ul, ol {
  //    list-style: none;
  // }
  // img {
  //    border: 0;
  //    vertical-align: middle;
  // }
  // button span {
  //    position: relative;
  // }
  // html, body {
  //     color: #333;
  //     font-size: 14px;
  //     line-height: 1.5;
  //     font-family: ${({ theme }): string => theme.basicFont};
  //     letter-spacing: -0.5px;
  //     -webkit-text-size-adjust: 100%;
  //     -ms-text-size-adjust: 100%;
  //     -webkit-font-smoothing: antialiased;
  // }
  a, button {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      background: none;
      cursor: pointer;
      color: inherit;
      font-size: inherit;
      text-decoration: none;
      font-family: ${({ theme }): string => theme.basicFont};
      // disable double tab zoom
      touch-action: manipulation;
  }
  // button {
  //     outline: 0;
  //     padding: 0;
  //     background: none;
  //     span {
  //         position: relative;
  //     }
  // }
  // .hidden {
  //   overflow: hidden;
  //   position: absolute;
  //   top: -9999px;
  //   left: -9999px;
  //   width: 0;
  //   height: 0;
  // }
  // input,
  // textarea,
  // select,
  // input[type="checkbox"] + label,
  // input[type="radio"] + label{
  //   border-radius: 0;
  //   color: #333;
  //   font: 14px/1.5 ${({ theme }): string => theme.basicFont};
  //   vertical-align: middle;
  // }
  // input {
  //   background-color: transparent;
  // }
  // em {
  //   font-style: normal;
  // }
  // a:focus {
  //   outline: none;
  // }
  // a::selection {
  //   background: transparent;
  //   pointer-events: none;
  // }
`;
