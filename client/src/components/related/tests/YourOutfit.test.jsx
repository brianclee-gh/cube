/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import renderer from 'react-test-renderer';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import AddToOutfit from '../AddToOutfit.jsx';
import OutfitCard from '../OutfitCard.jsx';
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

const currentStyle = {
  style_id: 90315,
  name: 'Teal',
  original_price: '210.00',
  sale_price: '50.00',
  'default?': true,
  photos: [
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1547597456-4c18a06d9073?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    },

  ],
};

const currentProduct = {
  id: 17080,
  campus: 'hr-rfp',
  name: 'Karlee Suit',
  slogan: 'Esse ab id error minus.',
  description: 'Perferendis illum qui quam harum saepe dignissimos sunt quaerat non. Nihil dolorum id quas accusamus dolores quidem qui sint. Aut voluptatem minima possimus voluptatem delectus eaque quia earum quisquam.',
  category: 'Suit',
  default_price: '210.00',
  created_at: '2021-02-23T04:22:44.937Z',
  updated_at: '2021-02-23T04:22:44.937Z',
};

test('it should render an Add to Outfit card', () => {
  const addToOutfit = () => { console.log('hi'); };
  act(() => {
    render(<AddToOutfit
      currentProduct={currentProduct}
      currentStyle={currentStyle}
      addToOutfit={addToOutfit}
    />, container);
  });

  const card = document.querySelector('[data-btn=add-to-outfit]');
  expect(card.innerHTML).toBe('+');

  const price = document.querySelector('[data-price=outfit-price]');
  expect(price.innerHTML).toBe('$210.00');
});

test('it should render an OutfitCard', async () => {
  await setTimeout(5000);
  act(() => {
    render(<OutfitCard
      product={currentProduct}
      handleCardClick={() => {}}
    />, container);
  });

  const category = document.querySelector('[data-category=item-category]');
  expect(category.innerHTML).toBe('SUIT');
});
