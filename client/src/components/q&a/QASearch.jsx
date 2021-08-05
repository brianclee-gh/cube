import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const QASearch = ({ searchText, handleSearch }) => (
  <>
    <form className="qa-search-bar" noValidate autoComplete="off" onSubmit={(e) => { e.preventDefault(); console.log('clicked'); }}>
      <input className="qa-search-bar-input" type="text" value={searchText} onChange={handleSearch} placeholder="Have a question? Search for answers..." />
      <button className="qa-search-input-btn" aria-label="QA Search Submit" type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  </>
);

export default QASearch;
