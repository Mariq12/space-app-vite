import styled from "styled-components";
import TextField from "../textField/TextField";
import PropTypes from 'prop-types';

const StylizedHeader = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img{
        width: 212px;
    }
`;

const Headboard = ({ setFilter }) => {
    return (
        <StylizedHeader>
            <img src="img/logo.png" alt="Logo de Space App" />
            <TextField setFilter={setFilter} />   
        </StylizedHeader>
    );
}

Headboard.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
};

export default Headboard;
