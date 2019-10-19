import React, {Component} from 'react';
import {
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Header, Card, Text} from 'react-native-elements';
import {Container, Button, Content} from 'native-base';
import {createStructuredSelector} from 'reselect';
import {Assets} from '../../asset';
import {connect} from 'react-redux';
import * as actions from './actions';
import * as selectors from './selectors';

import CardContent from '../../components/CartContent';
const DEVICE_WIDTH = Dimensions.get('window').width;

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
    const {fetchCart} = this.props;
    fetchCart();
  }

  renderItem = ({item}) => (
    <CardContent title={item.title} price={item.price} amount={item.amount} />
  );

  render() {
    const {data} = this.props;
    console.log('DATA CART', data);
    console.log('STATE', this.state);
    return (
      <Container>
        <Header
          leftComponent={{icon: 'menu', color: '#fff'}}
          centerComponent={{text: 'Keranjang', style: {color: '#fff'}}}
          rightComponent={{icon: 'home', color: '#fff'}}
        />
        <View>
          <ScrollView>
            <FlatList
              vertical
              style={{height: Dimensions.get('window').width * 1}}
              data={data}
              keyExtractor={(item, index) => item._id.toString()}
              renderItem={item => this.renderItem(item)}
            />
          </ScrollView>
        </View>
        <Content />
        <Button full success>
          <Text style={{color: 'white', fontWeight: 'bold'}}> Checkout </Text>
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: selectors.getData(),
});

export default connect(
  mapStateToProps,
  actions,
)(Cart);
