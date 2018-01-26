import {Animated, StyleSheet, Text, View} from 'react-native'
import React from 'react'
/*
Animated API:
    Animated.spring
    Animated.divide 动画值的除法
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 150
    }
})


export default class C1 extends React.Component {
    springValue2 = new Animated.Value(0.3)

    constructor(props) {
        super(props)
        this.springValue = new Animated.Value(0.3)
        this.state =
            {
                log: "{}"
            }
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

    spring2() {

        this.springValue.setValue(0.3)
        Animated.spring(
            this.springValue,
            {
                toValue: 0.2,
                friction: 1
            }
        ).start
        (
            () => {
                this.springValue2 = Animated.divide(2, this.springValue); // 2 / 0.2 = 10
                let temp = this.state.log

                this.setState(
                    {
                        log: temp + "\n" + JSON.stringify(this.springValue) + "    " + JSON.stringify(this.springValue2)
                    }
                )
            }
        );
    }

    render() {
        return (  <View style={styles.container}>
            <Text
                style={{marginBottom: 100}}
                onPress={this.spring2.bind(this)}>Spring</Text>
            <Animated.Image
                style={{width: 227, height: 200, transform: [{scale: this.springValue}]}}
                source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}/>

            <Text>{this.state.log}</Text>
        </View>)
    }


}
