import React, {Component} from 'react'
import {Clipboard, FlatList, Image, Text, View} from 'react-native'
import {list_main} from '../base/URLByFantasy'

export default class MainBasketball extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    componentWillMount() {

        fetch(list_main + "?lobbyId=" + 1, {method: "GET"})
            .then(res => {
                Clipboard.setString(JSON.stringify(res))
                let temp = JSON.parse(res._bodyText)
                this.setState({list: temp.data})

            })
            .catch(err => alert(err))

    }

    _getLogo(item, host) {
        if (item.expandedContest) {
            if (item.expandedContest.matches && item.expandedContest.matches.length > 0)
                if (host)
                    return item.expandedContest.matches[0].hostTeamLogo
                else return item.expandedContest.matches[0].guestTeamLogo
        }
    }


    render() {
        return (
            <View>
                <FlatList
                    data={this.state.list}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) =>
                        <View>
                            <Text>{item.name}</Text>
                            <Image
                                source={{uri: this._getLogo(item, true)}}
                                style={{width: 60, height: 60, backgroundColor: "#00ffffff"}}/>
                            <Image
                                source={{uri: this._getLogo(item, false)}}
                                style={{width: 60, height: 60, backgroundColor: "#00ffffff"}}/>
                        </View>
                    }
                />
            </View>)
    }
}