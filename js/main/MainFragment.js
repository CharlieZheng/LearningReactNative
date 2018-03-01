import {TabNavigator} from 'react-navigation';
import MainFragmentChild from './MainFragmentChild'

const MainFragment = TabNavigator({
    Football: {
        screen: MainFragmentChild
    },
    Basketball: {
        screen: MainFragmentChild
    },
    Gaming: {
        screen: MainFragmentChild
    },
    Baseball: {
        screen: MainFragmentChild
    }
}, {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#F91e63',
        showIcon: false,
        scrollEnabled: true,//多个时（超出屏幕）标签页是否可以左右滑动
        inactiveTintColor: 'green',
        // initialRouteName:  //不明白什么用
        // order:
        // paths:
        // backBehavior:'none'
        // activeBackgroundColor:'#f00',//选中的标签页背景颜色   没有什么效果
        // inactiveBackgroundColor:'#00f',  //未选中的标签页背景颜色   没有什么效果
        pressColor: '#ccc',//点击时水波纹颜色 android>5.0
        showLabel: true,//是否显示 标签页
        upperCaseLabel: false,//标签（英文）文字是否大写
        // pressOpacity: ios 有用
        //标签页文字区域样式
        labelStyle: {
            fontSize: 17,//字体大小
            margin: 0
            // backgroundColor:'red',  //文字的背景颜色
        },
        //整个标签页的样式
        style: {
            backgroundColor: '#ffff00',


        },
        //标签页图片显示区域样式
        iconStyle: {
            backgroundColor: 'black',

        },
        //单个标签页选项的样式
        tabStyle: {
            backgroundColor: '#00000000', // 得设置为透明的指示器才可见
            padding: 10,//取消默认高度
        },
        //指示器样式
        indicatorStyle: {
            backgroundColor: '#53a8eF',
            height: 3,

        }
    }
});
export default MainFragment