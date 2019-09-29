import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, TextInput} from 'react-native';
import {Header, Card, Text} from 'react-native-elements';
import {Container, Form, Textarea, Button} from 'native-base';
import PickerProduct from '../../components/Picker';

export default class Sell extends Component {
  render() {
    return (
      <Container>
        <Header
          leftComponent={{icon: 'menu', color: '#fff'}}
          centerComponent={{text: 'Jual', style: {color: '#fff'}}}
          rightComponent={{icon: 'home', color: '#fff'}}
        />
        <ScrollView>
          <Text>Tambah Produk</Text>
          <View>
            <Card>
              <Text>Gambar</Text>
              <Text>Nama Penjual</Text>
              <TextInput
                underlineColorAndroid="rgb(255,0,0)"
                autoCorrect={false}
              />
              <Text>Nama Produk</Text>
              <TextInput
                underlineColorAndroid="rgb(255,0,0)"
                autoCorrect={false}
              />
              <Text>Kategori</Text>
              <PickerProduct />
            </Card>
          </View>
          <View>
            <Card>
              <View style={styles.textinput}>
                <Text>Harga </Text>
                <TextInput
                  style={{marginLeft: 5, flex: 1}}
                  underlineColorAndroid="rgb(255,0,0)"
                />
              </View>
              <View style={styles.textinput}>
                <Text>Stock</Text>
                <TextInput
                  style={{marginLeft: 5, flex: 1}}
                  underlineColorAndroid="rgb(255,0,0)"
                  autoCorrect={false}
                />
              </View>
              <View style={styles.textinput}>
                <Text>Berat</Text>
                <TextInput
                  style={{marginLeft: 5, flex: 1}}
                  underlineColorAndroid="rgb(255,0,0)"
                  autoCorrect={false}
                />
              </View>
              <View>
                <Text>Deskripsi</Text>
                <Form>
                  <Textarea
                    rowSpan={5}
                    bordered
                    placeholder="Deskripsi Produk"
                  />
                </Form>
              </View>
            </Card>
          </View>
        </ScrollView>
        <Button full success>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Jual Produk</Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textinput: {
    flexDirection: 'row',
    marginBottom: 5,
  },
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
