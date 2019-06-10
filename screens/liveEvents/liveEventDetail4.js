import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,ImageBackground,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

import Button from 'react-native-button'; 

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class LiveEventDetail4 extends Component {
    static navigationOptions = {
        header: null ,
    };

    constructor(props){

        super(props);
      
         this.state={
         
             nombreInflu:'MandyJTV',
             ciudaInflu:'Luxembourg',
           
             precioTicket:20
      
          }
      
      }// fin de consttructor


       guardar(){
           alert('create Private metting');
       }

  render() {

    return (



      <View style={{flex: 1 }}>
     
          <View style={{flex:9,}}>
              <TouchableOpacity 
             // onPress = {() => this.props.navigation.navigate("boked1") }
             onPress = {() => this.props.navigation.navigate("coachViewer") }
             >
                  <ImageBackground source={require('../../assets/influencers/MandyJTV/mandylive2.png')}
                   style={{width: '100%', height: '100%'}}>
              
                

                <View style={{flex:7,marginHorizontal:16,marginTop:hp('5%'),flexDirection:'row'}}>

                           <View style={{flex:1.5}}>

                                   <TouchableOpacity
                                  onPress={() => this.props.navigation.navigate("profile1")}
                                 >
                                 <Image source={require('../../assets/influencers/influencer.png')} 
                                  style={{ width:50,height:50,borderRadius:10}}
                                  />
                    
                                  </TouchableOpacity>
                         </View>

                          <View style={{flex:3,flexDirection:'column',paddingLeft:10 
                                                              ,marginTop:3,marginLeft:5}}>
                                         
                         <Text style={{fontSize:wp('5%'),color:'white'}}>{this.state.nombreInflu}</Text>
                     
                    <View style={{flexDirection:'row'}}>
                           <View style={{ width:12,height:12,marginTop:5}}>
                              <Image source={require('../../assets/icons_genGMI/ubicacion.png')} 
                              style={{borderRadius:10 ,width:'100%',height:'100%'}}
                               />
                           </View>
                          <Text style={{fontSize:wp('3.5%'),color:'white',marginLeft:4}}>{this.state.ciudaInflu}</Text>
                     </View>
             </View>

              <View style={{flex:2.5,marginRight:1}}>
                    <View  style={styles.estrellasTrending}>
                               <Image source={require('../../assets/Red.png')} 
                               style={{ width:11,height:11,}}
                               />
                              <Image source={require('../../assets/Red.png')} 
                             style={{ width:11,height:11,marginLeft:2}}
                             />
                            <Image source={require('../../assets/Red.png')} 
                               style={{ width:11,height:11,marginLeft:2}}
                              />
                           <Image source={require('../../assets/Red.png')} 
                            style={{ width:11,height:11,marginLeft:2}}
                             />
                            <Image source={require('../../assets/Grey.png')} 
                                style={{ width:11,height:11,marginLeft:2}}
                            />
                        </View>
                       
            </View>


             <View style={{flex:3 , flexDirection:'row',marginLeft:'5%'}} >
                   
                   <Image source={require('../../assets/icons_genGMI/compartir.png')} 
                                style={{ width:30,height:30 }}
                            />
                  <Image source={require('../../assets/icons_genGMI/calen_detail4.png')} 
                                style={{ width:30,height:30,marginLeft:'25%'}}
                  />
           
              </View>
         
           </View>
           <View style={{flex:3,marginHorizontal:16}}>
               <Text style={{color:'white',fontSize:wp('7%'),fontWeight:'bold'}}>
               You are amazing! 😍{'\n'}
            Thank you so much for {'\n'} booking my Live Event!
               
               
               
           
               </Text>
            </View>

   </ImageBackground>
   </TouchableOpacity>
        </View>
   
        <View style={{flex:1}}>
        
   <TouchableOpacity   style={{flex:1,backgroundColor:'#ff5a60',
                       alignItems:'center',justifyContent:'center'}}
     onPress = {() => this.props.navigation.navigate("liveEventStreaming") } >
     <Text style={{ color:'white', 
         fontSize:wp('5%'),letterSpacing:0.41 }}>
          a live event streaming</Text>
       </TouchableOpacity>
      
          </View >
  
   </View>


     
    );
  }
 
}





const styles = StyleSheet.create({
    estrellasTrending:{
        paddingTop:7,
        marginLeft:-6,
        flexDirection:'row',
      
      },

});