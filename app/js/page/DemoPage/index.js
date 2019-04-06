
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';


type Props = {};
export default class DemoPage extends Component<Props> {


  render() {
    const {navigation} = this.props;
    const {state,setParams}=navigation;
    const {params} = state;
    const showText =params && params.mode ==='edit'?'正在编辑':'编辑完成'
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>DemoPage</Text>
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
