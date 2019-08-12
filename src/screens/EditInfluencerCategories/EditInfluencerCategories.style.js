import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    texto: {
        color: 'grey',
        fontSize: wp('4%'),
    },
    filas: {
        flex: 1,
        flexDirection: 'row',
        marginTop: hp('1.5%'),
    },
    textoprueba: {
        position: 'absolute',
        zIndex: 3,
        color: 'white',
        fontWeight: '500',
        textAlign: 'left',
        bottom: hp('2%'),
        left: wp('2%')
    },



});


export default styles;