import React, {Component} from 'react'
import {FlatList, Image, Text, View} from 'react-native'
import {deviceWidth} from "../utils";

export default class MainFootball extends Component {
    render() {
        return (
            <View>
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />

                <Text>免费场</Text>
                <View>
                    <Image source={require("../res/img/bar_5_off.png")}
                           style={{width: deviceWidth / 5, height: 60, backgroundColor: "#00ffffff"}}/>
                    <Image source={require("../res/img/bar_5_off.png")}
                           style={{width: deviceWidth / 5, height: 60, backgroundColor: "#00ffffff"}}/>
                </View>
            </View>)
    }
}