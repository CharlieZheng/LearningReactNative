import React, {Component} from "react"
import {View, Text} from "react-native"
import url from "../base/url"
import RNFS from "react-native-fs"
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
            .then(res=>{this.setState({profile:res})
            RNFS.writeFile( "json.txt", res , "utf8")
                .then(yes=>alert("写入文件成功"))
                .catch(err=>alert("写入失败"+err))
            })
            .catch(err=>alert(err))
    }
    render() {
        return (<View>
<Text>{this.state.profile.toString()}</Text>
        </View>)
    }
}

module.exports = Main