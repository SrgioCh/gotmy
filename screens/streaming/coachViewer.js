import React from 'react';
import { Platform,StyleSheet, Text,Dimensions,
  TextInput,TouchableOpacity, View, Image } from 'react-native';
 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import OpcionesUno from "./componentes/opcionesUno"


export default class CoachViewer  extends React.Component {
   
    static navigationOptions = {
        header: null ,
    };
 
constructor(props) {
  super(props);

this.state ={
             opciones:[
               {
                imag:require('../../assets/streamingIcon/reloadselec.png'),
                text1 : 'Raise Your Hand',
                text2 : 'Request attention from the influencer, and wait for you turn to speak',
               },
               {
                imag:require('../../assets/streamingIcon/video.png'),
                text1 : 'Camera On/Off',
                text2 : 'Enable or disable your camera when the Influencer allows you to show in the event',
               },{
                imag:require('../../assets/streamingIcon/microRed.png'),
                text1 : 'Mic On/Off',
                text2 : 'Enable or disable your mic when the Influencer allows you to speak in the event',
               }

             ]
     
 
  }


}

    render() {

    screenHeight=Dimensions.get('window').height;

 

    return (
    <View style={{flex:1 ,backgroundColor:'black'}}>

    <View  style={{flex:2.5,paddingBottom:hp('1%'),
        alignItems:'center',justifyContent:'flex-end'}}>
       <View style={{flexDirection:'row'}}>
            <Image source={require('../../assets/influencers/preciosa.jpg')} 
               style={{ width:75,height:75,borderRadius:Platform.OS === 'ios' ? 37:50}}
              />
               <View style={{justifyContent:'flex-end',marginLeft:wp('-5%')}}>
               <Image source={require('../../assets/streamingIcon/reloadselec.png')} 
               style={{ width:25,height:25,borderRadius:15}}
               /> 
               </View>
         </View>
         
    </View>

    <View  style={{flex:1,alignItems:'center'}}>
         <Text style={{
           color:'white',fontSize:wp('5%'),fontWeight:'500'
         }}>Vernon Curtis</Text>
          <Text style={{
           color:'white',fontSize:wp('3.5%'),
          }}>Welcome to my Live Event</Text>
    </View>
    <View  style={{flex:4.5,paddingTop:hp('1.5%')}}>
        
     {
         this.state.opciones.map((item,i)=>{

        return(
        <OpcionesUno 
        key={i}
         imag={item.imag}
         texto1={item.text1}
         texto2 ={item.text2}
         /> 
        )
         }
         )
        }
    </View>
    <View  style={{flex:2,alignItems:'center'}}>
       <TouchableOpacity style={{width:'80%',paddingVertical:hp('1.5%'),
       borderWidth:wp('0.3%'),borderRadius:wp('30%'),borderColor:'white'
         ,alignItems:'center',justifyContent:'center'}}
          onPress = {() => this.props.navigation.navigate("dos") } >
           <Text style={{color:'white',
           fontSize:wp('4%'),letterSpacing:0.41 }}>Got it</Text>
        </TouchableOpacity>
     </View>

   </View>
   
   );
}
}




const styles = StyleSheet.create({

 

});