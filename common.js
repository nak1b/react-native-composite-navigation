import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import App from './app/App'


class TabbedNav extends Component {
  render() {
    return (
      <View style={styles.container}>
        <App />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


export default TabbedNav
