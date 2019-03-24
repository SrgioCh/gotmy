import React, { Component } from 'react';
import { AppRegistry, Alert,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

import Button from 'react-native-button'; 

export default class RequestAcepted extends Component {


  static navigationOptions = {
    header: null ,
};

  constructor(props){

    super(props);
  
     this.state={

      influencer:'Kala | Tempo',
      fotoInflu:'influencer.png',
      correoInflu:'@kalatempo',

       opaciNo:null,
       opaciSi:0.5,


       //mensajes
       

       mensaje1:'Private meeting',
       tiempo1:'2 day ago',
       Use1mensa:'Gerald Williams',
       mensaFinal1:'How many days do you think will take us...',
       check1:'flex',

       mensaje2:'Private meeting',
       tiempo2:'2 day ago',
       Use2mensa:'Micheal Romero',
       mensaFinal2:'How many days do you think will take us...',
       check2:'flex',

    //menus
    menu1:styles.menuelegido,
    menu2:styles.menunormal,
    menu3:styles.menunormal,

      }
  
  }// fin de consttructor

  render() {

    return (



   <ScrollView>
     
{/* ----------------------------------------------------------- */}

<View style={{flex:1,marginHorizontal:16,flexDirection:'row',
          marginTop:10,marginBottom:10,
              }}>

  <View style={{flex:2}}>
        <Image source={require(`../../assets/influencers/tres.png`)} 
                        style={{ width:50,height:50,
                                  borderRadius:10}}
                        />
  </View>

  <View style={{flex:8,flexDirection:'column',
                 paddingBottom:10,borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
        <View  style={{flexDirection:'row'}}>



         <View style={{
                  width:15,
                  height:15, 
                  marginRight:5,
                  marginTop:3,
                  display:this.state.chek1}}>
             <Image
                 source={require('../../assets/icons_genGMI/checkRequest.png')}
                  style={{
                  width:'100%',
                  height:'100%',
                 }}
               />
         </View>
            <Text style={{flex:6,fontSize:14,
                      color:'#312f3d',fontWeight:'500'
            
                           }}>{this.state.mensaje1}</Text> 
            <Text style={{flex:2 ,fontSize:12,marginRight:'7%',
                color:'#677183'}}>{this.state.tiempo1}</Text> 
        </View>
        <View style={{flexDirection:'row',paddingVertical:3}}>
           <Text style={{flex:7,fontSize:14,
                      color:'#312f3d'}}>{this.state.Use1mensa}</Text>
          
          <TouchableOpacity
            onPress={() => this.props.enviaAPadre("requestAcepted2")}
              > 
          <View style={{alignItems:'flex-end'}}>
           <Image
              source={require('../../assets/icons_genGMI/ArrowGrey.png')}
              style={{
                  width:25,
                  height:25,
                  flex:1
              }}
            />

          </View>
          </TouchableOpacity>
        </View>
        <View style={{}}>
            <Text style={{
                fontSize:12,
                color:'#677183'
            }}>{this.state.mensaFinal1}</Text>
       </View>

 </View>


</View>
{/* ----------------------------------------------------------- */}



<View style={{flex:1,marginHorizontal:16,flexDirection:'row',
          marginTop:10,marginBottom:10,
              }}>

  <View style={{flex:2}}>
        <Image source={require(`../../assets/influencers/influencer.png`)} 
                        style={{ width:50,height:50,
                                  borderRadius:10}}
                        />
  </View>

  <View style={{flex:8,flexDirection:'column',
                 paddingBottom:10,borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
        <View  style={{flexDirection:'row'}}>



         <View style={{
                  width:15,
                  height:15, 
                  marginRight:5,
                  marginTop:3,
                  display:this.state.chek2}}>
             <Image
                 source={require('../../assets/icons_genGMI/checkRequest.png')}
                  style={{
                  width:'100%',
                  height:'100%',
                 }}
               />
         </View>
            <Text style={{flex:6,fontSize:14,
                      color:'#312f3d',fontWeight:'500'
            
                           }}>{this.state.mensaje2}</Text> 
            <Text style={{flex:2 ,fontSize:12,marginRight:'7%',
                color:'#677183'}}>{this.state.tiempo2}</Text> 
        </View>
        <View style={{flexDirection:'row',paddingVertical:3}}>
           <Text style={{flex:7,fontSize:14,
                      color:'#312f3d'}}>{this.state.Use2mensa}</Text>

           <TouchableOpacity
           onPress={() => this.props.enviaAPadre("requestAcepted2")}
            > 
          <View style={{alignItems:'flex-end'}}>
           <Image
              source={require('../../assets/icons_genGMI/ArrowGrey.png')}
              style={{
                  width:25,
                  height:25,
                  flex:1
              }}
            />

          </View>
          </TouchableOpacity>
        </View>
        <View style={{}}>
            <Text style={{
                fontSize:12,
                color:'#677183'
            }}>{this.state.mensaFinal2}</Text>
       </View>

 </View>


</View>
{/* ----------------------------------------------------------- */}

</ScrollView>
    

     
    );
  }
 
}





const styles = StyleSheet.create({
 

pentaIcon:{
  color:'white',
  fontSize:13,
  
},

//   MENUS
menuelegido:{
    borderBottomWidth:1,
    borderBottomColor:'#ff5a60',
  },
  
  menunormal:{
    borderBottomWidth:1,
    borderBottomColor:'#e1e3e6',
  },
  




});