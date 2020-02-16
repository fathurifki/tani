import React, {Component} from 'react';
import {View, ScrollView, FlatList, ToastAndroid} from 'react-native';
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
      cart: [],
      checked: false,
    };
    this.incrementItem = this.incrementItem.bind(this);
    this.decrementItem = this.decrementItem.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
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
    const {deleteCart: _delete} = this.props;
    // const arrPayload = id;
    // const payload = arrPayload.split();
    // console.log('PAYLOAD', payload);
    _delete(id);
  };

  handleBuy = () => {
    const {checkoutCart: _checkout} = this.props;
    const {cart} = this.state;
    // const arrPayload = id;
    // const payload = arrPayload.split();
    // console.log('PAYLOAD', payload);
    // checkoutCart(payload);
    // checkoutCart(id);
    _checkout(cart);
    NavigationService.navigate('payment');
    // console.log('PAYLOAD', id);
  };

  addCart = (id, product) => {
    const {cart} = this.state;
    console.log('CART', cart);
    const selectedId = cart.findIndex(item => item === id);
    if (selectedId === -1) {
      const idProduct = id.toString();
      ToastAndroid.show(`Anda menambahkan ${product}`, ToastAndroid.SHORT);
      cart.push(idProduct);
    } else {
      cart.splice(selectedId, 1);
    }
    this.setState({cart});
  };

  handleChecked = () => {
    console.log('CHECKED', this.state.checked);
    this.setState(prevState => ({
      checked: !prevState.checked,
    }));
  };

  renderItem = ({item}) => {
    const length = this.state.cart.length;
    return (
      <CardContent
        id={item._id}
        product_id={item.product_id}
        product_name={item.product_name}
        amount={item.amount}
        eventDelete={() => this.handleDelete(item._id)}
        // eventBuy={() => this.handleBuy(item._id)}
        eventAdd={() => this.addCart(item._id, item.product_name)}
        cart={length}
      />
    );
  };

  render() {
    const {data} = this.props;
    console.log('ADD STATE CART', this.state.cart);
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
        <Button
          block
          success
          style={{marginTop: 5}}
          onPress={() => this.handleBuy()}>
          <Text
            style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>
            Checkout
          </Text>
        </Button>
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
