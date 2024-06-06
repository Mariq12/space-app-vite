import styled from "styled-components";
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
                    <li>
                        <a href="">Inicio</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </StyledList>
            </nav>
        </aside>
    );
    }

export default Sidebar;