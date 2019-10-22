import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Item, Form, Input, Label} from 'native-base';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import * as actions from './actions';
class Register extends Component {
  render() {
    const {register, setData} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.fontHeader}>E-TANI</Text>
          <Text style={styles.fontHeader}>Isilah dengan data yang benar</Text>
          <Form>
            <View style={styles.input}>
              <Item floatingLabel>
                <Label style={styles.font}>Email</Label>
                <Input
                  style={styles.font}
                  onChangeText={text => setData('email', text)}
                />
              </Item>
              <Item floatingLabel>
                <Label style={styles.font}>Kata Sandi</Label>
                <Input
                  secureTextEntry={true}
                  style={styles.font}
                  onChangeText={text => setData('password', text)}
                />
              </Item>
              <Item floatingLabel>
                <Label style={styles.font}>Masukkan ulang kata sandi</Label>
                <Input secureTextEntry={true} style={styles.font} />
              </Item>
            </View>
          </Form>
          <View style={styles.button}>
            <Button title="Sign Up" onPress={() => register()} />
          </View>
        </View>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0652DD',
  },
  input: {
    padding: 10,
    width: DEVICE_WIDTH - 10,
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  fontHeader: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  font: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    width: '90%',
    alignSelf: 'center',
    padding: 10,
  },
});

export default connect(
  null,
  actions,
)(Register);
