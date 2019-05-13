import React from 'react';
import { Platform,StyleSheet, Text,Dimensions,
  TextInput,TouchableOpacity, View, Image } from 'react-native';
import { Button } from "react-native-elements";

const util = require("util");


import Infoslider from 'react-native-infoslider'


export default class Become1 extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
       title:"Become An Influencer",
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
constructor(props) {
  super(props);

this.state = {
  
 
}

}

    render() {

    screenHeight=Dimensions.get('window').height;

        alert(screenHeight)
    if(screenHeight<=592){ //1080 * 1920  xxhdpi


      topBut="-2%"
      flex1=8.5
     flex2=1
    }else if(screenHeight<=605){ //mopvil de  david

      topBut='5%' 
      flex1=8.5
      flex2=1
  } else if(screenHeight<=678){ // mi movil
    topBut='-1%'
    flex1=8.5
    flex2=1
   }else if(screenHeight<=685){ //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
    topBut='-1%'
    flex1=8.5
    flex2=1
   }else if(screenHeight<=775){//1440 *2880 :560dpi
    topBut='16%'
    flex1=7
    flex2=2

   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
    topBut='-1%'
    flex1=8.5
    flex2=1
   }else{ // 800 = 480 * 800 mdpi
     topBut='16%'
    flex1=7
    flex2=2
   }




    data=[
      {
      title:<Text style={{

        color:'#312f3d',
        fontWeight:'bold',
        fontSize: 28,
      }}>Become an Influencer</Text>, 
      text:( <Text >
             <Text style={styles.subtexto}>Create your profile and earn money by</Text>{'\n'}
             <Text style={styles.subtexto} >hosting your own live events</Text>{'\n'}
             </Text>
             ),
      image: require('../assets/foto-con-estrellas.png'),
      imageStyle: styles.image
    },
      {
        title:<Text style={{
         
          color:'#312f3d',
          fontWeight:'bold',
          fontSize: 28,
        }}>Share your knowledge</Text>, 
        text:( <Text style={{paddingBottom:30,}}> 
               <Text style={styles.subtexto}>Hosting your live event is super simple with</Text>
               <Text style={styles.subtexto}>our integrated scheduling system, payment</Text>
               <Text style={styles.subtexto}>processing, and live video chat technology</Text>
               </Text>
               ),
        image: require('../assets/movil-con-video.png')},
      {
        title:<Text style={{
          paddingBottom:30,
          color:'#312f3d',
          fontWeight:'bold',
          fontSize: 28,
        }}>Take control</Text>, 
        text:( <Text>
               <Text style={styles.subtexto} >Manage and track your sales in real time, and</Text>
               <Text style={styles.subtexto} >manage your community through private</Text>
               <Text style={styles.subtexto} >messages and chat moderation</Text>
               </Text>
               ),

        image: require('../assets/grafica.png')},
      
  ]


    return (
    <View style={{flex:1}}>

<View  style={{flex:0.5}}>

</View>
   <View style={{flex:flex1}}>

   <Infoslider 
                 data={data} 
                 showDots={true} 
                 activeDotColor="#ff5a60" 
                 titleColor="#312f3d" 
                 textColor="#697181" 
                 loop={false} 
                 autoplay={true} 
                 autoplayTimeout={3}/>



   </View>
   

     

<View style={{flex:flex2}}>

<View style={[styles.container2,{marginTop:Platform.OS === 'ios' ? '19%':topBut}]}>
       <Button  style={styles.textboton}
          title="Create an Influencer Profile"
          onPress={() => this.props.navigation.navigate("createInfluProf")}
          type="clear"
          titleStyle={{ color: "#ffffff",
          position: "absolute",
          top: -5
        }}
        />      
        </View> 

</View>

     
      
      </View>
    );
  }
}




const styles = StyleSheet.create({
  
  subtexto:{
    fontSize:13,
  },
  //el contenedor del boton
  container2:{
    backgroundColor: '#ff5a60',
     width:'90%',
     padding:15,
     color:'white',
     borderRadius:27,
     textAlign:"center",
     
     marginLeft:20,
     
  },
textboton:{
 

  textAlign:'center',
  color:"white", 
  marginTop:1,
  fontSize:17,

},
 
 
});
