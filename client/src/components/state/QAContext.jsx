import React, { useContext } from 'react';
import axios from 'axios';
import { GITHUB_KEY, ATELIER_URL } from '../../../config';
// import GH key from config
// connect to related products and ratings/review

// create Context
export const QAProvider = React.createContext();

const QAProvider = ({ children }) => {

  const options = {
    headers: { Authorization: GITHUB_KEY },
  };

  return (
    <QAProvider.ProductsProvider
      value={{

      }}
    >
      { children }
    </QAProvider.ProductsProvider>
  );
};

export default QAProvider;
