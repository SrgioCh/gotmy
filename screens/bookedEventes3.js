import React, { Component } from 'react';
import { Platform,Alert,TouchableOpacity,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image} from 'react-native';

  import BicardView from './../components/bicardview'  

export default class BookedEvTres extends Component {

  static navigationOptions = {
    header: null ,
};

  constructor(props){

    super(props);
  
     this.state={
          // PARA BICARDVIEW
    fotoGrande:require('../assets/influencers/comida.jpg'),
    fotoUser: require('../assets/influencers/influencer.png') ,
    usuario:'MandyJTV',
    num_segui:34,
    mensaje:'Only 2 tickets left',
    dia:21,
    mes:'DEC',
    texto1:'My FIRST God of War experience!',
    texto2:'Games',
    direccion:'Live from New York, at 18:30 pm', 

      }
  
  }// fin de consttructor

  
 //  *** DECLARACION DE FUNCIONES **************

seleccion1=() =>{
   
  if(this.state.menu1!==styles.menuelegido){
      
     }
      
   } //  fin dela funcion

 
 
  render() {

    let screenHeight=Dimensions.get('window').height;
    if(screenHeight<=592){//1080 * 1920  xxhdpi
  
    }else if(screenHeight<=605){ //mopvil de  david

     
  
  } else if(screenHeight<=678){ // mi movil
  
   }else if(screenHeight<=685){ //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
  
   }else if(screenHeight<=775){//1440 *2880 :560dpi
   
   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
  
   }else{
  
   }
    return (
       

 <ScrollView >

            
{/* -----------------BICARDVIEW--------------*/}  
<TouchableOpacity 
           
            onPress={() => this.props.enviaAPadre("liveEventDetail2")}
             >   
<BicardView 

fotoGrande={this.state.fotoGrande}
fotoUser={this.state.fotoUser}
usuario={this.state.usuario}
num_segui={this.state.num_segui}
mensaje={this.state.mensaje}
dia={this.state.dia}
mes={this.state.mes}
texto1={this.state.texto1}
 texto2={this.state.texto2}
 direccion={this.state.direccion}
/>
 
</TouchableOpacity>
 {/* -------------------------------------------------------------------*/}
 </ScrollView>
 
  
    );
  }
 
}





const styles = StyleSheet.create({
 
  /* PARA TRANSPARENCIA */
estrellasTrending:{
  marginTop:15,
  marginLeft:-55,
  flexDirection:'row',
  zIndex:4,

},
transparente:{
  width:313,
  height:60,
  position:'absolute',
  zIndex:1,
  backgroundColor:'black',
  opacity:0.5,
 bottom:-4,
 
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
 
 //TABS PENTA ICON

 pentaIcon:{
  color:'white',
  fontSize:13,
},
estrellasTrendingNuevo:{
  paddingTop:7,
  marginLeft:-6,
  flexDirection:'row',
  marginTop:-5,

},
transparenteNuevo:{
  
  height:60,
  position:'absolute',
  zIndex:3,
  backgroundColor:'black',
  opacity:0.5,
  marginHorizontal:7,
  bottom:6,
 
},



});