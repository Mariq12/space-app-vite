import Title from "../title/Title";
import Tag from "./tags/Tags";
import Popular from "./popular/Popular";
import styled from 'styled-components';

const GalleryContainer = styled.div`
    display: flex;
`
const FluidSection = styled.section`
    flex-grow: 1;
`
const Gallery = () => {
    return (
        <>
            <Tag />
            <GalleryContainer>
                <FluidSection>
                    <Title>
                        Navegue por la galería
                    </Title>
                </FluidSection>
                <Popular />
            </GalleryContainer>
        </>
    );
};

export default Gallery;