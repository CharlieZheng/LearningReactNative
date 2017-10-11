import GradientColorView from './GradientColorView.js';
import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';
class _GradientColorView extends Component {
    render() {
        return (<GradientColorView style={{width:80,height:80}} startColor="yellow" endColor="red"/>);
    }
}

AppRegistry.registerComponent('AwesomeProject', () => _GradientColorView);