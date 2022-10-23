import { BasicBtn } from "../Atoms/Btns";
import { H2 } from "../Atoms/Heads";
import { Input, TXT } from "../Atoms/InputsTXTs";
import { PostPageStyle } from "../ZStyles/PageStyles";
import { BackIcon, DeleteIcon } from "../Constants/icons";
import { BasicBtnO } from "../Organisms/BtnsO";
import { PATH } from "../Constants/routePath";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { postsCollection } from "../Firebase";
import { query, where, onSnapshot, doc, deleteDoc } from "firebase/firestore";

const PostPage = ({ mode }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: mode === "create" ? "" : window.localStorage.getItem("title"),
    body: mode === "create" ? "" : window.localStorage.getItem("body"),
  });
  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const [delId, setDelId] = useState("");

  const findDelQuery = async () => {
    const q = query(postsCollection, where("postId", "==", `${id}`));

    onSnapshot(q, (shot) => {
      const queried = shot.docs.map((el) => ({
        ...el.data(),
        id: el.id,
      }))[0];
      // console.log(queried)
      if (queried) {
        setDelId(queried.id);
      }
    });
  };

  const deletePost = async () => {
    if (delId !== "") {
      const tobeDeleted = doc(postsCollection, delId);
      await deleteDoc(tobeDeleted);
      alert(`삭제 되었습니다`);
      navigate(`/board`);
    }
  };

  useEffect(() => {
    findDelQuery();
  }, [delId]);

  // console.log(delId);

  return (
    <>
      <PostPageStyle>
        <div className="first">
          <H2 color="var(--red100)" fontWeight="bold">
            {mode === "create" ? "글 작성하기" : "글 수정하기"}
          </H2>
          <div
            className="icon"
            onClick={() => {
              deletePost();
            }}
          >
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
          <BasicBtnO
            content={<BackIcon size={20} />}
            path={mode === "create" ? PATH.BOARD : `/board/${id}`}
          />
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
