import React from 'react'
import {Animated, Image, LayoutAnimation, PanResponder, ScrollView, Text, TouchableOpacity, View} from 'react-native'

import {deviceHeight, deviceWidth} from "../constants/Constants"
class Demo1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            trans: new Animated.ValueXY(),
        }
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true, //响应手势
            onPanResponderMove: Animated.event(
                [
                    null, // 忽略原生事件
                    {dx: this.state.trans.x, dy: this.state.trans.y}
                ] // 绑定动画值
            ),
            onPanResponderRelease: () => {//手松开，回到原始位置
                Animated.spring(this.state.trans, {toValue: {x: 0, y: 0}}
                ).start()
            },
            onPanResponderTerminate: () => {//手势中断，回到原始位置
                Animated.spring(this.state.trans, {toValue: {x: 0, y: 0}}
                ).start()
            },
        })
    }

    render() {
        return (
            <View>
                <Animated.View style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    backgroundColor: 'red',
                    transform: [
                        {translateY: this.state.trans.y},
                        {translateX: this.state.trans.x},
                    ],
                }}
                               {...this._panResponder.panHandlers}
                >
                </Animated.View>
            </View>
        )
    }
}

class Demo2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            xOffset: new Animated.Value(1.0)
        }
    }

    render() {
        return (
            <View>
                <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{width: deviceWidth, height: deviceHeight}}
                            onScroll={Animated.event(
                                [{nativeEvent: {contentOffset: {x: this.state.xOffset}}}]
                            )}
                            scrollEventThrottle={100}>
                    <Animated.Image source={require('../res/img/favicon.android.png')}
                                    style={{
                                        height: deviceHeight,
                                        width: deviceWidth,
                                        opacity: this.state.xOffset.interpolate({
                                            inputRange: [0, deviceWidth],
                                            outputRange: [1.0, 0.0]
                                        }),
                                    }}
                                    resizeMode="cover"/>
                    <Image source={require('../res/img/favicon.android.png')}
                           style={{height: deviceHeight, width: deviceWidth}}
                           resizeMode="cover"/>
                    <Image source={require('../res/img/favicon.android.png')}
                           style={{height: deviceHeight, width: deviceWidth}}
                           resizeMode="cover"/>
                </ScrollView>
            </View>
        )
    }
}

class Demo3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {//设置初值
            marginBottom: 0
        }
    }

    _textUp() {
        LayoutAnimation.spring()
        this.setState({marginBottom: this.state.marginBottom + 100})
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this._textUp()}
                                  style={{
                                      width: 120,
                                      height: 40,
                                      alignItems: 'center',
                                      marginTop: this.state.marginBottom,
                                      justifyContent: 'center',
                                      backgroundColor: '#00ffff',
                                      borderRadius: 20
                                  }}>
                    <Text>Text UP</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


export default Demo2