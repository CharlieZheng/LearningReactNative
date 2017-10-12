import React, {Component} from 'react';
import {AppRegistry, Image, StyleSheet, Text, View, Dimensions,StatusBar} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';

const deviceHeight = require('Dimensions').get('window').height
const deviceWidth = require('Dimensions').get('window').width
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({

});


class Splash extends Component {
    componentDidMount() {
        setTimeout(()=>{this.props.navigation.navigate('main')}, 3000)
    }
    render() {
        return  (
            <View>
                <StatusBar
                    backgroundColor='#ff0000'
                    translucent={true}
                    hidden={true}
                    animated={true}
                />
            <Image source={require( "./img/launch.png" )} style={{ flex:1,width:width,height:height,  backgroundColor : "#ffff00"}}/></View>)
    }
}

class Main extends Component {
    render() {
        return  (<Text>Welcome!</Text>)
    }
}
 const  App = StackNavigator({
    splash: {screen:Splash},
    main: {screen: Main},
});

AppRegistry.registerComponent('AwesomeProject', () => App);
