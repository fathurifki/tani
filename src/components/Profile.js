import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {Card} from 'react-native-elements';
import {
  Container,
  Header,
  Content,
  Icon,
  Picker,
  Form,
  Input,
} from 'native-base';

export default class ComponentProfile extends Component {
  render() {
    return (
      <View>
        <Card style={styles.boxWithShadow}>
          <View>
            <Text>Nomor HP </Text>
            <TextInput
              placeholder="Contoh : 082136187623"
              underlineColorAndroid="rgb(255,0,0)"
              autoCorrect={false}
            />
          </View>
          <View>
            <Text>Kota </Text>
            <TextInput
              placeholder="Contoh : Yogykarta"
              underlineColorAndroid="rgb(255,0,0)"
              autoCorrect={false}
            />
          </View>
          <View>
            <Text>Alamat </Text>
            <TextInput
              placeholder="Contoh : Kemranjen Demangan "
              underlineColorAndroid="rgb(255,0,0)"
              autoCorrect={false}
            />
          </View>
        </Card>
        <Card style={styles.boxWithShadow}>
          <Text>Bank 1 </Text>
          <TextInput
            placeholder="Contoh : Mandiri, BCA, BRI"
            underlineColorAndroid="rgb(255,0,0)"
            autoCorrect={false}
          />
          <View style={{flexDirection: 'row', marginTop: 5}}></View>
          <Text>No. Rekening </Text>
          <TextInput
            placeholder="Contoh : Mandiri, BCA, BRI"
            underlineColorAndroid="rgb(255,0,0)"
            autoCorrect={false}
          />
          <Text>Bank 2 </Text>
          <TextInput
            placeholder="Contoh : Mandiri, BCA, BRI"
            underlineColorAndroid="rgb(255,0,0)"
            autoCorrect={false}
          />
          <Text>No. Rekening 2 </Text>
          <TextInput
            placeholder="Contoh : Mandiri, BCA, BRI"
            underlineColorAndroid="rgb(255,0,0)"
            autoCorrect={false}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxWithShadow: {
    elevation: 5,
  },
  direction: {
    flexDirection: 'row',
  },
});
