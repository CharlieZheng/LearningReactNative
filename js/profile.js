import React, {Component} from "react"
import {AsyncStorage, Button, Image, StyleSheet, Text, TouchableHighlight, View} from "react-native"
import url from "./base/url"

// import styles from "./res/css/profile"

const styles = StyleSheet.create({
    circleImage: {width: 200, height: 200, borderRadius: 100}
})

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {uid: "", _bodyInit: {profile: {avatarUrl: "", nickname: ""}}}
    }

    componentWillMount() {
        AsyncStorage.getItem(url.login, (err, result) => {
            if (err) {

            } else {
                const step1 = eval("(" + result + ")")._bodyInit
                const uid = eval("(" + step1 + ")").account.id

                this.setState({uid: uid});
                fetch(url.profile + "?uid=" + this.state.uid, {method: "GET"})
                    .then(res => JSON.stringify(res))
                    .then(res => {
                        this.setState({profile: res})

                        const _bodyInit = eval("(" + eval("(" + result + ")")._bodyInit + ")")
                        this.setState({_bodyInit: _bodyInit})

                    })
                    .catch(err => alert(err))
            }
        })

    }

    render() {
        return (
            <View>
                <TouchableHighlight onPress={() => {
                    alert(this.state._bodyInit.profile.nickname)
                }} activeOpacity={1}>
                    <Image source={{uri: this.state._bodyInit.profile.avatarUrl}} style={[styles.circleImage]}/>
                </TouchableHighlight>
                <Text>{this.state._bodyInit.profile.nickname}</Text>
                <Button onPress={() => {
                    this.props.navigation.navigate("playlist")
                }}
                        title="我的歌单"
                        color="#841584"
                        accessibilityLabel="我的歌单"/>
                <Button onPress={() => {
                    this.props.navigation.navigate("myDj")
                }}
                        title="我的电台"
                        color="#841584"
                        accessibilityLabel="我的电台"/>
                <Button onPress={() => {
                    this.props.navigation.navigate("myFollows")
                }}
                        title="我的关注"
                        color="#841584"
                        accessibilityLabel="我的关注"/>
                <Button onPress={() => {
                    this.props.navigation.navigate("myFans")
                }}
                        title="我的粉丝"
                        color="#841584"
                        accessibilityLabel="我的粉丝"/>
            </View>
        )
    }
}

export default  Profile