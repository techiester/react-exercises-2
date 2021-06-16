import React from 'react';
import renderer from 'react-test-renderer';
import Counter from './Counter';

const testRenderer = renderer.create(<Counter />);
const testInstance = testRenderer.root;

test('counter render test', () => {
  const divToCheck = testInstance.findByProps({ "className": "counter" });
  expect(divToCheck).toBeTruthy();
});

afterAll(() => {
  testRenderer.unmount();
})