import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { useImage } from '../src/use-image';

describe('useImage', () => {
  it('will show image on screen', () => {
    const View = () => {
      const srcList = ['https://dummyimage.com/3000x3000/000/green', 'sss'];
      const { src } = useImage({ srcList });
      return <img src={src} />;
    };
    const wrapper = render(<View />);
  });
});
