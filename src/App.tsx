import CustomMap from "./components/map"

import {
  Main,
  MapContainer,
} from "./AppStyles"

function App() {
  return (
    <Main>
      <MapContainer>
        <CustomMap />
      </MapContainer>
    </Main>
  )
}

export default App
