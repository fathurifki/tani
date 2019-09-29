import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Item, Form, Input, Label} from 'native-base';
import {Button} from 'react-native-elements';

class Register extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={{alignSelf: 'center'}}></View>
        </View>
        <View>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: 'green',
              padding: 5,
            }}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
              E-TANI
            </Text>
            <View style={{backgroundColor: 'grey', margin: 10}}>
              <Text style={{fontWeight: 'bold', color: 'white'}}>
                (Isilah Data Dengan Benar)
              </Text>
            </View>
          </View>
          <Form>
            <View style={styles.input}>
              <Item floatingLabel>
                <Label>Nama Lengkap</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input onChangeText={text => setData('email', text)} />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input
                  secureTextEntry={true}
                  onChangeText={text => setData('password', text)}
                />
              </Item>
            </View>
          </Form>
        </View>
        <View style={{width: '90%', alignSelf: 'center', padding: 10}}>
          <Button title="Sign Up" onPress={() => request()} />
        </View>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    padding: 10,
    width: DEVICE_WIDTH - 10,
    justifyContent: 'center',
  },
});

export default Register;
