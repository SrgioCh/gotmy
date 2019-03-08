import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,ImageBackground,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

import Button from 'react-native-button'; 

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
     
          <View style={{flex:9,
              marginTop:24}}>
              <TouchableOpacity 
            onPress = {() => this.props.navigation.navigate("boked1") } >
              <ImageBackground source={require('../../assets/influencers/MandyJTV/mandylive2.png')}
              style={{width: '100%', height: '100%'}}>
              
                
                <View style={{flex:7,flexDirection:'row',marginHorizontal:16,marginVertical:14}}>

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
                         <Text style={{fontSize:17,color:'white'}}>{this.state.nombreInflu}</Text>
                     </View>
                    <View style={{flexDirection:'row'}}>
                           <View style={{ width:12,height:12,marginTop:5}}>
                              <Image source={require('../../assets/icons_genGMI/ubicacion.png')} 
                              style={{borderRadius:10 ,width:'100%',height:'100%'}}
                               />
                           </View>
                          <Text style={{fontSize:13,color:'white',marginLeft:4}}>{this.state.ciudaInflu}</Text>
                     </View>
             </View>

              <View style={{flex:2,marginRight:1}}>
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
            <View style={{flex:2,alignItems:'flex-end',
                   }}>
            <TouchableOpacity 
              onPress = {() => this.props.navigation.navigate("publishEven1") } >
               <Text style={{color:'white',fontSize:16,
                borderRadius:10,backgroundColor:'#e2e7ee',padding:5}}>
              Publish Live Event
               </Text>
               </TouchableOpacity>
             </View>
           </View>
           <View style={{flex:3,marginHorizontal:16}}>
               <Text style={{color:'white',fontSize:28,fontWeight:'bold'}}>
               You are amazing! 😍{'\n'}
            Thank you so much for {'\n'} booking my Live Event!
               
               
               
           
               </Text>
            </View>

   </ImageBackground>
   </TouchableOpacity>
        </View>
   
        <View style={{flex:1}}>
        <View style={{flex:1,backgroundColor:'#ff5a60',padding:'5%',
  
  alignItems:'center',justifyContent:'center'}}>
   <TouchableOpacity 
     onPress = {() => this.props.navigation.navigate("liveEventStreaming") } >
     <Text style={{flex:1 , color:'white', 
         fontSize:17,letterSpacing:0.41 }}>
          a live event streaming</Text>
       </TouchableOpacity>
       </View>
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