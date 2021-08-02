import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const QASearch = () => (
  <>
    <form className="qa-search-bar" noValidate autoComplete="off">
      <input className="qa-search-bar-input" type="text" name="searchTerm" placeholder="Have a question? Search for answers..." />
      <button className="qa-search-input-btn" type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  </>
);

export default QASearch;
