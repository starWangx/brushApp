/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {List,Button} from '@ant-design/react-native';
import { Tabs } from '@ant-design/react-native';
import api from '../../api/ajax'

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

type
Props = {};

export default class GamePage extends Component<Props> {
    static navigationOptions = {
        title: '游戏大厅',
        headerBackTitle: '返回' //123
    }

    constructor(props){
        super(props);
        this.state={
            taskList:[],
            buyerList:[]
        }
    }

    componentDidMount() {
       this.fetchData(1)
    }

    fetchData(platform){
        api.Post(api.url.task_list,{
            wrap_type:1,
            type:6
        }).then(data=>{
            console.log(data);
            this.setState({
                taskList:data.data
            })
        })

        api.Post(api.url.getBuyerList,{
            id:20,
        }).then(data=>{
            console.log(data);
            data.data && data.data.forEach((item,index)=>{
                if(index === 0){
                    item.selected = true
                    this.setState({
                        buyerId:item.id
                    })
                }else{
                    item.selected = false
                }
            })

            this.setState({
                buyerList:data.data
            })
        })
    }

    tabChange(tabData,index){
        this.setState({
            platform:index+1
        },()=>{
            this.fetchData(this.state.platform)
        })
    }

    buyerClick(i){
        let {buyerList} = this.state;
        buyerList && buyerList.forEach((item,index)=>{
            if(index === i){
                item.selected = true
                this.setState({
                    buyerId:item.id
                })
            }else{
                item.selected = false
            }
        })
        console.log(buyerList);
        this.setState({
            buyerList
        })
    }


    render() {
        const style = {
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            height: 150,
            width:'100%',
            backgroundColor: '#fff',
        };

        const {navigation} = this.props;
        const tabs = [
            { title: '淘宝/天猫' },
            { title: '京东' },
            { title: '拼多多' },
        ];
        const {taskList,buyerList} = this.state;
        const taskListView =  <View style={style}>
            {taskList && taskList.map((task,t)=>(
                <View style={styles.box} key={t}>
                    <View><Text>{task.serial}</Text></View>
                    <View><Text style={styles.yellow}>{task.charge}</Text></View>
                    <View><Text style={styles.gray}>预计游戏收入</Text></View>
                    <TouchableOpacity style={styles.btn}  onPress={()=>{
                        api.Post(api.url.orderReceiving,{
                            serial:task.serial,
                            buyer:this.state.buyerId,
                            id:20
                        }).then(data=>{
                            alert(data)
                            this.fetchData()
                        })
                    }}>
                        <Text style={styles.white}>
                            马上领取
                        </Text>
                    </TouchableOpacity>
                </View>
            ))}

        </View>;
        return (
            <View style={{flex:1}}>
                <Tabs
                    tabs={tabs}
                    onChange={this.tabChange.bind(this)}
                >

                    <View style={style}>
                            <View style={styles.userAdd}>
                                <ScrollView horizontal={true}>
                                        {
                                            buyerList.map((buyer,i)=>(
                                                <View style={styles.buyerList}>
                                                    <Text style={buyer.selected?[styles.gray,styles.active,styles.textAlign]:[styles.textAlign,styles.gray]}
                                                          key={i}
                                                          onPress={()=>this.buyerClick(i)}
                                                    >
                                                        {buyer.name}{buyer.selected}
                                                    </Text>
                                                </View>
                                            ))
                                        }


                                </ScrollView>
                                <View>
                                    <Button
                                        type='ghost'
                                        size='small'
                                        onPress={()=>{
                                            navigation.navigate('userForm',{name:'动态的'})
                                        }}>
                                        添加
                                    </Button>
                                </View>
                            </View>

                       {taskListView}
                    </View>

                    <View style={style}>
                       {taskListView}
                    </View>
                    <View style={style}>
                        {taskListView}
                    </View>
                </Tabs>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box:{
        paddingTop:20,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:20,
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
        borderBottomWidth:1,
        borderBottomColor:'#a9a8ac',

        position: 'relative'
    },
    white:{
      color:'white'
    },
    yellow:{
        color: '#e7b663',
        fontSize:30,
        marginTop:10,
        fontWeight: "bold"
    },
    btn:{
        height:35,
        width:80,
        borderRadius:2,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        right:20,
        top:40,
        backgroundColor:'#3385f6',
    },
    gray:{
        color:'#7c7b7e',

    },
    textAlign:{
        textAlign: 'center'
    },
    userAdd:{
        display:'flex',
        width:'100%',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        height:60,
        paddingLeft: 20,
        paddingRight: 20,
        color:'#7c7b7e'
    },
    buyerList:{
        marginLeft: 5,
        width:140,
        overflow:'hidden',
    },
    active:{
        borderBottomColor: 'red',
        borderWidth: 1,

    }
});
