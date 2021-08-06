/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const QASearch = ({
  searchText, onSearchChange, reportClick,
}) => (
  <div
    tabIndex="-4"
    role="button"
    onClick={(e) => {
      reportClick(e, 'QA Search');
    }}
    onKeyDown={() => {}}
    className="qa-search"
  >
    <form className="qa-search-bar" noValidate autoComplete="off" onSubmit={(e) => { e.preventDefault(); console.log('clicked'); }}>
      <input className="qa-search-bar-input" type="text" value={searchText} onChange={onSearchChange} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
      <button className="qa-search-input-btn" aria-label="QA Search Submit" type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  </div>
);

export default QASearch;
