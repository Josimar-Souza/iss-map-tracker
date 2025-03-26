import CustomMap from "./components/map"
import Header from "./components/header"

import {
  Main,
  MapContainer,
} from "./AppStyles"

function App() {
  return (
    <Main>
      <Header />
      <MapContainer>
        <CustomMap />
      </MapContainer>
    </Main>
  )
}

export default App
