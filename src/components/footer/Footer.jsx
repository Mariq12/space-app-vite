import { styled } from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: #04244F;
    padding: 22px;
    box-sizing: border-box;
`;

const IconContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`;

const FooterText = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;
    line-height: 1.4;
`;

function Footer() {
    return (
        <StyledFooter>
            <IconContainer>
                <li>
                    <a href="https://www.facebook.com/profile.php?id=100084487023873">
                        <img src="/img/redes/facebook.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/Flor_Maria_LP">
                        <img src="/img/redes/twitter.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/flormarialabandapuchaicela">
                        <img src="/img/redes/instagram.svg" alt="" />
                    </a>
                </li>
            </IconContainer>
            <FooterText>
                Desarrollado por Alura.<br />
                Modificado por Flor María Labanda P.<br />
                7 de Junio de 20024

            </FooterText>
        </StyledFooter>
    );
}

export default Footer
