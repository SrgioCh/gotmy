import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({


    text: {
        textAlign: 'center',
        color: "black",
        fontSize: wp('6%'),
        fontWeight: "bold",
        fontStyle: "normal",
        textAlign: 'center',
        marginBottom: hp('1.5%')
    },
    subtitulo: {

        backgroundColor: 'white',
        textAlign: 'center',
        color: "gray",
        fontSize: wp('4.5%'),
        textAlign: 'center',
        fontWeight: "normal",



    },
    containerbutton: {

        backgroundColor: '#ff5a60',
        width: '90%',
        paddingVertical: 13,
        borderRadius: 27,
        alignItems: 'center',
        marginBottom: 40,
    },

});


export default styles;