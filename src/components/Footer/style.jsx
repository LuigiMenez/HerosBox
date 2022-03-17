import styled from 'styled-components';

const SFooter = styled.footer`
  background-color: var(--main-color);
  color: var(--second-color);
  text-align: center;
  font-size: 1.5rem;
  padding: 15px;
  width: 100vw;
  @media screen and (min-width: 1024px) {
    /* position: fixed; */
    bottom: 0;
  }
`;

export default SFooter;
