import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    sub: {
        color: '#312f3d',
        fontSize: wp('4%'),
        letterSpacing: 0.32,
        fontWeight: 'bold'
    },
    subtext: {
        color: '#312f3d',
        fontSize: wp('3.5%'),
        letterSpacing: 0.32,
    },
    icono: {
        width: 30,
        height: 30,
    },
    containerbutton: {
        backgroundColor: '#ff5a60',
        width: '90%',
        height: '60%',
        borderRadius: 27,
        alignItems: 'center',
        justifyContent: 'center',
    }
});


export default styles;