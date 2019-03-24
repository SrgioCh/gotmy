import React from 'react';
import { StyleSheet, Text, TextInput,TouchableOpacity,
   View, Image } from 'react-native';
import { Button } from "react-native-elements";

const util = require("util");

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
    return (
    <View style={styles.StyleSheet}>

  
<View style={{alignItems:'center',backgrounColor:'yellow'
                 ,marginTop:'20%'}}>
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
        
  
       
       <View style={styles.container2}>
       <Button  style={styles.textboton}
          title="Continue"
          onPress={() => this.props.navigation.navigate("paymetho1")}
          type="clear"
          titleStyle={{ color: "#ffffff",
          position: "absolute",
          top: -5
        }}
        />            
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
container2:{
  backgroundColor: '#ff5a60',
   width:'90%',
   padding:15,
   color:'white',
   borderRadius:27,
   textAlign:"center",
   marginTop:'75%',
   marginLeft:20,
   
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


textboton:{
 

  textAlign:'left',
  color:"white",
  
  marginTop:1,
  marginLeft:105,
  fontSize:17,

}
});
