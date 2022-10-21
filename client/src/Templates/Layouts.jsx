import { Outlet } from "react-router-dom";
import Logo from "../Atoms/Logo";
import Searchbar from "../Molecules/Searchbar";
import { LayoutStyle } from "../ZStyles/TemplateStyles";
import LinkBtns from "../Atoms/LinkBtns";
import { StickyBtnO } from "../Organisms/BtnsO";
import { QuestionIcon } from "../Constants/icons";


export const LayoutWithSearchbar = () => {
  return (
    <>
      <LayoutStyle>
        <LinkBtns content={"로그인 / 회원가입"}></LinkBtns>
        <Logo />
        <Searchbar />
        <Outlet />
        <StickyBtnO
          content={<QuestionIcon color="var(--red100)" size="23" />}
        />
      </LayoutStyle>
    </>
  );
};
