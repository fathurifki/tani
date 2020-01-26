import React, {Component} from 'react';
import {
  View,
  Dimensions,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
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
import {
  fetchProfile,
  getPaymentStatus,
  setDataUser,
  updateProfile,
} from './actions';
import * as selectors from './selectors';
import {createStructuredSelector} from 'reselect';
import HistoryCard from '../../components/HistoryCard';

class Profile extends Component {
  componentDidMount() {
    const {fetchProfile: fetch} = this.props;
    fetch();
  }

  handleUpdate = id => {
    const {updateProfile} = this.props;
    updateProfile(id);
  };

  handleCreate = () => {
    const {createProfile} = this.props;
    createProfile();
  };

  keyExtractor = () => item => item._id;

  renderItem = ({item}) => {
    <HistoryCard id={item.product} />;
  };

  render() {
    const {data, setDataUser} = this.props;
    return (
      <Container>
        <CardItem cardBody shadow>
          <ImageBackground
            style={{height: height * 0.32, width, backgroundColor: 'green'}}>
            <TouchableOpacity
              onPressIn={() => this.props.navigation.navigate('home')}>
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
                backgroundColor: 'green',
              }}>
              <Image
                source={{
                  uri:
                    'https://reactnativecode.com/wp-content/uploads/2018/01/2_img.png',
                }}
                style={{width: 120, height: 120, borderRadius: 150 / 2}}
              />
              <Text style={{margin: 8, color: 'white', fontSize: 20}}>
                Halo, {data && data.name ? data.name : null}
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
                userid={data && data.user_id ? data.user_id : null}
                name={data && data.name ? data.name : null}
                numberPhone={
                  data && data.phone_number ? data.phone_number : null
                }
                city={data && data.city ? data.city : null}
                address={data && data.address ? data.address : null}
                firstbank={
                  data && data.rekening_name1 ? data.rekening_name1 : null
                }
                numberRek={
                  data && data.rekening_number1 ? data.rekening_number1 : null
                }
                secondbank={
                  data && data.rekening_name2 ? data.rekening_name2 : null
                }
                secondRek={
                  data && data.rekening_number2 ? data.rekening_number2 : null
                }
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
                eventCreate={() => this.handleCreate()}
                eventUpdate={() => this.handleUpdate(data.user_id)}
                onPress={() => this.props.navigation.navigate('paymentstatus')}
              />
            </ScrollView>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: selectors.getDataProfile(),
  status: selectors.getDataPayment(),
});

export default connect(
  mapStateToProps,
  {fetchProfile, getPaymentStatus, setDataUser, updateProfile},
)(Profile);
