import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"

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
        <h1>¡Hola Mundo!</h1>
      </FondoGradiente>
    </>
  )
}

export default App
