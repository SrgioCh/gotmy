import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    margin: {
        marginVertical: hp('1.5%')
    },
    titulo: {
        color: 'black',
        fontSize: wp('5%'),
        fontWeight: '500'
    },
    subtext: {
        color: 'black',
        fontSize: wp('3.5%'),
    },
    contInput: {
        height: hp('30%'),
        // paddingVertical: wp('3.5%'),
        width: '95%',
        borderRadius: hp('1.5%'),
        borderColor: 'grey',
        borderWidth: 0.3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contInputmanyPeople: {
        height: hp('5%'),
        width: '90%',
        borderRadius: hp('4%'),
        borderColor: 'grey',
        borderWidth: 0.3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textCheck: {
        color: 'black',
        fontSize: wp('3.5%'),
    },
    icon: {
        width: 25,
        height: 25,
    },
    calendar: {
        width: 25,
        height: 25,
        marginRight: 5,
    },
    containerbutton: {
        backgroundColor: '#ff5a60',
        width: '90%',
        height: '60%',
        borderRadius: 27,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textGrey: {
        fontSize: wp('3.5%'),
        color: 'grey',

    },
    name: {
        color: 'black',
        fontSize: wp('6%'),
        fontWeight: '500'
    },
    comentInflu: {
        color: 'black',
        fontSize: wp('4%'),
    },
});


export default styles;