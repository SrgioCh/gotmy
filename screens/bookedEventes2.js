import React, { Component } from 'react';
import {Platform,Alert,TouchableOpacity,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image} from 'react-native';

import Button from 'react-native-button'; 
import EventContents from "./../components/eventContents"


export default class BookedEvDos extends Component {

  static navigationOptions = {
    header: null ,
};

  constructor(props){

    super(props);
  
     this.state={
        //PARA VIDvIEW
     usuarios:[
      {
       fecha:'Monday, 19/12/2018',
       descripcion:'Teaching Machamp THE BEST MOVE IN THE GAME' ,
       imagVideo:require('../assets/influencers/MandyJTV/2.png'),
       duraVid:'12:40',
       tipo:'Naturs,Outdoors & Chefs'

      },
      {
        fecha:'Monday, 19/12/2018',
       descripcion:'Teaching Machamp THE BEST MOVE IN THE GAME' ,
       imagVideo:require('../assets/influencers/MandyJTV/mandy3.png'),
       duraVid:'12:40',
       tipo:'Naturs,Outdoors & Chefs'
      },
      {
        fecha:'Monday, 19/12/2018',
       descripcion:'Teaching Machamp THE BEST MOVE IN THE GAME' ,
       imagVideo:require('../assets/influencers/KalaTempo/kala3.png'),
       duraVid:'12:40',
       tipo:'Naturs,Outdoors & Chefs'
      }
      ,
      {
        fecha:'Monday, 19/12/2018',
       descripcion:'Teaching Machamp THE BEST MOVE IN THE GAME' ,
       imagVideo:require('../assets/influencers/MandyJTV/2.png'),
       duraVid:'12:40',
       tipo:'Naturs,Outdoors & Chefs'
      }

    ]
     
      }
  
  }// fin de consttructor

  
 

  render() {


    let screenHeight=Dimensions.get('window').height;
    
    if(screenHeight<=592){
      
      cajaVid=15;
    }else if(screenHeight<=678){ // mi movil
        cajaVid=15;
   }else if(screenHeight<=685){ //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
     
    cajaVid=60
   }else if(screenHeight<=775){//1440 *2880 :560dpi
   
    cajaVid=60;
   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
    cajaVid=15;
   }else{
    
    cajaVid=120;
   }
    return (
       
 <ScrollView  >

{
                     this.state.usuarios.map((item,i)=> {

                       
                       return ( 
<EventContents key={i}
   fecha={item.fecha}
   descripcion={item.descripcion}
  imagVideo={item.imagVideo}
  duraVid={item.duraVid}
  tipo={item.tipo}
 />
                       )})}
 
 </ScrollView>
 
     
    );
  }
 
}





const styles = StyleSheet.create({
 
 

});