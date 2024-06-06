import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Headboard from "./components/headboard/Headboard"
import Sidebar from "./components/sidebar/Sidebar"
import Banner from "./components/banner/Banner"
import bannner from "./assets/banner.png"

const FondoGradiente = styled.div`
background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
`
const AppContainer = styled.div`
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
`
const MainContainer = styled.div`
  display: flex;
  gap: 24px;
`
function App() {

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />

        <AppContainer>
          <Headboard />
          <MainContainer>
            <Sidebar />
            <Banner texto="¡Bienvenidos a la galería más completa de fotos!" backgroundImage={bannner} />
          </MainContainer>
        </AppContainer>
      </FondoGradiente>
    </>
  )
}

export default App
