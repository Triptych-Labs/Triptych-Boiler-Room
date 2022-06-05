import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
.App-header {
  background-color: #282c34;
  background: url("${process.env.PUBLIC_URL}/bac.png");
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 40px 50px 50px 40px;
}
`;
