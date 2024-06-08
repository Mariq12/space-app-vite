import { styled } from "styled-components";
import PropTypes from 'prop-types';

const StyledFigure = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
    padding: 20px;

    @media (max-width: 1024px) {
        height: 276px;
        width: 93%;
        margin-left: 1rem;
        padding: 0;
    }
    @media (max-width: 744px) {
        height: 276px;
        width: 426px;
        margin-left: 4.4rem;
        padding: 0;
    }
    @media (max-width: 688px) {
        height: 276px;
        width: 87%;
        margin-left: .5rem;
        padding: 0;
    }

    @media (min-width: 360px) and (max-width: 480px) {
        width: 85%;
        min-height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        padding: 0.5rem;
        }
`;

const StyledTitle = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;

    @media (max-width: 744px) {
        font-size: 28px;
        line-height: 40px;
        padding: 0 32px;
    }
    @media (max-width: 480px) {
        font-size: 24px;
        line-height: 32px;
        padding: 0 16px;
    }
`;

const Banner = ({ texto, backgroundImage }) => {
    return (
        <StyledFigure $backgroundImage={backgroundImage}>
            <StyledTitle>{texto}</StyledTitle>
        </StyledFigure>
    );
};

Banner.propTypes = {
    texto: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired
};

export default Banner