import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledItemList = styled.li`
    font-size: 24px;
    margin-bottom: 30px;
    line-height: 28px;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${props => props.$active ? "#7B78E5" : "#D9D9D9"};
    font-family: ${props => props.$active ? "GandhiSansBold" : "GandhiSansRegular"};
`

const ItemNavigation = ({children, activeIcon, idleIcon, active=false}) => {
    return (
        <StyledItemList $active={active}> 
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