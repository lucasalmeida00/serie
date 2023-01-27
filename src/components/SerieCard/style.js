import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    height: Dimensions.get('window').width / 2,
    width: '50%',
  },
  card: {
    flex: 1,
    borderWidth: 1,
  },
  cardTitleWrapper: {
    backgroundColor: 'black',
    height: 50,
    position: 'absolute',
    bottom: 0,
    opacity: 0.8,
    width: '100%',

    /**
     * INVENTEI
     */
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;
