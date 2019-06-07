import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Button, InputItem, List } from '@ant-design/react-native';
import api from '../../api/ajax'

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
    };
  }
  render() {
    const {navigation} = this.props;
    const {
      tel,
      password
    } = this.state;

    return (
        <ScrollView
            style={{ flex: 1 }}
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
          <List renderHeader={'固定标签字数'}>
            <InputItem
                clear
                value={this.state.tel}
                onChange={value => {
                  this.setState({
                    tel: value,
                  });
                }}
                labelNumber={3}
                placeholder="请输入手机号"
            >
              手机号
            </InputItem>
            <InputItem
                clear
                value={password}
                onChange={value => {
                  this.setState({
                    password:value,
                  });
                }}
                type='password'
                labelNumber={3}
                placeholder="请输入密码"
            >
              密码
            </InputItem>

            <List.Item>
              <Button
                  onPress={() => {
                    navigation.navigate('Register')
                    //this.inputRef.focus();
                  }}
                  type="primary"
              >
                注册
              </Button>
            </List.Item>

            <List.Item>
              <Button
                  onPress={() => {
                    api.Post(api.url.login,{
                      tel,
                      password
                    }).then(data=>{
                      console.log(data);
                    })
                  }}
                  type="primary"
              >
                登录
              </Button>
            </List.Item>
          </List>
        </ScrollView>
    );
  }
}