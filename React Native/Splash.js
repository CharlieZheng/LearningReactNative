import React, {Component} from 'react';
import {AppRegistry, Image, StyleSheet, Text, View, Dimensions, StatusBar, TextInput, Button} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
const deviceHeight = require('Dimensions').get('window').height
const deviceWidth = require('Dimensions').get('window').width
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({});
import Main2 from "./profile/main"
const BASE_URL = "http://192.168.1.110:3000"
const url = "/login/cellphone"

const file = "json/login.json"
class Splash extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('main')
        }, 500)
    }

// <StatusBar
// backgroundColor='#ff0000'
// translucent={true}
// hidden={true}
// animated={true}
// />
    render() {
        return (
            <View>
                <Image source={require("./img/favicon.png")}
                       style={{width: deviceWidth, height: deviceHeight, backgroundColor: "#ffff00"}}/>
            </View>)
    }

// flex:1,
}

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            phone: "",
            psw: ""
        }
    }

    render() {
        function submit() {

            fetch(BASE_URL + url + "?phone=" + this.state.phone + "&password=" + this.state.psw, {method: "GET"})
                .then((res) =>
                {  return res.json()})
                .then((res) => {
             })
                .catch(err => {
                    alert(err.toString())
                })
        }

        return (
            <View>
                <TextInput placeholder="手机号码" onChangeText={(text) => {
                    this.setState({phone: text})
                }}/>
                <TextInput placeholder="密码" onChangeText={(text) => {
                    this.setState({psw: text})
                }}/>
                <Button onPress={submit.bind(this)} title="登录"/>
            </View>
        )
    }
}

const App = StackNavigator({
    splash: {
        screen: Splash, navigationOptions: () => {
            header:null
        }
    },
    main: {screen: Main2}
});

AppRegistry.registerComponent('AwesomeProject', () => App);
