/**
 * Animated API:
 *     Animated.multiply
 */
import {Animated, Easing, StyleSheet, Text, View} from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20
    }
})

class Child extends React.Component {
    toValueAnimatedValue = 1
    spinValue

    constructor(props) {
        super(props)
        this.spinValue = new Animated.Value(0)
        this.animatedValue = new Animated.Value(0)
        this.opacityValue = new Animated.Value(0)
    }

    spin() {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear, // linear, ease, quad, cubic, sin, elastic, bounce, back, bezier, in, out, inout
                useNativeDriver: true
            }
        ).start(() => {


            // this.spin()
            // alert("spin 动画结束")
        })
    }

    animate() {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: this.toValueAnimatedValue,
                duration: 5000,
                easing: Easing.linear
            }
        ).start(() => {

            // this.animate()
            // alert("animated 动画结束")
        })
    }

    opacityFunction() {
        this.opacityValue.setValue(0)
        Animated.timing(
            this.opacityValue,
            {
                toValue: 1,
                duration: 1000
            }
        ).start()
    }

    componentDidMount() {
        this.spin()
        this.animate()
        this.opacityFunction()
    }


    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        const marginLeft = this.animatedValue.interpolate({
            inputRange: [0, this.toValueAnimatedValue],
            outputRange: [0, 200]
        })
        const opacity = this.animatedValue.interpolate({
            inputRange: [0, 0.25 * this.toValueAnimatedValue, 0.75 * this.toValueAnimatedValue, this.toValueAnimatedValue],
            outputRange: [0, 1, 0, 1]
        })
        const movingMargin = this.animatedValue.interpolate({
            inputRange: [0, 0.5 * this.toValueAnimatedValue, this.toValueAnimatedValue],
            outputRange: [0, 200, 0]
        })
        const textSize = this.animatedValue.interpolate({
            inputRange: [0, 0.5 * this.toValueAnimatedValue, this.toValueAnimatedValue],
            outputRange: [18, 32, 18]
        })
        const rotateX = this.animatedValue.interpolate({
            inputRange: [0, 0.5 * this.toValueAnimatedValue, this.toValueAnimatedValue],
            outputRange: ['0deg', '180deg', '0deg']
        })

        return (
            <View style={
                [{...this.props.style},
                    styles.container]}>
                <Animated.Image
                    style={{
                        width: 227,
                        height: 200,
                        transform: [{rotate: spin}]
                    }}
                    source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
                />
                <Animated.View
                    style={{
                        marginLeft,
                        height: 30,
                        width: Animated.multiply(40, this.animatedValue),
                        backgroundColor: 'red'
                    }}/>

                <Animated.View
                    style={{
                        opacity: this.opacityValue,
                        height: Animated.multiply(30, this.animatedValue),
                        width: 40,
                        backgroundColor: 'red'
                    }}/>
                <Animated.View
                    style={{
                        opacity,
                        marginTop: 10,
                        height: 30,
                        width: 40,
                        backgroundColor: 'blue'
                    }}/>
                <Animated.View
                    style={{
                        marginLeft: movingMargin,
                        marginTop: 10,
                        height: 30,
                        width: 40,
                        backgroundColor: 'orange'
                    }}/>
                <Animated.Text
                    style={{
                        fontSize: textSize,
                        marginTop: 10,
                        color: 'green'
                    }}>
                    Animated Text!
                </Animated.Text>
                <Animated.View
                    style={{
                        transform: [{rotateX}],
                        marginTop: 50,
                        height: 30,
                        width: 40,
                        backgroundColor: 'black'
                    }}>
                    <Text style={{color: 'white'}}>Hello from TransformX</Text>
                </Animated.View>
                {this.props.children}
            </View>
        )
    }

}


export default class C1 extends React.Component {


    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Child style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </Child>
            </View>
        )
    }
}
