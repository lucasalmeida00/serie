import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
  Alert,
  Text,
} from 'react-native';
import FormRow from './../../components/FormRow';
import styles from './styles';
import {connect} from 'react-redux';
import {tryLogin} from './../../store/actions/user';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'lucas@email.com',
      password: 'borracha',
      isLoading: false,
      message: '',
    };
  }

  handleChangeInput(value, key) {
    this.setState({
      [key]: value,
    });
  }

  handleSubmitLogin() {
    const {email, password} = this.state;
    this.setState({isLoading: true});
    this.props
      .tryLogin({email, password})
      .then(user => {
        if (user) return this.props.navigation.replace('Main');

        this.setState({isLoading: false, message: ''});
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isLoading: false,
          message: this.getMessageByErrorCode(err.code),
        });
      });
  }

  getMessageByErrorCode(errorCode) {
    switch (errorCode) {
      case 'auth/wrong-password':
        return 'Senha incorreta';
      case 'auth/user-not-found':
        return 'Usuário não encontrado';
      default:
        break;
    }
  }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.form}>
          <FormRow>
            <TextInput
              styles={styles.input}
              placeholder="E-mail de acesso"
              value={this.state.email}
              onChangeText={e => this.handleChangeInput(e, 'email')}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </FormRow>
          <FormRow>
            <TextInput
              styles={styles.input}
              placeholder="Senha"
              secureTextEntry
              value={this.state.password}
              onChangeText={e => this.handleChangeInput(e, 'password')}
            />
          </FormRow>
          {!this.state.isLoading ? (
            <View style={styles.buttonGroup}>
              <View style={styles.loginButton}>
                <Button
                  title="Entrar"
                  onPress={() => this.handleSubmitLogin()}
                />
              </View>
              <View style={styles.registerButton}>
                <Button
                  title="Registrar"
                  onPress={() => console.warn('REgistrei')}
                />
              </View>
            </View>
          ) : (
            <View style={styles.loading}>
              <ActivityIndicator />
            </View>
          )}
          {this.state.message !== '' && <Text>{this.state.message}</Text>}
        </View>
      </View>
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = {
  tryLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
