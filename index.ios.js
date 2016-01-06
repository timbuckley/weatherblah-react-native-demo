'use strict'

const React = require('react-native')
const {
  AppRegistry,
  View,
  MapView,
  StyleSheet
} = React

const Weather = React.createClass({
  render: function() {
    return(
      <MapView style={styles.map}>
      </MapView>)
  }
})

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
})

AppRegistry.registerComponent('weatherblah', () => Weather)
