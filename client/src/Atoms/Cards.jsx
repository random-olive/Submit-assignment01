import { CardStyle } from "../ZStyles/AtomStyles";
import { Link } from "react-router-dom";

export const PostCard = ({ resolved }) => {
  return (
    <>
      {resolved.length !== 0
        ? resolved.map((el) => {
            return (
              <div key={el.postId}>
                <Link to={`/board/${el.postId}`}>
                  <CardStyle>
                    <div className="title">{el.title}</div>
                    <div className="author--date">
                      <div>{el.author}</div>
                      <div>{el.createdAt}</div>
                    </div>
                  </CardStyle>
                </Link>
              </div>
            );
          })
        : ""}
    </>
  );
};
