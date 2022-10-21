import { StickyBtn } from "../Atoms/Btns";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Atoms/Logo";

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
      <Link to="/">
        <Logo margin={margin} />
      </Link>
    </>
  );
};
