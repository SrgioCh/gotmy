import React, { Component } from 'react';
import { AppRegistry, Alert,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

import Button from 'react-native-button'; 

export default class RequestRejected extends Component {


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
       

       mensaje1:'Birthday surprise',
       tiempo1:'2 day ago',
       Use1mensa:'Sophia Lindsey',
       mensaFinal1:'Can you help us surprise our friend?',
       reloj1:'flex',

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
  <View style={{alignItems:'center',
                justifyContent:'center'}}>
       <View style={{marginTop:30}}>
       
          <Image source={require('../../assets/mixto/requestRejected.png')} 
                        
           />
                    
       </View>
       <View style={{marginTop:30}}>
           <Text style={{
                fontSize:22,
                color:'#312f3d',
                fontWeight:'500'
               }}>No rejected requests yet!</Text>
       </View>
       <View style={{marginTop:20}}>
             <Text style={styles.textos}>Here you’ll see direct and groud requests to</Text>
            <View  style={{alignItems:'center'}}>
                 <Text  style={styles.textos}> private meetings from your followers</Text>
            </View>
           
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

//   MENUS
menuelegido:{
    borderBottomWidth:1,
    borderBottomColor:'#ff5a60',
  },
  
  menunormal:{
    borderBottomWidth:1,
    borderBottomColor:'#e1e3e6',
  },
  
//textos debajo imagen
textos:{
    fontSize:15,
    color:'#677183'
}



});