import { useContext } from "react";
import { issContext } from "../../context/issContext";
import { InfosContainer, Info } from "./issInfosStyles";

function IssInfos() {
  const { issInfos } = useContext(issContext);

  return (
    <InfosContainer>
      <Info>
        Latitude: {issInfos.latitude}
      </Info>
      <Info>
        Longitude: {issInfos.longitude}
      </Info>
      <Info>
        Altitude: {issInfos.altitude}
      </Info>
      <Info>
        Velocity: { issInfos.velocity}
      </Info>
    </InfosContainer>
  );
};

export default IssInfos;
