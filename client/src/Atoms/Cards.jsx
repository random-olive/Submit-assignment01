import { CardStyle } from "../ZStyles/AtomStyles";

export const PostCard = ({ resolved }) => {
  return (
    <>
      {resolved.length !== 0
        ? resolved.map((el) => {
            return (
              <CardStyle>
                <div className="title">{el.title}</div>
                <div className="author--date">
                  <div>{el.author}</div>
                  <div>{el.createdAt}</div>
                </div>
              </CardStyle>
            );
          })
        : ""}
    </>
  );
};
