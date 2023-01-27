import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import styles from './style';

const FormRow = props => {
  const {children} = props;
  return <View style={styles.container}>{children}</View>;
};

export default FormRow;
