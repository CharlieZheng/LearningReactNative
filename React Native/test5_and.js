"use strict"
import React from 'react';
import {AppRegistry, LayoutAnimation, Text, TouchableOpacity, View} from 'react-native';
import {StackNavigator} from 'react-navigation';

var MainScreenNavigator = require('./App2.js');
var FadeInView = require('./FadeInView.js');

class ChatScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 250,
            height: 50
        }
    }

    startAnimation1 = () => {
        return new Promise((yes, no) => {
            var count = 0
            while (++count <= 200) {
                if (count % 7) {
                    requestAnimationFrame(() => {
                        this.setState({
                            width: this.state.width + 1,
                            height: this.state.height + 1
                        })
                        yes()
                        no()
                    })
                }
            }
        })
    }

    startAnimation2() {
        LayoutAnimation.configureNext({
            duration: 2000, //持续时间
            create: { // 视图创建
                type: LayoutAnimation.Types.spring, property: LayoutAnimation.Properties.scaleXY,
            },
            update: { // 视图更新
                type: LayoutAnimation.Types.spring,
            },
        });
        this.setState({width: this.state.width + 10, height: this.state.height + 10});
    }


    componentDidMount() {
        // this.startAnimation1().then().catch()
    }

    f1 = () => {

        return <FadeInView style={{width: 250, height: 50, backgroundColor: 'red'}}>
            <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
        </FadeInView>

    }
    f2 = () => {

        return <View style={{width: this.state.width, height: this.state.height, backgroundColor: 'red'}}>

            <TouchableOpacity onPress={() => this.startAnimation2()}>
                <Text style={{alignSelf: 'center', color: '#FFFFFF'}}>Press me!</Text>
            </TouchableOpacity>

        </View>

    }

    render() {
        return (
            this.f2()
        )
    }
}

class NavigatorWrappingScreen extends React.Component {
    render() {
        return (
            <MainScreenNavigator navigation={this.props.navigation}/>
        );
    }
}

NavigatorWrappingScreen.router = MainScreenNavigator.router

export const SimpleApp = StackNavigator({
    Home: {screen: NavigatorWrappingScreen},
    Chat_whatever_name: {screen: ChatScreen},
});
AppRegistry.registerComponent('AwesomeProject', () => SimpleApp)

