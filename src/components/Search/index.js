import React from 'react';
import T from 'prop-types';
import cx from 'classnames';

import Input from '../common/Input';

import './Search.scss';

const Search = ({ searchValue, onSearch }) => (
  <div className="search">
    <Input
      value={searchValue}
      onChange={({ target: { value } }) => onSearch(value)}
      placeholder="Search task..."
      className={cx("search-input")}
    />
    {searchValue && (
      <span
        className="search-clear"
        onClick={() => onSearch('')}
      />
    )}
  </div >
);

Search.propTypes = {
  onSearch: T.func.isRequired,
  searchValue: T.string.isRequired,
};

export default Search;
