import React, {Component} from "react"
import {AsyncStorage, FlatList, Image, StyleSheet, Text, TouchableHighlight, View, Clipboard} from "react-native"
import url from "../base/url"

const styles = StyleSheet.create({
    circleImage: {width: 200, height: 200, borderRadius: 100}
})

class Adapter extends Component {


    render() {
        return ( <View>
            <TouchableHighlight>
                <Image source={{uri: this.props.o.coverImgUrl}} style={[styles.circleImage]}/>
            </TouchableHighlight>
            <Text>{this.props.o.name}</Text>

        </View>)

    }
}

class PlayList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    componentWillMount() {
        AsyncStorage.getItem(url.login, (err, result) => {
            if (err || !result) {

            } else {
                const step1 = eval("(" + result + ")")._bodyInit
                const uid = eval("(" + step1 + ")").account.id

                fetch(url.myDj + "?uid=" + uid, {method: "GET"})
                    .then(res => {
                        Clipboard.setString(JSON.stringify(res))
                        const step1 = JSON.parse(res._bodyText)

                        this.setState({list: step1.programs})

                    })
                    .catch(err => alert(err))
            }
        })

    }

    render() {
        return (
            <View>
                <Text>我的电台</Text>
                <FlatList
                    data={this.state.list}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) =>
                        <Adapter o={item}/>}
                />
            </View>
        )
    }
}


export default  PlayList