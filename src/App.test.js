import React, { Component } from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import  EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 *Factory function to create a ShallowWrapper for the App Component
 *@function setup
 *@returns {ShallowWrapper}
*/
const setup = () => shallow(<App />)

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('renders learn react link', () => {
  const wrapper = setup();
  console.log(wrapper.debug());
  expect(wrapper.exists()).toBe(true);
});

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app")
  expect(appComponent.length).toBe(1);
});

test('renders button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button")
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display")
  expect(counterDisplay.length).toBe(1);
});

test('counter starts with 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test('clicking on button increments the counter display', () => {
  const wrapper = setup();

  // find the button
  const button = findByTestAttr(wrapper, "increment-button")

  // click the button
  button.simulate('click');

  // find the display and test that the number has been incremented
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});