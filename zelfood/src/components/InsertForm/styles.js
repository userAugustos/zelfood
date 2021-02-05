import styled from 'styled-components';

export const FoodForm = styled.form`
  width: 80%;
  max-width: 500px;
  height: 60vh;

  border-radius: 6px;
  box-shadow: 7px 6px 12px #494141;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  padding: 10px 15px;
  background: #7430D2;

  h2{
    color: white;
  }

  a{
    border-radius: 6px;
    background: transparent;
    border: 1px solid #47F470;
    padding: 4px 10px;
    font-size: 12px;
    margin: 25px 0 0 35px;
      color: white;
    &:hover{
      background: #47F470;
      transition: .6s ease;
    }
  }
`;

export const FormInput = styled.input`

  width: 80%;
  height: 5vh;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid #F2D907;
  color: black;
  background: transparent; 
  padding: 2px;

  outline: none;
  ::placeholder{
    color: white;
  }
`;

export const FormButton = styled.button`
  border-radius: 6px;
  background: transparent;
  border: 1px solid #FE2F2F;
  padding: 8px 12px;
    color: white;
  &:hover{
    background: #FE2F2F;
    transition: .6s ease;
  }
`;