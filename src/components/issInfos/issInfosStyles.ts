import styled from "styled-components";

export const InfosContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  padding: 30px;
  min-width: 30%;
`;

export const Tittle = styled.h1`
  width: 100%;
  text-align: center;
`;

export const Info = styled.p`
  border-left: 4px solid blue;
  font-size: 1.5rem;
  font-style: italic;
  margin: 30px 0;
  padding-left: 10px;
  transition: 0.5s;

  &:hover {
    border-left: 20px solid blue;
  }
`;

export const Divisor = styled.hr`

`;