import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #85C4E1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const MapAndInfosContainer = styled.div`
  border: 2px solid red;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MapContainer = styled.div`
  width: 50%;
  height: 50vh;
  border: 5px solid white;
`;
