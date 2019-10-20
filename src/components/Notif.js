import React from 'react';
import {Card, Text} from 'react-native-elements';
import {View} from 'react-native';

const Notif = ({text}) => {
  return (
    <View>
      <Card containerStyle={{backgroundColor: 'red'}}>
        <Text style={{color: 'white'}}>{text}</Text>
      </Card>
    </View>
  );
};

export default Notif;
