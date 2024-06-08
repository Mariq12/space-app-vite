import styled from "styled-components";
import TextField from "../textField/TextField";
import PropTypes from 'prop-types';

const StylizedHeader = styled.header`
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 30vw;
        max-width: 212px;
        margin-bottom: 20px;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        img {
            margin-bottom: 0;
        }
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
