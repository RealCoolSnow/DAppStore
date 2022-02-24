import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { useDebounce } from '../src/use-debounce';

describe('useDebounce', () => {
  it('put initialized value in first render', () => {
    const text = 'Hello world';
    const View = () => {
      const [value] = useDebounce(text, 1000);
      return <div>{value}</div>;
    };
    const wrapper = render(<View />);
    expect(wrapper.queryByText(text)).toBeTruthy();
  });
});
