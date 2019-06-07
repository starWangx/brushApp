import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, PixelRatio} from 'react-native';
import {Card, Button, InputItem,Picker, Provider} from '@ant-design/react-native';
import {List} from '@ant-design/react-native';
import ImagePicker from "react-native-image-picker";
import data from 'china-city-data'
const Item = List.Item;
const Brief = Item.Brief;

export default class BasicCardExample extends React.Component {
    state={

    }
    selectPhotoTapped() {
        const options = {
            title: '选择图片',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '选择照片',
            cameraType: 'back',
            mediaType: 'photo',
            videoQuality: 'high',
            durationLimit: 10,
            maxWidth: 300,
            maxHeight: 300,
            quality: 0.8,
            angle: 0,
            allowsEditing: false,
            noData: false,
            storageOptions: {
                skipBackup: true
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
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

                    <View style={styles.form}>
                        <Text style={styles.textTitle}>
                            第三步 聊天下单支付
                        </Text>
                        <Text style={styles.testList}>
                           点击联系客服按钮，和商家客服至少进行4个问题的互动
                        </Text>
                        <Text style={styles.testList}>
                           确定好件数、颜色尺寸将商品加入购物车
                        </Text>
                        <Text style={styles.testList}>
                            下单付款期核对购买的账号、收货信息及留言，确认无误后付款
                        </Text>
                        <Text style={styles.testList}>
                            下单后填写实付金额与正确的订单比那好
                        </Text>

                        <Text style={styles.textTitle}>上传支付截图</Text>
                        <List.Item  onPress={this.onPress}>
                            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                                <View style={[styles.avatar, styles.avatarContainer]}>
                                    { this.state.avatarSource === null ? <Text>选择照片</Text> :
                                        <Image style={styles.avatar} source={this.state.avatarSource} />
                                    }
                                </View>
                            </TouchableOpacity>

                        </List.Item>

                        <InputItem
                            clear
                            value={this.state.value}
                            onChange={value => {
                                this.setState({
                                    value,
                                });
                            }}
                            placeholder="请输入手机收到的电子凭证"
                            labelNumber={9}
                        >
                            电子凭证码
                        </InputItem>

                        <InputItem
                            clear
                            value={this.state.value}
                            onChange={value => {
                                this.setState({
                                    value,
                                });
                            }}
                            placeholder="请输入支付订单号"
                            labelNumber={9}
                        >
                            支付宝商户订单号
                        </InputItem>

                        <InputItem
                            clear
                            value={this.state.value}
                            onChange={value => {
                                this.setState({
                                    value,
                                });
                            }}
                            placeholder="请输入实际垫付金额和运费"
                            labelNumber={9}
                        >
                            实际垫付金额和运费
                        </InputItem>
                        <Text style={styles.testList}>
                            (商品总价参考金额：100元，实际付款金额相差不能超过50元；
                            领优惠券购买的，请按照实际支付金额填写）
                        </Text>




                        <Button
                            onPress={() => {
                                this.inputRef.focus();
                            }}
                            type="primary"
                        >
                            确认提交
                        </Button>

                    </View>

                    <View style={styles.form}>
                        <Text style={styles.textTitle}>
                            第四步 确认收货地址
                        </Text>
                        <Text style={[styles.testList,styles.red]}>
                            请确保购物单下单地址和平台绑定找好地址一致，若不一致，请填写或修改
                        </Text>

                        <InputItem
                            clear
                            value={this.state.value}
                            onChange={value => {
                                this.setState({
                                    value,
                                });
                            }}
                            placeholder="请输入收货人姓名"
                            labelNumber={9}
                        >
                            收货人姓名
                        </InputItem>

                        <InputItem
                            clear
                            value={this.state.value}
                            onChange={value => {
                                this.setState({
                                    value,
                                });
                            }}
                            type='phone'
                            placeholder="请输入收货人手机"
                            labelNumber={9}
                        >
                            收货人手机
                        </InputItem>
                   {/*     <Provider>
                            <Picker
                                data={[data]}
                                cols={3}
                                value={this.state.value}
                                onChange={this.onChange}
                            >
                                <List.Item arrow="horizontal" onPress={this.onPress}>
                                    省市选择
                                </List.Item>
                            </Picker>
                        </Provider>


*/}
                        <InputItem
                            clear
                            value={this.state.value}
                            onChange={value => {
                                this.setState({
                                    value,
                                });
                            }}
                            placeholder="输入省市区"
                            labelNumber={9}
                        >
                            输入省市区
                        </InputItem>
                        <InputItem
                            clear
                            value={this.state.value}
                            onChange={value => {
                                this.setState({
                                    value,
                                });
                            }}
                            placeholder="输入街道地址"
                            labelNumber={9}
                        >
                            街道地址
                        </InputItem>
                        <Text style={styles.testList}>
                            (商品总价参考金额：100元，实际付款金额相差不能超过50元；
                            领优惠券购买的，请按照实际支付金额填写）
                        </Text>




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
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 100,
        height: 100
    }

});
