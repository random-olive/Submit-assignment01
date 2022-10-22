import { BoardPageStyle } from "../ZStyles/PageStyles";
import { BoardStyle } from "../ZStyles/AtomStyles";
import { BasicBtnO } from "../Organisms/BtnsO";
import {PATH} from '../Constants/routePath'

import { PostCard } from "../Atoms/Cards";
import { useSelector } from "react-redux";

const BoardPage = () => {
  const userState = useSelector((state)=>state.user)
  return (
    <>
      <BoardPageStyle>
        <div className="btn--wrapper">
          {userState.list.length===0? '로그인하세요':<BasicBtnO content="글쓰기" path={PATH.CREATE}/>}
        </div>
        <BoardStyle>
          <PostCard></PostCard>
        </BoardStyle>
      </BoardPageStyle>
    </>
  );
};

export default BoardPage;
