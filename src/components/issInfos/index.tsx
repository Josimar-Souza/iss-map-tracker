import { useContext } from "react";
import { issContext } from "../../context/issContext";
import { formatNumber } from "../../helpers";
import {
  InfosContainer,
  Info,
  Divisor,
  Tittle,
} from "./issInfosStyles";

function IssInfos() {
  const { issInfos } = useContext(issContext);

  return (
    <InfosContainer>
      <Tittle>ISS infos</Tittle>
      <Info>
        Latitude: {issInfos.latitude}
      </Info>
      <Divisor />
      <Info>
        Longitude: {issInfos.longitude}
      </Info>
      <Divisor />
      <Info>
        Altitude: {formatNumber('en-US', issInfos.altitude)}
      </Info>
      <Divisor />
      <Info>
        Velocity: { formatNumber('en-US', issInfos.velocity)}/h
      </Info>
    </InfosContainer>
  );
};

export default IssInfos;
