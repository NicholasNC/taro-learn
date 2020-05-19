import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/example/example',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      "color": "#7f8389",
      "selectedColor": "#6ca5ff",
      "backgroundColor": "#fff",
      "list": [
        {
          "pagePath": "pages/example/example",
          "text": "example",
          "iconPath": "assets/tabbar/matrix.png",
          "selectedIconPath": "assets/tabbar/matrix-sel.png"
        },
        {
          "pagePath": "pages/index/index",
          "text": "index",
          "iconPath": "assets/tabbar/query.png",
          "selectedIconPath": "assets/tabbar/query-sel.png"
        },
        
      ]
    }
  }

  async componentWillMount() {
    console.log('app.jsx -- componentWillMount');

    const testJson = await Taro.request({
      url: 'https://image.talkmoney.cn/test-v1.0.202005190120.json'
    });

    console.log('app.jsx -- componentWillMount -- testJson:', testJson); // 这里会 await Taro.request 执行完再执行
  }

  async componentDidMount () {
    console.log('app.jsx -- componentDidMount');

    const testJson = await Taro.request({
      url: 'https://image.talkmoney.cn/test-v1.0.202005190120.json'
    });

    console.log('app.jsx -- componentDidMount -- testJson:', testJson); // 这里会 await Taro.request 执行完再执行
  }

  async componentDidShow () {
    console.log('app.jsx -- componentDidShow');

    const testJson = await Taro.request({
      url: 'https://image.talkmoney.cn/test-v1.0.202005190120.json'
    });

    console.log('app.jsx -- componentDidShow -- testJson:', testJson); // 这里会 await Taro.request 执行完再执行
  }

  componentDidHide () {
    console.log('app.jsx -- componentDidHide');
  }

  componentDidCatchError (error) {
    console.log('app.jsx -- componentDidCatchError', error);
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    console.log('app.jsx -- render');
    
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
