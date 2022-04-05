import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root{
  --main-color: #500510;
  --second-color: #d5d5d5;
}
*{
  box-sizing: border-box;
}
  body {
    background: #d5d5d5;
  min-height: 100vh;
  max-width: 100vw;
}
.home{
  display: flex;
 }   
`;

export default GlobalStyle;
