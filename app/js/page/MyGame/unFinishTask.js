/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {Tabs} from '@ant-design/react-native';
import api from '../../api/ajax'

export default class GamePage extends Component<Props> {
    static navigationOptions = {
        title: '游戏大厅',
        headerBackTitle: '返回' //123
    }

    constructor(props) {
        super(props);
        this.state = {
            taskList: []
        }
    }

    componentDidMount() {
        //this.fetchData(1)
    }

    fetchData(platform) {
        api.Post(api.url.task_list, {
            platform
        }).then(data => {
            console.log(data);
            this.setState({
                taskList: data.data
            })
        })
    }

    tabChange(tabData, index,) {
        this.setState({
            platform: index + 1
        }, () => {
            this.fetchData(this.state.platform)
        })
    }

    press = () => {
        this.props.navigation.navigate('taskDetail')
    }

    pressHigh = () => {
        this.props.navigation.navigate('highLevelTaskDetail')
    }


    render() {
        const style = {
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            height: 130,
            width: '100%',
            backgroundColor: '#fff',
            marginTop:10
        };

        const tabs = [
            {title: '待操作'},
            {title: '待确认'},
        ];
        const taskListView =

            <View style={style}>

                <View style={styles.box}>
                    <View style={styles.boxTop}>
                        <Text>怪癖女</Text>
                        <Text>2019/5/27</Text>
                    </View>
                    <View><Text style={styles.yellow}>￥0.53</Text></View>
                    <View><Text style={styles.gray}>淘宝</Text></View>
                    <View style={styles.btn}>
                        <Text style={styles.white} onPress={this.press}>
                            待操作1
                        </Text>
                    </View>
                </View>

            </View>;
        const highTaskListView =

            <View style={style}>

                <View style={styles.box}>
                    <View style={styles.boxTop}>
                        <Text>高佣金</Text>
                        <Text>2019/5/27</Text>
                    </View>
                    <View><Text style={styles.yellow}>￥0.53</Text></View>
                    <View><Text style={styles.gray}>淘宝</Text></View>
                    <View style={styles.btn}>
                        <Text style={styles.white} onPress={this.pressHigh}>
                            待操作1
                        </Text>
                    </View>
                </View>

            </View>;


        return (
            <View style={{flex: 1, backgroundColor: '#f3f3f3'}}>
                <Tabs
                    tabs={tabs}
                    onChange={this.tabChange.bind(this)}
                >
                    <View style={style}>
                        {taskListView}
                        {highTaskListView}
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
    box: {
        paddingTop: 20,
        paddingBottom: 20,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
    },
    boxTop: {
        display: 'flex',
        flexDirection: 'row',

        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        paddingBottom: 10
    },
    white: {
        color: 'white'
    },
    yellow: {
        color: '#4787EE',
        fontSize: 30,
        marginTop: 10,
        fontWeight: "bold"
    },
    btn: {
        height: 35,
        width: 80,
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        top: 70,
        backgroundColor: '#3385f6',
    },
    gray: {
        color: '#3385f6',
        marginTop: 10
    },
    userAdd: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        paddingLeft: 20,
        paddingRight: 20,
    }
});
