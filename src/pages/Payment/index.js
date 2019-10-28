import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {connect} from 'react-redux';
import * as selectors from '../DetailProduct/selectors';
import * as url from '../Cart/selectors';
import {createStructuredSelector} from 'reselect';

class Payment extends Component {
  render() {
    const {urls} = this.props;
    return <WebView source={{uri: urls.invoice_url}} />;
  }
}

const mapStateToProps = createStructuredSelector({
  data: selectors.getData(),
  link: selectors.getLink(),
  urls: url.getUrl(),
});

export default connect(
  mapStateToProps,
  null,
)(Payment);
