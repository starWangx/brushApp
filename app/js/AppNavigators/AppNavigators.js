import {createStackNavigator} from 'react-navigation'
import {createBottomTabNavigator,} from 'react-navigation';
import HomePage from '../page/HomePage/index'
import LoginPage from '../page/HomePage/index'
import DemoPage from '../page/DemoPage/index'
import React from 'react'
import {View,Text} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeIconWithBadge = (props) => {
  // You should pass down the badgeCount in some other ways like react context api, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};

class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        { badgeCount > 0 && (
          <View style={{
            // If you're using react-native < 0.57 overflow outside of the parent
            // will not work on Android, see https://git.io/fhLJ8
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>{badgeCount}</Text>
          </View>
        )}
      </View>
    );
  }
}

export const AppNavigators = createBottomTabNavigator({
  HomePage: {
    screen: HomePage
  },
  // LoginPage: {
  //   screen: LoginPage,
  //   navigationOptions: ({navigation}) => ({ //动态配置
  //     title: `${navigation.state.params.name}页面名`
  //   })
  // },
  // Page1: {
  //   screen: DemoPage,
  //   navigationOptions: (props) => { //动态配置
  //     const {navigation} = props;
  //     const {state, setParams} = navigation;
  //     const {params} = state;
  //     return {
  //       title: `${navigation.state.params.name}页面名`,
  //       headerRight: (
  //         <Button
  //           title={params.mode === 'edit' ? '保存' : '编辑'}
  //           onPress={() => {
  //             setParams({mode: params.mode === 'edit' ? '' : 'edit'})
  //           }}
  //         />
  //       )
  //     }
  //   }
  // },
  DemoPage: {
    screen: DemoPage,
    navigationOptions: { //在这里定义每个页面的导航数据，静态配置
      title: 'this is demoPage'
    }
  },
  Page4: {
    screen: DemoPage,
    navigationOptions: { //在这里定义每个页面的导航数据，静态配置
      title: 'this is Page4'
    }
  }
}, {
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      const {routeName} = navigation.state;
      console.log(navigation);
      let IconComponent = Ionicons;
      console.log(Ionicons);
      let iconName;
      if (routeName === 'HomePage') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        // Sometimes we want to add badges to some icons.
        // You can check the implementation below.
        IconComponent = HomeIconWithBadge;
      } else if (routeName === 'DemoPage') {
        iconName = `ios-options${focused ? '' : '-outline'}`;
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor}/>;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});