import Title from "../../title/Title";
import { styled } from "styled-components"

import photos from './photos-popular.json'

const ColumnPhotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const Imagen = styled.img`
    max-width: 212px;
    height: 158px;
    border-radius: 20px;
    margin-left: 24px;
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
