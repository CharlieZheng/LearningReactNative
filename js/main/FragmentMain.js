import React, {Component} from 'react'
import {Clipboard, FlatList, Image, StyleSheet, Text, View} from 'react-native'
import {list_main} from '../base/URLByFantasy'

const styles = StyleSheet.create({
    matchTitle: {textAlign: 'center', alignSelf: 'center', backgroundColor: '#ffff00'},
    item: {paddingLeft: 20, paddingRight: 20}
})

export default class MainBasketball extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            lobbyId: 0,
            refreshing: false
        }
    }

    _refresh() {
        this.setState({refreshing: true})
        fetch(list_main + "?lobbyId=" + this.state.lobbyId, {method: "GET"})
            .then(res => {
                this.setState({refreshing: false})
                Clipboard.setString(JSON.stringify(res ))
                let temp = JSON.parse(res._bodyText)
                this.setState({list: temp.data})

            })
            .catch(err => {
                this.setState({refreshing: false})
                alert(err)
            })
    }

    componentWillMount() {

        const {state} = this.props.navigation;

        if (state) {

            switch (JSON.parse(JSON.stringify(state)).key) {
                case 'Football':
                    this.setState({lobbyId: 1})
                    break
                case 'Basketball':
                    this.setState({lobbyId: 2})
                    break
                case 'Gaming':
                    this.setState({lobbyId: 3})
                    break
                case 'Baseball':
                    this.setState({lobbyId: 4})
                    break
            }
        }
        /*  if (state.params) alert(state.params.toString())
          else alert(null)
        */
        this._refresh()

    }

    _getLogo(item, host) {
        if (item.expandedContest) {
            if (item.expandedContest.matches && item.expandedContest.matches.length > 0)
                if (host)
                    return item.expandedContest.matches[0].hostTeamLogo
                else return item.expandedContest.matches[0].guestTeamLogo
        }
    }

    _getTeamName(item, host) {
        if (item.expandedContest) {
            if (item.expandedContest.matches && item.expandedContest.matches.length > 0)
                if (host)
                    return item.expandedContest.matches[0].hostTeamName
                else return item.expandedContest.matches[0].guestTeamName
        }
    }

    _getContestName(item) {
        if (item.expandedContest) {
            return item.expandedContest.contestName
        }
    }


    _itemView(item) {

        if (item.showType === 'CONTEST_MATCH')
            return (

                <View style={[styles.item]}>
                    <Text>{item.name}</Text>
                    <Text style={[styles.matchTitle]}>{this._getContestName(item)}</Text>
                    <View
                        style={{flexDirection: 'row', backgroundColor: '#ff00ff', justifyContent: 'space-around'}}>
                        <View style={{flexDirection: 'row', backgroundColor: '#ffff00'}}>
                            <Image
                                source={{uri: this._getLogo(item, true)}}
                                style={{width: 60, height: 60, resizeMode: 'contain'}}/>
                            <Text style={{alignSelf: 'center'}}>{this._getTeamName(item, true)}</Text>
                        </View>
                        <Text style={[styles.matchTitle]}>VS</Text>
                        <View style={{flexDirection: 'row', backgroundColor: '#ffff00'}}>
                            <Text style={{alignSelf: 'center'}}>{this._getTeamName(item, false)}</Text>
                            <Image
                                source={{uri: this._getLogo(item, false)}}
                                style={{width: 60, height: 60, resizeMode: 'contain'}}/>
                        </View>
                    </View>
                </View>
            )
        else if (item.showType === 'COMPETITION_LIST')
            return (
                <View style={[styles.item]}>
                    <Text>{item.name}</Text>
                    <Image
                        source={{uri: item.imgUrl}}
                        style={{flex: 1, height: 100, resizeMode: 'contain'}}/>
                </View>
            )
        else if (item.showType === 'SLOT_CONTEST') {
            return (
                <View style={[styles.item]}>
                    <Text>{item.name}</Text>
                </View>
            )
        }
    }

    _bottom() {
        return (   <Text>没有更多了～</Text>)
    }

                    // refreshing={this.state.refreshing}
                    // onRefresh={this._refresh()}

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.list}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) =>
                        this._itemView(item)
                    }
                    ListFooterComponent={this._bottom()}
                    ListHeaderComponent={this._bottom()}
                />
            </View>)
    }
}