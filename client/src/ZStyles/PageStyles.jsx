import styled from "styled-components";

export const PageBase = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;

export const MainPageStyle = styled(PageBase)`
  width: 50%;
  .title--wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LoginPageStyle = styled(PageBase)`
  background-color: var(--msg100);
  align-items: center;
  border-radius: 10px;
  width: 25%;
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

export const BoardPageStyle = styled(PageBase)`
  width: 50%;
  align-items: center;
  .btn--wrapper {
    display: flex;
    width: 100%;
    padding: 0 0 10px 0;
    justify-content: right;
  }
`;

export const PostPageStyle = styled(BoardPageStyle)`

`
