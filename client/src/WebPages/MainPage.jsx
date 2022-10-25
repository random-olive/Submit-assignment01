import { H1 } from "../Atoms/Heads";
import { MainPageStyle } from "../ZStyles/PageStyles";
import IngredientsBox from "../Molecules/IngredientsBox";
import HotRecipesBox from "../Molecules/HotRecipesBox";
import { MoreIcon } from "../Constants/icons";

const MainPage = () => {
  return (
    <>
      <MainPageStyle>
        <div className="img">
          <img
            src={
              "https://images.unsplash.com/photo-1563865436874-9aef32095fad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            }
            alt="advertise"
          />
        </div>
        <H1>11월의 제철 재료</H1>
        <IngredientsBox />

        <div className="title--wrapper">
          <H1>추천 레시피</H1>
          <MoreIcon size={20} />
        </div>

        <HotRecipesBox />
      </MainPageStyle>
    </>
  );
};

export default MainPage;
