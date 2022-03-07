import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root{
  --main-color: #1f1d36;
  --second-color: #d5d5d5;
}
*{
  box-sizing: border-box;
  width:100 vw ;
}
  body {
    background: #d5d5d5;
    ${'' /* width: 100vw; */}
    
  }
  h1{
    
  }
`;

export default GlobalStyle;
