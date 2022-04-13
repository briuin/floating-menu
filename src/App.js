import React from 'react';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import FloatingMenu from './components/FloatingMenu';

const generateClassName = createGenerateClassName({
  productionPrefix: 'pk-fb',
});

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <FloatingMenu />
      </StylesProvider>
    </div>
  );
};
