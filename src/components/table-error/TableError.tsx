import React from 'react';
import { ModelTableError } from './types/modelTableError';

const TableError: React.FC<ModelTableError> = ({ message }) => {
  return (
    <tbody className="error_wrap">
      <tr className="error_container">
        <td className="error_message" colSpan={4}>
          {message}
        </td>
      </tr>
    </tbody>
  );
};

export default TableError;
