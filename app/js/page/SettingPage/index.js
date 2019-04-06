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
const Item = List.Item;
const Brief = Item.Brief;
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

type Props = {};
export default class SettingPage extends Component<Props> {
  static navigationOptions = {
    title: 'Home',
    headerBackTitle: '返回哈哈' //123
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={[styles.container, styles.baseText]}>
        <View style={styles.top}>
          <View style={[styles.row, styles.borderBtm]}>
            <View style={styles.imageTextBlock}>
              <View><Text>图片</Text></View>
              <Text style={{color:'white'}}>123</Text>
            </View>
            <View style={styles.imageTextBlock}>
              <View><Text>图片</Text></View>
              <Text style={{color:'white'}}>123</Text>
            </View>
          </View>

        </View>
        <View style={styles.rowView}>
          <List>
            <Item
              thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
              arrow="horizontal"

            >
              153167691823<Brief>人气云ID:46160</Brief>
            </Item>
          </List>
        </View>
        <WhiteSpace/>
        <View style={styles.rowView}>
          <Item  arrow="horizontal" onPress={() => {}}>
            实名认证
          </Item>
          <Item  arrow="horizontal" onPress={() => {}}>
            我的银行卡
          </Item>
          <Item  arrow="horizontal" onPress={() => {}}>
            买号管理
          </Item>
        </View>
        <WhiteSpace/>

        <View style={styles.rowView}>
          <Item  arrow="horizontal" onPress={() => {}}>
            新消息通知
          </Item>
        </View>
        <WhiteSpace/>

        <View style={styles.rowView}>
          <Item extra="1.3.0" arrow="horizontal" onPress={() => {}}>
            关于人气云
          </Item>
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
    paddingRight: 20,
    paddingLeft: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 10,
    marginTop: 10,
    justifyContent: 'center'
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
  imageTextBlock:{
    width:'50%',
    display:'flex',
    alignItems:'center'
  }
});
