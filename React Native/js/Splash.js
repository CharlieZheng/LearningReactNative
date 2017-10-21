import React, {Component} from 'react';
import {AppRegistry, Image, StyleSheet, Text, View, Dimensions, AsyncStorage} from 'react-native';
import {
    StackNavigator
} from 'react-navigation';
import url from "./base/url"
const deviceHeight = require('Dimensions').get('window').height
const deviceWidth = require('Dimensions').get('window').width
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({});
import Login from "./login"
import Profile from  "./profile"
class Splash extends Component {
    componentWillMount() {
        AsyncStorage.getItem(url.login, (err, result) =>{
            if (err) {
                setTimeout(() => {
                    this.props.navigation.navigate("login")
                }, 500)
            } else {
               /* const json_result = eval("(" + result + ")")._bodyInit
                Clipboard.setString(json_result)*/
                  setTimeout(() => {
                    this.props.navigation.navigate("profile")
                }, 500)
            }
        })
    }


    componentDidMount() {

    }

    render() {
        return (
            <View>
                <Image source={require("./res/img/favicon.png")}
                       style={{width: deviceWidth, height: deviceHeight, backgroundColor: "#ffff00"}}/>
            </View>)
    }

}

const App = StackNavigator({
    splash: {
        screen: Splash, navigationOptions: () => {
            header:null
        }
    },
    login: {screen: Login},
    profile:{screen:Profile}
});

AppRegistry.registerComponent('AwesomeProject', () => App);
