import React, {Component} from "react"
import {View, Text} from "react-native"
import url from "../base/url"
class Main extends Component {

    constructor(props) {
        super(props)
        this.state={profile:""}
    }
    componentWillMount() {
        fetch(url.profile+"?uid=32953014", {
            method:"GET"
        })
            .then(res=> JSON.stringify(res))
            .then(res=>this.setState({profile:res}))
            .catch(err=>alert(err))
    }
    render() {
        return (<View>
<Text>{this.state.profile.toString()}</Text>
        </View>)
    }
}

module.exports = Main