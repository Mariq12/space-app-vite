import styled from "styled-components";
import ItemNavigation from "./itemNavigation/ItemNavigation";

const StyledList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    @media (max-width: 688px) {
        margin-left: 1rem;
    }
`

const Sidebar = () => {
    return (
        <aside> 
            <nav>
                <StyledList>
                    <ItemNavigation activeIcon="icons/home-activo.png" idleIcon= "icons/home-inactivo.png" active>
                        Inicio
                    </ItemNavigation>
                    <ItemNavigation activeIcon="icons/mas-vistas-activo.png" idleIcon= "icons/mas-vistas-inactivo.png">
                        Más vistas
                    </ItemNavigation>
                    <ItemNavigation activeIcon="icons/me-gusta-activo.png" idleIcon= "icons/me-gusta-inactivo.png">
                        Más Me Gusta
                    </ItemNavigation>
                    <ItemNavigation activeIcon="icons/nuevas-activo.png" idleIcon= "icons/nuevas-inactivo.png">
                        Nuevas
                    </ItemNavigation>
                    <ItemNavigation activeIcon="icons/sorprendeme-activo.png" idleIcon= "icons/sorprendeme-inactivo.png">
                        Sorpréndame
                    </ItemNavigation>
                </StyledList>
            </nav>
        </aside>
    );
    }

export default Sidebar;