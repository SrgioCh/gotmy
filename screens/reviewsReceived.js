import React, { Component } from 'react';
import { AppRegistry, Alert,
  View,Text ,TextInput, TouchableOpacity,
  StyleSheet,ScrollView,
  Image} from 'react-native';

import Button from 'react-native-button'; 

export default class Reviewsreceived extends Component {


  render() {
    return (
     
    <ScrollView style={{marginTop:10}} >
        
{/*----------- TITULO----------------- */}
<View style={{marginTop:16,marginBottom:5,marginHorizontal:16}}>
    <Text style={{fontSize:28,color:'#312f3d',
           fontWeight: 'bold',}}>Reviews</Text>
</View>


{/* BUSCADOR*/}
 <View style={{ marginHorizontal:16,paddingVertical:15,flexDirection:'row' }}>
      <View style={{flexDirection:'row',flex:1,backgroundColor:'#f6f6f6',
              alignItems:'center',borderRadius:10}}>
                 <View style={{ width:30,height:30}}>
                     <Image source={require('../assets/buscador/lupa.jpg')} 
                      style={{borderRadius:10 ,width:'100%',height:'100%'}}
                      />
                 </View>
                 <TextInput
                    style={{
                    
                       height:42,
                       width:215,
                     
                       borderRadius:10,
                    
                    } }
                    placeholder="Search......"
                    editable={true} // con false , no podremos escribir nada
                    borderBottomColor = '#e2e7ee'
                    borderBottomWidth ={1}
                    paddingHorizontal={5}
                    onChangeText={
                      (text3)=>{
                        this.setState(()=> {

                                          return {
                                            tytexto:text3,
                                          }
                               })
                      }
                      

                 }//fin de onchange
              />

        </View>
</View>
 

{/*  LISTA INFLUENCERRRSSSSSSSSSS--------------------------------------------------------- */}

<View style={{flexDirection:'row',marginHorizontal:16,marginVertical:14}}>

    <View style={{flex:1}}>
    <TouchableOpacity
             onPress={() => this.props.navigation.navigate("reviewTres")}
             >
                          <Image source={require('../assets/reviews/arturo1.png')} 
                               style={{ width:50,height:50,borderRadius:10}}
                              />
          </TouchableOpacity>              

    </View>
  
    <View style={{flex:3,flexDirection:'column',paddingLeft:10 }}>
           <View>
              <Text style={{fontSize:17,color:'#312f3d',fontWeight:'bold'
               ,marginTop:3}}>Gustavo González</Text>
          </View>
           <View style={{flexDirection:'row'}}>
             <View style={{ width:10,height:10,marginTop:5}}>
                     <Image source={require('../assets/buscador/lupa.jpg')} 
                      style={{borderRadius:10 ,width:'100%',height:'100%'}}
                      />
                 </View>
              <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Spain</Text>
          </View>
      
     </View>

    <View style={{flex:2,alignItems:'flex-end',
            justifyContent:'center'}}>
             <View  style={styles.estrellasTrending}>
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

            <View style={{zIndex:2, width:110,height:84,marginLeft:10,marginTop:1}}>
                <Image source={require('../assets/influencers/KalaTempo/kalamalkaguitar.jpg')} 
                  style={{zIndex:2,borderRadius:10 ,width:'100%',height:'100%'}}
                 />
             </View>
             <Text style={{

               
                       position:'absolute',
                       fontWeight:'bold',
                        backgroundColor:'#312f3d',
                        opacity:0.8,
                      
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
   
              }}>08:30</Text>
        </View>
          
 </View>

{/*-------------------------------------------------------------------------------- */}

{/*--------------------------------------------------------------------------------- */}

<View style={{flexDirection:'row',marginHorizontal:16,marginVertical:14}}>

    <View style={{flex:1}}>

                          <Image source={require('../assets/reviews/romina.png')} 
                               style={{ width:50,height:50,borderRadius:10}}
                              />
                        

    </View>
  
    <View style={{flex:3,flexDirection:'column',paddingLeft:10 }}>
           <View>
              <Text style={{fontSize:17,color:'#312f3d',fontWeight:'bold'
               ,marginTop:3}}>Ana María Suárez</Text>
          </View>
           <View style={{flexDirection:'row'}}>
             <View style={{ width:10,height:10,marginTop:5}}>
                     <Image source={require('../assets/buscador/lupa.jpg')} 
                      style={{borderRadius:10 ,width:'100%',height:'100%'}}
                      />
                 </View>
              <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>Spain</Text>
          </View>
      
     </View>

    <View style={{flex:2,alignItems:'flex-end',
            justifyContent:'center'}}>
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

            <View style={{zIndex:2, width:110,height:84,marginLeft:10,marginTop:1}}>
                <Image source={require('../assets/influencers/KalaTempo/kalafiesta.jpg')} 
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



    </ScrollView>


     
    );
  }
 
}





const styles = StyleSheet.create({

//en lista influencer
estrellasTrending:{
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