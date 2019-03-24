import React, { Component } from 'react';
import {Platform, Alert,TouchableOpacity,
  View,Text ,TextInput,TouchableWithoutFeedback,Keyboard,
  StyleSheet,ScrollView,
  Image} from 'react-native';

import Button from 'react-native-button'; 

export default class SearchContent extends Component {
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
     
      }
  
  }// fin de consttructor

  
 

  render() {
    return (
     
 
     <ScrollView>



      {/*   CAJAS DE TENDINGS */}
      <View style={{flexDirection:'row',marginHorizontal:16,
                
                 borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
                <View>
                       <View style={{flexDirection:'row'}}>

                          <View  style={{ padding:6 }}>
                          <Image source={require('../assets/influencers/influencer.png')} 
                               style={{ width:40,height:40,borderRadius:10}}
                              />
                          </View>
                        
                        <View style={{width:120,marginLeft:10,
                                        alignItems:'flex-start',
                                         paddingTop:10,flexDirection:'column'}}>
                             
                                <Text style={{color:'#312f3d',fontSize:16}} >MandyJTV</Text>

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
                   </View>
               
                  <View  style={{flexDirection:'column'}}>
                           <Text style={styles.textTren}>Teaching Machamp THE  </Text>
                           <Text style={styles.textTren} >BEST MOVE IN THE GAME </Text>
                           <Text style={{color:'#677183',fontSize:16}}>Games </Text>
                  </View>
         </View>        
        <View >

            <View style={{ width:110,height:84,marginLeft:15,marginTop:10}}>
                <Image source={require('../assets/influencers/MandyJTV/maxresdefault.jpg')} 
                  style={{borderRadius:10 ,width:'100%',height:'100%'}}
                 />
             </View>
             <Text style={styles.cajaTransparente}></Text>
             <Text style={styles.textoTransparente}>03:10</Text>
        </View>
          
 </View>

       
 {/* -------------------------------------------------------------------*/}
  

 <View style={{flexDirection:'row',marginHorizontal:16,
               paddingVertical:10, 
                 borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
           <View>
                     <View style={{flexDirection:'row'}}>

                          <View  style={{ padding:6 }}>
                          <Image source={require('../assets/influencers/influencer.png')} 
                               style={{ width:40,height:40,borderRadius:10}}
                              />
                          </View>
                        
                          <View style={{width:120,marginLeft:10,
                                        alignItems:'flex-start',
                                         paddingTop:10,flexDirection:'column'}}>
                             
                                <Text style={{color:'#312f3d',fontSize:16}} >Kala Tempo</Text>

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
                   </View>
               
                  <View  style={{flexDirection:'column'}}>
                           <Text style={styles.textTren}>Teaching Machamp THE  </Text>
                           <Text style={styles.textTren} >BEST MOVE IN THE GAME </Text>
                           <Text style={{color:'#677183',fontSize:16}}>Games </Text>
                  </View>
         </View>        
        <View >

            <View style={{ width:110,height:84,marginLeft:15,marginTop:10}}>
                <Image source={require('../assets/influencers/KalaTempo/kala2.jpg')} 
                  style={{borderRadius:10 ,width:'100%',height:'100%'}}
                 />
             </View>
             <Text style={styles.cajaTransparente}></Text>
             <Text style={styles.textoTransparente}>05:19</Text>
        </View>
          
 </View>

       
 {/* -------------------------------------------------------------------*/}

  {/* -------------------------------------------------------------------*/}

  <View style={{flexDirection:'row',marginHorizontal:16,
               paddingVertical:10, 
                 borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
           <View>
                     <View style={{flexDirection:'row'}}>

                          <View  style={{ padding:6 }}>
                          <Image source={require('../assets/influencers/influencer.png')} 
                               style={{ width:40,height:40,borderRadius:10}}
                              />
                          </View>
                        
                          <View style={{width:120,marginLeft:10,
                                        alignItems:'flex-start',
                                         paddingTop:10,flexDirection:'column'}}>
                             
                                <Text style={{color:'#312f3d',fontSize:16}} >MandyJTV</Text>

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
                   </View>
               
                  <View  style={{flexDirection:'column'}}>
                           <Text style={styles.textTren}>Teaching Machamp THE  </Text>
                           <Text style={styles.textTren} >BEST MOVE IN THE GAME </Text>
                           <Text style={{color:'#677183',fontSize:16}}>Games </Text>
                  </View>
         </View>        
        <View >

            <View style={{ width:110,height:84,marginLeft:15,marginTop:10}}>
                <Image source={require('../assets/influencers/KalaTempo/kala3.png')} 
                  style={{borderRadius:10 ,width:'100%',height:'100%'}}
                 />
             </View>
             <Text style={styles.cajaTransparente}></Text>
             <Text style={styles.textoTransparente}>02:50</Text>
        </View>
          
 </View>

       
 {/* -------------------------------------------------------------------*/}
  {/* -------------------------------------------------------------------*/}

  <View style={{flexDirection:'row',marginHorizontal:16,
               paddingVertical:10, 
                 borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
           <View>
                     <View style={{flexDirection:'row'}}>

                          <View  style={{ padding:6 }}>
                          <Image source={require('../assets/influencers/influencer.png')} 
                               style={{ width:40,height:40,borderRadius:10}}
                              />
                          </View>
                        
                          <View style={{width:120,marginLeft:10,
                                        alignItems:'flex-start',
                                         paddingTop:10,flexDirection:'column'}}>
                             
                                <Text style={{color:'#312f3d',fontSize:16}} >MandyJTV</Text>

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
                   </View>
               
                  <View  style={{flexDirection:'column'}}>
                           <Text style={styles.textTren}>Teaching Machamp THE  </Text>
                           <Text style={styles.textTren} >BEST MOVE IN THE GAME </Text>
                           <Text style={{color:'#677183',fontSize:16}}>Games </Text>
                  </View>
         </View>        
        <View >

            <View style={{ width:110,height:84,marginLeft:15,marginTop:10}}>
                <Image source={require('../assets/influencers/MandyJTV/maxresdefault.jpg')} 
                  style={{borderRadius:10 ,width:'100%',height:'100%'}}
                 />
             </View>
             <Text style={styles.cajaTransparente}></Text>
             <Text style={styles.textoTransparente}>07:10</Text>
        </View>
          
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