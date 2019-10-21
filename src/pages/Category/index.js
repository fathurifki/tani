import React, {Component} from 'react';
import {View, FlatList, StyleSheet, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Icon,
  Body,
  Title,
  Header,
} from 'native-base';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import * as actions from './actions';
import * as selectors from './selectors';
import CardComponent from '../../components/Category';

class Home extends Component {
  componentDidMount() {
    const {categoryData, navigation} = this.props;
    categoryData(navigation.state.params.category);
  }

  keyExtractor = () => item => item.id;

  renderItem = ({item}) => (
    <CardComponent
      name={item.name}
      image={item.image}
      stock={item.stock}
      price={item.price}
      onPress={() =>
        this.props.navigation.navigate({
          routeName: 'detailproduct',
          params: {id: item._id},
        })
      }
    />
  );
  render() {
    const {data} = this.props;
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Kategori</Title>
          </Body>
        </Header>
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
