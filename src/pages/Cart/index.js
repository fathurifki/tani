import React, {Component} from 'react';
import {View, Dimensions, ScrollView, FlatList} from 'react-native';
import {Text} from 'react-native-elements';
import {
  Header,
  Container,
  Button,
  Content,
  Left,
  Icon,
  Body,
  Title,
} from 'native-base';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {fetchCart, deleteCart, checkoutCart} from './actions';
import * as selectors from './selectors';
import CardContent from '../../components/CartContent';
import NavigationService from '../../NavigationService';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
    this.incrementItem = this.incrementItem.bind(this);
    this.decrementItem = this.decrementItem.bind(this);
  }

  updateValue = value => {
    this.setState({clicks: value});
  };

  incrementItem = () => {
    this.setState({clicks: this.state.clicks + 1});
  };

  decrementItem = () => {
    this.setState({clicks: this.state.clicks - 1});
  };

  componentDidMount() {
    const {fetchCart: fetchCarts} = this.props;
    fetchCarts();
  }

  handleDelete = id => {
    const {deleteCart} = this.props;
    // const arrPayload = id;
    // const payload = arrPayload.split();
    // console.log('PAYLOAD', payload);
    deleteCart(id);
  };

  handleBuy = id => {
    const {checkoutCart} = this.props;
    // const arrPayload = id;
    // const payload = arrPayload.split();
    // console.log('PAYLOAD', payload);
    // checkoutCart(payload);
    checkoutCart(id);
    NavigationService.navigate('payment');
    // console.log('PAYLOAD', id);
  };

  renderItem = ({item}) => (
    <CardContent
      id={item._id}
      product_id={item.product_id}
      product_name={item.product_name}
      amount={item.amount}
      eventDelete={() => this.handleDelete(item._id)}
      eventBuy={() => this.handleBuy(item._id)}
    />
  );

  render() {
    const {data} = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Keranjang</Title>
          </Body>
        </Header>
        <ScrollView>
          <View>
            <FlatList
              vertical
              data={data}
              keyExtractor={(item, index) => item._id.toString()}
              renderItem={item => this.renderItem(item)}
            />
          </View>
        </ScrollView>
        <Content />
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: selectors.getData(),
  url: selectors.getUrl(),
});

export default connect(
  mapStateToProps,
  {fetchCart, deleteCart, checkoutCart},
)(Cart);
