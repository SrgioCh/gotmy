import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    textMoney: {
        fontSize: wp('11%'),
        color: '#312f3d',
        fontWeight: 'bold'
    },
    textInform: {
        color: '#312f3d',
        fontSize: wp('3%')
    },
    contInput: {
        height: '50%',
        width: '55%',
        borderRadius: hp('4%'),
        borderColor: 'grey',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
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
    button: {
        backgroundColor: '#ff5a60',
        width: '90%',
        height: '50%',
        borderRadius: hp('10%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    borderBase1: {
        flex: 1,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5
    },
    borderBase7: {
        flex: 7.5,
        paddingBottom: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5
    },
    icono: {
        width: 30,
        height: 30,
    }
});


export default styles;