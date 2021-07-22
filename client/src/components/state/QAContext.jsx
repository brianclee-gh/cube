import React, { useContext } from 'react';
import axios from 'axios';
import { GITHUB_KEY, ATELIER_URL } from '../../../config';
// import GH key from config
// connect to related products and ratings/review

// create Context
export const QAContext = React.createContext();

const QAProvider = ({ children }) => (
  <QAContext.QAProvider
    value={{

    }}
  >
    { children }
  </QAContext.QAProvider>
);

export default QAProvider;
