
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Button,StyleSheet, Text, View} from 'react-native';


type Props = {};
export default class HomePage extends Component<Props> {
  static navigationOptions = {
    title:'Home',
    headerBackTitle:'返回哈哈' //123
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>HomePage</Text>
        <Button
          title={'跳转到页面4'}
          onPress={()=>{
            navigation.navigate('Page4')
          }}
        />
        <Button
          title={'page1'}
          onPress={()=>{
            navigation.navigate('Page1',{name:'动态的'})
          }}
        />
        <Text>13</Text>
       {/* <Button
          title={'page3'}
          onPress={()=>{
            navigation.navigate('Page1',{name:'动态的'})
          }}
        />*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
