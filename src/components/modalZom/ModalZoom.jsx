import PropTypes from 'prop-types';
import Image from '../gallery/image/Image';
import styled from 'styled-components';

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
`

const ModalZoom = ({ photo }) => {
    return (
        <>
            { photo && <>
                <Overlay />
                < StyledDialogue open={!!photo}>
                    <Image photo={photo} expandida={true} />
                    <form method="dialog">
                        <button>OK</button>
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