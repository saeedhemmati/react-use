import useEffectOnce from './useEffectOnce';

export interface Meta {
  name: string;
  content: string;
};

export const useMeta = (metaObject: Meta[]) => {
  useEffectOnce(() => {
    const headEl = document.getElementsByTagName('head')[0];
    metaObject.forEach((arrayEl) => {
      const { name, content } = arrayEl;
      const metaEl = document.createElement('meta');
      metaEl.setAttribute('name', name);
      metaEl.setAttribute('content', content);
      headEl.appendChild(metaEl);
    });
  });
};
