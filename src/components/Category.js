/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Card, Button, Image} from 'react-native-elements';

export default class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Card
          title={this.props.name}
          image={{uri: `https://${this.props.image}`}}>
          <Text style={{marginBottom: 10}}>{this.props.category}</Text>
          <Text style={{marginBottom: 10}}>Harga :{this.props.price}</Text>
          <Text style={{marginBottom: 10}}>Stok :{this.props.stock}</Text>
          <Button
            backgroundColor="#03A9F4"
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card>
      </TouchableOpacity>
    );
  }
}
