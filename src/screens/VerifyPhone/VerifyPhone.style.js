import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    Textprinci: {
        color: 'black',
        fontSize: wp('6%'),
        fontWeight: '500',
    },
    Text: {
        color: 'black',
        fontSize: wp('3.5%'),

        textAlign: 'center'
    },
    containerbutton: {
        backgroundColor: '#ff5a60',
        width: '90%',
        height: '30%',
        borderRadius: 27,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flag: {
        paddingVertical: hp('1%'),
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: hp('5%'),
        width: '90%',
        flexDirection: 'row',
    },
    number: {
        paddingVertical: hp('1%'),
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: hp('5%'),
        width: '100%'
    },
    but: {
        backgroundColor: 'white',
        borderRadius: hp('1%'),
        width: '90%',
        height: '90%',
        alignItems: 'center'
    },
    num: {
        color: 'black',
        fontSize: wp('7%'),
        fontWeight: '500',
        textAlign: 'center'
    },
    letras: {
        color: 'black',
        fontSize: wp('4%'),
        textAlign: 'center'
    },


});


export default styles;