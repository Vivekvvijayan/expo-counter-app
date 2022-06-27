import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { connect, Provider } from 'react-redux';
import { store } from './store'
class App extends Component {

  render() {
    return (
      <Provider store={store}>

<View style={styles.container}>

<Button
  title="Increment"

/>
<Text style={{ fontSize: 25 }}>Count :-- </Text>
<Button
  title="Decrement"
/>

</View>

      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps, null)(App);



