import {Dimensions, StyleSheet} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0652DD',
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  input: {
    width: DEVICE_WIDTH - 15,
  },
  footer: {
    fontSize: 15,
    alignSelf: 'center',
    margin: 10,
    color: 'white',
  },
  highlight: {
    color: 'orange',
    fontSize: 15,
    fontWeight: 'bold',
  },
  footerfont: {
    fontSize: 15,
  },
  button: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'black',
  },
  fontHeader: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  font: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
