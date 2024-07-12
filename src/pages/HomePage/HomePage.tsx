import { Pagination } from 'antd';
import { useState } from 'react';
import { useGetPeopleQuery } from '../../api/StarWarsApi';
import { SearchBar } from './components/SearchBar';
import { CharactersList } from './components/СharactersList';

export const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const { data: dataPeople, isLoading: isLoadingPeople } = useGetPeopleQuery({
    search: searchQuery,
    page: currentPage,
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const hasResults = !isLoadingPeople && dataPeople && dataPeople.results.length > 0;

  return (
    <>
      <SearchBar
        searchQuery={searchQuery}
        hasResults={hasResults || false}
        setSearchQuery={setSearchQuery}
        setCurrentPage={setCurrentPage}
      />
      <CharactersList dataPeople={dataPeople} isLoadingPeople={isLoadingPeople} />
      <Pagination
        current={currentPage}
        total={dataPeople?.count || 0}
        onChange={handlePageChange}
        showSizeChanger={false}
      />
    </>
  );
};
