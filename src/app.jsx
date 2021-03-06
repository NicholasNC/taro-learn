import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

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
          "pagePath": "pages/index/index",
          "text": "流程指导",
          "iconPath": "assets/tabbar/query.png",
          "selectedIconPath": "assets/tabbar/query-sel.png"
        },
        {
          "pagePath": "pages/example/example",
          "text": "更多",
          "iconPath": "assets/tabbar/matrix.png",
          "selectedIconPath": "assets/tabbar/matrix-sel.png"
        }
      ]
    }
  }

  componentWillMount() {
    console.log('app.jsx -- componentWillMount');
  }

  componentDidMount () {
    console.log('app.jsx -- componentDidMount');
  }

  componentDidShow () {
    console.log('app.jsx -- componentDidShow');
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
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
