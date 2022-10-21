import { TextBoxBaseStyle } from "../ZStyles/AtomStyles";
import { Link } from "react-router-dom";

export const TextBox = () => {
  return (
    <>
      <TextBoxBaseStyle>
        <Link to="/board">
          <div className="content--wrapper">게시판 페이지</div>
        </Link>
      </TextBoxBaseStyle>
    </>
  );
};
