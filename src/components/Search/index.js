import React from 'react';
import T from 'prop-types';

import Input from '../common/Input';

const Search = ({ searchValue, onSearch }) => (
  <div>
    <Input
      value={searchValue}
      onChange={({ target: { value } }) => onSearch(value)}
      placeholder="Search..."
    />
    <span onClick={() => onSearch('')}>X</span>
  </div >
);

Search.propTypes = {
  onSearch: T.func.isRequired,
  searchValue: T.string.isRequired,
};

export default Search;