import tags from './tags.json';

const Tag = () => {
  return (
    <>
    <p>Buscar por tags</p>
    {tags.map((tag) => {
      return (
        <button key={tag.id}>{tag.titulo}</button>
      );
    } )}
    </>
  );
}; 

export default Tag;