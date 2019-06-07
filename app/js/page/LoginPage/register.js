import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Button, InputItem, List } from '@ant-design/react-native';
import api from '../../api/ajax'

export default class BasicInputItemExample extends React.Component {
    state={

    };
    render() {
        const {
            tel,
            name,
            password,
            email,
            qq,
            wx,
        } = this.state;
        const {
            navigation
        } = this.props;

        return (
            <ScrollView
                style={{ flex: 1 }}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <List renderHeader={'注册邮箱'}>
                    <InputItem
                        clear
                        value={this.state.tel}
                        type='phone'
                        onChange={value => {
                            this.setState({
                                tel: value,
                            });
                        }}
                        labelNumber={5}
                        placeholder="请输入手机号(必填)"
                    >
                        手机号
                    </InputItem>
                    <InputItem
                        clear
                        value={this.state.name}
                        onChange={value => {
                            this.setState({
                                name: value,
                            });
                        }}
                        labelNumber={5}
                        placeholder="请输入用户名(必填)"
                    >
                        用户名
                    </InputItem>
                    <InputItem
                        clear
                        value={this.state.password}
                        onChange={value => {
                            this.setState({
                                password: value,
                            });
                        }}
                        labelNumber={5}
                        type='password'
                        placeholder="请输入密码(必填)"
                    >
                        密码
                    </InputItem>
                    <InputItem
                        clear
                        value={this.state.email}
                        onChange={value => {
                            this.setState({
                                email: value,
                            });
                        }}
                        labelNumber={5}
                        placeholder="请输入用户邮箱"
                    >
                        用户邮箱
                    </InputItem>
                    <InputItem
                        clear
                        value={this.state.qq}
                        onChange={value => {
                            this.setState({
                                qq: value,
                            });
                        }}
                        labelNumber={5}
                        placeholder="请输入qq号"
                    >
                        qq
                    </InputItem>
                    <InputItem
                        clear
                        value={this.state.wx}
                        onChange={value => {
                            this.setState({
                                wx: value,
                            });
                        }}
                        labelNumber={5}
                        placeholder="请输入微信号"
                    >
                        微信号
                    </InputItem>

                    <List.Item>
                        <Button
                            onPress={() => {
                                api.Post(api.url.register,{
                                    tel,
                                    name,
                                    email,
                                    password,
                                    qq,
                                    wx,
                                }).then(data=>{
                                    if(data){
                                        alert(data)
                                    }else{
                                        alert(2)
                                    }
                                    console.log(data);
                                })
                                //this.inputRef.focus();
                            }}
                            type="primary"
                        >
                            确定
                        </Button>
                    </List.Item>

                </List>
            </ScrollView>
        );
    }
}