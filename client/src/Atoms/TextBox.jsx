import { TextBoxBaseStyle } from "../ZStyles/AtomStyles";
import { Link } from "react-router-dom";
import { PATH } from "../Constants/routePath";

export const TextBox = ({setOn}) => {
  const sitemap = [
    { link: PATH.MAIN, name: "메인" },
    { link: PATH.SIGNUP, name: "회원가입" },
    { link: PATH.LOGIN, name: "로그인" },
    { link: PATH.BOARD, name: "게시판" },
    { link: PATH.POST, name: "글 상세" },
    { link: PATH.CREATE, name: "글 쓰기" },
    { link: PATH.UPDATE, name: "글 수정" },
    { link: PATH.MAIN, name: "페이지 01" },
    { link: PATH.MAIN, name: "페이지 02" },
  ];

  return (
    <>
      <TextBoxBaseStyle onClick={()=>{setOn(false)}}>
        <div className="content--wrapper">
          <div className="title">빠른 이동</div>
          {sitemap.map((el, idx) => {
            return (
              <div key={idx} className="site">
                <Link to={el.link} >
                  <div>{el.name}</div>
                </Link>
              </div>
            );
          })}
        </div>
      </TextBoxBaseStyle>
    </>
  );
};
