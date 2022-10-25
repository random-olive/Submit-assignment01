import { FeaturePageStyle } from "../ZStyles/PageStyles";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PATH } from "../Constants/routePath";


const FeaturePage = () => {
  const [type, setType] = useState("01");

  useEffect(() => {
    console.log(type);
  }, [type]);

  const imgs = [
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmpEGK%2FbtrPt7J9THc%2FwkbEVpIx5iNz99zheyF2qK%2Fimg.png",
      desc: "FigJam을 활용한 요구사항, 기술스택, user flow의 문서화",
    },
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcsbZUI%2FbtrPvvDBOVI%2Fxi587capuJcrPH6gWHMd60%2Fimg.png",
      desc: "Figma Design을 활용한 화면구성 협업",
    },
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbvUbAx%2FbtrPyKGjQbA%2FAwOGAZ7FXbVa953wVOr4AK%2Fimg.png",
      desc: "Git flow를 따르며 project, issue의 활용을 통한 협업이 가능합니다.",
    },
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FA77MW%2FbtrPybq22ip%2FQtWa3nI4mJQ0Bq7gQzkSm1%2Fimg.png",
      desc: "Atomic Design Pattern을 활용한 구조",
    },
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcsy5Gi%2FbtrPt7wBDOU%2FBZjwM9q7AHBqdKUJUSTuRk%2Fimg.png",
      desc: "props를 최대한 활용해 중복된 컴포넌트 그리기에 효율",
    },
    {
      img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F5zzQN%2FbtrPw0Drjap%2FvHkyNVMhWD6Cm9wCYfz6Ak%2Fimg.png",
      desc: "변수의 상수화로 불필요한 코딩의 중복을 방지하고 재사용 가능한 코딩을 지향합니다 ",
    },
  ];

  return (
    <>
      <FeaturePageStyle>
        <div className="btn--wrapper">
          <Link to={PATH.MAIN}>
            <button>MAIN</button>
          </Link>
          <button
            onClick={() => {
              setType("01");
            }}
          >
            FEAT 01
          </button>
          <button
            onClick={() => {
              setType("02");
            }}
          >
            FEAT 02
          </button>
        </div>
        <div className="img--wrapper">
          {type === "01" ? (
            <div className="imgs">
              <div className="title">Figma와 Git을 활용한 기획/협업</div>
              {imgs.slice(0, 3).map((el) => (
                <>
                  <img alt="img" src={el.img} />
                  <div className="desc--wrapper">
                    <div>{el.desc}</div>
                  </div>
                </>
              ))}
            </div>
          ) : (
            <div className="imgs">
              <div className="title">재사용가능한 코딩을 지향</div>
              {imgs.slice(3, 7).map((el) => (
                <>
                  <img alt="img" src={el.img} />
                  <div className="desc--wrapper">
                    <div>{el.desc}</div>
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
      </FeaturePageStyle>
    </>
  );
};
export default FeaturePage;
