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

const dummy = [
  {
    id: 1,
    product: 'palawija',
  },
  {
    id: 2,
    product: 'beras',
  },
  {
    id: 3,
    product: 'buah',
  },
  {
    id: 4,
    product: 'perkebunan',
  },
];

class Home extends Component {
  keyExtractor = () => item => item.id;

  renderItem = ({item}) => <CardComponent name={item.product} />;
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
              keyExtractor={this.keyExtractor}
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
