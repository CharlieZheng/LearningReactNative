import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    yuan_jiao_rectangle: {
        borderWidth: 2, borderColor: '#ffff00', borderRadius: 10,
        backgroundColor: '#ffffff'
    },
    item_div:{
        alignItems:'center',
        flex:1,
        justifyContent:'center'
    }
    , xie_cheng_yuan_jiao_rectangle: {
     backgroundColor: '#ffffff',  borderColor: '#ffffff',borderRadius: 10,
         borderWidth: 2,  shadowColor:'#000',shadowOffset:{height:0, width:0},
         shadowOpacity:0.5,shadowRadius:10
    }
})

// export default  styles
module.exports = styles