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

  componentWillMount() {
    console.log('index -- componentWillMount');
  }

  componentDidMount() {
    console.log('index -- componentDidMount');
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

    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

export default Index
