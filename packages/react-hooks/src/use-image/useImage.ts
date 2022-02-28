import React, { useEffect, useState } from 'react';

export type useImageProps = {
  srcList: string | string[];
  loadImg?: (...args: any[]) => Promise<void>;
};

const cache: {
  [key: string]: Promise<string>;
} = {};

const removeBlankArrayElements = (a: string[]) => a.filter((x) => x);

const stringToArray = (x: string | string[]) => (Array.isArray(x) ? x : [x]);

const imgPromise = (src: string): Promise<void> =>
  new Promise((resolve, reject) => {
    const i = new Image();
    i.onload = () => resolve();
    i.onerror = () => reject;
    i.src = src;
  });

const promiseFind = (
  sourceList: string[],
  imgPromise: (src: string) => Promise<void>
): Promise<string> => {
  let done = false;
  return new Promise((resolve, reject) => {
    const queueNext = (src: string) =>
      imgPromise(src).then(() => {
        done = true;
        resolve(src);
      });

    const firstPromise = queueNext(sourceList.shift() || '');
    sourceList
      .reduce((p, src) => {
        return p.catch(() => {
          if (!done) return queueNext(src);
          return;
        });
      }, firstPromise)
      .catch(reject);
  });
};
const useImage = ({
  srcList,
  loadImg = imgPromise,
}: useImageProps): {
  src: string | undefined;
  loading: boolean;
  error: any;
} => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [value, setValue] = useState<string | undefined>(undefined);

  const sourceList = removeBlankArrayElements(stringToArray(srcList));
  const sourceKey = sourceList.join('');

  useEffect(() => {
    if (!cache[sourceKey]) {
      cache[sourceKey] = promiseFind(sourceList, loadImg);
    }
    cache[sourceKey]
      .then((src) => {
        setLoading(false);
        setValue(src);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [sourceKey]);

  return { loading: loading, src: value, error: error };
};

export default useImage;
