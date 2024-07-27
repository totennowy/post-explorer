import React from 'react';
import useTableFilter from './hooks/useTableFilter';
import { ModelTableFilter } from './types/modelTableFilter';

const TableFilter: React.FC<ModelTableFilter> = ({
  options,
  onChange,
  placeholder,
}) => {
  const {
    selectedOptions,
    isOpen,
    toggleFilter,
    filterRef,
    handleCheckboxChange,
  } = useTableFilter(onChange);

  return (
    <div className="table_filter_container" ref={filterRef}>
      <button className="filter_button" onClick={toggleFilter}>
        <span className="filter_icon" aria-label="filter icon"></span>
      </button>
      {isOpen && (
        <div className="table_filter_content">
          <span>{placeholder}</span>
          <div className="checkbox_options">
            {options.map((option) => (
              <label key={option.value}>
                <input
                  type="checkbox"
                  value={option.value}
                  checked={selectedOptions.includes(option.value)}
                  onChange={() => handleCheckboxChange(option.value)}
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TableFilter;
