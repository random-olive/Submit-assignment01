import { StickyBtn, BasicBtn } from "../Atoms/Btns";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Atoms/Logo";
import { PATH } from "../Constants/routePath";

export const StickyBtnO = ({ content }) => {
  const [on, setOn] = useState(false);
  return (
    <>
      <StickyBtn content={content} on={on} setOn={setOn} />
    </>
  );
};

export const LogoO = ({ margin }) => {
  return (
    <>
      <Link to={PATH.MAIN}>
        <Logo margin={margin} />
      </Link>
    </>
  );
};

export const BasicBtnO = ({ content, path }) => {
  return (
    <>
      <Link to={path}>
        <BasicBtn content={content} />
      </Link>
    </>
  );
};
