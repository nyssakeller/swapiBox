import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />)
})

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('initial state of data, filmData, and favorites equal to empty array', () => {
    expect(wrapper.state('data')).toEqual([]);
    expect(wrapper.state('filmData')).toEqual([]);
    expect(wrapper.state('favorites')).toEqual([]);
  })

  it('initial state of buttonClass and active equal to empty string', () => {
    expect(wrapper.state('buttonClass')).toEqual('');
    expect(wrapper.state('active')).toEqual('');
  })

});