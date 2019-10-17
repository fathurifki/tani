import React, {Component} from 'react';
import {
  View,
  Dimensions,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native-elements';
import {
  Container,
  Icon,
  Button,
  CardItem,
  Tab,
  Tabs,
  TabHeading,
} from 'native-base';
import {connect} from 'react-redux';
const {height, width} = Dimensions.get('window');
import Tab1 from '../../components/Profile';
import * as actions from './actions';
import * as selectors from './selectors';
import {createStructuredSelector} from 'reselect';

class Profile extends Component {
  handleUpdate = id => {
    const {updateProfile} = this.props;
    updateProfile(id);
  };

  render() {
    const {data, setDataUser, setData} = this.props;
    console.log('DATA PROFILE ', data);
    return (
      <Container>
        <CardItem cardBody shadow>
          <ImageBackground style={{height: height * 0.32, width}}>
            <TouchableOpacity
              onPressIn={() => this.props.navigation.navigate('dashboard')}>
              <Icon
                type="AntDesign"
                name="left"
                style={{margin: 12, color: 'white'}}
              />
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                margin: 20,
              }}>
              <Image
                source={{
                  uri:
                    'https://reactnativecode.com/wp-content/uploads/2018/01/2_img.png',
                }}
                style={{width: 120, height: 120, borderRadius: 150 / 2}}
              />
              <Text style={{margin: 10, color: 'white', fontSize: 20}}>
                TEST
              </Text>
            </View>
          </ImageBackground>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate('ticket')}>
            <Icon type="FontAwesome" name="ticket" />
          </Button>
        </CardItem>
        <Tabs>
          <Tab
            heading={
              <TabHeading>
                <Icon type="MaterialCommunityIcons" />
                <Text style={{color: 'white'}}>Profil</Text>
              </TabHeading>
            }>
            <ScrollView>
              <Tab1
                name={data.name}
                numberPhone={data.phone_number}
                city={data.city}
                address={data.address}
                firstbank={data.rekening_name1}
                numberRek={data.rekening_number1}
                secondbank={data.rekening_name2}
                secondRek={data.rekening_number2}
                inputName={value => {
                  setDataUser('name', value);
                }}
                inputHp={value => {
                  setDataUser('phone_number', value);
                }}
                inputCity={value => {
                  setDataUser('city', value);
                }}
                inputAdress={value => {
                  setDataUser('address', value);
                }}
                inputBank1={value => {
                  setDataUser('rekening_name1', value);
                }}
                inputNumberRek1={value => {
                  setDataUser('rekening_number1', value);
                }}
                inputBank2={value => {
                  setDataUser('rekening_name2', value);
                }}
                inputNumberRek2={value => {
                  setDataUser('rekening_number2', value);
                }}
                event={() => this.handleUpdate(data.user_id)}
              />
            </ScrollView>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Icon type="MaterialCommunityIcons" />
                <Text style={{color: 'white'}}>Riwayat Transaksi</Text>
              </TabHeading>
            }></Tab>
        </Tabs>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: selectors.getDataProfile(),
});

export default connect(
  mapStateToProps,
  actions,
)(Profile);
