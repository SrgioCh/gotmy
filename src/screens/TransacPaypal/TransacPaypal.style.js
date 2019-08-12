import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    textInform: {
        color: '#312f3d',
        fontSize: wp('3%')
    },
    button: {
        borderColor: '#ff5a60',
        borderWidth: 1,
        width: '90%',
        height: '40%',
        borderRadius: hp('10%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    textMin: {
        fontSize: wp('4%'),
        color: '#312f3d',
        fontWeight: 'bold'
    },
    textMax: {
        fontSize: wp('10%'),
        color: '#312f3d',
        fontWeight: 'bold'
    },
    textButton: {
        color: '#ff5a60',
        fontSize: wp('4.5%'),
        fontWeight: '500'
    },
    block: {
        flex: 2.5,
        justifyContent: 'flex-start',
    }

});


export default styles;