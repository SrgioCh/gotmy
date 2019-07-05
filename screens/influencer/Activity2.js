import React, { Component } from 'react';
import { AppRegistry, Alert,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
  import Cabezera from "./component/cabezera"

export default class Activity2 extends Component {


  static navigationOptions = {
    header: null ,
};

  constructor(props){

    super(props);
  
     this.state={

      imagInflu:require('../../assets/influencers/influencer.png'),
      influencer:'Kala | Tempo',
     // fotoInflu:'influencer.png',
      correoInflu:'@kalatempo',
      imagMasco:require('../../assets/influencers/KalaTempo/mascotaKala.png'),
      icono:null,
      haciaPag:null,


       opaciNo:null,
       opaciSi:0.5,




      userIcon1:require('../../assets/activity/una.png'),
      user1:'Lisa smith',
      mensaje1:'started following you',
      tiempo1:'2 min ago',
      evento1:<View style={{backgroundColor:'#ff5a60',paddingHorizontal:10 ,
                  paddingVertical:4 ,borderRadius:20  }}>
                 <Text style={{color:'white',fontSize:12}}>Follow</Text>
              </View>,

     userIcon2:require('../../assets/activity/dos.png'),
     user2:'Jhon Terry',
     mensaje2:'approved a Private Meeting',
     tiempo2:'5 min ago',
     evento2:null,
    


     userIcon3:require('../../assets/activity/tres.png'),
     user3:'Melisa Everson',
     mensaje3:'booked your event Showcase Gaming 2019',
     tiempo3:'10 min ago',
     evento3: <Image source={require('../../assets/OnBoard/motor.jpg')} 
                  style={{ width:50,height:50,borderRadius:5}}
                   />,

      }
  
  }// fin de consttructor

  abrirMenu(){
    this.props.navigation.toggleDrawer() 
  }
 




  render() {
    

    let screenHeight=Dimensions.get('window').height;
    if(screenHeight<=592){//1080 * 1920  xxhdpi
      flexName=2
    }else if(screenHeight<=605){ //mopvil de  david

      flexName=2
  
  } else if(screenHeight<=678){ // mi movil
    flexName=2
   }else if(screenHeight<=685){ //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
    flexName=2
   }else if(screenHeight<=775){//1440 *2880 :560dpi
    flexName=2
   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
    flexName=2.5
   }else{
    flexName=4
   }



    return (




      <View style={{flex: 1}}>
     
     <Cabezera
       imagInflu={this.state.imagInflu}
       influencer={this.state.influencer}
       imagMasco={this.state.imagMasco}
       correoInflu={this.state.correoInflu}
       


       icono={this.state.icono}
      haciaPag={this.state.haciaPag}
      enviaAPadreMenu={this.abrirMenu.bind(this)}
       />

      <View style={{flex: 8.7}}>
      


{/* TITULO */}  

<View style={{marginHorizontal:16}}>
    <Text style={{fontSize:34,color:'#312f3d',marginBottom:15,marginTop:hp('2%'),
           fontWeight: 'bold',}}>Activity</Text>

</View>

<ScrollView style={{marginTop:10}} >

<View style={{flexDirection:'row',marginHorizontal:16,marginTop:14,marginBottom: 5,}}>

      <View style={{flex:1,paddingBottom:15}}>
                          <Image source={this.state.userIcon1} 
                               style={{ width:40,height:40,borderRadius:10}}
                              />
                      
       </View>
  
      <View style={{flex:4,flexDirection:'column',marginLeft:-10,
              borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
           <View>
              <Text style={{fontSize:15,color:'#312f3d'}}>
              <Text style={{fontWeight:'bold'}}>{this.state.user1}</Text> 
              {' '}{this.state.mensaje1}</Text>
           </View>
          <View>
            <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>{this.state.tiempo1}</Text>
          </View>
      
     </View>
     <View style={{flex:1,justifyContent:'center', borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}} >
       {this.state.evento1}
     </View>
</View>


<View style={{flexDirection:'row',marginHorizontal:16,marginVertical:5}}>

    <View style={{flex:1,paddingBottom:15}}>
                    <Image source={this.state.userIcon2} 
                         style={{ width:40,height:40,borderRadius:10}}
                        />
                
    </View>

    <View style={{flex:4,flexDirection:'column',marginLeft:-10,
        borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
         <View>
        <Text style={{fontSize:15,color:'#312f3d'}}>
        <Text style={{fontWeight:'bold'}}>{this.state.user2}</Text> 
        {' '}{this.state.mensaje2}</Text>
        </View>
     <View>
      <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>{this.state.tiempo2}</Text>
    </View>

    </View>
          <View style={{flex:1,
              justifyContent:'center', borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}} >
          {this.state.evento2}
        </View>

</View>
{/*-----------------------------------------*/}

<View style={{flexDirection:'row',marginHorizontal:16,marginVertical:5}}>

<View style={{flex:1,paddingBottom:15}}>
                    <Image source={this.state.userIcon3} 
                         style={{ width:40,height:40,borderRadius:10}}
                        />
                
 </View>

<View style={{flex:4,flexDirection:'column',marginLeft:-10,
        borderBottomWidth:1,  borderBottomColor:'#e1e3e6',paddingBottom:15}}>
     <View>
        <Text style={{fontSize:15,color:'#312f3d'}}>
        <Text style={{fontWeight:'bold'}}>{this.state.user3}</Text> 
        {' '}{this.state.mensaje3}</Text>
     </View>
    <View>
      <Text style={{fontSize:13,color:'#697181',marginLeft:4}}>{this.state.tiempo3}</Text>
    </View>

</View>
<View style={{flex:1,justifyContent:'center', borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}} >
 {this.state.evento3}
</View>


</View>


 
    </ScrollView>
    
    </View>
 </View>


     
    );
  }
 
}





const styles = StyleSheet.create({
 
//en lista influencer
estrellasTrending:{
  paddingTop:7,
  marginLeft:-6,
  flexDirection:'row',

},
socialBotonRojo:{
  backgroundColor: '#ff5a60',
  alignItems:'center',
  borderRadius:27,
  width:'80%',
  paddingVertical:5,
  paddingHorizontal:6,

  
},
socialBotonBlanco:{
  backgroundColor: 'white',
  alignItems:'center',
  borderRadius:27,
  width:'80%',
  paddingVertical:5,
  paddingHorizontal:5,
  borderWidth:1,
  borderColor: '#312f3d',
},
pentaIcon:{
  color:'white',
  fontSize:13,
  
},

});