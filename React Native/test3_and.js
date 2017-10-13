// 网络请求
import React, {
    Component
} from 'react';
import {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
const BASE_URL = "http://localhost:3000"
const url = "/top/artists"
var offset = 0
const limit = 30
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    thumbnail: {
        width: 100,
        height: 80
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center'
    },
    year: {
        textAlign: 'center'
    },
});

class ReactNativeTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: null,
            artists: null
        };

    }

    render() {
        // if (!this.state.movies) {
        //     return this.renderLoadingView();
        // }
        // var movie = this.state.movies[0];
        if (!this.state.artists) {
            return this.renderLoadingView();
        }
        return this.renderMovie();
    }

    fetchData() {
        fetch(REQUEST_URL, {
            method: 'GET'
        }).then((response) => response.json()).then((responseData) => {
            this.setState({
                movies: responseData.movies,
            });
        }).catch((error) => {
            callback(error)
        });
    }

    fetchArtists() {
        fetch(BASE_URL + url + "?offset=" + offset + "&limit=" + limit)
            .then((res) =>
            {return  res.json()}
            ).then((res2)=>{ this.setState({artists: res2.artists})})
            .catch((err) => {
                this.setState({artists: [
                    {
                        "img1v1Id":19018252625793868,
                        "topicPerson":0,
                        "albumSize":31,
                        "img1v1Url":"http://p3.music.126.net/Qc5fsvjghmXXrLavDdQWgA==/19018252625793869.jpg",
                        "picId":18769762999688244,
                        "briefDesc":"",
                        "musicSize":368,
                        "picUrl":"http://p3.music.126.net/6OARlbfxOysQJU5iZ8WKSA==/18769762999688243.jpg",
                        "trans":"",
                        "alias":[
                            "Jay Chou"
                        ],
                        "name":"周杰伦",
                        "id":6452,
                        "picId_str":"18769762999688243",
                        "img1v1Id_str":"19018252625793869"
                    }
                ]})
            })
    }

    componentDidMount() {
        // this.fetchData();
        this.fetchArtists()
    }

    renderLoadingView() {
        return (<View><Text>你好，世界！</Text></View>)
    }
    _keyExtractor = (item, index) => item.name;

    renderMovie() {
        /*  return (
        <View style={styles.container}>
        <Image source={{uri: movie.posters.thumbnail}}/>
        <View style={styles.rightContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.year}>{movie.year}</Text>
        </View>
        </View>
      );*/
        return ( <FlatList data={
                this.state.artists
            }  keyExtractor={this._keyExtractor}
                           renderItem={({item}) => (<View><Image source={{uri:item.picUrl}} style={styles.thumbnail}/><Text>{item.name}</Text></View>)}/>
        )
    }
}

AppRegistry.registerComponent('AwesomeProject', () => ReactNativeTest);
