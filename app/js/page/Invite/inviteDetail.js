/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, StyleSheet, Text, View,Button} from 'react-native';
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
    title: '邀请好友',
    headerTitle: '邀请好友1',
    headerRight: (
      <Button
        onPress={() => {
          navigation.navigate('Page1',{name:'动态的'})
        }}
        title="邀请明细"
        color="blue"
      />
    )
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={[styles.container, styles.baseText]}>
        <View style={styles.top}>
          <View style={[styles.row, styles.borderBtm]}>
            <View style={styles.imageTextBlock}>
              <View><Text style={styles.boldFont}>累计邀请人数</Text></View>
              <Text style={{color:'#646464'}}>6 </Text>
            </View>
            <View style={styles.imageTextBlock}>
              <View><Text style={styles.boldFont}>累计邀请奖励</Text></View>
              <Text style={{color:'#646464'}}>0</Text>
            </View>
          </View>

        </View>

        <WhiteSpace/>
        <View style={styles.rowView}>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableRowItem}><Text>人气云Id</Text></View>
              <View style={styles.tableRowItem}><Text>类型</Text></View>
              <View style={styles.tableRowItem}><Text>注册日期</Text></View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableRowItem}><Text>2888</Text></View>
              <View style={styles.tableRowItem}><Text>买家</Text></View>
              <View style={styles.tableRowItem}><Text>2019/02/03</Text></View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableRowItem}><Text>2888</Text></View>
              <View style={styles.tableRowItem}><Text>买家</Text></View>
              <View style={styles.tableRowItem}><Text>2019/02/03</Text></View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableRowItem}><Text>2888</Text></View>
              <View style={styles.tableRowItem}><Text>买家</Text></View>
              <View style={styles.tableRowItem}><Text>2019/02/03</Text></View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableRowItem}><Text>2888</Text></View>
              <View style={styles.tableRowItem}><Text>买家</Text></View>
              <View style={styles.tableRowItem}><Text>2019/02/03</Text></View>
            </View>



          </View>
        </View>
        <WhiteSpace/>


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
    borderBottomWidth: 1,
    borderColor: '#cccccc'
  },
  top: {
    width: '100%',
    flexDirection: 'column',
    //height:200,
    paddingTop: 10,
    backgroundColor: 'white',
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
    height:70,
    justifyContent:'space-between',
    display:'flex',
    alignItems:'center',
    paddingBottom:10
  },
  boldFont:{
    fontWeight:'bold'
  },
  table:{
    backgroundColor:'white'
  },
  tableRow:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingRight:20,
    paddingLeft:20,
    height:40,
    alignItems:'center'
  },
  tableRowItem:{
    flex:0,
    width:'33%',
    height:'100%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    color:'#f0eff6'
  }
});
