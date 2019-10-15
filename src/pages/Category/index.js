import React, {Component} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {Header, Card, Icon, ListItem, Text} from 'react-native-elements';
import {Container, Content, Footer, FooterTab, Item, Button} from 'native-base';
import CardComponent from '../../components/Card';
import {Assets} from '../../asset';

const dummy = [
  {
    id: 1,
    product: 'Palawija',
    image: Assets.palawija,
  },
  {
    id: 2,
    product: 'Palawija Mantap',
    image: Assets.palawija,
  },
  {
    id: 3,
    product: 'Palawija Segar',
    image: Assets.palawija,
  },
  {
    id: 4,
    product: 'Palawija Super',
    image: Assets.palawija,
  },
];

class Home extends Component {
  keyExtractor = () => item => item.id;

  renderItem = ({item}) => (
    <CardComponent
      name={item.product}
      image={item.image}
      onPress={() => this.props.navigation.navigate('detailproduct')}
    />
  );
  render() {
    return (
      <Container style={styles.container}>
        <Header
          centerComponent={{text: 'Kategori', style: {color: '#fff'}}}
          rightComponent={{icon: 'home', color: '#fff'}}
        />
        <ScrollView>
          <View>
            <FlatList
              vertical
              data={dummy}
              keyExtractor={(item, index) => index.toString()}
              renderItem={item => this.renderItem(item)}
            />
          </View>
        </ScrollView>
        <Content />
        <Footer>
          <FooterTab>
            <Button
              vertical
              onPress={() => this.props.navigation.navigate('home')}>
              <Text style={{color: 'white'}}>Beranda</Text>
            </Button>
            <Button
              vertical
              onPress={() => this.props.navigation.navigate('cart')}>
              <Text style={{color: 'white'}}>Keranjang</Text>
            </Button>
            <Button
              vertical
              onPress={() => this.props.navigation.navigate('sell')}>
              <Text style={{color: 'white'}}>Jual</Text>
            </Button>
            <Button
              vertical
              onPress={() => this.props.navigation.navigate('profile')}>
              <Text style={{color: 'white'}}>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
