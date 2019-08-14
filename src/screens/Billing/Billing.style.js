import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    textoDatos1: {
        //#677183
        color: 'grey',
        fontSize: wp('4%'),

    },
    textoDatos2: {
        color: '#312f3d',
        fontSize: wp('4.5%'),
        fontWeight: '500',
    },
    textoDatos3: {
        color: '#312f3d',
        fontSize: wp('4%'),

    }


});


export default styles;