import { render, screen } from '@testing-library/react';
import App from './App';
import { createStore } from "redux";
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import * as actions from './reducers/actionCreators';
import * as types from './reducers/actionTypes';
import cartReducer from './reducers/cartReducer';

test('renders App', () => {
  const store = createStore(rootReducer);

  render(    
  <Provider store={store}>
    <MemoryRouter >
      <App /> 
    </MemoryRouter>
  </Provider>);

});

test('actions', () => {
  const item = {
    "name": "microwave",
    "price": 100.00,
    "description": "Heat your food with the power of SCIENCE!",
    "image_url": "https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140"
  }
  const addAction = {
    type: types.ADD,
    payload: item
  }
  expect(actions.add(item)).toEqual(addAction);

  const removeAction = {
    type: types.REMOVE,
    payload: item
  }

  expect(actions.remove(item)).toEqual(removeAction);

})


test('cart reducers', ()=> {
  expect(cartReducer({ cart : [] },{type: "ADD", payload: {
    "name": "tv",
    "price": 219.99,
    "description": "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
    "image_url": "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue"
  }})).toEqual({cart : [{
    "name": "tv",
    "price": 219.99,
    "description": "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
    "image_url": "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue"
  }]});

  expect(cartReducer({ cart : [{
    "name": "tv",
    "price": 219.99,
    "quantity": 1,
    "image_url": "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue"
  }] },{type: "REMOVE", payload: {
    "name": "tv",
    "price": 219.99,
    "description": "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
    "image_url": "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue"
  }})).toEqual({cart : []});
})