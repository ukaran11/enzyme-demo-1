import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import  EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.debug());
  expect(wrapper.exists()).toBe(true);
});

test('renders increment button', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test('renders counter display', () => {

});

test('counter display starts at 0', () => {

});

test('clicking button increments counter display', () => {

});