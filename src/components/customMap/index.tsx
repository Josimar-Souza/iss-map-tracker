import { useState, useContext } from "react";
import { issContext } from "../../context/issContext";
import { contextType } from "../../context/issContext/types";
import { Map, Overlay } from "pigeon-maps";
import { OverlayImage } from "./customMapStyles";
import spacestationIcon from '/space-station.png';

type MapInfos = {
  center: [number, number],
  zoom: number,
};

function CustomMap() {
  const { issInfos }: contextType = useContext(issContext);

  const [mapInfos, setMapInfos] = useState<MapInfos>(
    {
      center: [50.879, 4.6997],
      zoom: 11,
    }
  );

  return (
    <Map 
      center={mapInfos.center}
      zoom={mapInfos.zoom}
      onBoundsChanged={({ center, zoom }) => {
        setMapInfos({ center, zoom });
      }}
    >
      <Overlay>
        <OverlayImage src={spacestationIcon} />
      </Overlay>
    </Map>
  )
};

export default CustomMap;
