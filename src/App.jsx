import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Headboard from "./components/headboard/Headboard"
import Sidebar from "./components/sidebar/Sidebar"

const FondoGradiente = styled.div`
background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
`

function App() {

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <Headboard />
        <Sidebar />
      </FondoGradiente>
    </>
  )
}

export default App
