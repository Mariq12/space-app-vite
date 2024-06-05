import styled from "styled-components"

const FondoGradiente = styled.div`
background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
`

function App() {

  return (
    <>
      <FondoGradiente>
        <h1>¡Hola Mundo!</h1>
      </FondoGradiente>
    </>
  )
}

export default App
