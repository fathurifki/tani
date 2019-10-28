import React, {Component} from 'react';
import {View, Dimensions, Image, TouchableOpacity} from 'react-native';
import {Card, Text} from 'react-native-elements';
import {Assets} from '../asset';
import {Icon, Button} from 'native-base';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default class CardContent extends Component {
  render() {
    const {
      id,
      product_id,
      product_name,
      amount,
      eventBuy,
      eventDelete,
    } = this.props;
    return (
      <Card>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <View style={{width: DEVICE_WIDTH * 0.3}}>
              <Text>{id}</Text>
              <Text>{product_id}</Text>
            </View>
            <View>
              <Text>{product_name}</Text>
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
        <Button block danger onPress={eventDelete}>
          <Text
            style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>
            Hapus
          </Text>
        </Button>
        <Button block success style={{marginTop: 5}} onPress={eventBuy}>
          <Text
            style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>
            Bayar
          </Text>
        </Button>
      </Card>
    );
  }
}
