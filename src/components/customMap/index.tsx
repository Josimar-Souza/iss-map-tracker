import { useState, useContext, useEffect } from "react";
import { issContext } from "../../context/issContext";
import { Map, Overlay } from "pigeon-maps";
import { OverlayImage } from "./customMapStyles";
import spacestationIcon from '/space-station.png';

type MapInfosType = {
  center: [number, number],
  zoom: number,
};

type IssCoordenatesType = [ number, number ]

function CustomMap() {
  const { issInfos, isLoading } = useContext(issContext);

  const [issCoordenates, setIssCoordenates] = useState<IssCoordenatesType>(
    [0, 0]
  );

  const [mapInfos, setMapInfos] = useState<MapInfosType>(
    {
      center: [50.879, 4.6997],
      zoom: 11,
    }
  );

  useEffect(() => {
    const coordenates: IssCoordenatesType = [
      issInfos.latitude,
      issInfos.longitude,
    ]

    setIssCoordenates(coordenates);
  }, [issInfos]);

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    );
  }

  return (
    <Map
      defaultCenter={[issInfos.latitude, issInfos.longitude]}
      defaultZoom={8}
      center={mapInfos.center}
      zoom={mapInfos.zoom}
      onBoundsChanged={({ center, zoom }) => {
        setMapInfos({ center, zoom });
      }}
    >
      <Overlay
        anchor={issCoordenates}
      >
        <OverlayImage src={spacestationIcon} />
      </Overlay>
    </Map>
  )
};

export default CustomMap;
