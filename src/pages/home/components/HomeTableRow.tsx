import { ModelHomeTableRow } from '../types/modelHomeTableRow';

const HomeTableRow: React.FC<ModelHomeTableRow> = ({
  author,
  id,
  title,
  body,
}) => {
  return (
    <tr>
      <td>{author}</td>
      <td>{id}</td>
      <td>{title}</td>
      <td>{body}</td>
    </tr>
  );
};

export default HomeTableRow;
