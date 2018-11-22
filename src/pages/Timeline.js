import React, { Component } from 'react';
import api from '../services/api';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Timeline extends Component {
  state = {
    tweets: [],
  };

  static navigationOptions = {
    title: 'Início',
    headerRight: (
      <TouchableOpacity onPress={() => {}}>
        <Icon
          style={{ marginRight: 20 }}
          name="add-circle-outline"
          size={24}
          color="#4BB0EE"
        />
      </TouchableOpacity>
    ),
  };

  async componentDidMount() {
    const response = await api.get('/tweets');

    this.setState({ tweets: response.data });
  }
 
  render() {
    return (
      <View style={styles.container}>
        {this.state.tweets.map(tweet => (
          <Text>{tweet.content}</Text>
          <Text>{tweet.author}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
