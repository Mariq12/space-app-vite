import PropTypes from 'prop-types';

const ModalZoom = ({photo}) => {
    return (
        <dialog open={!!photo}>
            <p>Greetings, one and all!</p>
            <form method="dialog">
                <button>OK</button>
            </form>
        </dialog>
    )
}

ModalZoom.propTypes = {
    photo: PropTypes.string.isRequired
};

export default ModalZoom