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
        backgroundColor: '#ff5a60',
        width: '90%',
        height: '60%',
        borderRadius: 27,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        opacity: 0.5,
        padding: 100
    },
    containerbuttonModal: {
        borderColor: '#ff5a60',
        width: '80%',
        paddingVertical: 13,
        borderWidth: 0.5,
        borderRadius: 27,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 10,

    },
});





export default styles;