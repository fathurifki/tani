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

const {height, width} = Dimensions.get('window');
import Tab1 from '../../components/Profile';

export default class Profile extends Component {
  render() {
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
              <Tab1 />
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
