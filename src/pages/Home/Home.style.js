import { styled } from "styled-components";

export const Container = styled.div`
  background-color: #2b2b2b;
  padding: 100px 1em 1em 1em;
  min-height: 900px;

  @media screen and (max-width: 576px) {
    padding-top: 50px;
  }
`;

export const Box = styled.div`
  width: 600px;
  background-color: #353634;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    width: 400px;
  }
  
  @media screen and (max-width: 576px) {
    width: 280px;
  }
`;

export const Title = styled.div`
  font-size: 60px;
  color: #2b2b2b;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  padding: 20px 10px 0px 10px;

  
`;

export const TaskField = styled.div`
  display: grid;
  place-items: center;
  padding: 20px 1em 20px 1em;

  & form {
    display: flex;
  }

  & input {
    padding: 6px 4px 6px 4px;
    background-color: #fff;
    font-size: 25px;
  }

  & button {
    width: 50px;
    padding: 2px;
    font-size: 25px;
    background-color: #fff;
    color: #2c9fa3;
  }

  @media screen and (max-width: 576px) {
    & input {
      width: 200px;
      font-size: 20px;
    }

    & button {
      font-size: 16px;
    }
  }
`;

export const TaskFieldEdit = styled(TaskField)`
  & input {
    background-color: #d9d9d9;
  }

  & button {
    background-color: #d9d9d9;
    color: #2c9fa3;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 8px 15px 8px;
  border-top: 1px solid #e0e0e0;
  position: relative;

  & button {
    font-size: 25px;
    background-color: transparent;
    display: grid;
    place-items: center;
  }
`;

export const IconText = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  & p {
    max-width: 400px;
    word-wrap: break-word;
    color: #fcfdff;
  }

  @media screen and (max-width: 576px) {
    & p {
    max-width: 150px;
  }
  }
`;

export const EditDelete = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;
