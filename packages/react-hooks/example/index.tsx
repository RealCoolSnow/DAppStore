import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Img } from '../.';

const App = () => {
  return (
    <div>
      <Img src={['']} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
