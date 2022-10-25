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
  background-color: var(--ivory100);
  margin: 20px 0 20px 0;
`;

export const IngredientBoxStyle = styled(BaseBoxStyle)`
  margin-bottom: 80px;
  padding: 20px;
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
    img:nth-child(1){
      width: 100px;
      height: 100px;
      margin-bottom: 15px;
    }
  }
`;

export const HotRecipesBoxStyle = styled(BaseBoxStyle)`
  padding: 20px;
  
  .wrapper {
    display: flex;
    width: 70%;
  }
  .recipes--wrapper {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    /* height: 150px; */
  }
  img{
    width: 100px;
    height: 100px;
    margin-bottom: 15px;
  }
`;

export const LoadingStyle = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 700;
  top: 35%; 
  div{
    margin-top: 30px;
    color: var(--orange200);
    font-weight: bold;
    font-size: 20px;
  }
`;
