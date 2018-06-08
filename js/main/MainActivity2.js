import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';
import styles from "../res/css/div"
import profile from "../res/css/profile"
import { avatarSize, colors, deviceHeight, deviceWidth , sizes} from "../constants/Constants"

export default class MainActivity2 extends Component {
    constructor(props) {
        super(props)
    }

    r() {
        return (
            <View style={{    

                    alignItems: 'center',
                    backgroundColor:'rgba(255, 0, 255, 0.5)',
                     flexDirection: 'column',
                    height:deviceHeight,
                     justifyContent: 'center',
                     width:deviceWidth
                }
                

                } >
            <View
                style={[styles.yuan_jiao_rectangle, {
                    width: 320,
                    height: 220,
                    flexDirection: 'column',  // column，row
                    justifyContent: 'center', // 如何沿main轴排序center,flex-start,flex-end,space-around，space-between
                    alignItems: 'stretch', // 如何沿cross轴排序flex-start | flex-end | center | baseline | stretch 
                }]}

            >
                <View style={[{    
                    alignItems: 'center',
                    backgroundColor: 'rgba(255, 255, 0, 0.5)',
                     flexDirection: 'column',
                     justifyContent: 'center',
                    marginBottom:10
                   
                
                }
                ]

                }>
<TouchableOpacity>
                    <Image source={{ uri: "http://2t.5068.com/uploads/allimg/150626/1-150626102417.jpg" }}
                        style={[profile.circleImage, { height: avatarSize, width: avatarSize }]}
                        resizeMode="cover" />
</TouchableOpacity>
                    <Text style={{ marginTop: 10 }}>Hello World!</Text>



                </View>

                <View
                    style={{     alignItems: 'stretch',
                  
                    
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                       marginTop:10,
                       paddingLeft:sizes.paddingHorizontal,
                       paddingRight:sizes.paddingHorizontal
                    }}
                >
                    <View style={{
                        backgroundColor: 'rgba(255, 255, 0, 0.5)',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{ color: colors.purple }}>酒杯</Text>
                        <Text style={{ color: '#00ff00' }}>Hello World!</Text></View>
                   <View style={{
                       
                        backgroundColor:'#000',
                        width:1}}></View>
                    <View style={{
                        backgroundColor: 'rgba(255, 255, 0, 0.5)',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{ color: colors.purple }}>参与</Text>
                        <Text style={{ color: '#00ff00' }}>Hello World!</Text></View>
                </View>
            </View>
            </View>
        )
    }
    render() {
        return this.r()

    }
}