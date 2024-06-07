import styled from 'styled-components';

const Title = styled.h2`
    color: #7B78E5;
    font-size: 2rem;
    text-align: ${props => props.$align ? props.$aling : "left"};
    margin: 24px 0;
`

export default Title;