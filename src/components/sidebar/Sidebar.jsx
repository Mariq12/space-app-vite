import styled from "styled-components";
import ItemNavigation from "./itemNavigation/ItemNavigation";

const StyledList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
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
                        Inicio
                    </ItemNavigation>
                </StyledList>
            </nav>
        </aside>
    );
    }

export default Sidebar;