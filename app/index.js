/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {AppNavigators} from './js/AppNavigators/AppNavigators'
import {createAppContainer} from 'react-navigation'
import {name as appName} from './app.json';
const  AppStackNavigatorContainer = createAppContainer(AppNavigators);


AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);
