import Title from "../../title/Title";
import { styled } from "styled-components"

import photos from './photos-popular.json'

const ColumnPhotos = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;

    @media (max-width: 1024px) {
        margin-right: 4rem;
    }
    @media (max-width: 744px) {
        width: 70vh;
        height: auto;
    }
    @media (max-width: 688px) {
        width: 42vh;
    }
`

const Imagen = styled.img`
    max-width: 212px;
    height: 158px;
    border-radius: 20px;
    margin-left: 24px;

    @media (max-width: 744px) {
        aspect-ratio: auto;
        max-width: 100%;
        width: 70vh;
        height: auto;
        margin-left: 0;
    }
`

const Boton = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 87%;
    margin-top: 16px;
    margin-left: 24px;

    @media (max-width: 1024px) {
        width: 65%;

    }
    @media (max-width: 744px) {
        width: 70vh;
        margin-left: 0;
    }
    @media (max-width: 688px) {
        width: 42vh;
    }
`

const SectionContainer = styled.section`
    text-align: center;
`;

const Popular = () => {
    return (
        <SectionContainer>
            <Title $align='center'>Popular</Title>
            <ColumnPhotos>
                {photos.map(foto => <Imagen key={foto.id} src={foto.path} alt={foto.alt} />)}
            </ColumnPhotos>
            <Boton>Ver más</Boton>
        </SectionContainer>
    )
}

export default Popular
