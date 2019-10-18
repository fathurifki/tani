import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Header, Card, Text} from 'react-native-elements';
import {Container, Form, Textarea, Button} from 'native-base';
import PickerProduct from '../../components/Picker';
import ImagePicker from 'react-native-image-picker';

class Sell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filePath: {},
    };
  }

  chooseFile = () => {
    const options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        this.setState({
          filePath: source,
        });
      }
    });
  };

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
              <View style={{alignSelf: 'center'}}>
                <Text>Upload Produk</Text>
                <TouchableOpacity onPress={this.chooseFile.bind(this)}>
                  <Image
                    style={{
                      borderRadius: 10,
                      width: 80,
                      height: 80,
                      margin: 5,
                    }}
                    source={this.state.filePath}
                  />
                </TouchableOpacity>
              </View>
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
export default Sell;
