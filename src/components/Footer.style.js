import {styled} from "styled-components"

export const Container = styled.div`
    height: 90px;
    background-color: #353634;
    display: flex;
    place-items: center;
    justify-content: space-between;
    padding: 0 1em 0 1em;
    gap: 1em;
    text-align: center;

    & p {
        color: #fcfdff;
    }

    & span {
        color: #2c9fa3;
    }

    @media screen and (max-width: 576px) {
     flex-direction: column-reverse;
     justify-content: center;
   
  }
  
`