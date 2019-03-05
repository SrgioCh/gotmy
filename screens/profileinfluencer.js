import React, { Component } from 'react';
import { Platform, Alert,TouchableOpacity,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image} from 'react-native';

import Button from 'react-native-button'; 

export default class Profileinfluencer extends Component {
   static navigationOptions = {
      header: null ,
  };
  

  render() {

    let screenWidth=Dimensions.get('window').width; //para poner la imagen normal



    return (
     
    <ScrollView  >

{/*  CAJA DE IMAGEN CON SU TEXTO SUPERPUESTO*/}
     <Image
              source={require('../assets/influencers/MandyJTV/many1.jpg')}
               style={{
               width:screenWidth, //para imagen grande a la pantalla
               height:348,
           
               }}
            />


    <View style={{marginHorizontal:16,
          position:'absolute',top:210}}>
        <Text style={{fontSize:34,color:'white'}}>MandyJTV</Text>
        <Text style={{fontSize:20,color:'white'}}>@mandyJTV</Text>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity
            
            onPress={() => this.props.navigation.navigate("friends")}
             >

        <Text style={{fontSize:17,color:'white',paddingTop:20}}>12,342 Friends</Text>  
         </TouchableOpacity>
         <TouchableOpacity
            
            onPress={() => this.props.navigation.navigate("followin")}
             >
                 <Text style={{fontSize:17,color:'white',paddingTop:20,paddingLeft:10}}>984 Following</Text>
  </TouchableOpacity>
  </View>
    </View>
    
    <Image
              source={require('../assets/icons_genGMI/LogOut.png')}
               style={{
               width:40,
               height:40,
               position:'absolute',right:10,top:25,
               }}
            />

    {/* numero grande de estadistica*/}
   <View style={{flexDirection:'row',marginHorizontal:15}}>
       <View style={{flex:2,alignItems:'center'}} >
          <Text style={{
                  fontSize:55,color:'#312f3d'
          }}>4.1</Text>
       </View>

       
       <View style={{flex:4,flexDirection:'column',
           justifyContent:'center' }}>
             <View >
                
             <View  style={styles.estrellasTrendingProfile}>
                                   <Image source={require('../assets/Red.png')} 
                                   style={{ width:14,height:14,}}
                                   />
                                  <Image source={require('../assets/Red.png')} 
                                 style={{ width:14,height:14,marginLeft:2}}
                                 />
                                <Image source={require('../assets/Red.png')} 
                               style={{ width:14,height:14,marginLeft:2}}
                                  />
                               <Image source={require('../assets/Red.png')} 
                             style={{ width:14,height:14,marginLeft:2}}
                                 />
                                <Image source={require('../assets/Grey.png')} 
                            style={{ width:14,height:14,marginLeft:2}}
                                />
                </View>

           </View>

              <View style={{justifyContent:'center'}}>
              <Text style={{color:'#312f3d'}}>Based en 45 reviews</Text>
             </View>
       </View>
                <View style={{flexDirection:'row',flex:2,alignItems:'center',
                               marginTop:28}}>
                       <Image
              source={require('../assets/icons_genGMI/ViewsGrey.png')}
               style={{
               width:15,
               height:15,
            
               marginLeft:-6,
               marginRight:5,
  
               }}
            />
         <Text style={{color:'#677183'}}>27.551.803</Text>
         </View>
   </View>

{/*========================================================================= */}


<View style={{flexDirection:'row',marginHorizontal:16}}>  

     <View style={{flex:2 ,flexDirection:'row'}}>
     <Image
              source={require('../assets/influencers/KalaTempo/uno.jpg')}
               style={styles.ImagInfluence}
            />
            <Image
               source={require('../assets/influencers/KalaTempo/dos.jpg')}
              style={[{ marginLeft:-5 },styles.ImagInfluence]}
            />
            <Image
              source={require('../assets/OnBoard/podcast.jpg')}
              style={[{  marginLeft:-5  },styles.ImagInfluence]}
            />
     </View>
     <View style={{flex: 3,alignItems:'flex-start',justifyContent:'center'}}>
     <TouchableOpacity
            
            onPress={() => this.props.navigation.navigate("atends")}
             >
     <Text style={{color:'#697181',fontSize:16,
              marginLeft:-10}}>23 event attendees</Text>
      
      </TouchableOpacity>
       </View>
       <View style={{flex:1, justifyContent:'center',alignItems:'flex-end' }}>
       <TouchableOpacity
             onPress={() => this.props.navigation.navigate("reviewUno")}
             >
       <Image
              source={require('../assets/icons_genGMI/ArrowGrey.png')}
              style={styles.ImagInfluence}
            />
         </TouchableOpacity>
       </View>

</View>






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
<View style={{marginHorizontal:15,marginVertical:20,paddingVertical:10}}>
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
               borderRadius: Platform.OS === 'ios' ? 10:30,
  
               }}
            />
       <Image
              source={require('../assets/icons_genGMI/Social/Twitch.png')}
               style={{
               width:40,
               height:40,
               marginRight:15,
               borderRadius: Platform.OS === 'ios' ? 10:30,
  
               }}
            />
             <Image
              source={require('../assets/icons_genGMI/Social/Twitter.png')}
               style={{
               width:40,
               height:40,
               marginRight:15,
               borderRadius: Platform.OS === 'ios' ? 10:30,
  
               }}
            />
             <Image
              source={require('../assets/icons_genGMI/Social/Youtube.png')}
               style={{
               width:40,
               height:40,
               marginRight:15,
               borderRadius: Platform.OS === 'ios' ? 10:30,
  
               }}
            />
            
            <Image
              source={require('../assets/icons_genGMI/Social/insta.png')}
               style={{
               width:50,
               height:50,
               marginRight:15,
               borderRadius: Platform.OS === 'ios' ? 10:30,
  
               }}
            />
   </View>
     
</View>

{/* up coming elevent*/}

<View style={{flexDirection:'row',
                justifyContent: 'space-between',padding:10,marginHorizontal:10
                ,marginTop:-10}}>
         <View > 
         <Text style={{color:"#312f3d",fontSize:17}}>Upcoming Live Events</Text>
         </View>
         <View style={{flexDirection:'row'}} >
         <TouchableOpacity
             onPress={() => this.props.navigation.navigate("upcoevent")}
             >
         <Text style={{color:"#ff5a60",fontSize:16}}>Show all</Text>
         </TouchableOpacity>
         <Text style={{color:"#ff5a60",fontSize:16,fontWeight:'bold'}}> > </Text>
         </View>
  </View>
 
{/* --------------------------- --------------------*/}


             
{/* -----------------BICARDVIEW--------------*/}       
 <View style={{marginHorizontal:16,backgroundColor:'#f6f6f6',paddingBottom:7,
                 marginVertical:10, borderRadius:10}}>
     
             <View style={{borderRadius:10,
               width:Platform.OS === 'ios' ? 339:328,
              height:200,padding:7}} >
                  <Image source={require('../assets/influencers/MandyJTV/maxresdefault-2.jpg')} 
                  style={{ zIndex:1,borderRadius:10 ,width:'100%',height:'100%'}}
                 />
              </View>  


<View>
<View style={{flexDirection:'row',
            marginHorizontal:16,marginVertical:14,
             position:'absolute',bottom:0,zIndex:4}}>

     <View style={{flex:2}}>

                      <Image source={require('../assets/influencers/influencer.png')} 
                           style={{ width:50,height:50,borderRadius:10}}
                          />
                    

      </View>

      <View style={{flex:3,flexDirection:'column'}}>
     
          <View>
          <Text style={{fontSize:17,color:'white',marginLeft:-6,marginRight:-15,marginTop:4}}>Mabel Spencer</Text>
         </View>
      
     
             <View  style={styles.estrellasTrendingNuevo}>
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


<View style={{flex:4,alignItems:'flex-end',  justifyContent:'center'}}>
      <View style={styles.socialBotonRojo}>
            <Text style={{color:'white'}}>
              @ 34
            </Text>
      </View>
      <View style={styles.socialBotonRojo}>
            <Text style={{color:'white'}}>
              Only 2 tickets left
            </Text>
      </View>
  
    </View>

  </View>
  <Text style={styles.transparenteNuevo}></Text>
 </View>

 {/* cajita fecha*/}
 <View style={{borderRadius:10,marginTop:-9,
                 marginLeft:  Platform.OS === 'ios' ? 6:8,
                 marginRight:  Platform.OS === 'ios' ? 11:8,
                 flexDirection:'row',
                 backgroundColor:'#f6f6f6'}}>
                   <View style={{ flex:1, 
                           backgroundColor:'white',flexDirection:'column',
                            paddingTop:20,alignItems:'center'
               }}>
                       <Text style={{ fontSize:28,fontWeight:'bold'}}>
                       21</Text>
                       <Text style={{color:'red'}}>DEC</Text>
                       </View>
                    <View style={{ flex:6, flexDirection:'column',backgroundColor:'white',
                           paddingTop:20}}>
                      <Text style={{ fontSize: Platform.OS === 'ios' ? 15:17,
                        fontWeight:'bold',color:'#312f3d'}}>
                       My FIRST Godr of War experience !</Text>
                       <Text style={{ fontSize:  Platform.OS === 'ios' ? 14:16,
                        fontWeight:'bold',color:'#677183'}} >Fashion</Text>
                      <Text style={{ fontSize:  Platform.OS === 'ios' ? 11:13 ,
                      fontWeight:'bold',color:'#677183',
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
         <TouchableOpacity
             onPress={() => this.props.navigation.navigate("mediacontenInflu")}
             >
         <Text style={{color:"#ff5a60",fontSize:16}}>Show all</Text>
         </TouchableOpacity>
         <Text style={{color:"#ff5a60",fontSize:16,fontWeight:'bold'}}> > </Text>
         </View>
  </View>
 
{/* --------------------------- --------------------*/}
 <View style={{flexDirection:'row',marginHorizontal:16,
               paddingTop:20,paddingBottom:15 }}>
           <View>
                   
                        
               
                  <View  style={{flexDirection:'column'}}>
                           <Text style={{color:18 ,color:'#697181',
                                     paddingBottom:5}}>Monday, 18/12/2018 </Text>
                           <Text style={styles.textTren}>Teaching Machamp THE BEST </Text>
                           <Text style={styles.textTren} >MOVE IN THE GAME </Text>
                           <Text style={{color:'#ff5a60',fontSize:16
                                 ,paddingTop:5}}>Nature,Outdoors & Oets</Text>
                  </View>
         </View>        
        <View style={{marginLeft:20}} >

            <View style={{zIndex:2, width:110,height:84,marginLeft:10,marginTop:1}}>
                <Image source={require('../assets/influencers/MandyJTV/mandy4.jpg')} 
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
{/* -----------------------------LISTA VIDEO ----------------------------*/}
 <View style={{flexDirection:'row',marginHorizontal:16,
               paddingTop:20,paddingBottom:15 }}>
           <View>
                   
                        
               
                  <View  style={{flexDirection:'column'}}>
                           <Text style={{color:18 ,color:'#697181',
                                     paddingBottom:5}}>Monday, 18/12/2018 </Text>
                           <Text style={styles.textTren}>Teaching Machamp THE BEST </Text>
                           <Text style={styles.textTren} >MOVE IN THE GAME </Text>
                           <Text style={{color:'#ff5a60',fontSize:16
                                 ,paddingTop:5}}>Instagram Influencer</Text>
                  </View>
         </View>        

         
        <View style={{marginLeft:20}}>

            <View style={{zIndex:2, width:110,height:84,marginLeft:10,marginTop:1}}>
                <Image source={require('../assets/influencers/MandyJTV/maxresdefault-3.jpg')} 
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

<View style={{flexDirection:'row',marginHorizontal:16,
               paddingTop:20,paddingBottom:15 }}>
           <View>
                   
                        
               
                  <View  style={{flexDirection:'column'}}>
                           <Text style={{color:18 ,color:'#697181',
                                     paddingBottom:5}}>Monday, 18/12/2018 </Text>
                           <Text style={styles.textTren}>Teaching Machamp THE BEST </Text>
                           <Text style={styles.textTren} >MOVE IN THE GAME </Text>
                           <Text style={{color:'#ff5a60',fontSize:16
                                 ,paddingTop:5}}>Fashion & Style</Text>
                  </View>
         </View>        
        <View  style={{marginLeft:30}}>

            <View style={{zIndex:2, width:110,height:84,marginTop:1}}>
                <Image source={require('../assets/influencers/MandyJTV/mandy5.jpg')} 
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

<View style={{backgroundColor:'#ff5a60',padding:13,
  
      alignItems:'center',justifyContent:'center'}}>
   <Text style={{flex:1 , color:'white', 
     fontSize:17,letterSpacing:0.41 }}>Request Private Meeting</Text>
</View>




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
  borderRadius: Platform.OS === 'ios' ? 15:30,
},
estrellasTrendingNuevo:{
   paddingTop:7,
   marginLeft:-6,
   flexDirection:'row',
   marginTop:-5,
 
 },
 transparenteNuevo:{
   width:  Platform.OS === 'ios' ? 325:315,
   height:60,
   position:'absolute',
   zIndex:3,
   backgroundColor:'black',
   opacity:0.5,
   marginHorizontal:7,
   bottom:6,
  
 },


});