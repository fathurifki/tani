import React from 'react';
import {Text, View} from 'react-native';
import {Card, Button} from 'react-native-elements';

const History = ({id, amount, status}) => {
  return (
    <View>
      <Card>
        <Text>ID : {id}</Text>
        <Text>Jumlah : {amount}</Text>
        <Text>
          Status :{' '}
          <Text style={{color: 'red', fontWeight: 'bold'}}>{status}</Text>
        </Text>
      </Card>
    </View>
  );
};

export default History;
