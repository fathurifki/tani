import React, {Component} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import {Card, Text} from 'react-native-elements';
import {Container, Button, Header, Left, Icon, Body, Title} from 'native-base';
import {connect} from 'react-redux';
import * as actions from './actions';
import * as selectors from './selectors';
import {createStructuredSelector} from 'reselect';

class DetailProduct extends Component {
  componentDidMount() {
    const {fetchDetail, navigation} = this.props;
    fetchDetail(navigation.state.params.id);
  }

  handleRequest = () => {
    const {addProduct, navigation} = this.props;
    addProduct(navigation.state.params.id);
  };

  render() {
    const {data, setData} = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Detail Produk</Title>
          </Body>
        </Header>
        <ScrollView>
          <View style={{flexDirection: 'row'}}>
            <View>
              <ImageBackground
                style={{
                  borderRadius: 10,
                  width: 150,
                  height: 150,
                  margin: 5,
                }}
                source={{uri: `https://${data.productImage}`}}
              />
            </View>
            <View>
              <Text style={{margin: 5}}>Harga :</Text>
              <Text style={{margin: 5}}>Stock :</Text>
              <Text style={{margin: 5}}>Berat :</Text>
              <Text style={{margin: 5}}>Kategori :</Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'red',
                  fontStyle: 'italic',
                  margin: 5,
                }}>
                {data.price}
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'red',
                  fontStyle: 'italic',
                  margin: 5,
                }}>
                {data.stock}
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'red',
                  fontStyle: 'italic',
                  margin: 5,
                }}>
                {data.weight}
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'red',
                  fontStyle: 'italic',
                  margin: 5,
                }}>
                {data.category}
              </Text>
            </View>
          </View>
          <View style={{margin: 5}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{data.name}</Text>
          </View>
          <View style={{margin: 5}}>
            <Text>Informasi Produk</Text>
          </View>
          <View>
            <Card style={{weight: 100, height: 100}}>
              <Text>{data.description}</Text>
            </Card>
          </View>
          <Text>Jumlah</Text>
          <TextInput
            keyboardType="numeric"
            onChangeText={value => {
              setData('amount', value);
            }}
          />
        </ScrollView>
        <Button full success onPress={this.handleRequest}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            Tambah Ke Keranjang
          </Text>
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: selectors.getData(),
});

/**
 *  _id: new mongoose.Types.ObjectId(),
    seller: req.user.user_id,
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,
    category: req.body.category,
    weight: req.body.weight,
    description: req.body.description,
    productImage: req.file.path
 */

export default connect(mapStateToProps, actions)(DetailProduct);
