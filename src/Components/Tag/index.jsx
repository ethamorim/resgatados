import sheet from './style.module.scss';

function Tag(props) {
  const tag = props.tag;

  return (
    <span className={`${sheet.tag} ${sheet[tag.cor]}`}>
      {tag.texto}
    </span>
  );
}

export default Tag;
