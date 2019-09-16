import React from 'react';
import ReactDOM from 'react-dom';
import Names from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Names />, div);
  ReactDOM.unmountComponentAtNode(div);
});
