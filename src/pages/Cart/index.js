import React, {Component} from 'react';
import {
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Header, Card, Text} from 'react-native-elements';
import {Container, Button, Icon} from 'native-base';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default class Cart extends Component {
  render() {
    return (
      <Container>
        <Header
          leftComponent={{icon: 'menu', color: '#fff'}}
          centerComponent={{text: 'Keranjang', style: {color: '#fff'}}}
          rightComponent={{icon: 'home', color: '#fff'}}
        />
        <ScrollView>
          <View>
            <Card>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Image
                  style={{
                    borderRadius: 10,
                    width: 80,
                    height: 80,
                    margin: 5,
                  }}
                />
                <View style={{flexDirection: 'column'}}>
                  <View style={{width: DEVICE_WIDTH * 0.3}}>
                    <Text>PALAWIJA H1 SUPER MANTAP</Text>
                  </View>
                  <View>
                    <Text>Rp. 20000</Text>
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
                    <TouchableOpacity>
                      <Icon name="ios-remove" />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={{margin: 5}}> 20 </Text>
                  </View>
                  <View>
                    <TouchableOpacity>
                      <Icon name="ios-add" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Card>
          </View>
        </ScrollView>
        <Button full success>
          <Text style={{color: 'white', fontWeight: 'bold'}}> Checkout </Text>
        </Button>
      </Container>
    );
  }
}
