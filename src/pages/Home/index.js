import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {Card, Text} from 'react-native-elements';
import {
  Container,
  Header,
  Left,
  Body,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Title,
  Right,
  CardItem,
} from 'native-base';
import CardComponent from '../../components/Card';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {home} from './actions';
import * as selectors from './seletcors';
import {clearData} from '../Profile/actions';
import {Assets} from '../../asset';
import NavigationService from '../../NavigationService';
import Notif from '../../components/Notif';
import * as profile from '../Profile/selectors';

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
    const {home: homeActions} = this.props;
    homeActions();
  }

  renderItem = ({item}) => (
    <CardComponent
      name={item.product}
      image={item.image}
      category={item.category}
      onPress={() =>
        this.props.navigation.navigate({
          routeName: 'category',
          params: {category: item.category},
        })
      }
    />
  );

  handleExit = () => {
    const {clearData: logout} = this.props;
    logout();
    NavigationService.reset('login');
  };

  render() {
    const {data, profile} = this.props;
    console.log('DATA HOME', data, profile);
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right>
            <Button hasText transparent onPress={this.handleExit}>
              <Text style={{color: 'white'}}>Logout</Text>
            </Button>
          </Right>
        </Header>
        <ScrollView>
          <View>
            {profile == null ? (
              <Notif text="[INFO] Lengkapi Profil Untuk Melengkapi Pembayaran" />
            ) : null}
            <View>
              <FlatList
                vertical
                style={{height: Dimensions.get('window').width * 1}}
                data={data}
                keyExtractor={(item, index) => item.category.toString()}
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
  profile: profile.getDataProfile(),
});

export default connect(
  mapStateToProps,
  {home, clearData},
)(Home);
