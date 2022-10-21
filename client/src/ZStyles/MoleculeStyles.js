import styled from "styled-components";

export const SearchbarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid ${"var(--orange150)"};
  width: 50%;
  height: 50px;
  margin-top: 30px;
  padding: 0 15px 8px 20px;
  @media screen and (max-width: 588px) {
    width: 300px;
  }
`;

export const BaseBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: gainsboro;
  margin: 20px 0 20px 0;
`;

export const IngredientBoxStyle = styled(BaseBoxStyle)`
margin-bottom: 80px;
  .wrapper {
    display: flex;
    width: 70%;
    .tags--wrapper {
      display: flex;
      flex-direction: row;
    }
  }
  .ingredients--wrapper {
    display: flex;
    width: 70%;
    margin-top: 20px;
    div {
      display: flex;
      flex-direction: column;
      margin-right: 20px;
    }
  }
`;

export const HotRecipesBoxStyle = styled(BaseBoxStyle)`
  .wrapper {
    display: flex;
    width: 70%;
  }
  .recipes--wrapper {
    display: flex;
    flex-direction: column;
    height: 150px;
  }
`;
