import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

class SerieDetail extends Component {
  render() {
    const {serie} = this.props.route.params;
    return (
      <View>
        <Text>{serie.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default SerieDetail;
