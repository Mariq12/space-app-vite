import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import IconButton from '../../iconButton/IconButton';

const Figure = styled.figure`
    width: ${(props) => (props.$expandida ? '90%' : '370px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3,
        h4 {
            margin: 0;
            font-size: 16px;
        }
    }

    @media (max-width: 744px) {
        width: 70vh;
    }
    @media (max-width: 688px) {
        width: 42vh;
    }
`
const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Image = ({ photo, expandida = false, requestZoom, toggleFavorite }) => {
    //const favoriteIcon = photo.favorite ? '/icons/favorito-activo.png' : '/icons/favorito.png'
    let favoriteIcon = '/icons/favorito.png';
    if (photo.favorite) {
        favoriteIcon = '/icons/favorito-activo.png'
    }

    return (
        <Figure $expandida={expandida} id={`photo-${photo.id}`}>
            <img src={photo.path} alt={photo.alt} />
            <figcaption>
                <h3>{photo.titulo}</h3>
                <Footer>
                    <h4>{photo.fuente}</h4>
                    <IconButton onClick={()=>toggleFavorite(photo)}>
                        <img src={favoriteIcon} alt='Icono de favorito' />
                    </IconButton>
                    {!expandida && <IconButton aria-hidden=
                        {expandida} onClick={() => requestZoom(photo)}>
                        <img src='/icons/expandir.png' alt='Icono de expandir' />
                    </IconButton>}
                </Footer>
            </figcaption>
        </Figure>
    )
}

Image.propTypes = {
    photo: PropTypes.object,
    expandida: PropTypes.bool,
    requestZoom: PropTypes.func,
    toggleFavorite: PropTypes.func
}

export default Image