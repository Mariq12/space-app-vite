import styled from "styled-components";
import TextField from "../textField/TextField";

const StylizedHeader = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img{
        width: 212px;

    }
`

const Headboard = () => {
    return (
        <StylizedHeader>
            <img src="img/logo.png" alt="Logo de Space App" />
            <TextField />   
        </StylizedHeader>
    )
}

export default Headboard;