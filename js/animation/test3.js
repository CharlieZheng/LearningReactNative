import {Animated, AppRegistry, StyleSheet, Text, View} from 'react-native'
import React from 'react'

class C1 extends React.Component {
    constructor(props) {
        super(props)
        this.springValue = new Animated.Value(0.3)
    }


    spring() {
        this.springValue.setValue(0.3)
        Animated.spring(
            this.springValue,
            {//toValue (number), overshootClamping (boolean), restDisplacementThreshold (number), restSpeedThreshold (number), velocity (number), bounciness (number), speed (number), tension(number), 和 friction (number)。
                toValue: 1,
                friction: 1
            }
        ).start()
    }

    render() {
        return (  <View style={styles.container}>
            <Text
                style={{marginBottom: 100}}
                onPress={this.spring.bind(this)}>Spring</Text>
            <Animated.Image
                style={{width: 227, height: 200, transform: [{scale: this.springValue}]}}
                source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}/>
        </View>)
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 150
    }
})


AppRegistry.registerComponent('AwesomeProject', () => C1)