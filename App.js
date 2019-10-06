/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import AppContainer from './src/routes';
import NavigationService from './src/NavigationService';

const App = () => {
  return (
    <Fragment>
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </Fragment>
  );
};

export default App;
