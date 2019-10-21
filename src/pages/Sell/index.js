import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Picker,
} from 'react-native';
import {Card, Text} from 'react-native-elements';
import {
  Header,
  Container,
  Form,
  Textarea,
  Button,
  Left,
  Icon,
  Body,
  Title,
} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import * as actions from './actions';

class Sell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uri: '',
      type: '',
      filename: '',
      name: '',
      price: null,
      stock: null,
      category: '',
      weight: '',
      description: '',
    };
  }

  updateCategory = category => {
    this.setState({category: category});
  };

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
      console.log('ImagePicker URI: ', response.uri);
      console.log('ImagePicker NAME: ', response.fileName);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        this.setState({
          uri: response.uri,
          type: response.type,
          filename: response.fileName,
        });
      }
    });
  };

  handleSubmit = () => {
    const {sellProduct} = this.props;
    const data = this.state;
    sellProduct(data);
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Jual</Title>
          </Body>
        </Header>
        <ScrollView>
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
                    source={this.state.uri ? {uri: this.state.uri} : null}
                  />
                </TouchableOpacity>
              </View>
              <Text>Nama Produk</Text>
              <TextInput
                underlineColorAndroid="rgb(255,0,0)"
                autoCorrect={false}
                onChangeText={typedText => {
                  this.setState({name: typedText});
                }}
              />
              <Text>Kategori</Text>
              <View>
                <Picker
                  selectedValue={this.state.category}
                  onValueChange={this.updateCategory}>
                  <Picker.Item label="Palawija" value="palawija" />
                  <Picker.Item label="Beras" value="beras" />
                  <Picker.Item label="Buah" value="buah" />
                </Picker>
              </View>
            </Card>
          </View>
          <View>
            <Card>
              <View style={styles.textinput}>
                <Text>Harga </Text>
                <TextInput
                  style={{marginLeft: 5, flex: 1}}
                  underlineColorAndroid="rgb(255,0,0)"
                  onChangeText={typedText => {
                    this.setState({price: typedText});
                  }}
                />
              </View>
              <View style={styles.textinput}>
                <Text>Stock</Text>
                <TextInput
                  style={{marginLeft: 5, flex: 1}}
                  underlineColorAndroid="rgb(255,0,0)"
                  autoCorrect={false}
                  onChangeText={typedText => {
                    this.setState({stock: typedText});
                  }}
                />
              </View>
              <View style={styles.textinput}>
                <Text>Berat</Text>
                <TextInput
                  style={{marginLeft: 5, flex: 1}}
                  underlineColorAndroid="rgb(255,0,0)"
                  autoCorrect={false}
                  onChangeText={typedText => {
                    this.setState({weight: typedText});
                  }}
                />
              </View>
              <View>
                <Text>Deskripsi</Text>
                <Form>
                  <Textarea
                    rowSpan={5}
                    bordered
                    placeholder="Deskripsi Produk"
                    onChangeText={typedText => {
                      this.setState({description: typedText});
                    }}
                  />
                </Form>
              </View>
            </Card>
          </View>
        </ScrollView>
        <Button full success onPress={this.handleSubmit}>
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
export default connect(
  null,
  actions,
)(Sell);
