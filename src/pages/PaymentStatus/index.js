import React, {Component} from 'react';
import {View, ScrollView, FlatList, Dimensions, StyleSheet} from 'react-native';
import {
  Container,
  Text,
  Icon,
  Button,
  Header,
  Left,
  Body,
  Title,
  Content,
} from 'native-base';
import {connect} from 'react-redux';
import * as selectors from './selectors';
import * as actions from './actions';
import {createStructuredSelector} from 'reselect';
import HistoryCard from '../../components/HistoryCard';

class PaymentStatus extends Component {
  componentDidMount() {
    const {getPaymentStatus: getPayment} = this.props;
    getPayment();
  }

  keyExtractor = () => item => item.id;
  renderItem = ({item}) => (
    <HistoryCard id={item.product} amount={item.amount} status={item.status} />
  );

  render() {
    const {status} = this.props;
    return (
      <Container style={styles.container}>
        <View>
          <Header>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Riwayat Pembayaran</Title>
            </Body>
          </Header>
        </View>
        <View>
          <ScrollView>
            <FlatList
              vertical
              data={status}
              keyExtractor={(item, index) => index.toString()}
              renderItem={item => this.renderItem(item)}
            />
          </ScrollView>
        </View>
        <Content />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = createStructuredSelector({
  status: selectors.getDataPayment(),
});

export default connect(
  mapStateToProps,
  actions,
)(PaymentStatus);
