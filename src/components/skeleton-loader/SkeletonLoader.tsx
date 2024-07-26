const SkeletonLoader = ({ rows = 20 }) => {
  return (
    <tbody>
      {[...Array(rows)].map((_, index) => (
        <tr className="skeleton_row" key={index}>
          <td className="skeleton_cell"></td>
          <td className="skeleton_cell"></td>
          <td className="skeleton_cell"></td>
          <td className="skeleton_cell"></td>
        </tr>
      ))}
    </tbody>
  );
};

export default SkeletonLoader;
