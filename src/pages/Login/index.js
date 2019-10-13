import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Item, Form, Input, Label} from 'native-base';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import * as actions from './actions';

class Login extends Component {
  render() {
    const {dataLogin, setData} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>e-Tani</Text>
          <Text>Berbelanja Hasil Tani menjadi mudah</Text>
        </View>
        <Form>
          <View style={styles.input}>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={text => setData('email', text)} />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                // secureTextEntry={true}
                onChangeText={text => setData('password', text)}
              />
            </Item>
          </View>
        </Form>
        <View>
          <Text style={styles.footer}>
            Not Register Yet ?
            <Text
              style={styles.highlight}
              onPress={() => this.props.navigation.navigate('register')}>
              {' '}
              Sign Up{' '}
            </Text>
            <Text style={styles.footerfont}>here</Text>
          </Text>
        </View>
        <View style={styles.button}>
          <Button onPress={() => dataLogin()} title="Login" />
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
  header: {
    alignItems: 'center',
  },
  input: {
    width: DEVICE_WIDTH - 15,
    padding: 5,
    alignSelf: 'center',
  },
  footer: {
    fontSize: 15,
    alignSelf: 'center',
    padding: 10,
    color: 'black',
  },
  highlight: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
  },
  footerfont: {
    fontSize: 15,
  },
  button: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
});

export default connect(
  null,
  actions,
)(Login);
