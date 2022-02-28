import React from 'react';
import useImage, { useImageProps } from './useImage';

export type ImgProps = Omit<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
  'src'
> &
  Omit<useImageProps, 'srcList'> & {
    src: useImageProps['srcList'];
    loader?: JSX.Element | null;
    unloader?: JSX.Element | null;
  };

export default ({
  src: srcList,
  loadImg,
  loader = null,
  unloader = null,
  ...imgProps
}: ImgProps) => {
  const { src, loading, error } = useImage({
    srcList,
    loadImg,
  });

  if (src) return <img src={src} {...imgProps} />;
  if (loading) return loader;
  if (error) return unloader;

  return null;
};
