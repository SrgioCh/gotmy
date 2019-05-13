import React from 'react';
import {Platform,StyleSheet,Dimensions,ImageBackground, Text, View, Image } from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class VidView extends React.Component {

    constructor(props) {
        super(props)

    }

  render() {

    let screenHeight=Dimensions.get('window').height;
    if(screenHeight<=592){//1080 * 1920  xxhdpi

     }else if(screenHeight<=605){ //mopvil de  david
 
 } else if(screenHeight<=678){ // mi movil
    

   }else if(screenHeight<=685){ ////1080 *1920 420dpi  --- 1440 *2560 :560 dpi
   

   }else if(screenHeight<=775){//1440 *2880 :560dpi
   

   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
    

   }else{// 1092
    
 
   }

    return (
     <View style={{marginHorizontal:'4%'}}>
      
         <View style={{flexDirection:'row'}}>
               <View style={{flex:6.5}}>
                     <View style={{flexDirection:'row'}}>
                          <View style={{flex:2}}>
                             <Image source={this.props.fotoIcon} 
                                style={{ width:40,height:40,borderRadius:10}}
                              />
                          </View>
                          <View style={{flex:8}}>
                              <Text style={{color:'#312f3d',fontSize:wp('4%')}} >{this.props.nombreUser}</Text>
                               <View  style={styles.estrellasTrending}>
                                  <Image source={require('../assets/Red.png')} 
                                      style={{ width:11,height:11,}}
                                    />
                                  <Image source={require('../assets/Red.png')} 
                                   style={{ width:11,height:11,marginLeft:wp('0.5%')}}
                                   />
                                     <Image source={require('../assets/Red.png')} 
                                        style={{ width:11,height:11,marginLeft:wp('0.5%')}}
                                       />
                                   <Image source={require('../assets/Red.png')} 
                                   style={{ width:11,height:11,marginLeft:wp('0.5%')}}
                                   />
                                      <Image source={require('../assets/Grey.png')} 
                                          style={{ width:11,height:11,marginLeft:wp('0.5%')}}
                                          />
                                 </View>
                          
                          </View>
                     </View>
                     <View style={{paddingRight:'10%',paddingVertical:'2%'}}>
                        <Text style={styles.textTren}>{this.props.descripcion}</Text>
                     </View>
                </View>
               <View style={{flex:3.5,alignItems:'flex-end'}}>
                    <View style={{ width:'90%',height:84}}>
                       <Image source={this.props.imagVideo} 
                       style={{borderRadius:10 ,width:'100%',height:'100%',marginTop:hp('0.6%')}}
                      />
                   </View>
                   <View style={{
                    position:'absolute',
                    fontWeight:'bold',
                     backgroundColor:'#312f3d',
                     opacity:0.8,
                     paddingHorizontal:25,
                     paddingVertical:Platform.OS === 'ios' ? 10:10,
                     bottom:Platform.OS === 'ios' ? 24:hp('0.5%'),
                      right:wp('1.5%'),
                      zIndex:4,
                     borderRadius:Platform.OS === 'ios' ? 50:hp('1%'),
                     borderBottomWidth:1,
                    }}></View>
            <Text
              style={{
              position:'absolute',
                zIndex:6,
              bottom:Platform.OS === 'ios' ? 26:hp('0.8%'),
              right:wp('3%'),
            color:'white',

              }}>{this.props.duraVid}</Text>





               </View>
          </View>
         <Text style={{color:'#677183',fontSize:wp('3.5%')}}>Games </Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({

    
  //TRENDING   **************
  estrellasTrending:{
   flexDirection:'row',
   },
  
  textTren:{
   color:'#312f3d',
   fontSize:wp('4%'),
   fontWeight: '100',
  },


  })