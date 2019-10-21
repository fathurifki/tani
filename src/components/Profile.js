import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Card, Button} from 'react-native-elements';

export default class ComponentProfile extends Component {
  render() {
    const {
      name,
      numberPhone,
      city,
      address,
      firstbank,
      secondbank,
      numberRek,
      secondRek,
      inputName,
      inputHp,
      inputAddress,
      inputBank1,
      inputBank2,
      inputCity,
      inputNumberRek1,
      inputNumberRek2,
      eventUpdate,
      eventCreate,
      onPress,
    } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={onPress}>
          <Card>
            <Text> > Riwayat Pembayaran</Text>
          </Card>
        </TouchableOpacity>
        <Card style={styles.boxWithShadow}>
          <View>
            <Text>Nama </Text>
            <TextInput
              onChangeText={inputName}
              placeholder="Contoh : 082136187623"
              underlineColorAndroid="rgb(255,0,0)"
              autoCorrect={false}
              defaultValue={name}
            />
          </View>
          <View>
            <Text>Nomor HP </Text>
            <TextInput
              onChangeText={inputHp}
              placeholder="Contoh : 082136187623"
              underlineColorAndroid="rgb(255,0,0)"
              autoCorrect={false}
              defaultValue={numberPhone}
            />
          </View>
          <View>
            <Text>Kota </Text>
            <TextInput
              onChangeText={inputCity}
              placeholder="Contoh : Yogykarta"
              underlineColorAndroid="rgb(255,0,0)"
              autoCorrect={false}
              defaultValue={city}
            />
          </View>
          <View>
            <Text>Alamat </Text>
            <TextInput
              onChangeText={inputAddress}
              placeholder="Contoh : Kemranjen Demangan "
              underlineColorAndroid="rgb(255,0,0)"
              autoCorrect={false}
              defaultValue={address}
            />
          </View>
        </Card>
        <Card style={styles.boxWithShadow}>
          <Text>Bank 1 </Text>
          <TextInput
            onChangeText={inputBank1}
            placeholder="Contoh : Mandiri, BCA, BRI"
            underlineColorAndroid="rgb(255,0,0)"
            autoCorrect={false}
            defaultValue={firstbank}
          />
          <View style={{flexDirection: 'row', marginTop: 5}}></View>
          <Text>No. Rekening </Text>
          <TextInput
            onChangeText={inputNumberRek1}
            placeholder="Contoh : Mandiri, BCA, BRI"
            underlineColorAndroid="rgb(255,0,0)"
            autoCorrect={false}
            defaultValue={numberRek}
          />
          <Text>Bank 2 </Text>
          <TextInput
            onChangeText={inputBank2}
            placeholder="Contoh : Mandiri, BCA, BRI"
            underlineColorAndroid="rgb(255,0,0)"
            autoCorrect={false}
            defaultValue={secondbank}
          />
          <Text>No. Rekening 2 </Text>
          <TextInput
            onChangeText={inputNumberRek2}
            placeholder="Contoh : Mandiri, BCA, BRI"
            underlineColorAndroid="rgb(255,0,0)"
            autoCorrect={false}
            defaultValue={secondRek}
          />
        </Card>
        {{name} == null ? (
          <Button title="Update" onPress={eventUpdate} />
        ) : (
          <Button title="Create" onPress={eventCreate} />
        )}
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
