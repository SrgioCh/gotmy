import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({

    titulo: {
        color: 'black',
        fontSize: wp('6%'),
        fontWeight: '500'
    },
    textOne: {
        color: 'black',
        fontSize: wp('4%'),
        fontWeight: '500',
        marginBottom: hp('1%'),
    },
    textToo: {
        color: 'black',
        fontSize: wp('3%'),
    },
    textCheck: {
        color: 'black',
        fontSize: wp('4%'),
    },
    icon: {
        width: 25,
        height: 25,
    },

    contInput: {
        height: '80%',
        // paddingVertical: wp('3.5%'),
        width: '85%',
        borderRadius: hp('1.5%'),
        borderColor: 'grey',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
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