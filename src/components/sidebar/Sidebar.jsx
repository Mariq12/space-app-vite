import styled from "styled-components";
import { useState } from "react";
import ItemNavigation from "./itemNavigation/ItemNavigation";
import menuIcon from "../../assets/icons/menu.png";

const StyledList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    
    @media (max-width: 1024px){
        margin-left: 2rem;
    }
    @media (max-width: 688px) {
        margin-left: 1.5rem;
    }
    @media (min-width: 360px) and (max-width: 480px) {
        display: ${props => (props.showMenu ? "flex" : "none")};
    }
`
const MenuIcon = styled.img`
    display: none;
    width: 30px;
    height: 30px;
    cursor: pointer;

    @media (min-width: 360px) and (max-width: 480px){
        display: block;
        margin-left: 1rem;
    }
`;

const SidebarContainer = styled.aside`
    @media (min-width: 360px) and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: absolute;
        top: 20px;
        left: 20px;
    }
`;

const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <SidebarContainer>
            <MenuIcon src={menuIcon} alt="Menu" onClick={toggleMenu} />
            <nav>
                <StyledList $showMenu={showMenu}>
                    <ItemNavigation activeIcon="icons/home-activo.png" idleIcon="icons/home-inactivo.png" active>
                        Inicio
                    </ItemNavigation>
                    <ItemNavigation activeIcon="icons/mas-vistas-activo.png" idleIcon="icons/mas-vistas-inactivo.png">
                        Más vistas
                    </ItemNavigation>
                    <ItemNavigation activeIcon="icons/me-gusta-activo.png" idleIcon="icons/me-gusta-inactivo.png">
                        Más Me Gusta
                    </ItemNavigation>
                    <ItemNavigation activeIcon="icons/nuevas-activo.png" idleIcon="icons/nuevas-inactivo.png">
                        Nuevas
                    </ItemNavigation>
                    <ItemNavigation activeIcon="icons/sorprendeme-activo.png" idleIcon="icons/sorprendeme-inactivo.png">
                        Sorpréndame
                    </ItemNavigation>
                </StyledList>
            </nav>
        </SidebarContainer>
    );
}

export default Sidebar;