import React from 'react';
import { StyleSheet, Text, TextInput,TouchableOpacity,Dimensions,
   View, Image } from 'react-native';
import { Button } from "react-native-elements";

const util = require("util");
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class ConfirmEmail2 extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
       title: "Confirm your email",
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center',
      width: '80%',
        fontWeight:'500',
            letterSpacing:0.41,
            height:120,
            fontSize:16,
            color:'#312f3d',
            marginTop:'43%',

    },
    headerRight: (<View>
          <TouchableOpacity onPress={() => navigation.navigate("singUpInicio")} >
            <Text style={{
          color:'#ff5a60',marginRight:15,fontSize:16
      }}>Cancel</Text>
      </TouchableOpacity>
      </View>),  
      headerTintColor: '#ff5a60',
     }
  }

  render() {
    let screenHeight=Dimensions.get('window').height;
    
   
    if(screenHeight<=592){ //1080 * 1920  xxhdpi
      topBut='75%'
    }else if(screenHeight<=605){ //mopvil de  david

      topBut='65%'
  } else if(screenHeight<=678){ // mi movil
    topBut='70%'
   }else if(screenHeight<=685){ //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
    topBut='65%'
   }else if(screenHeight<=775){//1440 *2880 :560dpi
    topBut='85%'
   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
    topBut='95%'
   }else{ // 800 = 480 * 800 mdpi
    topBut='95%'
   }
    return (
    <View style={{flex:1}}>

  
<View style={{flex:8,alignItems:'center',backgrounColor:'yellow'
                 ,marginTop:'20%'}}>
       <Image style={styles.imagen}
          source={require('../assets/logoGotmy.png')}
        />

<Text style={styles.text}>
        <Text >Almost there!</Text>
    </Text>
    <Text style={styles.subtitulo}>
        <Text >
        We sent a verification email to {'\n'} your email address
        </Text>
    </Text>

     </View>

       
    
    <View style={{  flex:2}}> 
      <View style={{ alignItems:'center'}}>
     
     <TouchableOpacity style={styles.containerbutton}
     onPress={() => this.props.navigation.navigate("paymetho1")}
     > 
     <Text style={{color:'white',fontSize:wp('4.5%')}}>
       Continue</Text>      
    </TouchableOpacity> 
  </View>


   </View>

     
 </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  //el contenedor del boton
  containerbutton:{
      
    backgroundColor: '#ff5a60',
    width:'90%',
    paddingVertical:13,
    borderRadius:27,
    alignItems:'center',
    marginBottom:40,
},


text:{
 

  textAlign:'center',
  color:"black",
  fontSize: wp('5%'),
  fontWeight: "bold",
  fontStyle: "normal",
  marginTop:'5%',
  
},
subtitulo:{

  backgroundColor:'white',
    textAlign:'center',
    color:"gray",
  marginTop:10,
   fontSize: wp('4%'),
  marginLeft:'17%',
  marginRight:'17%',
  fontWeight: "normal",
  fontStyle: "normal",
    
  
  },


textboton:{
 

  textAlign:'left',
  color:"white",
  
  marginTop:1,
  marginLeft:105,
  fontSize:17,

}
});
