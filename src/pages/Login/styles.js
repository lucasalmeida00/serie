import {StyleSheet} from 'react-native';

// eslint-disable-next-line no-undef
export default styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF5',
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 25,
  },
  input: {
    backgroundColor: '#FFF',
    width: '100%',
    height: '100%',
  },
  buttonGroup: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginButton: {padding: 10, width: '30%'},
  registerButton: {padding: 10, width: '30%'},
  loading: {padding: 30},
});
