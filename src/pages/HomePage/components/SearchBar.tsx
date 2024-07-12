import { Input } from 'antd';
import React from 'react';

type SearchBarProps = {
  searchQuery: string;
  hasResults: boolean;
  setSearchQuery: (value: string) => void;
  setCurrentPage: (value: number) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  hasResults,
  setSearchQuery,
  setCurrentPage,
}) => {

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.value !== undefined) {
      setSearchQuery(e.target.value);
      setCurrentPage(1);
    }
  };

  return (
    <header className="app-header">
      <h1>Star Wars</h1>
      <Input.Search
        placeholder="Text..."
        value={searchQuery}
        onChange={handleSearch}
        style={{ width: '300px' }}
      />
      {!hasResults && (
        <div style={{ color: 'red' }}>
          No results found for "{searchQuery}"
        </div>
      )}
    </header>
  );
};
