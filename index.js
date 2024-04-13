/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ContextProvider from './components/ContextAPI/ContextProvider';

// AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerComponent(
  appName,
  () => props =>
    (
      <ContextProvider>
        <App {...props} />
      </ContextProvider>
    ),
  () => App,
);
