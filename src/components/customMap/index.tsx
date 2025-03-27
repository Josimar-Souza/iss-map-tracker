import { useState, useContext, useEffect } from "react";
import { issContext } from "../../context/issContext";
import { Map, Overlay } from "pigeon-maps";
import { OverlayImage, UserMarker } from "./customMapStyles";
import spacestationIcon from '/space-station.png';
import Loading from "../loading";

type MapInfosType = {
  center: [number, number],
  zoom: number,
};

type CoordenatesType = [ number, number ]

function CustomMap() {
  const { issInfos, isLoading } = useContext(issContext);

  const [userLocation, setUserLocation] = useState<CoordenatesType>([0, 0])

  const [issCoordenates, setIssCoordenates] = useState<CoordenatesType>(
    [0, 0]
  );

  const [mapInfos, setMapInfos] = useState<MapInfosType>(
    {
      center: [50.879, 4.6997],
      zoom: 11,
    }
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setUserLocation([coords.latitude, coords.longitude])
    });
  }, []);

  useEffect(() => {
    const coordenates: CoordenatesType = [
      issInfos.latitude,
      issInfos.longitude,
    ]

    setIssCoordenates(coordenates);
  }, [issInfos]);

  if (isLoading) {
    return (
      <Loading>
        Loading...
      </Loading>
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
      {userLocation[0] != 0 && (
        <Overlay anchor={userLocation}>
          <UserMarker />
        </Overlay>
      )}
    </Map>
  )
};

export default CustomMap;
