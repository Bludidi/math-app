/* eslint-disable */ 
import { render } from '@testing-library/react';
import React from 'react';
import Calculator from '../../components/calculator';

describe('Calculator snapshot', () => {
  test(' <Calculator /> renders correctly', () => {
    const tree = render(<Calculator />);
    expect(tree).toMatchSnapshot();
  });
});
