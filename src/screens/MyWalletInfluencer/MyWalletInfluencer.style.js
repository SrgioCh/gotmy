import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    containerbuttonModal: {
        backgroundColor: '#ff5a60',
        width: '80%',
        paddingVertical: 13,
        borderRadius: 27,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 10,

    },
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        opacity: 0.5,
        padding: 100
    },
});


export default styles;