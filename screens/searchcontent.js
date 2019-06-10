import React, { Component } from 'react';
import {Platform, Alert,TouchableOpacity,Dimensions,
  View,Text ,TextInput,TouchableWithoutFeedback,Keyboard,
  StyleSheet,ScrollView,
  Image} from 'react-native';

import Button from 'react-native-button'; 
import VidView from "./../components/vidView"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class SearchContent extends Component {
  static navigationOptions = {
    header: null ,
};

  constructor(props){

    super(props);
  
     this.state={
         
       //PARA VIDvIEW
     usuarios:[
      {
       fotoIcon :require('../assets/influencers/influencer.png'),
       nombreUser:'MandyJTV',
        descripcion:'Teaching Machamp THE BEST MOVE IN THE GAME' ,
       imagVideo:require('../assets/influencers/MandyJTV/maxresdefault.jpg'),
       duraVid:'12:40',
       numEstrella:5,

      },
      {
       fotoIcon :require('../assets/influencers/uno.png'),
       nombreUser:'MandyJTV',
       descripcion:'Teaching Machamp THE BEST MOVE IN THE GAME' ,
       imagVideo:require('../assets/influencers/chicarosa.jpg'),
       duraVid:'10:20',
       numEstrella:3,
      },
      {
       fotoIcon :require('../assets/influencers/tres.png'),
       nombreUser:'Randy Stanley',
       descripcion:'Teaching Machamp THE BEST MOVE IN THE GAME' ,
       imagVideo:require('../assets/influencers/chicacorriendo.jpg'),
       duraVid:'08:30',
       numEstrella:5
      },
      {
        fotoIcon :require('../assets/influencers/influencer.png'),
        nombreUser:'MandyJTV',
         descripcion:'Teaching Machamp THE BEST MOVE IN THE GAME' ,
        imagVideo:require('../assets/influencers/MandyJTV/maxresdefault.jpg'),
        duraVid:'12:40',
        numEstrella:5,
 
       },

    ]
     
      }
  
  }// fin de consttructor

  
 

  render() {

    let screenHeight=Dimensions.get('window').height;
    
    if(screenHeight<=592){
  
     
    }else if(screenHeight<=678){ // mi movil
    
   }else if(screenHeight<=685){ //1080 *1920
 
 
   }else if(screenHeight<=775){//1440 *2880 :560dpi
   
 
   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
   
   }else{
 
   }
  
    return (
     
 
     <ScrollView>



      {/*   CAJAS DE TENDINGS */}
      <View style={{marginTop:hp('5%')}} >

{
                     this.state.usuarios.map((item,i)=> {

                       
                       return ( 
                        <VidView key={i}
                        fotoIcon={item.fotoIcon}
                        nombreUser={item.nombreUser}
                        descripcion={item.descripcion} 
                        imagVideo={item.imagVideo}
                        duraVid={item.duraVid}
                        estrellas={item.numEstrella}
                         />

                       )
                     }
                     )

                    }
               
 </View>

 </ScrollView>
 
    );
  }
 
}


const styles = StyleSheet.create({
 
   //TRENDING   **************
   estrellasTrending:{
    padding:3,
    
    flexDirection:'row',

  },
  textTren:{
   color:'#312f3d',
   fontSize:17,
  },


 //   MENUS
 menuelegido:{
   borderBottomWidth:1,
   borderBottomColor:'#ff5a60',
 },
 
 menunormal:{
   borderBottomWidth:1,
   borderBottomColor:'#e1e3e6',
 },
 


 //TRANSPARENCIAS
 cajaTransparente:{
  position:'absolute',
  fontWeight:'bold',
backgroundColor:'#312f3d',
  opacity:0.8,
    paddingHorizontal:25,
    paddingVertical:Platform.OS === 'ios' ? 5:7,
  bottom:Platform.OS === 'ios' ?'22%':'25%',
  right:4,
zIndex:4,
borderRadius:Platform.OS === 'ios' ? 50:10,
borderBottomWidth:1,
},
textoTransparente:{
  position:'absolute',
  zIndex:6,
bottom:Platform.OS === 'ios' ? '22%':'27%',

right:10,
 color:'white',
}




});