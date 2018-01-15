import { Image, View} from 'react-native';
export default class Bar extends Component {


    render() {
        return (
            <View>
                <Image source={require("../res/svg/svg_bar_1_normal.xml")}
                       style={{width: deviceWidth, height: deviceHeight, backgroundColor: "#ffff00"}}/>
            </View>)
    }

}