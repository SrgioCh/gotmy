import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,ImageBackground,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

import Button from 'react-native-button'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class LiveEventDetail extends Component {
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
         
          <View style={{flex:9}}>
               <TouchableOpacity
             onPress={() => this.props.navigation.navigate("liveEventDetail2")}
             > 
            
              <ImageBackground source={require('../../assets/influencers/MandyJTV/liveeventDetail.png')}
              style={{width: '100%', height: '100%'}}>
           
                
                <View style={{flex:7,flexDirection:'row',marginHorizontal:16,marginVertical:hp('5%')}}>

                           <View style={{flex:1}}>
                                <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("profile1")}
                              >
                            <Image source={require('../../assets/influencers/influencer.png')} 
                           style={{ width:50,height:50,borderRadius:10}}
                          />
                    
                          </TouchableOpacity>
                          </View>

                    <View style={{flex:2,flexDirection:'column',paddingLeft:10 
                    ,marginTop:3,marginLeft:5}}>
                     <View>
                         <Text style={{fontSize:wp('5%'),color:'white'}}>{this.state.nombreInflu}</Text>
                     </View>
                    <View style={{flexDirection:'row'}}>
                           <View style={{ width:12,height:12,marginTop:5}}>
                              <Image source={require('../../assets/icons_genGMI/ubicacion.png')} 
                              style={{borderRadius:Platform.OS === 'ios' ? 5:10 ,width:'100%',height:'100%'}}
                               />
                           </View>
                          <Text style={{fontSize:wp('3.5%'),color:'white',marginLeft:4}}>{this.state.ciudaInflu}</Text>
                     </View>
             </View>

              <View style={{flex:2,marginLeft:2}}>
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
            <View style={{flex:2,alignItems:'flex-end'}}>
            <TouchableOpacity
             onPress={() => this.props.navigation.pop()}
             > 
               <Text style={{color:'white',fontSize:16}}>
               Skip video
               </Text>
               </TouchableOpacity>
             </View>
           </View>
           <View style={{flex:2,marginHorizontal:16}}>
               <Text style={{color:'white',fontSize:wp('6%'),fontWeight:'bold'}}>
               My FIRST God of War {'\n'}
               experience!
               </Text>
            </View>

   </ImageBackground>
   </TouchableOpacity>
        </View>
     
        <View style={{flex:1}}>
      
   <TouchableOpacity  style={{flex:1,backgroundColor:'#ff5a60',
                      alignItems:'center',justifyContent:'center'}}
     onPress = {() => this.props.navigation.navigate("liveEventDetail3") } >
        <Text style={{ color:'white', 
         fontSize:wp('5%'),letterSpacing:0.41 }}>
          Buy ticket for $ {this.state.precioTicket}</Text>
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