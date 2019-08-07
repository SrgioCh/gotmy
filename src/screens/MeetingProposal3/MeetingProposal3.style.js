import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    margin: {
        marginVertical: hp('1.5%')
    },
    icon: {
        width: 22,
        height: 22,
    },
    name: {
        color: 'black',
        fontSize: wp('8%'),
        fontWeight: '500'
    },
    comentInflu: {
        color: 'black',
        fontSize: wp('4%'),
    },
    block: {
        flex: 2.5,
        justifyContent: 'flex-start',

    },
    containerbutton: {
        borderColor: '#ff5a60',
        width: '90%',
        height: '60%',
        borderRadius: 27,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerbutton2: {
        width: '90%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textGrey: {
        fontSize: wp('3.5%'),
        color: 'grey',

    },
});



export default styles;