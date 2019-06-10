import React from 'react';
import { Platform,StyleSheet, Text,Dimensions,
  TextInput,TouchableOpacity, View, Image } from 'react-native';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class Opcionesuno  extends React.Component {
   
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
    <View style={{flexDirection:'row',marginHorizontal:wp('6%'),marginVertical:hp('1.5%')}}>
         <View style={{flex:2.5,alignItems:'center',justifyContent:'center'}}>
              <Image source={this.props.imag} 
               style={{ width:45,height:46,borderRadius:15}}
               /> 
         </View>
         <View  style={{flex:7.5}}>
                 <View style={{paddingTop:hp('1%')}}>
                  <Text style={{color:'white',fontSize:wp('3.5%'),fontWeight: '500'}}>
                  {this.props.texto1}</Text>
                  </View>
                  <View style={{justifyContent:'center',paddingVertical:hp('1%')}}>
                  <Text style={{color:'white',fontSize:wp('3%'),fontWeight: '500'}}>
                  {this.props.texto2}</Text>
                  </View>
        </View>
    </View>
   
   );
}
}




const styles = StyleSheet.create({

 

});