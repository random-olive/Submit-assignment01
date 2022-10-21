import { Input } from "../Atoms/InputsTXTs";

const LoginBox = () => {
  return (
    <>
      <Input placeholder={"아이디"} margin={"20px 0 15px 0"} />
      <Input placeholder={"비밀번호"} margin={"0 0 20px 0"} />
    </>
  );
};

export default LoginBox;
