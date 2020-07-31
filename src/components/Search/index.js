import React from 'react';
import T from 'prop-types';
import cx from 'classnames';

import Input from '../common/Input';
import ImgSource from '../../assets/img/close.png'
import './Search.scss';

const Search = ({ searchValue, onSearch }) => (
  <div className="search">
    <Input
      value={searchValue}
      onChange={({ target: { value } }) => onSearch(value)}
      placeholder="Enter task naem for search..."
      className={cx("search-input")}
    />
    <span
      className="search-button"
      onClick={() => onSearch('')}
    >
      <img src={ImgSource} alt="close" />
    </span>
  </div >
);

Search.propTypes = {
  onSearch: T.func.isRequired,
  searchValue: T.string.isRequired,
};

export default Search;