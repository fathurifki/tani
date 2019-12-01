import React, {Component} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Card, Text} from 'react-native-elements';
import {
  Container,
  Header,
  Body,
  Content,
  Footer,
  FooterTab,
  Button,
  Title,
  Right,
} from 'native-base';
import CardComponent from '../../components/Card';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {home} from './actions';
import * as selectors from './seletcors';
import {clearData} from '../Profile/actions';
import NavigationService from '../../NavigationService';
import Notif from '../../components/Notif';
import {fetchProfile} from '../Profile/actions';
import * as profile from '../Profile/selectors';

class Home extends Component {
  componentDidMount() {
    const {home: homeActions, fetchProfile: profile} = this.props;
    homeActions();
    profile();
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
    const {data, profile, navigation} = this.props;
    console.log('DATA HOME', data, profile);
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>Beranda</Title>
          </Body>
          <Right>
            <Button hasText transparent onPress={this.handleExit}>
              <Text style={{color: 'white'}}>Logout</Text>
            </Button>
          </Right>
        </Header>
        <ScrollView>
          <View style={{margin: 10}}>
            <Text style={{fontSize: 20}}>Selamat Datang</Text>
            <Text style={{fontSize: 15}}>
              Silahkan berbelanja berdasarkan kebutuhan anda
            </Text>
          </View>
          <View>
            {profile == null ? (
              <Notif text="[INFO] Lengkapi Profil Untuk Melengkapi Pembayaran" />
            ) : null}
            <View>
              <Text style={{margin: 10}}>Komoditi Tersedia</Text>
              <Card>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                  onPress={() =>
                    navigation.navigate('category', {category: 'palawija'})
                  }>
                  <Text>Palawija</Text>
                  <Text> > </Text>
                </TouchableOpacity>
              </Card>
              <Card>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                  onPress={() =>
                    navigation.navigate('category', {category: 'beras'})
                  }>
                  <Text>Beras</Text>
                  <Text> > </Text>
                </TouchableOpacity>
              </Card>
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

export default connect(mapStateToProps, {home, clearData, fetchProfile})(Home);
