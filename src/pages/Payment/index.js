import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {connect} from 'react-redux';
import * as selectors from '../DetailProduct/selectors';
import {createStructuredSelector} from 'reselect';

class Payment extends Component {
  render() {
    const {link} = this.props;
    return <WebView source={{uri: link}} />;
  }
}

const mapStateToProps = createStructuredSelector({
  data: selectors.getData(),
  link: selectors.getLink(),
});

export default connect(
  mapStateToProps,
  null,
)(Payment);
