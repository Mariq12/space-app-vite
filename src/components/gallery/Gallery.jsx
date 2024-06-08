import Title from "../title/Title";
import Tag from "./tags/Tags";
import Popular from "./popular/Popular";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from "./image/Image";

const GalleryContainer = styled.div`
    display: flex;
    margin-bottom: 24px;
`
const FluidSection = styled.section`
    flex-grow: 1;
`
const ImageContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
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