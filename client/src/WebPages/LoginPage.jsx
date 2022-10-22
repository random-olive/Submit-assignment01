import { LoginPageStyle } from "../ZStyles/PageStyles";
import { GoogleIcon, LoginIcon } from "../Constants/icons";
import { useState } from "react";
import LoginBox from "../Molecules/LoginBox";
import LinkBtns from "../Atoms/LinkBtns";
import styled from "styled-components";
import { PATH } from "../Constants/routePath";

const LoginPage = () => {
  const [admin, setAdmin] = useState(false);
  return (
    <>
      <LoginPageStyle>
        <div>
          <div
            onClick={() => {
              setAdmin(true);
            }}
          >
            <button name="admin">
              관리자 <LoginIcon size={25} />
            </button>
          </div>
          <div
            onClick={() => {
              setAdmin(false);
            }}
          >
            <button name="google">
              <GoogleIcon size={25} />
            </button>
          </div>
        </div>
        {admin ? <LoginBox /> : ""}
        <div className="login">로그인</div>
      </LoginPageStyle>
      <Block>
        <p>관리자 계정이 없다면?</p>
        <LinkBtns
          content={"회원가입"}
          path={PATH.SIGNUP}
          width="25%"
          margin="30px 0 30px 0"
        />
      </Block>
    </>
  );
};

export default LoginPage;

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
`;
