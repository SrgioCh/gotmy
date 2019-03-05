import React from 'react';
import { Platform, StyleSheet, Text,TextInput, View, Image } from 'react-native';
import { Button } from "react-native-elements";

const util = require("util");


export default class Become2 extends React.Component {

  static navigationOptions = {
    headerTitle: "Become An Influencer",
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
      <Text style={{
          color:'#ff5a60',marginRight:15,fontSize:16
      }}>Cancel</Text>
      </View>),  
      headerTintColor: '#ff5a60',
};

  render() {
    return (
    <View style={styles.StyleSheet}>


   <View style={{alignItems:'center',backgrounColor:'yellow'
                 ,marginTop:'17%'}}>
      <Image style={styles.imagen}
          source={require('../assets/movil-con-video.png')}
        />
     </View>
 
       
    <Text style={styles.text}>
        <Text >Share your knowledge</Text>
    </Text>
    <Text style={styles.subtitulo}>
        <Text >
        Hosting your live event is super simple with our integrated scheduling system, payment processing, and live video chat technology
        </Text>
    </Text>
    <View style={{ flexDirection: 'row',
                  alignItems:'center',justifyContent:'center',
                  marginTop:Platform.OS === 'ios' ? '15%':'10%'}}>
           <View style={[{
             backgroundColor:'white',
            },styles.circulo]}></View>
            <View style={[{
             backgroundColor:'#ff5a60',
              marginHorizontal:10,
           },styles.circulo]}></View>
            <View style={[{
             backgroundColor:'white',
            },styles.circulo]}></View>
      </View>
  
       
       <View style={styles.container2}>
       <Button  style={styles.textboton}
          title="Create an influencer profile"
          onPress={() => this.props.navigation.navigate("Become3")}
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

text:{
 

  textAlign:'center',
  color:"black",
  fontSize: 30,
  fontWeight: "bold",
  fontStyle: "normal",
  marginTop:30,
  
},
subtitulo:{

  backgroundColor:'white',
    textAlign:'center',
    color:"#677183",
  marginTop:10,
   fontSize: 16,
  marginLeft:'5%',
  marginRight:'5%',
  fontWeight: "normal",
  fontStyle: "normal",
    
  
  },
imagen:{
  width:200,
  height:200,
 
},

  //el contenedor del boton
  container2:{
    backgroundColor: '#ff5a60',
     width:'90%',
     padding:15,
     color:'white',
     borderRadius:27,
     textAlign:"center",
     marginTop:Platform.OS === 'ios' ? '16%':'7%',
     marginLeft:20,
     
  },
textboton:{
 

  textAlign:'center',
  color:"white", 
  marginTop:1,
  fontSize:17,

},
circulo:{
  padding:10,
  width:8,
  height:8,
  borderRadius:15,
  borderWidth: 1,
  borderColor: '#677183',
},
});
