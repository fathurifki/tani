import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import {Card} from 'react-native-elements';

const Categories = ({onPress, image, category, price, stock, name}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card
        title={name}
        image={{
          uri: `https://${image}`,
        }}>
        <Text style={{marginBottom: 10}}>Harga :{price}</Text>
        <Text style={{marginBottom: 10}}>Stok :{stock}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default Categories;
