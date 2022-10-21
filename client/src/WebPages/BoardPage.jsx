import { BoardPageStyle } from "../ZStyles/PageStyles";
import { BoardStyle } from "../ZStyles/AtomStyles";
import { BasicBtn } from "../Atoms/Btns";
const BoardPage = () => {
  return (
    <>
      <BoardPageStyle>
        <div className="btn--wrapper">
          <BasicBtn content="글쓰기" />
        </div>
        <BoardStyle>글 카드</BoardStyle>
      </BoardPageStyle>
    </>
  );
};

export default BoardPage;
