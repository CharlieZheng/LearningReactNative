'use strict';
import {ActivityIndicator, AppRegistry, StyleSheet, Text, View} from "react-native";
import React from "react";

const ReactNative = require('react-native');
const TimerMixin = require('react-timer-mixin');

const ToggleAnimatingActivityIndicator = React.createClass({
    mixins: [TimerMixin],

    getInitialState() {
        return {
            animating: true,
        };
    },

    setToggleTimeout() {
        this.setTimeout(() => {
            this.setState({animating: !this.state.animating});
            this.setToggleTimeout();
        }, 2000);
    },

    componentDidMount() {
        this.setToggleTimeout();
    },

    render() {
        return (
            <View>
                <Text>loading</Text>
                <ActivityIndicator
                    animating={this.state.animating}
                    style={[styles.centering, {height: 80}]}
                    size="large"
                />
            </View>
        );
    }
});

/*exports.displayName = "kkk";
exports.framework = 'React';
exports.title = '<ActivityIndicator>';
exports.description = 'Animated loading indicators.';
exports.examples = [
    {
        title: 'Default (small, white)',
        render() {
            return (
                <ActivityIndicator
                    style={[styles.centering, styles.gray]}
                    color="white"
                />
            );
        }
    },
    {
        title: 'Gray',
        render() {
            return (
                <View>
                    <ActivityIndicator
                        style={[styles.centering]}
                    />
                    <ActivityIndicator
                        style={[styles.centering, {backgroundColor: '#eeeeee'}]}
                    />
                </View>
            );
        }
    },
    {
        title: 'Custom colors',
        render() {
            return (
                <View style={styles.horizontal}>
                    <ActivityIndicator color="#0000ff"/>
                    <ActivityIndicator color="#aa00aa"/>
                    <ActivityIndicator color="#aa3300"/>
                    <ActivityIndicator color="#00aa00"/>
                </View>
            );
        }
    },
    {
        title: 'Large',
        render() {
            return (
                <ActivityIndicator
                    style={[styles.centering, styles.gray]}
                    color="white"
                    size="large"
                />
            );
        }
    },
    {
        title: 'Large, custom colors',
        render() {
            return (
                <View style={styles.horizontal}>
                    <ActivityIndicator
                        size="large"
                        color="#0000ff"
                    />
                    <ActivityIndicator
                        size="large"
                        color="#aa00aa"
                    />
                    <ActivityIndicator
                        size="large"
                        color="#aa3300"
                    />
                    <ActivityIndicator
                        size="large"
                        color="#00aa00"
                    />
                </View>
            );
        }
    },
    {
        title: 'Start/stop',
        render() {
            return <ToggleAnimatingActivityIndicator/>;
        }
    },
    {
        title: 'Custom size',
        render() {
            return (
                <ActivityIndicator
                    style={[styles.centering, {transform: [{scale: 1.5}]}]}
                    size="large"
                />
            );
        }
    },
];*/

const styles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    gray: {
        backgroundColor: '#cccccc',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,
    },
});

AppRegistry.registerComponent('AwesomeProject', () => ToggleAnimatingActivityIndicator);
