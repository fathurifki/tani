import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Item, Form, Input, Label} from 'native-base';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import * as actions from './actions';
import styles from './style';
class Login extends Component {
  render() {
    const {dataLogin, setData} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.fontHeader}>e-Tani</Text>
          <Text style={styles.fontHeader}>
            Berbelanja Hasil Tani menjadi mudah
          </Text>
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
                <Label style={styles.font}>Password</Label>
                <Input
                  secureTextEntry={true}
                  style={styles.font}
                  onChangeText={text => setData('password', text)}
                />
              </Item>
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
          </Form>
        </View>
      </View>
    );
  }
}

export default connect(
  null,
  actions,
)(Login);
