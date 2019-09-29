import React, {Component} from 'react';
import {View, Text, Picker, StyleSheet} from 'react-native';

class PickerProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    };
  }

  updateUser = user => {
    this.setState({user: user});
  };
  render() {
    return (
      <View>
        <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
          <Picker.Item label="Steve" value="steve" />
          <Picker.Item label="Ellen" value="ellen" />
          <Picker.Item label="Maria" value="maria" />
        </Picker>
      </View>
    );
  }
}
export default PickerProduct;
