import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

import { Camera,  Permissions, Video } from 'expo';





export default class Boorramos extends React.Component {

  constructor(props) { 

    super(props);

    this.state = {
      video: null,
      recording: false,
      stopping: false
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
    this.setState({recording: true});
    this.cameraRef.recordAsync()
      .then((video) => {
        alert("Stopped.");
        this.setState({video: video, recording: false});
      })
      .catch((err) => alert(err));

  }

  stopRecording = () => {
    
    alert("Stopping.");
    this.setState({ stopping: true });
    this.cameraRef.stopRecording();
   

  }




  renderPlayback = () => {

    const W = Dimensions.get("window").width;
    const P = Math.floor( W / 2) - 50;

    return(
      <View style={{flex: 1}}>
      
        <Video source={{ uri: this.state.video.uri}} 
        useNativeControls={true} 
        style={{ width: W, height: W }}
         resizeMode="cover" />
        <TouchableOpacity onPress={() => this.reset()} 
            style={{width: 100, height: 40, position: "absolute", borderRadius: 8, borderColor: "red", borderWidth: 1, bottom: 50, left: P, justifyContent: "center", alignItems: "center" }}>
            <Text style={{color: "red"}}>RESET</Text>
        </TouchableOpacity>
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
    const P = Math.floor( W / 2) - 50;

    let bColor = this.state.stopping ? "blue" : "red" ;


    return(
      <View style={{flex: 1}}>
        <Camera
            style={{ width: W, height: W, borderColor: "red",justifyContent:'flex-end' }}
            type={Camera.Constants.Type.front}
            ref={this.setRef}
          >
       <View style={{backgroundColor:'yellow'}}>
         <Text>tenemos la camara</Text>
       </View>
      </Camera>
        {!this.state.recording &&
          <TouchableOpacity onPress={() => this.startRecording()} 
            style={{width: 100, height: 40, position: "absolute", borderRadius: 8, borderColor: "red", borderWidth: 1, bottom: 50, left: P, justifyContent: "center", alignItems: "center" }}>
            <Text style={{color: "red"}}>START</Text>
          </TouchableOpacity>
        }

        {this.state.recording &&
          <TouchableOpacity onPress={() => this.stopRecording()} 
            style={{width: 100, height: 40, position: "absolute", borderRadius: 8, borderColor: bColor, borderWidth: 1, bottom: 50, left: P, justifyContent: "center", alignItems: "center"}}>
            <Text style={{color: bColor}}>STOP</Text>
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



/*
import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { Camera, Permissions} from 'expo';

export default class Boorramos extends React.Component {
  constructor(props){
    super(props)    
    this.camera=undefined
    this.state = {permissionsGranted:false,bcolor:'red'}
    this.takeFilm = this.takeFilm.bind(this)
  }

  async componentWillMount() {    
    let cameraResponse = await Permissions.askAsync(Permissions.CAMERA)
    if (cameraResponse.status == 'granted'){
      let audioResponse = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
      if (audioResponse.status == 'granted'){
        this.setState({ permissionsGranted: true });
      }
    }                  
  }

  takeFilm(){    
    let self = this;
    if (this.camera){
      this.camera.recordAsync().then(data => self.setState({bcolor:'green'}))
    }    
  }

  render() {    
    if (!this.state.permissionsGranted){
      return <View><Text>Camera permissions not granted</Text></View>
    } else {
      return (
        <View style={{flex: 1}}>
          <View style={{ flex: 1 }}>
            <Camera ref={ref => this.camera = ref} style={{flex: 0.3}} ></Camera>
          </View>
          <TouchableOpacity style={{backgroundColor:this.state.bcolor, flex:0.3}} onPress={() => {

            if(this.state.cameraIsRecording){
              this.setState({cameraIsRecording:false})
              this.camera.stopRecording();
            }
            else{
              this.setState({cameraIsRecording:true})
              this.takeFilm();
            }
          }} />
        </View>)
    }
  }
}
*/


/*
import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Camera, Permissions, MediaLibrary } from "expo";

class MyCam extends Component {
  state = {
    video: null,
    picture: null,
    recording: false
  };

  _saveVideo = async () => {
    const { video } = this.state;
    const asset = await MediaLibrary.createAssetAsync(video.uri);
    if (asset) {
      this.setState({ video: null });
    }
  };

  _StopRecord = async () => {
    this.setState({ recording: false }, () => {
      this.cam.stopRecording();
    });
  };

  _StartRecord = async () => {
    if (this.cam) {
      this.setState({ recording: true }, async () => {
        const video = await this.cam.recordAsync();
        this.setState({ video });
      });
    }
  };

  toogleRecord = () => {
    const { recording } = this.state;

    if (recording) {
      this._StopRecord();
    } else {
      this._StartRecord();
    }
  };

  render() {
    const { recording, video } = this.state;
    return (
      <Camera
        ref={cam => (this.cam = cam)}
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          flex: 1,
          width: "100%"
        }}
      >
        {video && (
          <TouchableOpacity
            onPress={this._saveVideo}
            style={{
              padding: 20,
              width: "100%",
              backgroundColor: "#fff"
            }}
          >
            <Text style={{ textAlign: "center" }}>save</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={this.toogleRecord}
          style={{
            padding: 20,
            width: "100%",
            backgroundColor: recording ? "#ef4f84" : "#4fef97"
          }}
        >
          <Text style={{ textAlign: "center" }}>
            {recording ? "Stop" : "Record"}
          </Text>
        </TouchableOpacity>
      </Camera>
    );
  }
}

class RecVideo extends Component {
  state = {
    showCamera: false
  };

  _showCamera = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (status === "granted") {
      this.setState({ showCamera: true });
    }
  };

  render() {
    const { showCamera } = this.state;
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          width: "100%"
        }}
      >
        {showCamera ? (
          <MyCam />
        ) : (
          <TouchableOpacity onPress={this._showCamera}>
            <Text> Show Camera </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export default RecVideo;
*/

// ESTO ES UNA PARTE QUE GUARDE POR SI ACASO


/*
  &&
         
         <TouchableOpacity onPress={() => this.startRecording()} 
        style={{width: 100, height: 40, position: "absolute",
        backgroundColor:'yellow',
       borderRadius: 8, borderColor: "red", borderWidth: 1, top:hp('5%'), left: wp('4%'), justifyContent: "center" }}>
        <Image source={require('../../assets/icons_genGMI/Backwhitebk.png')} 
               style={{ width:25,height:25}}
               /> 
         </TouchableOpacity>
        }
            {!this.state.recording             


*/