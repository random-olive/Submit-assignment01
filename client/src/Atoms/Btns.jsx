import { useId } from "react";
import { StickyBtnStyle, BasicBtnStyle, Backdrop } from "../ZStyles/AtomStyles";
import { TextBox } from "./TextBox";
import { addDoc } from "firebase/firestore";
import { postsCollection } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DateCalculator from "./DateCalculator";

export const StickyBtn = ({ content, on, setOn }) => {
  return (
    <>
      {on ? (
        <>
          <TextBox setOn={setOn} on={on} />
          <Backdrop />
        </>
      ) : (
        ""
      )}
      <StickyBtnStyle>
        <div
          className="content--wrapper"
          onClick={() => {
            setOn(!on);
          }}
        >
          {content}
        </div>
      </StickyBtnStyle>
    </>
  );
};

export const BasicBtn = ({ content, mode, post }) => {
  const uniqueId = useId();
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  const create = async () => {
    if (post !== undefined) {
      const res = await addDoc(postsCollection, {
        postId: uniqueId,
        title: post.title,
        body: post.body,
        author: userState.list.displayName,
        createdAt: DateCalculator(new Date()),
        timestamp: new Date(),
      });
      navigate("/board");
    }
  };

  const update = () => {
    console.log("수정모드");
  };

  const CUHandler = () => {
    mode === "create" ? create() : update();
  };
  return (
    <>
      <BasicBtnStyle
        onClick={() => {
          CUHandler();
        }}
      >
        {content}
      </BasicBtnStyle>
    </>
  );
};
