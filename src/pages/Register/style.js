import {Dimensions, StyleSheet} from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0652DD',
  },
  input: {
    padding: 10,
    width: DEVICE_WIDTH - 10,
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
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
