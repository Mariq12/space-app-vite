import tags from './tags.json'
import { styled } from 'styled-components'
import PropTypes from 'prop-types'; 

const BarTags = styled.div`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
    @media (max-width: 744px) {
        display: flex;
        align-items: start;
        flex-direction: column;
        gap: 24px;
        margin-left: 0;
    }
`
const TitleTags = styled.p`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`
const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background-color:rgba(217, 217, 217, 0.3);
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border-radius: 10px;
    border-color: transparent;
    &:hover{
        border-color: #C98CF1;
    }
    @media (max-width: 744px) {
        font-size: 18px;
        padding: 8px;
    }
    @media (max-width: 688px) {
        font-size: 15px;
    }
`
const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`
const Tags = ({ setTag }) => {
    return (
        <BarTags>
            <TitleTags>Buscar por etiquetas:</TitleTags>
            <Div>
                {tags.map(tag => <Tag key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</Tag>)}
            </Div>
        </BarTags>
    )
}

Tags.propTypes = {
    setTag: PropTypes.func.isRequired
}

export default Tags
