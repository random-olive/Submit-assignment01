import { BasicBtn } from "../Atoms/Btns";
import { H2 } from "../Atoms/Heads";
import { Input, TXT } from "../Atoms/InputsTXTs";
import { PostPageStyle } from "../ZStyles/PageStyles";
import { BackIcon } from "../Constants/icons";

const PostPage = () => {
  return (
    <>
      <PostPageStyle>
        <H2 color="var(--red100)" fontWeight="bold">글 작성하기</H2>
        <div>
          <Input width="500px" placeholder="제목" />
        </div>
        <div>
          <TXT placeholder="내용" />
        </div>
        <div>
          <BasicBtn content={<BackIcon size={20}/>} />
          <BasicBtn content={"등록"} />
        </div>
      </PostPageStyle>
    </>
  );
};

export default PostPage;
