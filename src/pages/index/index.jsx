import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import EasyCom from '../../components/EasyCom/EasyCom'

import './index.less'

export default class Index extends Component {
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
        <Text>Hello world!</Text>
        <EasyCom></EasyCom>
      </View>
    )
  }
}
