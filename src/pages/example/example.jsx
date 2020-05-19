import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import EasyCom from '../../components/EasyCom/EasyCom'

import './example.less'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() {
    console.log('example -- componentWillMount');
  }

  componentDidMount() {
    console.log('example -- componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('example -- shouldComponentUpdate');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('example -- componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('example -- componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('example -- componentWillUnmount');
  }

  componentDidShow() {
    console.log('example -- componentDidShow');
  }

  componentDidHide() {
    console.log('example -- componentDidHide');
  }

  render () {
    console.log('example -- render');

    return (
      <View className='example'>
        <Text>Hello world!---example</Text>
        <EasyCom></EasyCom>
        <Navigator url="/pages/index/index" >to index</Navigator>
      </View>
    )
  }
}
