'use strict'

const Api = require('./src/api')
const React = require('react-native')
const {
  AppRegistry,
  View,
  Text,
  MapView,
  StyleSheet
} = React

const APIKEY = "058e0caee9fe24d810aa10039a9fc8fb"

const Weather = React.createClass({
  getInitialState: function() {
      return {
        pin: {
          latitude: 37,
          longitude: -95
        },
        city: '',
        temperature: '',
        description: ''
      }
  },
  render: function() {
    return(
      <View style={styles.container}>
        <MapView
          annotations={[this.state.pin]}
          onRegionChangeComplete={this.onRegionChangeComplete}
          style={styles.map}>
        </MapView>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{this.state.city}</Text>
          <Text style={styles.text}>{this.state.temperature}</Text>
          <Text style={styles.text}>{this.state.description}</Text>
        </View>
      </View>
    )
  },
  onRegionChangeComplete: function(region) {
    this.setState({
      pin: {
        latitude: region.latitude,
        longitude: region.longitude
      }
    });

    Api(region.latitude, region.longitude)
      .then((data) => {
        console.log(data)
        this.setState(data);
      });
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    // backgroundColor: '#F5FCFF'
  },
  map: {
    flex: 20,
    marginTop: 30
  },
  textWrapper: {
    flex: 10,
    alignItems: 'center'
  },
  text: {
    fontSize: 30
  }
})

AppRegistry.registerComponent('weatherblah', () => Weather)
