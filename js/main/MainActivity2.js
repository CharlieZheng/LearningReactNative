import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';
import styles from "../res/css/div"
import profile from "../res/css/profile"
import { avatarSize, colors, deviceHeight, deviceWidth, sizes } from "../constants/Constants"

export default class MainActivity2 extends Component {
    constructor(props) {
        super(props)
    }

    xie_cheng_bar() {
        let _styles = StyleSheet.create({
            textHeight: {
                height: 30
            }
        })
        return (<View
            style={[styles.xie_cheng_yuan_jiao_rectangle, {
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 100,
                marginLeft: sizes.paddingHorizontal,
                marginRight: sizes.paddingVertical
            }]}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }} >
                <View style={[styles.item_div]}>
                    <Image source={{ uri: "https://about.gitlab.com/images/logo.png" }} style={{ height: 20, width: 20 }}></Image>
                    <Text style={[_styles.textHeight]} numberOfLines={1} >WiFi电话卡</Text>
                </View>
                <View style={[styles.item_div]}>
                    <Image source={{ uri: "https://about.gitlab.com/images/logo.png" }} style={{ height: 20, width: 20 }}></Image>
                    <Text style={[_styles.textHeight]}>保险 签证</Text>
                </View>
                <View style={[styles.item_div]}>
                    <Image source={{ uri: "https://about.gitlab.com/images/logo.png" }} style={{ height: 20, width: 20 }}></Image>
                    <Text style={[_styles.textHeight]}>外币 购物</Text>
                </View>
                <View style={[styles.item_div]}>
                    <Image source={{ uri: "https://about.gitlab.com/images/logo.png" }} style={{ height: 20, width: 20 }}></Image>
                    <Text style={[_styles.textHeight]}>当地向导</Text>
                </View>
                <View style={[styles.item_div]}>
                    <Image source={{ uri: "https://about.gitlab.com/images/logo.png" }} style={{ height: 20, width: 20 }}></Image>
                    <Text style={[_styles.textHeight]}>礼品卡</Text>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <View style={[styles.item_div]}>
                    <Image source={{ uri: "https://about.gitlab.com/images/logo.png" }} style={{ height: 20, width: 20 }}></Image>
                    <Text style={[_styles.textHeight]}>自由行</Text>
                </View>
                <View style={[styles.item_div]}>
                    <Image source={{ uri: "https://about.gitlab.com/images/logo.png" }} style={{ height: 20, width: 20 }}></Image>
                    <Text style={[_styles.textHeight]}>出境商城</Text>
                </View>
                <View style={[styles.item_div]}>
                    <Image source={{ uri: "https://about.gitlab.com/images/logo.png" }} style={{ height: 20, width: 20 }}></Image>
                    <Text style={[_styles.textHeight]}>信用卡</Text>
                </View>
                <View style={[styles.item_div]}>
                    <Image source={{ uri: "https://about.gitlab.com/images/logo.png" }} style={{ height: 20, width: 20 }}></Image>
                    <Text style={[_styles.textHeight]}>加盟合作</Text>
                </View>
                <View style={[styles.item_div]}>
                    <Image source={{ uri: "https://about.gitlab.com/images/logo.png" }} style={{ height: 20, width: 20 }}></Image>
                    <Text style={[_styles.textHeight]}>更多</Text>
                </View>
            </View>
        </View>)

    }
    r() {
        return (
            <View style={{

                alignItems: 'center',
                backgroundColor: 'rgba(255, 0, 255, 0.5)',
                flexDirection: 'column',
                height: deviceHeight,
                justifyContent: 'center',
                width: deviceWidth,
                paddingLeft: sizes.paddingHorizontal,
                paddingRight: sizes.paddingHorizontal
            }


            } >
                <View
                    style={[styles.yuan_jiao_rectangle, {
                        width: '100%',

                        height: 220,
                        flexDirection: 'column',  // column，row
                        justifyContent: 'center', // 如何沿main轴排序center,flex-start,flex-end,space-around，space-between
                        alignItems: 'stretch' // 如何沿cross轴排序flex-start | flex-end | center | baseline | stretch 

                    }]}

                >
                    <View style={[{
                        alignItems: 'center',
                        backgroundColor: 'rgba(255, 255, 0, 0.5)',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        marginBottom: 10


                    }
                    ]

                    }>
                        <TouchableOpacity>
                            <Image source={{ uri: "https://about.gitlab.com/images/logo.png" }}
                                style={[profile.circleImage, { backgroundColor: '#00ff00' }]}
                                resizeMode="cover" />
                        </TouchableOpacity>
                        <Text style={{ marginTop: 10 }}>Hello World!</Text>



                    </View>

                    <View
                        style={{
                            alignItems: 'stretch',


                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10,
                            paddingLeft: sizes.paddingHorizontal,
                            paddingRight: sizes.paddingHorizontal
                        }}
                    >
                        <View style={{
                            backgroundColor: 'rgba(255, 255, 0, 0.5)',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={{ color: colors.purple }}>酒杯</Text>
                            <Text style={{ color: '#00ff00' }}>Hello World!</Text></View>
                        <View style={{

                            backgroundColor: '#000',
                            width: 1
                        }}></View>
                        <View style={{
                            backgroundColor: 'rgba(255, 255, 0, 0.5)',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={{ color: colors.purple }}>参与</Text>
                            <Text style={{ color: '#00ff00' }}>Hello World!</Text></View>
                    </View>
                </View>
            </View>
        )
    }



    render() {

        return this.xie_cheng_bar()

    }
}