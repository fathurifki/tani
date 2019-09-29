import React, {Component} from 'react';
import {View, Dimensions, ScrollView} from 'react-native';
import {Header, Card, Text, Image} from 'react-native-elements';
import {Container, Button} from 'native-base';

export default class DetailProduct extends Component {
  render() {
    return (
      <Container>
        <Header
          leftComponent={{icon: 'menu', color: '#fff'}}
          centerComponent={{style: {color: '#fff'}}}
          rightComponent={{icon: 'home', color: '#fff'}}
        />
        <ScrollView>
          <View>
            <Text style={{alignSelf: 'center', margin: 10, fontSize: 15}}>
              Detail Produk
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                style={{
                  borderRadius: 10,
                  width: 150,
                  height: 150,
                  margin: 5,
                }}></Image>
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
                {' '}
                20.000
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'red',
                  fontStyle: 'italic',
                  margin: 5,
                }}>
                {' '}
                200
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'red',
                  fontStyle: 'italic',
                  margin: 5,
                }}>
                {' '}
                5 <Text>Kg</Text>
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'red',
                  fontStyle: 'italic',
                  margin: 5,
                }}>
                {' '}
                Palawija
              </Text>
            </View>
          </View>
          <View style={{margin: 5}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              PALAWIJA H1 KUALITAS MANTAP
            </Text>
          </View>
          <View style={{margin: 5}}>
            <Text>Informasi Produk</Text>
          </View>
          <View>
            <Card style={{weight: 100, height: 100}}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                tellus urna, vestibulum a tincidunt eu, aliquam a velit.
              </Text>
            </Card>
          </View>
        </ScrollView>
        <Button full success>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            Tambah Ke Keranjang
          </Text>
        </Button>
      </Container>
    );
  }
}

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
