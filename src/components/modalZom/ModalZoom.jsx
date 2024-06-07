import PropTypes from 'prop-types';
import Image from '../gallery/image/Image';
import styled from 'styled-components';
import IconButton from '../iconButton/IconButton';

const Overlay= styled.div`
    background-color: rgba(0, 0, 0, .7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
const StyledDialogue = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`

const ModalZoom = ({ photo }) => {
    return (
        <>
            { photo && <>
                <Overlay />
                < StyledDialogue open={!!photo}>
                    <Image photo={photo} expandida={true} />
                    <form method="dialog">
                        <IconButton>
                            <img src='/icons/cerrar.png' alt='Icono de cerrar' />
                        </IconButton>
                    </form>
                </ StyledDialogue>
            </>
            }
        </>
    )
}

ModalZoom.propTypes = {
    photo: PropTypes.object
};

export default ModalZoom