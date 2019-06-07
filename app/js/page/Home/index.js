/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AsyncStorage, Image, StyleSheet, Text, View} from 'react-native';
import {List} from '@ant-design/react-native';
import {Badge, WhiteSpace} from '@ant-design/react-native';
import {Grid} from '@ant-design/react-native';
import {Carousel} from '@ant-design/react-native';

const Item = List.Item;
const GridData = [
  {
    text: `新手指导`,
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  }, {
    text: `在线客服`,
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  }, {
    text: '邀请好友',
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  }, {
    text: '每日签到',
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  }, {
    text: '考试中心',
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  }, {
    text: '推广奖励',
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  }
]

type
Props = {};
export default class HomePage extends Component<Props> {
  static navigationOptions = {
    title: 'Home',
    headerBackTitle: '返回' //123
  }
  componentDidMount() {
    AsyncStorage.getItem('passworad',(error,result)=>{
      if (!error) {
        console.log(result);
      }
      if(!result){

      }
    })
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={[styles.container, styles.baseText]}>
        <View style={styles.top}>
          <View style={[styles.row, styles.borderBtm]}>
            <View style={styles.topBlock}>
              <Text style={styles.topTitle}>我的金币</Text>
              <Text style={[styles.textLeft, styles.topSub]}>5.02</Text>
            </View>
            <View style={styles.topBlock}>
              <Text style={styles.topTitle}>我的本金</Text>
              <Text style={[styles.textRight, styles.topSub]}>5.02</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.topBlock}>
              <Text style={styles.topTitle}>今日预估收入：0</Text>
              <Text style={styles.topTitle}>待完成总收入：0</Text>
            </View>
            <View style={styles.topBlock}>
              <Text style={styles.topTitle}>未返本金：0</Text>
              <Text style={styles.topTitle}>今日奖励：0</Text>
            </View>
          </View>
        </View>
        <WhiteSpace/>
        <View style={styles.rowView}>
          <List>
            <Item
              thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
              extra={
                <Badge text="new">

                </Badge>
              }
              arrow="horizontal"
            >
              返款规则调整通知！【重点】
            </Item>
          </List>
        </View>
        <WhiteSpace/>
        <View style={styles.rowView}>
          <Grid
            data={GridData}
            hasLine={false}
            columnNum={3}
            onPress={(_el, index) => {
              if (index === 2) {
                navigation.navigate('Invite')
              } else if (index === 4) navigation.navigate('examPage')

            }}
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
              style={[styles.containerHorizontal, {backgroundColor: 'red'}]}
            >
              <Image
                style={styles.iconImage}
                source={require('../../../assert/timg.jpeg')}
              />
            </View>
            <View
              style={[styles.containerHorizontal, {backgroundColor: 'blue'}]}
            >
              <Image
                style={styles.iconImage}
                source={require('../../../assert/2.jpeg')}
              />
            </View>
          </Carousel>
        </View>
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
    paddingRight: 20,
    paddingLeft: 20,
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
  iconImage: {
    maxWidth: '100%',
    height: 200
  }
});
