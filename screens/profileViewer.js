import React, { Component } from 'react';
import { AppRegistry, Alert,TouchableOpacity,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image} from 'react-native';

import Button from 'react-native-button'; 

export default class Profileviewer extends Component {


  constructor(props){

    super(props);
  
     this.state={
          tytexto:'',
          menu1:styles.menuelegido,
          menu2:styles.menunormal,
          menu3:styles.menunormal,
     
      }
  
  }// fin de consttructor

  
 //  *** DECLARACION DE FUNCIONES **************

seleccion1=() =>{
   
  if(this.state.menu1!==styles.menuelegido){
      
     }
      
   } //  fin dela funcion

 
 



  render() {

    let screenWidth=Dimensions.get('window').width; //para poner la imagen normal



    return (
     
    <ScrollView style={{marginTop:20 }} >

{/*  CAJA DE IMAGEN CON SU TEXTO SUPERPUESTO*/}
     <Image
              source={require('../assets/influencers/spffiele.jpg')}
               style={{
               width:screenWidth, //para imagen grande a la pantalla
               height:348,
           
               }}
            />




    <View style={{marginHorizontal:16,
          position:'absolute',top:210}}>
        <Text style={{fontSize:34,color:'white'}}>Sophia Lindsey</Text>
        <Text style={{fontSize:20,color:'white'}}>@sophialindsey</Text>
        <Text style={{fontSize:17,color:'white',paddingTop:20}}>
         12,342 Friends  984 Following</Text>
    </View>
    
    <Image
              source={require('../assets/icons_genGMI/LogOut.png')}
               style={{
               width:40,
               height:40,
               position:'absolute',right:10,top:25,
               }}
            />

     {/* ----------------------------------------*/} 

  {/* ----------biagraphy----------------*/} 

 <View style={{ marginHorizontal:16,paddingBottom:10,paddingVertical:15 }}>
     
     <Text style={{  color:'#312f3d',  fontSize:17,fontWeight:'500'
       }}>Biography</Text>         
</View>


<View style={{paddingBottom:10,marginHorizontal:15,
              paddingVertical:5,textAlign:'left'}}>
     
     <Text style={{  color:'#312f3d',  fontSize:16,letterSpacing:0.32
       }}>Many people would say that it is absolute madness to keep on doing the same
        thing, time after time, expecting to get a different result or for something
         different to happen.</Text>         
</View>

{/* LOCATION*/}
<View style={{marginHorizontal:15,marginVertical:10,paddingVertical:10}}>
   <Text style={{
       color:'#312f3d',  fontSize:17,letterSpacing:0.41,fontWeight:'500'
   }}>Location</Text>
   <View style={{flexDirection:'row',paddingVertical:10}}>
   <Image
              source={require('../assets/icons_genGMI/ubicacion.png')}
               style={{
               width:17,
               height:17,
               marginRight:5,
  
               }}
            />
         <Text style={{
            color:'#677183',  fontSize:16,letterSpacing:0.32
         }}>Czeck Republic</Text>
   </View>
     
</View>

{/* LANGUAGE*/}

<View style={{marginHorizontal:15}}>
   <Text style={{
       color:'#312f3d',  fontSize:17,letterSpacing:0.41,fontWeight:'500'
   }}>Language</Text>
   <View style={{flexDirection:'row',paddingVertical:15}}>
   <Image
              source={require('../assets/banderasLenguaje/eeuu.png')}
               style={{
               width:17,
               height:17,
               marginRight:5,
               borderRadius:10,
  
               }}
            />
         <Text style={{
            color:'#677183',  fontSize:16,letterSpacing:0.32
         }}>English</Text>
   </View>
     
</View>

{/* FOLLOW  REDES SOCIALES */}

<View style={{marginHorizontal:15,marginVertical:15}}>
   <Text style={{
       color:'#312f3d',  fontSize:17,letterSpacing:0.41,fontWeight:'500'
   }}>Follow me</Text>
   <View style={{flexDirection:'row',paddingVertical:15}}>
   <Image
              source={require('../assets/icons_genGMI/Social/Linkedin.png')}
               style={{
               width:40,
               height:40,
               marginRight:15,
               borderRadius:30,
  
               }}
            />
       <Image
              source={require('../assets/icons_genGMI/Social/Twitch.png')}
               style={{
               width:40,
               height:40,
               marginRight:15,
               borderRadius:30,
  
               }}
            />
             <Image
              source={require('../assets/icons_genGMI/Social/Twitter.png')}
               style={{
               width:40,
               height:40,
               marginRight:15,
               borderRadius:30,
  
               }}
            />
             <Image
              source={require('../assets/icons_genGMI/Social/Youtube.png')}
               style={{
               width:40,
               height:40,
               marginRight:15,
               borderRadius:30,
  
               }}
            />
            
            <Image
              source={require('../assets/icons_genGMI/Social/insta.png')}
               style={{
               width:50,
               height:50,
               marginRight:15,
               borderRadius:30,
  
               }}
            />
   </View>
     
</View>

{/* up coming elevent*/}

<View style={{flexDirection:'row',
                justifyContent: 'space-between',padding:10,marginHorizontal:10
                ,marginTop:-10}}>
         <View > 
         <Text style={{color:"#312f3d",fontSize:17}}>Booked Live Events</Text>
         </View>
         <View style={{flexDirection:'row'}} >
         <Text style={{color:"#ff5a60",fontSize:16}}>Show all</Text>
         <Text style={{color:"#ff5a60",fontSize:16,fontWeight:'bold'}}> > </Text>
         </View>
  </View>
 
{/* --------------------------- --------------------*/}



{/* -----------------BICARDVIEW--------------*/}       
 <View style={{marginHorizontal:16,backgroundColor:'#f6f6f6',paddingBottom:7,
                 marginVertical:10, borderRadius:10}}>
     
             <View style={{borderRadius:10,width:328,height:200,padding:7}} >
                  <Image source={require('../assets/influencers/MandyJTV/maxresdefault-2.jpg')} 
                  style={{ zIndex:1,borderRadius:10 ,width:'100%',height:'100%'}}
                 />
              </View>  



  <View style={{zIndex:4,flexDirection:'row',
            marginLeft:8,marginRight:14,bottom:100,
             position:'absolute',}}>


             <View style={{flex:2,zIndex:4,alignItems:'center'}}>

                      <Image source={require('../assets/influencers/influencer.png')} 
                           style={{ width:50,height:50,borderRadius:10}}
                          />
                    

                </View>

                <View style={{flex:4,zIndex:4,flexDirection:'column'}}>
                     <View>
                     <Text style={{fontSize:17,color:'white',marginTop:7}}>
                      Influencer</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                       <View style={{ width:10,height:10,marginTop:5}}>
                        <Image source={require('../assets/buscador/lupa.jpg')} 
                         style={{borderRadius:10 ,width:'100%',height:'100%'}}
                         />
                       </View>
                        <Text style={{fontSize:13,color:'white',marginLeft:4}}>Country</Text>
                    </View>
  
              </View>

              <View style={{flex:1}}>
                           <View  style={styles.estrellasTrending}>
                               <Image source={require('../assets/Red.png')} 
                               style={{ width:11,height:11,}}
                               />
                              <Image source={require('../assets/Red.png')} 
                             style={{ width:11,height:11,marginLeft:2}}
                             />
                            <Image source={require('../assets/Red.png')} 
                               style={{ width:11,height:11,marginLeft:2}}
                              />
                           <Image source={require('../assets/Red.png')} 
                            style={{ width:11,height:11,marginLeft:2}}
                             />
                            <Image source={require('../assets/Grey.png')} 
                                style={{ width:11,height:11,marginLeft:2}}
                            />
                           </View>
  
               </View>
            <View style={{flex:2,alignItems:'flex-end',zIndex:4,
                justifyContent:'center'}}>
              <View>
                <Text style={{color:'white',bottom:-5}}>
                   @ 34
                </Text>
            </View>
          <View >
                <Text style={{color:'white' ,marginLeft:-40,marginTop:3}}>
                  Only 2 tickets left
                </Text>
           </View>
   </View>
       
  <Text style={styles.transparente}></Text>
 </View>


 {/* cajita fecha*/}
 <View style={{borderRadius:10,marginTop:-9,marginHorizontal:10,flexDirection:'row',
                 backgroundColor:'#f6f6f6'}}>
                   <View style={{ flex:1, 
                           backgroundColor:'white',flexDirection:'column',
                            paddingTop:20,alignItems:'center'
               }}>
                       <Text style={{ fontSize:28,fontWeight:'bold'}}>
                       21</Text>
                       <Text style={{color:'#ff5a60'}}>DEC</Text>
                       </View>
                    <View style={{ flex:6, flexDirection:'column',backgroundColor:'white',
                           paddingTop:20}}>
                      <Text style={{ fontSize:17,fontWeight:'bold',color:'#312f3d'}}>
                       My FIRST Godr of War experience !</Text>
                       <Text style={{ fontSize:16,fontWeight:'bold',color:'#ff5a60'}} >Games</Text>
                      <Text style={{ fontSize:13,fontWeight:'bold',color:'#677183',
                              paddingVertical:4}}> *  Live from New York, at 18:30 pm</Text>
                     </View>
   </View>  
</View>  
 {/* -------------------------------------------------------------------*/}

{/* Past Live events*/}

<View style={{flexDirection:'row',
                justifyContent: 'space-between',padding:10,marginHorizontal:10
                ,marginTop:10}}>
         <View > 
         <Text style={{color:"#312f3d",fontSize:17}}>Past Live Events</Text>
         </View>
         <View style={{flexDirection:'row'}} >
         <Text style={{color:"#ff5a60",fontSize:16}}>Show all</Text>
         <Text style={{color:"#ff5a60",fontSize:16,fontWeight:'bold'}}> > </Text>
         </View>
  </View>
 
{/* --------------------------- --------------------*/}

 {/* ------------- LISTA VIDEO ----------------------------*/}
 <View style={{flexDirection:'row',marginHorizontal:16,
               paddingTop:20,paddingBottom:15 }}>
           <View>
                   
                        
               
                  <View  style={{flexDirection:'column'}}>
                           <Text style={{color:18 ,color:'#697181',
                                     paddingBottom:5}}>Monday, 18/12/2018 </Text>
                           <Text style={styles.textTren}>Teaching Machamp THE BEST </Text>
                           <Text style={styles.textTren} >MOVE IN THE GAME </Text>
                           <Text style={{color:'#ff5a60',fontSize:16
                                 ,paddingTop:5}}>Sports</Text>
                  </View>
         </View>        
        <View >

            <View style={{zIndex:2, width:110,height:84,marginLeft:10,marginTop:1}}>
                <Image source={require('../assets/influencers/chicacorriendo.jpg')} 
                  style={{zIndex:2,borderRadius:10 ,width:'100%',height:'100%'}}
                 />
             </View>
             <Text style={{
                       position:'absolute',
                       fontWeight:'bold',
                        backgroundColor:'black',
                        opacity:0.5,
                      
                       paddingHorizontal:25,
                       paddingVertical:7,
                       bottom:8,
                       right:4,
                       zIndex:4,
                       borderRadius:10,
                      }}></Text>
             <Text
              style={{
               position:'absolute',
               zIndex:6,
               bottom:9,
               right:10,
               color:'white',
   
              }}>04:30</Text>
        </View>
          
 </View>


{/*-------------------------------------------------------------------------------- */}

{/* rEVIEWS*/}

<View style={{flexDirection:'row',
                justifyContent: 'space-between',padding:10,marginHorizontal:10
                ,marginTop:10}}>
         <View > 
         <Text style={{color:"#312f3d",fontSize:17}}>Reviews</Text>
         </View>
         <View style={{flexDirection:'row'}} >
         <Text style={{color:"#ff5a60",fontSize:16}}>Show all</Text>
         <Text style={{color:"#ff5a60",fontSize:16,fontWeight:'bold'}}> > </Text>
         </View>
  </View>
 
{/* --------------------------- --------------------*/}


{/*  LISTA INFLUENCERRRSSSSSSSSSS--------------------------------------------------------- */}

<View style={{flexDirection:'row',marginHorizontal:16,marginVertical:14}}>

    <View style={{flex:1}}>

                          <Image source={require('../assets/reviews/SoLindsey.png')} 
                               style={{ width:50,height:50,borderRadius:10}}
                              />
                        

    </View>
  
    <View style={{flex:3,flexDirection:'column',paddingLeft:10 }}>
           <View>
              <Text style={{fontSize:17,color:'#312f3d',fontWeight:'bold'
               ,marginTop:3}}>Sophia Lindsey</Text>
          </View>
           <View style={{flexDirection:'row'}}>
             <View style={{ width:10,height:10,marginTop:5}}>
                     <Image source={require('../assets/buscador/lupa.jpg')} 
                      style={{borderRadius:10 ,width:'100%',height:'100%'}}
                      />
                 </View>
              <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Micronesia</Text>
          </View>
      
     </View>

    <View style={{flex:2,alignItems:'flex-end',
            justifyContent:'center'}}>
             <View  style={styles.estrellasTrendingUltima}>
                                   <Image source={require('../assets/Red.png')} 
                                   style={{ width:11,height:11,}}
                                   />
                                  <Image source={require('../assets/Red.png')} 
                                 style={{ width:11,height:11,marginLeft:2}}
                                 />
                                <Image source={require('../assets/Grey.png')} 
                                   style={{ width:11,height:11,marginLeft:2}}
                                  />
                               <Image source={require('../assets/Grey.png')} 
                                style={{ width:11,height:11,marginLeft:2}}
                                 />
                                <Image source={require('../assets/Grey.png')} 
                                    style={{ width:11,height:11,marginLeft:2}}
                                />
                            </View>
      
    </View>

</View>

<Text style={{marginHorizontal:16,fontSize:17,color:'#312f3d',
          paddingBottom:25}}>
Your comedy sketches may just be the best of any PokeTuber right now.﻿
</Text>

           {/* caja imagen de video*/}
  <View style={{flexDirection:'row',marginHorizontal:16,
               paddingTop:10,paddingBottom:15, 
                 borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
           <View>
                   
                        
               
                  <View  style={{flexDirection:'column'}}>
                           <Text style={{color:18 ,color:'#697181',
                                     paddingBottom:5}}>Monday, 18/12/2018 </Text>
                           <Text style={styles.textTren}>Teaching Machamp THE BEST </Text>
                           <Text style={styles.textTren} >MOVE IN THE GAME </Text>
                           <Text style={{color:'#ff5a60',fontSize:16
                                 ,paddingTop:5}}>Sports</Text>
                  </View>
         </View>        
        <View >

            <View style={{ width:110,height:84,marginLeft:10,marginTop:1}}>
                <Image source={require('../assets/OnBoard/fitness.jpg')} 
                  style={{borderRadius:10 ,width:'100%',height:'100%'}}
                 />
             </View>
             <Text style={{
                       position:'absolute',
                        fontWeight:'bold',
                         backgroundColor:'black',
                        opacity:0.5,
                        color:'white',
                        paddingHorizontal:10,
                        paddingVertical:2,
                        bottom:8,
                        right:4,
                        borderRadius:10,
                       }}>08:30</Text>
        </View>
          
 </View>

{/*-------------------------------------------------------------------------------- */}


    </ScrollView>


     
    );
  }
 
}





const styles = StyleSheet.create({
 

estrellasTrendingProfile:{
  marginTop:6,
  paddingBottom:13,

  flexDirection:'row',
  zIndex:4,

},
estrellasTrending:{
  marginTop:15,
  marginLeft:-55,
  flexDirection:'row',
  zIndex:4,

},
/* imagenes pequenias superpuestas*/
ImagInfluence:{
  width:30,
  height:30,
  borderRadius:30,
},

/*  ultima estrella */
estrellasTrendingUltima:{
   paddingTop:7,
   marginBottom:20,
    flexDirection:'row',
},
 textTren:{
     color:'#312f3d',
     fontSize:15,
     fontWeight:'500',
    }

});