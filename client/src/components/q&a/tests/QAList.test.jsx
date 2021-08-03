import renderer from 'react-test-renderer';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import QAList from '../QAList.jsx';
questionSample

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

test('it should render a QA list', async () => {
  await setTimeout(5000);
  act(() => {
    render(<QAList />, container);
  });

//   const card = document.querySelector('[data-btn=add-to-outfit]');
//   expect(card.innerHTML).toBe('+');
});