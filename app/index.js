/**
 * @format
 */

import {AppRegistry,AsyncStorage} from 'react-native';
import App from './App';
import {AppNavigators} from './js/AppNavigators/AppNavigators'
import {createAppContainer} from 'react-navigation'
import {name as appName} from './app.json';
const  AppStackNavigatorContainer = createAppContainer(AppNavigators);
import Login from '../app/js/page/LoginPage/index'


AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);
