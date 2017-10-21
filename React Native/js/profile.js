import React, {Component} from "react"
import {Text, View, AsyncStorage, Clipboard} from "react-native"
import url from "./base/url"

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {profile: "", uid: ""}
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
                Clipboard.setString(res)

                      const _bodyInit =  eval("("+result+")")._bodyInit
                        const _bodyText= eval("("+result+")")._bodyText

                    })
                    .catch(err => alert(err))
            }
        })

    }

    render() {
        return (
            <View>
                <Text>{this.state.profile.toString()}</Text>
            </View>
        )
    }
}

module.exports = Profile