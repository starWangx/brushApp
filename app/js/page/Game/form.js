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
import { Card,  Button } from '@ant-design/react-native';


const Item = List.Item;
const GridData1 = [
    {
        text: `常规游戏`,
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    }, {
        text: `活动有意`,
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    },
]

const GridData2 = [
    {
        text: `幼稚游戏`,
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    }, {
        text: `特别游戏`,
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    },
]

type Props = {};
export default class GamePage extends Component<Props> {
    static navigationOptions = {
        title: '游戏大厅',
        headerBackTitle: '返回' //123
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={[styles.container, styles.baseText]}>

                <View style={[styles.rowView,styles.top]}>
                    <Card full>
                        <Card.Header
                            title={<View style={{height:30,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                <View style={{width:3,height:15,backgroundColor:'#7e00e5',marginRight:5}}/>
                                <Text>人气游戏</Text>
                            </View>}
                            thumbStyle={{ width: 30, height: 30, backgroundColor:'red' }}
                            //thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                            //extra="this is extra"
                        />
                        <Card.Body>
                            <View style={styles.rowView}>
                                <Grid
                                    data={GridData1}
                                    hasLine={false}
                                    columnNum={3}
                                    onPress={(_el, index) => {
                                        if (index === 0) {
                                            navigation.navigate('GameList')
                                        }
                                    }}
                                />
                            </View>
                        </Card.Body>
                    </Card>
                </View>
                <WhiteSpace/>
                <View style={[styles.rowView]}>
                    <Card full>
                        <Card.Header
                            title={<View style={{height:30,display:'flex',flexDirection:'row',alignItems:'center'}}>
                                <View style={{width:3,height:15,backgroundColor:'#7e00e5',marginRight:5}}/>
                                <Text>高佣金游戏</Text>
                            </View>}
                            thumbStyle={{ width: 30, height: 30, backgroundColor:'red' }}
                            //thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                            //extra="this is extra"
                        />
                        <Card.Body>
                            <View style={styles.rowView}>
                                <Grid
                                    data={GridData2}
                                    hasLine={false}
                                    columnNum={3}
                                    renderItem={(el,index)=>{
                                        console.log(el);
                                        return <Badge text={109} overflowCount={100}>
                                            <View
                                                style={{
                                                    width: 52,
                                                    height: 52,
                                                    backgroundColor: 'rgba(255, 140, 101, 0.15)',
                                                }}
                                            />
                                        </Badge>

                                    }}
                                    onPress={(_el, index) => alert(index)}
                                />
                            </View>
                        </Card.Body>
                    </Card>
                </View>

                <View style={[styles.rowView,{
                    alignItems:'center'
                }]}>
                    <Button type="primary" size='large' style={{width:110,marginRight:'auto',marginLeft:'auto',marginTop:30}} >
                        自动接单
                    </Button>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <Text style={{color:'#b8b7bc'}}>
                        自动接单已开放
                    </Text>
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
