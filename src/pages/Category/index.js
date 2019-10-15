import React, {Component} from 'react';
import {View, FlatList, StyleSheet, ScrollView} from 'react-native';
import {Header, Text} from 'react-native-elements';
import {Container, Content, Footer, FooterTab, Button} from 'native-base';
import {Assets} from '../../asset';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import * as actions from './actions';
import * as selectors from './selectors';
import CardComponent from '../../components/Category';

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
  componentDidMount() {
    const {categoryData, navigation} = this.props;
    categoryData(navigation.state.params.category);
    console.log('MOUNT', navigation.state.params.category);
  }

  keyExtractor = () => item => item.id;

  renderItem = ({item}) => (
    <CardComponent
      name={item.name}
      image={item.image}
      stock={item.stock}
      price={item.price}
      onPress={() => this.props.navigation.navigate('detailproduct')}
    />
  );
  render() {
    const {data} = this.props;
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
              data={data}
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

const mapStateToProps = createStructuredSelector({
  data: selectors.getData(),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(
  mapStateToProps,
  actions,
)(Home);
