import React, {Component} from 'react';
import {View, Dimensions, Image, TouchableOpacity} from 'react-native';
import {Card, Text} from 'react-native-elements';
import {Assets} from '../asset';
import {Icon, Button} from 'native-base';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default class CardContent extends Component {
  render() {
    const {title, price, amount, image} = this.props;
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
            source={image}
          />
          <View style={{flexDirection: 'column'}}>
            <View style={{width: DEVICE_WIDTH * 0.3}}>
              <Text>{title}</Text>
            </View>
            <View>
              <Text>Rp: {price}</Text>
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
              <Text style={{margin: 5}}>Jumlah: {amount}</Text>
            </View>
          </View>
        </View>
        <Button block danger>
          <Text
            style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>
            Hapus
          </Text>
        </Button>
        <Button block success style={{marginTop: 5}}>
          <Text
            style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>
            Bayar
          </Text>
        </Button>
      </Card>
    );
  }
}
