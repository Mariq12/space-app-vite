import Title from "../title/Title";
import Tag from "./tags/Tags";
import Popular from "./popular/Popular";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from "./image/Image";

const GalleryContainer = styled.div`
    display: flex;
    margin-bottom: 24px;
    @media (max-width: 744px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    @media (max-width: 688px) {
        display: flex;
        justify-content:flex-start;
        align-items: flex-start;
    }
    @media (min-width: 360px) and (max-width: 480px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const FluidSection = styled.section`
    flex-grow: 1;
    @media (max-width: 744px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    @media (max-width: 688px) {
        display: flex;
        justify-content:flex-start;
        align-items: flex-start;
    }
`
const ImageContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
    @media (max-width: 744px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 24px;
    }
`

const Gallery = ({photos= [], setTag, selectPhoto, toggleFavorite}) => {
    //console.log("Photos in Gallery:", photos); // Log para depuración
    return (
        <>
            <Tag setTag={setTag} />
            <GalleryContainer>
                <FluidSection>
                    <Title>
                        Navegue por la galería
                    </Title>
                    <ImageContainer>
                    {photos.map(photo=>(<Image 
                    toggleFavorite={toggleFavorite}
                    requestZoom={selectPhoto} 
                        key={photo.id} 
                        photo={photo} />))}
                    </ImageContainer>
                </FluidSection>
                <Popular />
            </GalleryContainer>
        </>
    );
};

Gallery.propTypes = {
    photos: PropTypes.array,
    selectPhoto: PropTypes.func.isRequired,
    toggleFavorite: PropTypes.func.isRequired,
    setTag: PropTypes.func.isRequired
}

export default Gallery;