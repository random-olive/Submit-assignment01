import { H1 } from "../Atoms/Heads";
import { MainPageStyle } from "../ZStyles/PageStyles";
import IngredientsBox from "../Molecules/IngredientsBox";
import HotRecipesBox from "../Molecules/HotRecipesBox";
import { MoreIcon } from "../Constants/icons";

const MainPage = () => {
  return (
    <>
      <MainPageStyle>
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
