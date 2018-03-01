import React, {Component} from 'react';
import {AsyncStorage, Image, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import url from "./js/base/url"
import Login from "./js/login"
import Profile from "./js/profile"
import PlayList from "./js/my/PlayList"
import myDj from "./js/my/myDj"
import myFollows from "./js/my/myFollows"
import myFans from "./js/my/myFans"
import {deviceHeight, deviceWidth} from "./js/utils"

import MainActivity from "./js/main/MainActivity"

class Splash extends Component {
    componentWillMount() {
        AsyncStorage.getItem(url.login, (err, result) => {
            if (err || !result) {
                setTimeout(() => {
                    this.props.navigation.navigate("login")
                }, 500)
            } else {
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
                <Image source={require("./js/res/img/favicon.png")}
                       style={{width: deviceWidth, height: deviceHeight, backgroundColor: "#ffff00"}}/>
            </View>)
    }

}

const Stack = StackNavigator({
    splash: {
        screen: Splash
    },
    login: {screen: Login},
    profile: {screen: Profile},
    playlist: {screen: PlayList},
    myFollows: {screen: myFollows},
    myFans: {screen: myFans},
    myDj: {screen: myDj}
});
export default class App extends Component<> {
    /*import C1 from "./js/Animated API/test2"
    <C1/>*/

    /*import AntDesign from "./js/learning_antd/AntDesign"
            <AntDesign/>*/
    render() {
        return (
            <MainActivity/>
        );
    }
}