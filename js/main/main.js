import {TabNavigator} from 'react-navigation';

import MainFootball from './MainFootball'
import MainBasketball from './MainBasketball'
import MainGaming from './MainGaming'
import MainBaseball from './MainBaseball'

const MyNavigator = TabNavigator({
    Football: {
        screen: MainFootball
    },
    Basketball: {
        screen: MainBasketball
    },
    Gaming: {
        screen: MainGaming
    },
    Baseball: {
        screen: MainBaseball
    }
}, {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#F91e63',
        showIcon: true,
        scrollEnabled: false,
    }
});
export default MyNavigator