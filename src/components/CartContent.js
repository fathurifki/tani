import React, {Component} from 'react';
import {View, Dimensions, Image, TouchableOpacity} from 'react-native';
import {Card, Text} from 'react-native-elements';
import {Assets} from '../asset';
import {Icon} from 'native-base';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default class CardContent extends Component {
  render() {
    const {title, price, amount, eventDecrement, eventIncrement} = this.props;
    return (
      <Card>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            style={{
              borderRadius: 10,
              width: 80,
              height: 80,
              margin: 5,
            }}
            source={Assets.palawija ? Assets.palawija : null}
          />
          <View style={{flexDirection: 'column'}}>
            <View style={{width: DEVICE_WIDTH * 0.3}}>
              <Text>{title}</Text>
            </View>
            <View>
              <Text>{price}</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <TouchableOpacity onPress={this.decrementItem}>
                <Icon name="ios-remove" />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{margin: 5}}>{amount}</Text>
            </View>
            <View>
              <TouchableOpacity onPress={this.incrementItem}>
                <Icon name="ios-add" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Card>
    );
  }
}
