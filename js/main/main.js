import {TabNavigator} from 'react-navigation';
import MainBasketball from './FragmentMain'

const MyNavigator = TabNavigator({
    Football: {
        screen: MainBasketball

    },
    Basketball: {
        screen: MainBasketball,
        headerTitle: 'd'
    },
    Gaming: {
        screen: MainBasketball
    },
    Baseball: {
        screen: MainBasketball,
        params: {name: 'world'}
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