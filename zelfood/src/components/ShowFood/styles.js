import styled from 'styled-components';

export const FoodSection = styled.section`
  width: 100%;

  h2{
    text-align: center;
  }
  ul{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1.5rem;
  }
  ul li{
    border-radius: 6px;
    padding: 10px;
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.1);
  }
  ul li p {
    margin-left: 5px;
  }
  ul img{
    max-width: 100%;
  }

  a{
    border-radius: 6px;
    background: transparent;
    border: 1px solid #47F470;
    padding: 8px 10px;
    font-size: 12px;
    margin: 25px 0 0 35px;
    &:hover{
      background: #47F470;
      transition: .6s ease;
      color: white;
    }
  }
`;