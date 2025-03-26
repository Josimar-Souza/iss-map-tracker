import CustomMap from "./components/map"
import Header from "./components/header"
import Footer from "./components/footer"

import {
  Main,
  MapContainer,
} from "./AppStyles"

function App() {
  return (
    <Main>
      <Header>ISS Map Tracker</Header>
      <MapContainer>
        <CustomMap />
      </MapContainer>
      <Footer footerTittle="Created by Josimar Souza" />
    </Main>
  )
}

export default App
