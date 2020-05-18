import Taro, { Component } from '@tarojs/taro';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class EasyCom extends Component {
  static options = {
    addGlobalClass: true
  }

  static defaultProps = {
    data: [],
  }

  state = {
    content: '',
    isShowContent: false,
  }

  componentWillMount() {
    console.log('EasyCom -- componentWillMount');
  }

  componentDidMount() {
    console.log('EasyCom -- componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('EasyCom -- componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('EasyCom -- ouldComponentUpdate');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('EasyCom -- mponentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('EasyCom -- mponentDidUpdate');
  }

  componentWillUnmount() {
    console.log('EasyCom -- componentWillUnmount');
  }



  render () {
    console.log('EasyCom -- render');

    const {
      className = '',

    } = this.props;
   
    const clsString = classNames('attention', className);

    return (
      <View className={clsString}>
        EasyCom
      </View>
    );
  }
}

EasyCom.propTypes = {
  className: PropTypes.string,
};


export default EasyCom;