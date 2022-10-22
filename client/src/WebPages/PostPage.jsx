import { BasicBtn } from "../Atoms/Btns";
import { H2 } from "../Atoms/Heads";
import { Input, TXT } from "../Atoms/InputsTXTs";
import { PostPageStyle } from "../ZStyles/PageStyles";
import { BackIcon, DeleteIcon } from "../Constants/icons";
import { BasicBtnO } from "../Organisms/BtnsO";
import { PATH } from "../Constants/routePath";
import { useState } from "react";

const PostPage = ({ mode }) => {
  const [post, setPost] = useState({ title: "", body: "" });
  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PostPageStyle>
        <div className="first">
          <H2 color="var(--red100)" fontWeight="bold">
            {mode === "create" ? "글 작성하기" : "글 수정하기"}
          </H2>
          <div className="icon">
            <DeleteIcon color="var(--orange200)" size={20} />
          </div>
        </div>

        <div>
          <Input
            width="500px"
            placeholder="제목"
            name="title"
            value={post.title}
            onChange={onChange}
          />
        </div>
        <div>
          <TXT
            placeholder="내용"
            name="body"
            value={post.body}
            onChange={onChange}
          />
        </div>
        <div className="btn">
          <BasicBtnO content={<BackIcon size={20} />} path={PATH.BOARD} />
          <BasicBtn
            content={mode === "create" ? "등록" : "수정"}
            mode={mode}
            post={post}
          />
        </div>
      </PostPageStyle>
    </>
  );
};

export default PostPage;
