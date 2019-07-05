import React from 'react';
import { Platform,StyleSheet, Text,Dimensions,Alert,
  TextInput,TouchableOpacity, View, Image } from 'react-native';
 
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class CoachInfluencer  extends React.Component {
   
    static navigationOptions = {
        header: null ,
    };
 
 
constructor(props) {
  super(props);

this.state = {
    view:4.354,

    //botones
    posciMode:'flex-start',
    modeImag :require('../../assets/icons_genGMI/coachmode.png'),


     posciRai:'flex-start',
     modeImagB:require('../../assets/icons_genGMI/raiceOf.png'),


    posciCame:'flex-start',
    modeImagC:require('../../assets/icons_genGMI/cameraLiveOf.png'),

    posciMic:'flex-start',
    modeImagD:require('../../assets/icons_genGMI/microLiveOf.png')
 
  }

}

    render() {

    
    return (

        <View  style={{flex:1,backgroundColor:'black'}}>
          <View style={{flex:3.5}}>
              <View style={{flex:2,alignItems:'flex-end',justifyContent:'flex-end',marginHorizontal:wp('4%')}}>
                    <View style={{flexDirection:'row'}}>
                           <Image source={require('../../assets/icons_genGMI/userWhite.png')} 
                              style={{width:15,height:15 }}          
                                /> 
                             <View style={{justifyContent:'center'}}>
                              <Text style={{
                                 fontSize:wp('3%'),
                                 color:'white',
                                  
                              }}>{this.state.view}</Text>      
                            </View>  
                    </View>
              </View>
              <View style={{flex:2,alignItems:'flex-end',
                        marginHorizontal:wp('4%'),justifyContent:'flex-end'}}>
                        <View style={{padding:hp('0.3%'),borderRadius:30,
                         borderWidth:wp('0.2%'),borderColor:'#232323',
                         }}>
                           <Image source={require('../../assets/icons_genGMI/uploads.png')} 
                              style={{width:35,height:35 }}          
                                /> 
                        </View>
              </View>
              <View style={{flex:6,alignItems:'center',justifyContent:'center'}}>
                      <View style={{alignItems:'center'}}>
                          <Text style={{
                                fontSize:wp('7%'),
                                color:'white',
                                fontWeight:'bold'
                          }}>Welcome to your</Text>
                       </View>
                       <View style={{alignItems:'center'}}>
                       <Text style={{
                              fontSize:wp('7%'),
                              color:'white',
                              fontWeight:'bold'
                            }}>Live Event</Text>
                       </View>
              </View>
          </View>
          <View style={{flex:5,backgroundColor:'black',alignItems:'center'}}>
                <View style={{
                  
                    marginTop:hp('2%'),
                    paddingVertical:hp('1%'),
                    paddingHorizontal:wp('4%'),
                    backgroundColor:'#101010',
                    borderRadius:hp('5%'),
                    width:'90%',
                    flexDirection:'row',
                }}>
                   <View style={{flex:8}}>
                   <Text style={{
                              fontSize:wp('4%'),
                              color:'white',
                              fontWeight:'bold'
                            }}>Open Mode</Text>
                             <Text style={{
                              fontSize:wp('3%'),
                              color:'white',
                              fontWeight:'bold',
                              marginTop:hp('0.5%')
                            }}>Enable to use micros to speak</Text>
                   </View>
                   <TouchableOpacity 
                   style={{
                    flex:2,
                   
                    paddingVertical:hp('0.5%'),
                    paddingHorizontal:wp('2%'),
                    backgroundColor:'#232323',
                    borderRadius:hp('3%'),
                    justifyContent:'center',
                    alignItems:this.state.posciMode,
                   }}
               onPress={() => {
                   
                 if(this.state.posciMode=='flex-start'){
                     this.setState({
                       posciMode:'flex-end',
                       modeImag:require('../../assets/icons_genGMI/coachmodeOn.png'),
                     })
                 }else{
                    this.setState({
                        posciMode:'flex-start',
                        modeImag:require('../../assets/icons_genGMI/coachmode.png'),
                      })
                 }
                }
           }
               >  
                   
                     <Image source={this.state.modeImag} 
                              style={{width:27,height:27,borderRadius:20}}          
                                /> 
                </TouchableOpacity>
                </View>



                <View style={{
                  
                  marginTop:hp('2%'),
                  paddingVertical:hp('1%'),
                  paddingHorizontal:wp('4%'),
                  backgroundColor:'#101010',
                  borderRadius:hp('5%'),
                  width:'90%',
                  flexDirection:'row',
              }}>
                 <View style={{flex:8}}>
                 <Text style={{
                            fontSize:wp('4%'),
                            color:'white',
                            fontWeight:'bold'
                          }}>Raise Hand</Text>
                           <Text style={{
                           fontSize:wp('3%'),
                            color:'white',
                            fontWeight:'bold',
                            marginTop:hp('0.5%')
                          }}>Enable to use the Raise Hand Texture</Text>
                 </View>
                 <TouchableOpacity 
                 style={{
                  flex:2,
                 
                  paddingVertical:hp('0.5%'),
                  paddingHorizontal:wp('2%'),
                  backgroundColor:'#232323',
                  borderRadius:hp('3%'),
                  justifyContent:'center',
                  alignItems:this.state.posciRai,
                 }}
             onPress={() => {
                 
               if(this.state.posciRai=='flex-start'){
                   this.setState({
                     posciRai:'flex-end',
                     modeImagB:require('../../assets/icons_genGMI/raiceOn.png'),
                   })
               }else{
                  this.setState({
                      posciRai:'flex-start',
                      modeImagB:require('../../assets/icons_genGMI/raiceOf.png'),
                    })
               }
              }
         }
             >  
                 
                   <Image source={this.state.modeImagB} 
                            style={{width:30,height:30,borderRadius:20}}          
                              /> 
              </TouchableOpacity>
              </View>




              <View style={{
                  
                  marginTop:hp('2%'),
                  paddingVertical:hp('1%'),
                  paddingHorizontal:wp('4%'),
                  backgroundColor:'#101010',
                  borderRadius:hp('5%'),
                  width:'90%',
                  flexDirection:'row',
              }}>
                 <View style={{flex:8}}>
                 <Text style={{
                            fontSize:wp('4%'),
                            color:'white',
                            fontWeight:'bold'
                          }}>Camera On/Off</Text>
                           <Text style={{
                            fontSize:wp('3%'),
                            color:'white',
                            fontWeight:'bold',
                            marginTop:hp('0.5%')
                          }}>Enable or disable your camera</Text>
                 </View>
                 <TouchableOpacity 
                 style={{
                  flex:2,
                 
                  paddingVertical:hp('0.5%'),
                  paddingHorizontal:wp('2%'),
                  backgroundColor:'#232323',
                  borderRadius:hp('3%'),
                  justifyContent:'center',
                  alignItems:this.state.posciCame,
                 }}
             onPress={() => {
                 
               if(this.state.posciCame=='flex-start'){
                   this.setState({
                    posciCame:'flex-end',
                     modeImagC:require('../../assets/icons_genGMI/cameraLiveOn.png'),
                   })
               }else{
                  this.setState({
                    posciCame:'flex-start',
                      modeImagC:require('../../assets/icons_genGMI/cameraLiveOf.png'),
                    })
               }
              }
         }
             >  
                 
                   <Image source={this.state.modeImagC} 
                            style={{width:30,height:30,borderRadius:20}}          
                              /> 
              </TouchableOpacity>
              </View>



              <View style={{
                  
                  marginTop:hp('2%'),
                  paddingVertical:hp('1%'),
                  paddingHorizontal:wp('4%'),
                  backgroundColor:'#101010',
                  borderRadius:hp('5%'),
                  width:'90%',
                  flexDirection:'row',
              }}>
                 <View style={{flex:8}}>
                 <Text style={{
                            fontSize:wp('4%'),
                            color:'white',
                            fontWeight:'bold'
                          }}>Mic On/Off</Text>
                           <Text style={{
                            fontSize:wp('3%'),
                            color:'white',
                            fontWeight:'bold',
                            marginTop:hp('0.5%')
                          }}>Enable or disable your camera</Text>
                 </View>
                 <TouchableOpacity 
                 style={{
                  flex:2,
                 
                  paddingVertical:hp('0.5%'),
                  paddingHorizontal:wp('2%'),
                   backgroundColor:'#232323',
                  borderRadius:hp('3%'),
                  justifyContent:'center',
                  alignItems:this.state.posciMic,
                 }}
             onPress={() => {
                 
               if(this.state.posciMic=='flex-start'){
                   this.setState({
                     posciMic:'flex-end',
                     modeImagD:require('../../assets/icons_genGMI/microLiveOn.png'),
                   })
               }else{
                  this.setState({
                      posciMic:'flex-start',
                      modeImagD:require('../../assets/icons_genGMI/microLiveOf.png'),
                    })
               }
              }
         }
             >  
                 
                   <Image source={this.state.modeImagD} 
                            style={{width:30,height:30,borderRadius:20}}          
                              /> 
              </TouchableOpacity>
              </View>
         </View>
         <View style={{flex:1.5,alignItems:'center'}}>
         <TouchableOpacity style={{width:'80%',paddingVertical:hp('1.5%'),
       borderWidth:wp('0.3%'),borderRadius:wp('30%'),borderColor:'white'
         ,alignItems:'center',justifyContent:'center'}}
          onPress = {() => this.props.navigation.navigate("chooceModerator") } >
           <Text style={{color:'white',
           fontSize:wp('4%'),letterSpacing:0.41 }}>Continue</Text>
        </TouchableOpacity>
         </View>
       </View>

  
   
   );
}
}




const styles = StyleSheet.create({
 
 

});




