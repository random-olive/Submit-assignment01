import styled from "styled-components";

export const MainPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: left;
  margin-top: 70px;
  .title--wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LoginPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--msg100);
  align-items: center;
  border-radius: 10px;
  width: 25%;
  justify-content: left;
  margin-top: 70px;
  box-shadow: 1px 1px 1px var(--shadow100);
  div {
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: space-around;
    align-items: center;
   
    div:nth-child(1),
    div:nth-child(2) {
      height: 50px;
      border-radius: 7px;
      border: 1px solid var(--gray100);
      :hover {
        background: var(--orange100);
        border-radius: 7px;
      }
    }
    div:nth-child(1) {
      cursor: pointer;
      justify-content: center;
    }
  }
  .login {
    cursor: pointer;
    border-radius: 7px;
    :hover {
      background: var(--green100);
    }
  }
`;
