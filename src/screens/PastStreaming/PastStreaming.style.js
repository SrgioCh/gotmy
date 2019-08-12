import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({

  texto: {
    color: 'red'
  },
  cajaTrans: {
    right: wp('4%'),
    position: "absolute",
    borderRadius: hp('4%'),
    paddingVertical: hp('2%'),
    backgroundColor: 'black',
    width: wp('20%'),
    opacity: 0.7,
  },
  borderImagUser: {
    width: 100,
    height: 100,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'white',
  }

});


export default styles;