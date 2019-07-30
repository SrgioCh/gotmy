import React, { Component } from 'react';
import { AppRegistry, Alert,Platform,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

  import Estrellas from "./component/estrellas"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class MyLiveEventsPast extends Component {

    static navigationOptions = {
        header: null ,
    };
    
      constructor(props){
    
        super(props);
      
         this.state={
         
        imagInflu:require('../../assets/influencers/KalaTempo/kalaInfluMenu.jpg'),
        nombre:"Kala|Tempo 🦊",
        estrellas:2,
        tipoEstre:'peque',
        mensa1:"Kala's Community Coaching ✈️",
        mensa2:'Games',
        imagVid:require("../../assets/influencers/KalaTempo/kala3.png"),
        duraVid:'12:40'
          }
      
      }// fin de consttructor
    
      render() {
    /*
 <TouchableOpacity
               onPress={() => this.props.enviaAPadre("requestAcepted2")}
                > 
    */
        return (
    
    
    
       <ScrollView>
         
           <View style={{paddingVertical:hp('2%'), flexDirection:"row",marginHorizontal:wp('4%'),
                         borderBottomWidth:wp('0.1%'),borderBottomColor:'grey'}}>
                  <View  style={{flex:6}}>

                  <View  style={{flexDirection:'row'}}>
                               <View  style={{flex:2,}}>
                                           <Image
                                             source={this.state.imagInflu}
                                                style={{
                                                   width:35,
                                                  height:35,
                                                   borderRadius:20,
                                               
                                                   }}
                                             />
                              </View>
                               <View  style={{flex:8}}>
                                    <Text style={{
                                        color:'#312f3d',
                                        fontSize:wp('3.4%'),
                                        fontWeight:'500'
                                    }}>
                                       {this.state.nombre}
                                   </Text>
                                   <View>
                                      <Estrellas  estrellas={this.state.estrellas} tipoEstre={this.state.tipoEstre}/>
                                  </View>
                               </View>
                       </View>
                       <View style={{paddingTop:hp('1%')}}>
                           <Text style={{
                                        color:'#312f3d',
                                        fontSize:Platform.OS === 'ios' ? wp('3.3%'):wp('3.6%'),
                                        fontWeight:'bold'
                                    }}>{this.state.mensa1}</Text>
                           <Text style={{
                               marginTop:hp('0.5%'),
                                        color:'#312f3d',
                                        fontSize:wp('3.1%'),
                                        fontWeight:'100'
                                    }}>{this.state.mensa2}</Text>
                       </View>
                  </View>
                  <View  style={{flex:4,alignItems:'flex-end'}}>
                  <View style={{ width:'92%',height:90,}}>
                       <Image source={this.state.imagVid} 
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
                     bottom:Platform.OS === 'ios' ? hp('0.5%'):hp('0.5%'),
                      right:wp('1.5%'),
                      zIndex:4,
                     borderRadius:Platform.OS === 'ios' ? hp('1%'):hp('1%'),
                     borderBottomWidth:1,
                    }}></View>
            <Text
              style={{
              position:'absolute',
                zIndex:6,
              bottom:Platform.OS === 'ios' ? hp('0.8%'):hp('0.8%'),
              right:wp('3%'),
            color:'white',

              }}>{this.state.duraVid}</Text>
                  </View>

           </View>
    
    </ScrollView>
        
    
         
        );
      }
     
    }
    
    
    
    
    
    const styles = StyleSheet.create({
     
    
    pentaIcon:{
      color:'white',
      fontSize:13,
      
    },
    
    
    
    
    
    });