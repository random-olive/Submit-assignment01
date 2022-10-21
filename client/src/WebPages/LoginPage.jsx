import { LoginPageStyle } from "../ZStyles/PageStyles";
import { GoogleIcon, LoginIcon } from "../Constants/icons";
import { useState } from "react";
import LoginBox from "../Molecules/LoginBox";
import LinkBtns from "../Atoms/LinkBtns";
import styled from "styled-components";

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
            관리자 <LoginIcon size={25} />
          </div>
          <div
            onClick={() => {
              setAdmin(false);
            }}
          >
            <GoogleIcon size={25} />
          </div>
        </div>
        {admin ? <LoginBox /> : ""}
        <div className="login">로그인</div>
      </LoginPageStyle>
      <Block>
        <p>관리자 계정이 없다면?</p>
        <LinkBtns content={"회원가입"} path="/signup" width="25%" margin="30px 0 30px 0"/>
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
