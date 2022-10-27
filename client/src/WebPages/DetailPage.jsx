import { getDocs } from "firebase/firestore";
import { useParams, Link } from "react-router-dom";
import {postsCollection } from "../Firebase";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DetailPageStyle } from "../ZStyles/PageStyles";
import { SettingIcon } from "../Constants/icons";


const DetailPage = () => {
  const { id } = useParams();
  const userState = useSelector((state) => state.user);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(postsCollection);
      const resolved = data.docs
        .map((el) => el.data())
        .filter((el) => el.postId === id)[0];
      setDetail(resolved);
      window.localStorage.setItem("title", resolved.title);
      window.localStorage.setItem("author", resolved.author);
      window.localStorage.setItem("body", resolved.body);
      window.localStorage.setItem("createdAt", resolved.createdAt);
    };

    getPost();
  }, []);

  return (
    <>
      <DetailPageStyle>
        {userState.list.displayName ===
        window.localStorage.getItem("author") ? (
          <div className="icons">
            <Link to={`/board/${id}/update`}>
              <SettingIcon />
            </Link>
          </div>
        ) : (
          ""
        )}

        <div className="title">{detail.title}</div>
        <div className="wrapper">
          <div className="author">{detail.author}</div>
          <div className="date">{detail.createdAt}</div>
        </div>
        <div className="body">{detail.body}</div>
      </DetailPageStyle>
      <Link to="/board">
        <button>Go to board</button>
      </Link>
    </>
  );
};
export default DetailPage;
