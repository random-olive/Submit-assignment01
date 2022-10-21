import { Outlet } from "react-router-dom";
// import Logo from "../Atoms/Logo";
import Searchbar from "../Molecules/Searchbar";
import { LayoutStyle } from "../ZStyles/TemplateStyles";
import LinkBtns from "../Atoms/LinkBtns";
import { LogoO, StickyBtnO } from "../Organisms/BtnsO";
import { QuestionIcon } from "../Constants/icons";

export const LayoutMain = () => {
  return (
    <>
      <LayoutStyle>
        <LinkBtns content={"로그인"} path="/login" />
        <LogoO />
        <Searchbar />
        <Outlet />
        <StickyBtnO
          content={<QuestionIcon color="var(--red100)" size="23" />}
        />
      </LayoutStyle>
    </>
  );
};

export const Layout = () => {
  return (
    <>
      <LayoutStyle>
        <LogoO margin={"110px 0 0 0"} />
        <Outlet />
      </LayoutStyle>
    </>
  );
};
