import { Outlet } from "react-router-dom";
// import Logo from "../Atoms/Logo";
import Searchbar from "../Molecules/Searchbar";
import { LayoutStyle } from "../ZStyles/TemplateStyles";
import LinkBtns from "../Atoms/LinkBtns";
import { LogoO, StickyBtnO } from "../Organisms/BtnsO";
import { QuestionIcon } from "../Constants/icons";
import { PATH } from "../Constants/routePath";
import { useSelector } from "react-redux";

export const LayoutMain = () => {
  const userState = useSelector((state) => state.user);

  return (
    <>
      <LayoutStyle>
        <LinkBtns
          // content={
          //   userState!==undefined && userState.list.length === 0 ? "로그인" : "로그아웃"
          // }
          // path={PATH.LOGIN}
        />
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

export const LayoutBase = () => {
  return (
    <>
      <LayoutStyle>
        <Outlet />
      </LayoutStyle>
    </>
  );
};
