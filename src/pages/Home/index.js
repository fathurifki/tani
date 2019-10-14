import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {Header, Card, Text} from 'react-native-elements';
import {Container, Content, Footer, FooterTab, Button} from 'native-base';
import CardComponent from '../../components/Card';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import * as actions from './actions';
import * as selectors from './seletcors';
import {Assets} from '../../asset';

const dummy = [
  {
    id: 1,
    product: 'palawija',
    image: Assets.palawija,
  },
  {
    id: 2,
    product: 'beras',
    image: Assets.beras,
  },
  {
    id: 3,
    product: 'buah',
    image: Assets.buah,
  },
  {
    id: 4,
    product: 'perkebunan',
    image: Assets.kopi,
  },
];

class Home extends Component {
  componentDidMount() {
    const {home} = this.props;
    home();
  }

  renderItem = ({item}) => (
    <CardComponent
      name={item.product}
      image={item.image}
      onPress={() => this.props.navigation.navigate('category')}
    />
  );
  render() {
    const {data} = this.props;
    console.log('DATA', data);
    return (
      <Container style={styles.container}>
        <Header
          centerComponent={{text: 'Home', style: {color: '#fff'}}}
          rightComponent={{icon: 'home', color: '#fff'}}
        />
        <ScrollView>
          <View>
            <Card>
              <View style={{flexDirection: 'row'}}>
                <Text>Total Belanja : </Text>
                <Text>10 </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>Jumlah Belanja : </Text>
                <Text>Rp. 100000 </Text>
              </View>
            </Card>
            <View>
              <FlatList
                vertical
                style={{height: Dimensions.get('window').width * 1}}
                data={dummy}
                keyExtractor={(item, index) => index.toString()}
                renderItem={item => this.renderItem(item)}
              />
            </View>
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

const mapStateToProps = createStructuredSelector({
  data: selectors.getData(),
});

export default connect(
  mapStateToProps,
  actions,
)(Home);
