import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/App.jsx';

// Write test for general App React components
  // examples from doc:
  // it should render without throwing an error
  // it should be selectable by class "foo"
  // it should mount in a full DOM
  // it should render to static HTML
