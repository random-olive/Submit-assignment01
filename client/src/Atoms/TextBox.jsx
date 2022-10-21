import { TextBoxBaseStyle } from "../ZStyles/AtomStyles";
import { Link } from "react-router-dom";
import {PATH} from '../Constants/routePath'

export const TextBox = () => {
  return (
    <>
      <TextBoxBaseStyle>
        <Link to={PATH.BOARD}>
          <div className="content--wrapper">게시판 페이지</div>
        </Link>
      </TextBoxBaseStyle>
    </>
  );
};
