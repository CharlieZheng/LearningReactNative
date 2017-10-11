// FadeInView.js
import React from 'react';
import {Animated,} from 'react-native';

export class FadeInView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),
        };
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {toValue: 1,duration: 2000},
        ).start();
    }

    render() {
        return (
            <Animated.View
                style={{
                    opacity: this.state.fadeAnim,
                    transform: [{
                        translateY: this.state.fadeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [150, 0]
                        }),
                    }],
                }}>
                {this.props.children}
            </Animated.View>
        );
    }
}

module.exports = FadeInView;