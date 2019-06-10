import React, { Component } from 'react';


import { Platform, AppRegistry, Alert,TouchableOpacity,
  View,Text ,TextInput,TouchableWithoutFeedback,Keyboard,
  StyleSheet,ScrollView,Dimensions,
  Image} from 'react-native';

import BicardView from "./../components/bicardview"

import Button from 'react-native-button'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class SearchEvents extends Component {
  static navigationOptions = {
    header: null ,
};


  constructor(props){

    super(props);
  
     this.state={

      usuarios:[
        {

      fotoGrande:require('../assets/influencers/MandyJTV/maxresdefault.jpg'),
      fotoUser: require('../assets/influencers/influencer.png') ,
      usuario:'MandyJTV',
      num_segui:34,
      mensaje:'Only 2 tickets left',
      dia:21,
      mes:'DEC',
      texto1:'My FIRST God of War experience!',
      texto2:'Games',
      direccion:'Live from New York, at 18:30 pm',

      },
      {

        fotoGrande:require('../assets/influencers/MandyJTV/maxresdefault-1.jpg'),
        fotoUser: require('../assets/influencers/influencer.png') ,
        usuario:'MandyJTV',
        num_segui:34,
        mensaje:'Only 2 tickets left',
        dia:21,
        mes:'DEC',
        texto1:'My FIRST God of War experience!',
        texto2:'Games',
        direccion:'Live from New York, at 18:30 pm',
  
        },
    ]
  }
  }// fin de consttructor



  render() {

    let screenHeight=Dimensions.get('window').height;
    
    if(screenHeight<=592){ //1080 * 1920  xxhdpi
 
    }else if(screenHeight<=605){ //mopvil de  david
   
  
  } else if(screenHeight<=678){ // mi movil
  
   }else if(screenHeight<=685){ //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
 
   }else if(screenHeight<=775){//1440 *2880 :560dpi
  
   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9

   }else{ // 800 = 480 * 800 mdpi
 
   }
    return (
     
      
  <ScrollView style={{marginTop:hp('5%')}}>

         
{/* -----------------BICARDVIEW--------------*/}    
 
 {
                     this.state.usuarios.map((item,i)=> {

                       
                       return ( 
<BicardView key={i}
fotoGrande={item.fotoGrande}
fotoUser={item.fotoUser}
usuario={item.usuario}
num_segui={item.num_segui}
mensaje={item.mensaje}
dia={item.dia}
mes={item.mes}
texto1={item.texto1}
 texto2={item.texto2}
 direccion={item.direccion}
/>
                       )}
                     )
     }
 {/* -------------------------------------------------------------------*/}

 </ScrollView>
     
    );
  }
 
}





const styles = StyleSheet.create({
 


 //   MENUS
 menuelegido:{
   borderBottomWidth:1,
   borderBottomColor:'#ff5a60',
 },
 
 menunormal:{
   borderBottomWidth:1,
   borderBottomColor:'#e1e3e6',
 },
 
 //PARA BICARDVIEW
 transparenteNuevo:{
 
  height:60,
  position:'absolute',
  zIndex:3,
  backgroundColor:'black',
  opacity:0.5,
  marginHorizontal:7,
  bottom:6,
 
},

estrellasTrendingNuevo:{
  paddingTop:7,
  marginLeft:-6,
  flexDirection:'row',
  marginTop:-5,

},




});