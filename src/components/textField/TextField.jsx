import { styled } from "styled-components"
import search from '../../assets/icons/search.png'
import PropTypes from 'prop-types';
import { useState } from 'react';

const StylizedContainer = styled.div`
    position: relative;
    display: inline-block;
`;
const StyledTextField = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    outline: none;
`
const IconMagnifier = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px !important;
    height: 38px;
    cursor: pointer;
`;

const TextField = ({ setFilter }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSearch = () => {
        setFilter(inputValue);
    }

    return (
        <StylizedContainer>
            <StyledTextField 
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)} 
                type="text" 
                placeholder="¿Qué estás buscando?" 
            />
            <IconMagnifier 
                src={search} 
                alt="ícono de lupa" 
                onClick={handleSearch}
            />
        </StylizedContainer>
    )
}

TextField.propTypes = {
    setFilter: PropTypes.func.isRequired
};
export default TextField
