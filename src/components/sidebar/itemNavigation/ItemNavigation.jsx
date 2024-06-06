import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledItemList = styled.li`

`

const ItemNavigation = ({children, activeIcon, idleIcon, active=false}) => {
    return (
        <StyledItemList> 
        <img src={active ? activeIcon : idleIcon} />
        {children}
        </StyledItemList>
    );
};

ItemNavigation.propTypes = {
    children: PropTypes.node, // Add this line
    activeIcon: PropTypes.string.isRequired,
    idleIcon: PropTypes.string.isRequired,
    active: PropTypes.bool,
};

export default ItemNavigation;