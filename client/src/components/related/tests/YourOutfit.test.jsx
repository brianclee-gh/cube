/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import renderer from 'react-test-renderer';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import YourOutfit from '../YourOutfit.jsx';
import { ProductsProvider } from '../../state/ProductsContext.jsx';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('it should render an Add to Outfit card', async () => {
  await setTimeout(5000);
  act(() => {
    render(<ProductsProvider><YourOutfit /></ProductsProvider>, container);
  });

  const card = document.querySelector('[data-btn=add-to-outfit]');
  expect(card.innerHTML).toBe('+');
});
