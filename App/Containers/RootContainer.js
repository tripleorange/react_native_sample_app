import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import NavigationRouter from '../Navigation/NavigationRouter';

// Styles
import styles from './Styles/RootContainerStyle';

class RootContainer extends Component {

  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="dark-content" />
        <NavigationRouter />
      </View>
    );
  }
}

export default (RootContainer);
