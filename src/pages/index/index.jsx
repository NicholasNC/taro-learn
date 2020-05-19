import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    txt: '我在 constructor 中定义了 txt 的值'
  }

  componentWillMount() {
    console.log('index -- componentWillMount');

    this.setState({
      txt: '我在 componentWillMount 中 **同步** 修改了 txt 的值'
    });

    // 模拟异步执行（放在请求的回调函数中）的情况
    // setTimeout(() => {
    //   this.setState({
    //     txt: '我在 componentWillMount 中 **异步** 修改了 txt 的值'
    //   });
    // }, 2000);
  }

  componentDidMount() {
    console.log('index -- componentDidMount');
  }

  componentWillReceiveProps (nextProps) {
    console.log('index -- componentWillReceiveProps', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('index -- shouldComponentUpdate');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('index -- componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('index -- componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('index -- componentWillUnmount');
  }

  componentDidShow() {
    console.log('index -- componentDidShow');
  }

  componentDidHide() {
    console.log('index -- componentDidHide');
  }

  render () {
    console.log('index -- render');
    const {
      txt
    } = this.state;

    console.log('txt', txt);

    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>

        <View>txt：{txt}</View>
      </View>
    )
  }
}

export default Index
