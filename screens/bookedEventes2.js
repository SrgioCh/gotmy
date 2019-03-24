import React, { Component } from 'react';
import {Platform,Alert,TouchableOpacity,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image} from 'react-native';

import Button from 'react-native-button'; 

export default class BookedEvDos extends Component {

  static navigationOptions = {
    header: null ,
};

  constructor(props){

    super(props);
  
     this.state={
          tytexto:'',
          menu1:styles.menuelegido,
          menu2:styles.menunormal,
          menu3:styles.menunormal,
          colorA:'#312f3d',/*Para letra texto lo pongo aqui porque meter el color dentro del 
             view    que contiene al componente texto, no coge el color */
          colorB:'#697181',
     
      }
  
  }// fin de consttructor

  
 //  *** DECLARACION DE FUNCIONES **************

seleccion1=() =>{
   
  if(this.state.menu1!==styles.menuelegido){
      
     }
      
   } //  fin dela funcion

 
 



  render() {
    return (
       
 <ScrollView  >

  {/* ------------------lista paast----------------------------------------------*/}

  <View style={{flexDirection:'row',marginHorizontal:16,
               paddingTop:10,paddingBottom:15, 
                 borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
           <View>
                   
                        
               
                  <View  style={{flexDirection:'column'}}>
                           <Text style={{color:18 ,color:'#697181',
                                     paddingBottom:5}}>Monday, 18/12/2018 </Text>
                           <Text style={styles.textTren}>Teaching Machamp THE  </Text>
                           <Text style={styles.textTren} >BEST MOVE IN THE GAME </Text>
                           <Text style={{color:'#ff5a60',fontSize:16
                                 ,paddingTop:5}}>Nature, Outdoors & Oets</Text>
                  </View>
         </View>        
        <View >

            <View style={{ width:110,height:84,marginLeft:15,marginTop:10}}>
                <Image source={require('../assets/influencers/MandyJTV/2.png')} 
                  style={{borderRadius:10 ,width:'100%',height:'100%'}}
                 />
             </View>
             <Text style={styles.cajaTransparente}></Text>
         <Text
          style={styles.textoTransparente}>08:30</Text>
        </View>
          
 </View>



  {/* ---------------------------------------------------------*/}

  <View style={{flexDirection:'row',marginHorizontal:16,
               paddingTop:10,paddingBottom:15, 
                 borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
           <View>
                   
                        
               
                  <View  style={{flexDirection:'column'}}>
                           <Text style={{color:18 ,color:'#697181',
                                     paddingBottom:5}}>Monday, 18/12/2018 </Text>
                           <Text style={styles.textTren}>Teaching Machamp THE  </Text>
                           <Text style={styles.textTren} >BEST MOVE IN THE GAME </Text>
                           <Text style={{color:'#ff5a60',fontSize:16
                                 ,paddingTop:5}}>Instagram Influencer</Text>
                  </View>
         </View>        
        <View >

            <View style={{ width:110,height:84,marginLeft:15,marginTop:10}}>
                <Image source={require('../assets/influencers/MandyJTV/mandy3.png')} 
                  style={{borderRadius:10 ,width:'100%',height:'100%'}}
                 />
             </View>
             <Text style={styles.cajaTransparente}></Text>
      <Text style={styles.textoTransparente}>06:20</Text>
        </View>
          
 </View>
 
  {/* --------------------------------------------------------*/}

  <View style={{flexDirection:'row',marginHorizontal:16,
                 paddingTop:10,paddingBottom:15, 
                 borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
           <View>
                   
                        
               
                  <View  style={{flexDirection:'column'}}>
                           <Text style={{color:18 ,color:'#697181',
                                     paddingBottom:5}}>Monday, 18/12/2018 </Text>
                           <Text style={styles.textTren}>Teaching Machamp THE  </Text>
                           <Text style={styles.textTren} >BEST MOVE IN THE GAME </Text>
                           <Text style={{color:'#ff5a60',fontSize:16
                                 ,paddingTop:5}}>Nature, Outdoors & Oets</Text>
                  </View>
         </View>        
        <View >

            <View style={{ width:110,height:84,marginLeft:15,marginTop:10}}>
                <Image source={require('../assets/influencers/KalaTempo/kala3.png')} 
                  style={{borderRadius:10 ,width:'100%',height:'100%'}}
                 />
             </View>
             <Text style={styles.cajaTransparente}></Text>
      <Text style={styles.textoTransparente}>05:10</Text>
        </View>
          
 </View>

 
 <View style={{flexDirection:'row',marginHorizontal:16,
               paddingTop:10,paddingBottom:15, 
                 borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
           <View>
                   
                        
               
                  <View  style={{flexDirection:'column'}}>
                           <Text style={{color:18 ,color:'#697181',
                                     paddingBottom:5}}>Monday, 18/12/2018 </Text>
                           <Text style={styles.textTren}>Teaching Machamp THE  </Text>
                           <Text style={styles.textTren} >BEST MOVE IN THE GAME </Text>
                           <Text style={{color:'#ff5a60',fontSize:16
                                 ,paddingTop:5}}>Nature, Outdoors & Oets</Text>
                  </View>
         </View>        
        <View >

            <View style={{ width:110,height:84,marginLeft:15,marginTop:10}}>
                <Image source={require('../assets/influencers/MandyJTV/2.png')} 
                  style={{borderRadius:10 ,width:'100%',height:'100%'}}
                 />
             </View>
             <Text style={styles.cajaTransparente}></Text>
             <Text style={styles.textoTransparente}>03:10</Text>
        </View>
          
 </View>
{/* ----------------------------------------*/}
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
 
   //TRENDING   **************
   estrellasTrending:{
    padding:3,
    
    flexDirection:'row',

  },
  textTren:{
   color:'#312f3d',
   fontSize:17,
  },
 
 //TABS PENTA ICON

 pentaIcon:{
  color:'white',
  fontSize:13,
},
cajaTransparente:{
  position:'absolute',
  fontWeight:'bold',
backgroundColor:'#312f3d',
  opacity:0.8,
    paddingHorizontal:25,
    paddingVertical:Platform.OS === 'ios' ? 5:7,
  bottom:Platform.OS === 'ios' ? 5:5,
  right:4,
zIndex:4,
borderRadius:Platform.OS === 'ios' ? 50:10,
borderBottomWidth:1,
},
textoTransparente:{
  position:'absolute',
  zIndex:6,
bottom:Platform.OS === 'ios' ? 8:8,

right:10,
 color:'white',
}


});