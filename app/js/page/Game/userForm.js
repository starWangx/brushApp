import React from 'react';
import { ScrollView } from 'react-native';
import { InputItem, List,Radio,DatePicker,Provider,Picker} from '@ant-design/react-native';
import ImagePicker from 'react-native-image-picker';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    TouchableOpacity,
    Image,

} from 'react-native';


const RadioItem = Radio.RadioItem;

export default class BasicInputItemExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            labelnum1: '',
            labelnum2: '',
            labelnum3: '',
            text: '',
            bankCard: '',
            phone: '',
            password: '',
            number: '',
            labelObj:[{
                label:'服装鞋包',
            },{
                label:'手机数码',
            },{
                label:'家用电器',
            },{
                label:'美妆饰品',
            },{
                label:'母婴用品',
            },{
                label:'家居建材',
            },{
                label:'百货食品',
            },{
                label:'运动户外',
            },{
                label:'文化娱乐',
            },{
                label:'生活服务',
            },{
                label:'汽摩配件',
            },{
                label:'游戏话费',
            },],
        };
    }
    //选择图片
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
            <ScrollView
                style={{ flex: 1 }}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <List renderHeader={'我的账号'}>
                    <InputItem
                        clear
                        value={this.state.value}
                        onChange={value => {
                            this.setState({
                                value,
                            });
                        }}
                        placeholder="有标签"
                    >
                        淘宝买家
                    </InputItem>

                    <List.Item>
                        买号性别
                        <RadioItem
                            checked={this.state.part2Value === 1}
                            onChange={event => {
                                if (event.target.checked) {
                                    this.setState({ part2Value: 1 });
                                }
                            }}
                        >
                            男
                        </RadioItem>
                        <RadioItem
                            checked={this.state.part2Value === 2}
                            onChange={event => {
                                if (event.target.checked) {
                                    this.setState({ part2Value: 2 });
                                }
                            }}
                        >
                           女
                        </RadioItem>
                    </List.Item>

                    <Provider>
                        <DatePicker
                            value={this.state.birthDay}
                            mode="date"
                            minDate={new Date(1980, 1, 1)}
                            maxDate={new Date(2026, 11, 3)}
                            onChange={(data)=>{
                                console.log(data);
                                this.setState({birthDay:data})
                            }}
                            format="YYYY-MM-DD"
                        >
                            <List.Item arrow="horizontal">请选择生日</List.Item>
                        </DatePicker>
                    </Provider>

                    <Provider>
                        <Picker
                            data={[{
                                value:'1',
                                label:'❤'
                            },{
                                value:'2',
                                label:'❤❤'
                            },{
                                value:'3',
                                label:'❤❤❤'
                            },{
                                value:'4',
                                label:'❤❤❤❤'
                            },{
                                value:'5',
                                label:'❤❤❤❤❤'
                            }]}
                            cols={1}
                            value={this.state.level}
                            onChange={(val)=>{
                                this.setState({level:val[0]})
                                console.log(val);
                            }}
                        >
                            <List.Item arrow="horizontal" onPress={this.onPress}>
                                信用等级
                            </List.Item>
                        </Picker>
                    </Provider>

                    <Provider>
                        <Picker
                            data={this.state.labelObj}
                            cols={3}
                            value={this.state.level}
                            onChange={(val)=>{
                                this.setState({level:val[0]})
                                console.log(val);
                            }}
                        >
                            <List.Item arrow="horizontal" onPress={this.onPress}>
                                购物标签
                            </List.Item>
                        </Picker>
                    </Provider>

                    <InputItem
                        clear
                        value={this.state.value}
                        onChange={value => {
                            this.setState({
                                value,
                            });
                        }}
                        placeholder="请输入任意一个订单编号"
                    >
                        订单编号
                    </InputItem>

                    <InputItem
                        clear
                        value={this.state.value}
                        onChange={value => {
                            this.setState({
                                value,
                            });
                        }}
                        placeholder="收货人姓名"
                    >
                        收货人
                    </InputItem>

                    <InputItem
                        clear
                        value={this.state.value}
                        onChange={value => {
                            this.setState({
                                value,
                            });
                        }}
                        type="phone"
                        labelNumber={5}
                        placeholder="收货人电话"
                    >
                        收货人电话
                    </InputItem>



                    <InputItem
                        clear
                        value={this.state.value}
                        onChange={value => {
                            this.setState({
                                value,
                            });
                        }}
                        type="phone"
                        placeholder="街道地址"
                    >
                        街道地址
                    </InputItem>

                    <List.Item  onPress={this.onPress}>
                        信誉等级 ：
                        <List.Item arrow="horizontal" onPress={this.onPress}>
                            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                                <View style={[styles.avatar, styles.avatarContainer]}>
                                    { this.state.avatarSource === null ? <Text>选择照片</Text> :
                                        <Image style={styles.avatar} source={this.state.avatarSource} />
                                    }
                                </View>
                            </TouchableOpacity>

                        </List.Item>

                    </List.Item>
                    <List.Item  onPress={this.onPress}>
                        淘宝实名 ：
                        <List.Item arrow="horizontal" onPress={this.onPress}>
                            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                                <View style={[styles.avatar, styles.avatarContainer]}>
                                    { this.state.avatarSource === null ? <Text>选择照片</Text> :
                                        <Image style={styles.avatar} source={this.state.avatarSource} />
                                    }
                                </View>
                            </TouchableOpacity>

                        </List.Item>

                    </List.Item>

                    <List.Item  onPress={this.onPress}>
                        花呗截图 ：
                        <List.Item arrow="horizontal" onPress={this.onPress}>
                            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                                <View style={[styles.avatar, styles.avatarContainer]}>
                                    { this.state.avatarSource === null ? <Text>选择照片</Text> :
                                        <Image style={styles.avatar} source={this.state.avatarSource} />
                                    }
                                </View>
                            </TouchableOpacity>

                        </List.Item>

                    </List.Item>



                </List>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
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
        borderRadius: 50,
        width: 100,
        height: 100
    }

});
