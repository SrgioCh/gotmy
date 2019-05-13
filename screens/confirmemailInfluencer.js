import React from 'react';
import { Platform,StyleSheet, Text,TouchableOpacity,Dimensions,
  TextInput, View,Image } from 'react-native';
import { Button } from "react-native-elements";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class  ConfirMailInfluencer extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
       title:"Confirm your email",
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center',
      width: '80%',
        fontWeight:'500',
            letterSpacing:0.41,
            height:120,
            fontSize:16,
            color:'#312f3d',
            marginTop:  Platform.OS === 'ios' ? '45%':'43%',

    },
    headerRight: (<View>
       <TouchableOpacity onPress={() => navigation.navigate("discover")} >
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

      topBut='75%'
  } else if(screenHeight<=678){ // mi movil
    topBut='76%'
   }else if(screenHeight<=685){ //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
    topBut='68%'
   }else if(screenHeight<=775){//1440 *2880 :560dpi
    topBut='85%'
   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
    topBut='95%'
   }else{ // 800 = 480 * 800 mdpi
    topBut='95%'
   }








    return (
    <View style={{flex:1}}>

<View style={{flex:8.5}}>
<View style={{alignItems:'center', 
                 marginTop:'20%'}}>
       <Image style={styles.imagen}
          source={require('../assets/logoGotmy.png')}
        />
     </View>

       
    <Text style={styles.text}>
        <Text >Almost there!</Text>
    </Text>
    <Text style={styles.subtitulo}>
        <Text >
        We sent a verification email to your email address
        </Text>
    </Text>

</View>

   <View style={{flex:1.5}}>
    
   <View style={{ alignItems:'center'}}>
       
       <TouchableOpacity style={styles.containerbutton}
        onPress={() => this.props.navigation.navigate("requesPendin")}
       > 
       <Text style={{color:'white',fontSize:wp('4.5%')}}>
         Continue </Text>      
      </TouchableOpacity> 
    </View>
    
    </View>     
  
       {/* -----------------------BOTONES ------------------*/}
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


text:{
  textAlign:'center',
  color:"black",
  fontSize: 22,
  fontWeight: "bold",
  fontStyle: "normal",
  marginTop:'5%',
  
},
subtitulo:{

  backgroundColor:'white',
    textAlign:'center',
    color:"gray",
  marginTop:10,
   fontSize: 16,
  marginLeft:'17%',
  marginRight:'17%',
  fontWeight: "normal",
  fontStyle: "normal",
    
  
  },
  containerbutton:{
      
    backgroundColor: '#ff5a60',
    width:'90%',
    paddingVertical:13,
    borderRadius:27,
    alignItems:'center',
    marginBottom:40,
},
textboton:{


  textAlign:'center',
  color:"white", 
  marginTop:1,
  fontSize:17,

}
});
