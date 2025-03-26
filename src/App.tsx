import CustomMap from "./components/customMap"
import Header from "./components/header"
import Footer from "./components/footer"

import {
  Main,
  MapContainer,
  MapAndInfosContainer,
} from "./AppStyles"

function App() {
  return (
    <Main>
      <Header>ISS Map Tracker</Header>
      <MapAndInfosContainer>
        <MapContainer>
          <CustomMap />
        </MapContainer>
      </MapAndInfosContainer>
      <Footer footerTittle="Created by Josimar Souza" />
    </Main>
  )
}

export default App
