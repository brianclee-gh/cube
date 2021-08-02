import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Answer from '../Answer.jsx';
import { expect } from '@jest/globals';

test('Answer mounts with proper data', () => {
  const testAnswer = {
    id: 21,
    body: 'yeah this looks good with everything',
    date: '2019-11-12T00:00:00.000Z',
    answerer_name: 'ubes',
    helpfulness: 9,
    photos: [],
  };

  const answer = shallow(<Answer answer={testAnswer} />);

  expect(answer.find('div.answer').text()).toEqual('A: yeah this looks good with everything');
  expect(answer.find('span.individual-answer-name-date').text()).toEqual('by ubes, November 11, 2019');
});
