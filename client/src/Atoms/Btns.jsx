import { useId, useState } from "react";
import { StickyBtnStyle, BasicBtnStyle, Backdrop } from "../ZStyles/AtomStyles";
import { TextBox } from "./TextBox";
import {
  addDoc,
  doc,
  collection,
  getDocs,
  getFirestore,
  updateDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { dbService } from "../Firebase";
import { db, firebaseInstance } from "../Firebase";
import { postsCollection } from "../Firebase";
import { useNavigate, useParams } from "react-router-dom";
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
  const { id } = useParams();
  const uniqueId = useId();
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  const [pickId, setPickId] = useState("");

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

  const update = async () => {
    console.log("수정모드");

    const q = query(postsCollection, where("postId", "==", `${id}`));
    onSnapshot(q, (shot) => {
      const queried = shot.docs.map((el) => ({
        ...el.data(),
        id: el.id,
      }))[0];
      setPickId(queried.id);
    });
    if (pickId !== "") {
      const tobeUpdated = doc(postsCollection, pickId);
      const newField = { title: post.title, body: post.body };
      await updateDoc(tobeUpdated, newField);
      alert(`수정 되었습니다`);
      navigate(`/board/${id}`);
    }
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
