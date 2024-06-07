import PropTypes from 'prop-types';
import Image from '../gallery/image/Image';

const ModalZoom = ({ photo }) => {
    return (
        <>
            { photo && <dialog open={!!photo}>
                    <Image photo={photo} expandida={true} />
                    <form method="dialog">
                        <button>OK</button>
                    </form>
                </dialog>
            }
        </>
    )
}

ModalZoom.propTypes = {
    photo: PropTypes.object
};

export default ModalZoom