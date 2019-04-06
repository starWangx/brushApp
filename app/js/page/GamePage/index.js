/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {List} from '@ant-design/react-native';
import {Badge, WhiteSpace} from '@ant-design/react-native';
import {Grid} from '@ant-design/react-native';
import { Carousel } from '@ant-design/react-native';
import { Card,  WingBlank } from '@ant-design/react-native';

const Item = List.Item;
const GridData = [
  {
    text: `新手指导`,
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  }, {
    text: `在线客服`,
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  }
]

type Props = {};
export default class GamePage extends Component<Props> {
  static navigationOptions = {
    title: '游戏大厅',
    headerBackTitle: '返回哈哈' //123
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={[styles.container, styles.baseText]}>

        <View style={[styles.rowView,styles.top]}>
          <Card full>

            <Card.Body>
              <View style={styles.rowView}>
                <Grid
                  data={GridData}
                  hasLine={false}
                  columnNum={3}
                  onPress={(_el, index) => alert(index)}
                />
              </View>
            </Card.Body>
          </Card>
        </View>
        <WhiteSpace/>
         <View style={styles.rowView}>
          <Grid
            data={GridData}
            hasLine={false}
            columnNum={3}
            onPress={(_el, index) => alert(index)}
          />
        </View>

        <View style={styles.rowView}>
          <Carousel
            style={styles.wrapper}
            selectedIndex={2}
            autoplay
            infinite
            afterChange={this.onHorizontalSelectedIndexChange}
          >
            <View
              style={[styles.containerHorizontal, { backgroundColor: 'red' }]}
            >
              <Text>Carousel 1</Text>
            </View>
            <View
              style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}
            >
              <Text>Carousel 2</Text>
            </View>
          </Carousel>
        </View>

        {/*<Button
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
        <Button
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
  baseText: {
    fontFamily: 'Cochin',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f0eff6',
  },
  borderBtm: {
    borderBottomWidth: 3,
    borderColor: '#7e50f7'
  },
  top: {
    width: '100%',
    flexDirection: 'column',
    //height:200,
    paddingTop: 40,
    backgroundColor: '#6f30dd',
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: 10
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 10,
    marginTop: 10,
    justifyContent: 'space-between'
  },
  topSub: {
    marginTop: 10,
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white'
  },
  topTitle: {
    fontSize: 16,
    color: 'white',
    marginTop: 10
  },
  textLeft: {
    textAlign: "left",
  },
  textRight: {
    textAlign: "right",
  },
  topBlock: {},
  rowView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
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
