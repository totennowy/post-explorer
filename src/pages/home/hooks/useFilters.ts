import { useState, useEffect } from 'react';
import { ModelPostWithAuthor } from '../types/modelPostWithAuthor';

const useFilters = (data: ModelPostWithAuthor[]) => {
  const [filteredData, setFilteredData] = useState<ModelPostWithAuthor[]>(data);
  const [authorFilter, setAuthorFilter] = useState<string[]>([]);

  useEffect(() => {
    let filtered = data;

    if (authorFilter.length) {
      filtered = data.filter((post) => authorFilter.includes(post.author));
    }

    setFilteredData(filtered);
  }, [authorFilter, data]);

  const handleAuthorFilter = (selected: string[]) => {
    setAuthorFilter(selected);
  };

  const authorOptions = Array.from(
    new Set(data.map((post) => post.author)),
  ).map((author) => ({
    value: author,
    label: author,
  }));

  return {
    filteredData,
    handleAuthorFilter,
    authorOptions,
  };
};

export default useFilters;
