import React from 'react';
import {Alert, StyleSheet, Text, View, Dimensions, TouchableOpacity,Image } from 'react-native';

import { Camera,  Permissions, Video } from 'expo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { withTheme } from 'react-native-elements';

export default class PublishPri5 extends React.Component {

    
    static navigationOptions = {
        header: null ,
    };
 


  constructor(props) { 

    super(props);

    this.state = {
      video: null,
      recording: false,
      stopping: false,
       msgflot:'flex',
       avisoRecord:'flex',

       //para la caja de fechas
       dia:21,
       mes:'DEC',
       TxtPrinci:'Recording tonight :) if I stream it will be late 😍',
       txtsecun:'show Events',
       ciudadHora:'Live from Hong Kong, at 12:30 pm',

       atras:true,//para la camara trasera


    }

    this.cameraRef = null;

    this.setRef = this.setRef.bind(this);
    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
    this.reset = this.reset.bind(this);

  }

  async componentDidMount(){
    let cStatus = await Permissions.askAsync(Permissions.CAMERA);
    if (cStatus.status !== "granted")
      alert("1 This won't work without permission: " + cStatus.status);
    cStatus = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    if (cStatus.status !== "granted")
      alert("2 This won't work without permission: " + cStatus.status);

  }

  startRecording = () => {
    this.setState({recording: true,
                     msgflot:'none',
                     avisoRecord:'none'});
    this.cameraRef.recordAsync()
      .then((video) => {
      //  alert("Stopped.");
        this.setState({video: video, recording: false});
      })
      .catch((err) => alert(err));

  }

  stopRecording = () => {
    
  // alert("Stopping.");
    this.setState({ stopping: true });
    this.cameraRef.stopRecording();
   

  }




  renderPlayback = () => {

    const W = Dimensions.get("window").width;
    const P = Math.floor( W / 2) - 50;

    return(
      <View style={{flex: 1}}>
      
        <Video source={{ uri: this.state.video.uri}} 
        useNativeControls={false} 
        shouldPlay={true}
        style={{ width: W, height:'90%'}}
        resizeMode="cover"
     
         />
         <TouchableOpacity 
         
         onPress={() => this.props.navigation.navigate("publishPri7")}
         style={{ width: W, height:'10%',backgroundColor:'#ff5a60',alignItems:'center',justifyContent:'center'}}>
               <Text style={{ color:'white',fontWeight:'bold'}}>
                  Save and Continue   
               </Text>
         </TouchableOpacity>


    
         <View style={{flexDirection:'row',position:'absolute',zIndex: 4
                      ,top:hp('4.5%')}}>
                     <View  style={{flex:3.5,justifyContent:'center',alignItems:"center"}}>
                       <TouchableOpacity onPress={() => this.reset()} 
                             style={{backgroundColor:'#ff5a60',height:hp('5%'),width:wp('22%'),paddingHorizontal:5,
                             borderRadius:15,justifyContent:'center',alignItems:'center'} }>
                              <Text style={{color: "white",fontWeight:'bold'}}>Repeat</Text>
                        </TouchableOpacity> 
                    </View>
                    <View  style={{flex:6.5,justifyContent:'center'}}>
                    <Text style={{
                        color:'#fff',fontSize:wp('4.5%'),fontWeight:'200'
                      }}>Event Pitch Video</Text>
                    </View>

         </View>
         <View style={{flexDirection:'row',position:'absolute',height:hp('8.5%'),zIndex:1,
           width:'100%',top:hp('4.5%')}}>
                
                <View style={{
               flex:5,borderBottomColor:'white',borderBottomWidth:wp('1%')
                }}>
                <Text>{' '}</Text>
                </View>
                <View style={{
                    flex:5,borderBottomColor:'white',borderBottomWidth:wp('1%'),opacity:0.2
                }}>
                  
                <Text>{' '}</Text>
                </View>
             </View>
             <View style={{flexDirection:'row',width:'100%' ,position:'absolute',bottom:hp('20%')}}>
                 <View style={{marginLeft: '4%',
                 flex:1.5,alignItems:'center',paddingTop:hp('0.5%')
                 }}>
                     <View >
                         <Text style={{color:'white',fontSize:wp('6.5%'),fontWeight:'bold'}}>{this.state.dia}</Text>
                         <Text style={{color:'#ff5a60',fontSize:wp('4%'),fontWeight:'500'}} >{this.state.mes}</Text>
                     </View>
                 </View>
                 <View style={{
                  flex:5.5
                  }}> 
                     
                       <View>
                            <Text  style={{color:'white',fontSize:wp('5%'),fontWeight:'bold'}}>
                             {this.state.TxtPrinci}
                            </Text>
                         </View>
                       <Text style={{color:'white',fontSize:wp('4.5%')}}>{this.state.txtsecun}</Text>
                       <View style={{flexDirection:'row'}}>
                           <View style={{flex:1,alignItems:'flex-start'}}>
                             <Image source={require('../../assets/icons_genGMI/ubicacionwhite.png')} 
                             style={{ width:15,height:15,borderRadius:10}}
                            /> 
                           </View>
                          <View style={{flex:9}}>
                             <Text style={{color:'white',fontSize:wp('3%')}}>{this.state.ciudadHora}</Text>
                           </View>
                       </View>
                  </View>
                  <View style={{
                  flex:3
                  }}>  
                  </View>
             </View>
        
      </View>
     
    )
    

  }

  reset() {
    this.setState({video: null, stopping: false, recording: false});
  }

  setRef(ref){
    console.log("Setting this.cameraRef to " + ref);
    this.cameraRef = ref;
  }

  renderCamera = () => {

    const W = Dimensions.get("window").width;
    const H='100%';
    const P = Math.floor( W / 2) - 50;

    let bColor = this.state.stopping ? "blue" : "red" ;


    return(
      <View style={{flex: 1}}>
       
       {this.state.atras?
        <Camera
            style={{ width: W, height:H, borderColor: "red",justifyContent:'flex-end' }}
            type={Camera.Constants.Type.front}
            ref={this.setRef}
          >
           <View style={{ flex:1.5,flexDirection:'row',marginHorizontal:'4%'}}>
                 <View style={{flex:3.5,justifyContent:'center'
                    }}>
                      <TouchableOpacity onPress={() =>
                      this.props.navigation.goBack()} 
                        >
                          <Image source={require('../../assets/icons_genGMI/Backwhitebk.png')} 
                          style={{ width:25,height:25}}
                            /> 
                         </TouchableOpacity>
                   </View>
                     <View style={{flex:6.5,justifyContent:'center'
                    }}>
                      <Text style={{
                       color:'#fff',fontSize:wp('4.5%'),fontWeight:'200'
                      }}>Event Pitch Video</Text>
                    </View>
           </View>
           <View style={{flex:5.5,marginHorizontal:'4%'}}>
                   <View style={{ display:this.state.msgflot,flexDirection:'row',zIndex:4,}}>
                         
                         <View style={{flex:8,zIndex:4,padding:hp('1.5%')}}>
                             <Text style={{zIndex:4,
                               color:'#fff',fontSize:wp('3.5%'),fontWeight:'bold',
                                }}>tell potential attendes why they should attend
                                  yout event
                            </Text>
                         </View>
                         <View style={{flex:2,alignItems:'flex-end',padding:hp('1.5%'),
                       }}>
                             <Image source={require('../../assets/icons_genGMI/deleteCircle.png')} 
                               style={{ width:20,height:20,borderRadius:10}}
                                   /> 
                
                         </View>

                         <TouchableOpacity 
                           onPress={() => this.setState({msgflot:'none'})}  
                         style={{position:'absolute',width:'100%',zIndex:0,
                           backgroundColor:'black',opacity:0.5,flexDirection:'row'
                            ,paddingVertical:hp('4%'),borderRadius:wp('3%')}}>
                         </TouchableOpacity> 
                   </View>
                  
            </View>
            <View style={{
               flex:3,alignItems:'center'
            }}>
               <Text style={{display:this.state.avisoRecord,
                color:'#ff5a60',fontSize:wp('5%'),fontWeight:'500' 
               }}>
                 Record an event pitch video
               </Text>
            </View>
      </Camera>:<Camera
            style={{ width: W, height:H, borderColor: "red",justifyContent:'flex-end' }}
            type={Camera.Constants.Type.back}
            ref={this.setRef}
          >
           <View style={{ flex:1.5,flexDirection:'row',marginHorizontal:'4%'}}>
                 <View style={{flex:3.5,justifyContent:'center'
                    }}>
                      <TouchableOpacity onPress={() =>
                      this.props.navigation.goBack()} 
                        >
                          <Image source={require('../../assets/icons_genGMI/Backwhitebk.png')} 
                          style={{ width:25,height:25}}
                            /> 
                         </TouchableOpacity>
                   </View>
                     <View style={{flex:6.5,justifyContent:'center'
                    }}>
                      <Text style={{
                       color:'#fff',fontSize:wp('4.5%'),fontWeight:'200'
                      }}>Event Pitch Video</Text>
                    </View>
           </View>
           <View style={{flex:5.5,marginHorizontal:'4%'}}>
                   <View style={{ display:this.state.msgflot,flexDirection:'row',zIndex:4,}}>
                         
                         <View style={{flex:8,zIndex:4,padding:hp('1.5%')}}>
                             <Text style={{zIndex:4,
                               color:'#fff',fontSize:wp('3.5%'),fontWeight:'bold',
                                }}>tell potential attendes why they should attend
                                  yout event
                            </Text>
                         </View>
                         <View style={{flex:2,alignItems:'flex-end',padding:hp('1.5%'),
                       }}>
                             <Image source={require('../../assets/icons_genGMI/deleteCircle.png')} 
                               style={{ width:20,height:20,borderRadius:10}}
                                   /> 
                
                         </View>

                         <TouchableOpacity 
                           onPress={() => this.setState({msgflot:'none'})}  
                         style={{position:'absolute',width:'100%',zIndex:0,
                           backgroundColor:'black',opacity:0.5,flexDirection:'row'
                            ,paddingVertical:hp('4%'),borderRadius:wp('3%')}}>
                         </TouchableOpacity> 
                   </View>
                  
            </View>
            <View style={{
               flex:3,alignItems:'center'
            }}>
               <Text style={{display:this.state.avisoRecord,
                color:'#ff5a60',fontSize:wp('5%'),fontWeight:'500' 
               }}>
                 Record an event pitch video
               </Text>
            </View>
              </Camera> }
        {
           !this.state.recording &&
           
             <View style={{position: "absolute",
                  bottom: 50 , flexDirection:'row'}}>
                  <View style={{flex:3.5 ,justifyContent:'center',alignItems:'flex-end'}}>
                        <TouchableOpacity onPress={() => Alert.alert('ver lo grabado')}  >
                             <Image source={require('../../assets/influencers/MandyJTV/mandy5.jpg')} 
                               style={{ width:40,height:40,borderRadius:8}}
                               /> 
                         </TouchableOpacity>
                </View>
                <View style={{flex:3,alignItems:'center',
                   justifyContent: "center" }}>
                <TouchableOpacity onPress={() => this.startRecording()}  >
                    <Image source={require('../../assets/icons_genGMI/grabar.png')} 
                   style={{ width:70,height:70,borderRadius:40}}
                    /> 
                </TouchableOpacity>
                </View>

                {this.state.atras? 
                <View style={{flex:3.5,justifyContent:'center'}}>
                       <TouchableOpacity
                       onPress={()=>this.setState({
                        atras:false,
                      })} >
                          <Image source={require('../../assets/icons_genGMI/changeCamera.png')} 
                               style={{ }}
                               /> 
                        </TouchableOpacity>
                </View>:
                   <View style={{flex:3.5,justifyContent:'center'}}>
                   <TouchableOpacity
                       onPress={()=>this.setState({
                       atras:true,
                      })} >
                      <Image source={require('../../assets/icons_genGMI/changeCamera.png')} 
                           style={{ }}
                           /> 
                    </TouchableOpacity>
                       </View>
                    }
              
           </View>

            
        }


        {this.state.recording &&
          <TouchableOpacity onPress={() => this.stopRecording()} 
            style={{width: 100, height: 40, position: "absolute",bottom: 50, left: P, justifyContent: "center", alignItems: "center"}}>
               <Image source={require('../../assets/icons_genGMI/stop.png')} 
                   style={{ width:70,height:70,borderRadius:40}}
                    /> 
          </TouchableOpacity>
        }
      </View>
    )

  }

  render() {

    
   
      return (
        <View style={styles.pbcontainer}>
          
          {this.state.video === null && this.renderCamera()}

          {this.state.video !== null && this.renderPlayback()}
          
        </View>
      );
   
    

  

    
  }
}

const styles = StyleSheet.create({
  
  pbcontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

