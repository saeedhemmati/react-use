# `useMeta`

React side-effect hook that sets new meta tags of the page.


## Usage

```jsx
import {useMeta} from 'react-use';

const Demo = () => {
  useMeta([
    {
      name: 'test1',
      content: 'test1',
    },
    {
      name: 'test2',
      content: 'test2',
    }
  ]);

  return null;
};
```
