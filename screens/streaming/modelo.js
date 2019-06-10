import React from 'react';
import { Platform,StyleSheet, Text,Dimensions,
  TextInput,TouchableOpacity, View, Image } from 'react-native';
 
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class Uno  extends React.Component {
   
    static navigationOptions = {
        header: null ,
    };
 
constructor(props) {
  super(props);

this.state = {
  
 
  }

}

    render() {

    screenHeight=Dimensions.get('window').height;

 

    return (
    <View style={{flex:1}}>

 


   </View>
   
   );
}
}




const styles = StyleSheet.create({

 

});