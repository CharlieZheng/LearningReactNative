import React, {Component} from "react"
import {View, TextInput, Button, AsyncStorage, Clipboard} from "react-native"

import url from "./base/url"
class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            phone: "",
            psw: "",
            json_result:""
        }
    }

    render() {
        function submit() {

//             this.props.navigation .navigate("profile")

            if(this.state.phone=="") {
                alert("手机号码不能为空")
            }
            if (this.state.psw=="") {
                alert("密码不能为空")
            }
            fetch(url.login + "?phone=" + this.state.phone + "&password=" + this.state.psw, {method: "GET"})
                .then((res) =>
                  JSON.stringify(res))
                .then((res) => {
                    AsyncStorage.setItem(  url.login, res.toString(), (err) =>{
                        if (err) {
                            alert("no")
                        } else {
                            alert("yes")
                        }
                    } )

                })
                .catch(err => {
                    alert(err.toString())
                })
        }

        return (
            <View>
                <TextInput placeholder="手机号码" onChangeText={(text) => {
                    this.setState({phone: text})
                }}/>
                <TextInput placeholder="密码" onChangeText={(text) => {
                    this.setState({psw: text})
                }}/>

                <Button onPress={submit.bind(this)} title="登录"/>
                <TextInput value={this.state.json_result}/>
            </View>
        )
    }
}

export default  Login