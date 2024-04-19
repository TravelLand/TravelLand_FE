// import React from 'react'
import ReDesignHeader from '@/components/layouts/Header2';
import ResultsContent from '@/components/search/ResultsContent';
import SearchInput from '@/components/search/Search';

const SearchResults = () => {
  return (
    <>
      <ReDesignHeader />
      <SearchInput placeholder="검색어를 입력해주세요." />
      <ResultsContent />
      {/* <ResultsContent /> */}
    </>
  );
};

export default SearchResults;
