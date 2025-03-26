import { useState } from "react";
import { Map } from "pigeon-maps";

type MapInfos = {
  center: [number, number],
  zoom: number,
};

function CustomMap() {
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
    />
  )
};

export default CustomMap;
