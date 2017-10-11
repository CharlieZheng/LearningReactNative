/**
 * @providesModule RCTGradientColorView
 */

'use strict';

// var PropTypes = require('ReactPropTypes');
var React = require('React');
var View = require('View');
var requireNativeComponent = require('requireNativeComponent');

var GradientColorView = React.createClass({

    // 定义两个控制颜色的属性，与Java层GradientColorView中@ReactProp注解的方法参数保持一致
    propTypes: {
        ...View.propTypes,
        startColor: React.PropTypes.string,
        endColor: React.PropTypes.string,

    },
    render: function() {
        return (
            <NativeGradientColorView
                style={this.props.style}
                startColor={this.props.startColor}
                endColor={this.props.endColor}/>
        );}

});

var NativeGradientColorView = requireNativeComponent('RCTGradientColorView', GradientColorView);

module.exports = GradientColorView;