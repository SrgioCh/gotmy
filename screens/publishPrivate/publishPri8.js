import React from 'react';
import {Alert, StyleSheet, Text, View, Dimensions, TouchableOpacity,Image } from 'react-native';

import { Camera,  Permissions, Video } from 'expo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { withTheme } from 'react-native-elements';

export default class PublishPri8 extends React.Component {

    
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
      
       TxtPrinci:'You are amazing! 😍 Thank you so much for booking my live Event!',

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
         resizeMode="cover" />
         <TouchableOpacity 
         
         onPress={() => this.props.navigation.navigate("publishPri10")}
         style={{ width: W, height:'10%',backgroundColor:'#ff5a60',alignItems:'center',justifyContent:'center'}}>
               <Text style={{ color:'white',fontWeight:'bold'}}>
                  Preview and publish 
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
                      }}>Thank you Video</Text>
                    </View>

         </View>
 
              
             <View style={{flexDirection:'row',width:'100%' ,position:'absolute',bottom:hp('20%')}}>
                 <View style={{marginLeft: '4%',
                 flex:8,paddingTop:hp('0.5%')
                 }}>
                     <Text style={{
                      color:'#fff',fontSize:wp('7.5%'),fontWeight:'bold'
                       }}>{this.state.TxtPrinci}</Text>
                 </View>
                 <View style={{
                  flex:2
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
                      }}>Thank you Video</Text>
                    </View>
           </View>
           <View style={{flex:5.5,marginHorizontal:'4%'}}>
                   <View style={{ display:this.state.msgflot,flexDirection:'row',zIndex:4,}}>
                         
                         <View style={{flex:8,zIndex:4,padding:hp('1.5%')}}>
                             <Text style={{zIndex:4,
                               color:'#fff',fontSize:wp('3.5%'),fontWeight:'bold',
                                }}>tell attendes why you appreciate their support, and give them a heads
                                   up on important event information
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
                            ,paddingVertical:hp('5%'),borderRadius:wp('3%')}}>
                         </TouchableOpacity> 
                   </View>
                  
            </View>
            <View style={{
               flex:3, 
            }}>
                <View style={{alignItems:'center'}}>
                <Text style={{display:this.state.avisoRecord,
                 color:'#ff5a60',fontSize:wp('5%'),fontWeight:'500' 
                 }}>
                 Record a video to thank
                </Text>
                </View>
                <View style={{alignItems:'center'}}>
                <Text style={{display:this.state.avisoRecord,
                 color:'#ff5a60',fontSize:wp('5%'),fontWeight:'500' 
                 }}>
                 attendees for booking your
                </Text>
                </View>
                <View style={{alignItems:'center'}}>
                <Text style={{display:this.state.avisoRecord,
                 color:'#ff5a60',fontSize:wp('5%'),fontWeight:'500' 
                 }}>
                 live event
                </Text>
                </View>
              
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
                      }}>Thank you Video</Text>
                    </View>
           </View>
           <View style={{flex:5.5,marginHorizontal:'4%'}}>
                   <View style={{ display:this.state.msgflot,flexDirection:'row',zIndex:4,}}>
                         
                         <View style={{flex:8,zIndex:4,padding:hp('1.5%')}}>
                             <Text style={{zIndex:4,
                               color:'#fff',fontSize:wp('3.5%'),fontWeight:'bold',
                                }}>tell attendes why you appreciate their support, and give them a heads
                                   up on important event information
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
                            ,paddingVertical:hp('5%'),borderRadius:wp('3%')}}>
                         </TouchableOpacity> 
                   </View>
                  
            </View>
            <View style={{
               flex:3, 
            }}>
                <View style={{alignItems:'center'}}>
                <Text style={{display:this.state.avisoRecord,
                 color:'#ff5a60',fontSize:wp('5%'),fontWeight:'500' 
                 }}>
                 Record a video to thank
                </Text>
                </View>
                <View style={{alignItems:'center'}}>
                <Text style={{display:this.state.avisoRecord,
                 color:'#ff5a60',fontSize:wp('5%'),fontWeight:'500' 
                 }}>
                 attendees for booking your
                </Text>
                </View>
                <View style={{alignItems:'center'}}>
                <Text style={{display:this.state.avisoRecord,
                 color:'#ff5a60',fontSize:wp('5%'),fontWeight:'500' 
                 }}>
                 live event
                </Text>
                </View>
              
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
                      })}  >
                          <Image source={require('../../assets/icons_genGMI/changeCamera.png')} 
                               style={{ }}
                               /> 
                        </TouchableOpacity>
                </View>:
                 <View style={{flex:3.5,justifyContent:'center'}}>
                 <TouchableOpacity 
                  onPress={()=>this.setState({
                    atras:true,
                   })} 
                  >
                    <Image source={require('../../assets/icons_genGMI/changeCamera.png')} 
                         style={{ }}
                         /> 
                  </TouchableOpacity>
                </View> }

              
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

