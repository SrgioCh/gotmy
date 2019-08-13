import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        marginTop: hp('2%'),
        backgroundColor: '#FFFFFF',

    },
    containerbutton: {
        backgroundColor: '#ff5a60',
        width: '90%',
        height: '30%',
        borderRadius: 27,
        alignItems: 'center',
        justifyContent: 'center',
    }
});


export default styles;