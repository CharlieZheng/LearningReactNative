import React, {Component} from "react"
import {Text, View} from "react-native"
import url from "../base/url"
import FileManager from "react-native-filesystem"
class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {profile: ""}
    }


    componentWillMount() {


        fetch(url.profile + "?uid=32953014", {method: "GET"})
            .then(res => JSON.stringify(res))
            .then(res => {
                this.setState({profile: res})
                FileManager.writeToFile("json.txt", res)
                    .then((yes) => alert(yes))
                    .catch((no) => alert(no))
            })
            .catch(err => alert(err))
    }

    render() {
        return (
            <View>
                <Text>{this.state.profile.toString()}</Text>
            </View>
        )
    }
}

module.exports = Main