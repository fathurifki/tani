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
import {fetchCart} from './actions';
import * as selectors from './selectors';
import {fetchDetail} from '../DetailProduct/actions';
import CardContent from '../../components/CartContent';

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
    const {fetchCart, fetchDetail: fetchDetail} = this.props;
    fetchCart();
    fetchDetail();
  }

  renderItem = ({item}) => (
    <CardContent id={item.id} title={item.title} amount={item.amount} />
  );

  render() {
    const {data} = this.props;
    console.log('DATA CART', data);
    console.log('STATE', this.state);
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
        <View>
          <ScrollView>
            <FlatList
              vertical
              data={data}
              keyExtractor={(item, index) => item._id.toString()}
              renderItem={item => this.renderItem(item)}
            />
          </ScrollView>
        </View>
        <Content />
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: selectors.getData(),
});

export default connect(
  mapStateToProps,
  {fetchCart, fetchDetail},
)(Cart);
