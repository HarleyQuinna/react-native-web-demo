import React from 'react';
import { 
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import Home from './home';
import Header from './header';

class App extends React.Component {
  render(){
    return (
    <View style={styles.appContainer}>
      <Header title="Random User" />
      <Home />
    </View>
      );
  } 
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

//register the App component
AppRegistry.registerComponent('App', () => App);

export default App;
