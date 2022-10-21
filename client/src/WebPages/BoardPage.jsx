import { BoardPageStyle } from "../ZStyles/PageStyles";
import { BoardStyle } from "../ZStyles/AtomStyles";
import { BasicBtnO } from "../Organisms/BtnsO";
import {PATH} from '../Constants/routePath'

import { PostCard } from "../Atoms/Cards";
const BoardPage = () => {
  return (
    <>
      <BoardPageStyle>
        <div className="btn--wrapper">
          <BasicBtnO content="글쓰기" path={PATH.CREATE}/>
        </div>
        <BoardStyle>
          <PostCard></PostCard>
        </BoardStyle>
      </BoardPageStyle>
    </>
  );
};

export default BoardPage;
