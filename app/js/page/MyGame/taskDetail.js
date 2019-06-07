import React from 'react';
import {StyleSheet, Text, View,ScrollView,TouchableOpacity} from 'react-native';
import {Card, Button, InputItem} from '@ant-design/react-native';
import {List} from '@ant-design/react-native';

const Item = List.Item;
const Brief = Item.Brief;

export default class BasicCardExample extends React.Component {
    state={

    }
    render() {
        return (
            <ScrollView>
                <View style={{paddingTop: 30}}>
                    <Card full>
                        <Card.Header
                            title="目标商品"
                            thumbStyle={{width: 30, height: 30}}
                            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                            extra="有问题请联系客服"
                        />
                        <Card.Body>
                            <View style={styles.cardContainer}>
                                {/*<View style={styles.title}>*/}
                                {/*    <Text>目标商品</Text>*/}
                                {/*    <Text>有问题请联系客服平台</Text>*/}
                                {/*</View>*/}
                                <View style={styles.cardBody}>
                                    <View style={styles.cardLeft}>

                                    </View>
                                    <View style={styles.cardRight}>
                                        <Text>商品名称</Text>
                                        <Text>搜索展示价格:222</Text>
                                        <View style={styles.btn}>
                                            <Text style={styles.white} onPress={this.press}>
                                                待操作1
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Card.Body>
                    </Card>


                    <View style={styles.greyBar}>
                        <Text style={styles.gray}>任务要点</Text>
                        <Text style={styles.gray}>倒计时</Text>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.row}>
                            <Text style={styles.gray}>接受账号</Text>
                            <Text style={styles.red}>怪癖女</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.gray}>订单ID</Text>
                            <Text style={styles.red}>怪癖女</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.gray}>任务类型</Text>
                            <Text style={styles.red}>怪癖女</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.gray}>搜索关键字</Text>
                            <Text style={styles.blue}>关键字</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.gray}>是否允许筛选</Text>
                            <Text style={styles.blue}>不允许筛选</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.gray}>排序方式</Text>
                            <Text style={styles.blue}>综合排序</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.gray}>收货人数</Text>
                            <Text style={styles.blue}>190</Text>
                        </View>
                    </View>


                    <View style={styles.greyBar}>
                        <Text style={styles.gray}>商家额外要求</Text>
                    </View>
                    <View style={styles.form}>
                        <View style={styles.row}>
                            <Text style={styles.blue}>无额外要求</Text>
                        </View>
                    </View>

                    <View style={styles.greyBar}>
                        <Text style={styles.gray}>注意事项</Text>
                    </View>
                    <View style={styles.form}>
                        <View style={styles.row}>
                            <Text style={styles.blue}>无额外要求</Text>
                        </View>
                    </View>


                    <View style={styles.greyBar}>
                        <Text style={styles.gray}>任务步骤</Text>
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.textTitle}>
                            第一步 进店关键词 点击查看示例
                        </Text>
                        <Text style={styles.testList}>
                            手动输入搜索关键字，关键词不可自行修改
                        </Text>
                        <Text style={styles.testList}>
                            按照要求筛选搜索条件，请勿随意增加搜索条件
                        </Text>
                        <Text style={styles.testList}>
                            找到目标商品浏览5分钟，复制并分享链接
                        </Text>

                        <InputItem
                            clear
                            value={this.state.value}
                            onChange={value => {
                                this.setState({
                                    value,
                                });
                            }}
                            placeholder="粘贴进店关键字链接"
                        >
                            关键字
                        </InputItem>
                    </View>

                    <View style={styles.form}>
                        <Text style={styles.textTitle}>
                            第二步 浏览店铺
                        </Text>
                        <Text style={styles.testList}>
                           根据主图、价格、找到目标商品，点击进入店铺
                        </Text>
                        <Text style={styles.testList}>
                            浏览店铺内衣2个上商品，至少一分钟，复制上传分享链接
                        </Text>
                        <Text style={styles.testList}>
                            回到目标商品，从上到下浏览至少3分钟，在目标商品详情中找到以下答案
                        </Text>
                        <Text style={styles.textTitle}>请先核对店铺名称</Text>
                        <List.Item>
                            <InputItem
                                clear
                                value={this.state.value}
                                onChange={value => {
                                    this.setState({
                                        value,
                                    });
                                }}
                                placeholder="请先核对店铺名称"
                            >

                            </InputItem>

                        </List.Item>

                        <Text style={styles.textTitle}>店铺商品1</Text>
                        <InputItem
                            clear
                            value={this.state.value}
                            onChange={value => {
                                this.setState({
                                    value,
                                });
                            }}
                            placeholder="粘贴店铺商品链接1"
                        >

                        </InputItem>

                        <Text style={styles.textTitle}>答案提示字</Text>
                        <Text style={styles.testList}>
                           答案提示：————
                        </Text>
                        <InputItem
                            clear
                            value={this.state.value}
                            onChange={value => {
                                this.setState({
                                    value,
                                });
                            }}
                            placeholder="请输入答案"
                        >

                        </InputItem>



                        <Button
                            onPress={() => {
                                this.inputRef.focus();
                            }}
                            type="primary"
                        >
                            确认提交
                        </Button>

                    </View>
                </View>
            </ScrollView>

        );
    }
}
const styles = StyleSheet.create({
    cardContainer: {
        paddingLeft: 20,
        paddingRight: 20,

    },
    testList:{
        color:'#515151',
        marginTop: 5,
        fontSize:14
    },
    textTitle:{
        paddingTop:10,
        paddingBottom:10,
        color:'#3385f6',
        fontSize: 18
    },
    title: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:20

    },
    cardBody: {
        display: 'flex',
        flexDirection: 'row',


    },
    cardLeft: {
        width: 100,
        height: 100,
    },
    cardRight:{
        display:'flex',
        alignItems:'flex-start',
        height:100,
        justifyContent: 'space-between',

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
        backgroundColor: '#3385f6',
    },
    gray: {
        color:'#515151',
    },
    blue:{
        color:'#3385f6'
    },
    red:{
        color:'red'
    },
    greyBar:{
        backgroundColor: '#e9e9e9',
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    form:{
        paddingLeft: 20,
        paddingRight: 20,
    },
    row:{
        height:50,
        borderBottomColor:'#c2c2c2',
        borderBottomWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    }
});
