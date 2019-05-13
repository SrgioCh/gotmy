import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class PublisEven2Cover extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
       title:'Cover image',
    
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
           <TouchableOpacity onPress={() => navigation.navigate("requesPendin")} >
          <Text style={{
              color:'red',marginRight: 16,
          }}>Cancel</Text>
          </TouchableOpacity>
          </View>),  
          headerTintColor: '#ff5a60',
    };

  }
    constructor(props){

        super(props);
      
         this.state={
         
            nombreInflu:'Sophia Lindsey',
            ciudaInflu:'Luxembourg',

            
              //PRECIOS
               Benefit:'1,200',
               feesTicket:0.50,
               rebaja:2.9,
               resultado:1.59,
           
      }
      
      }// fin de consttructor


  render() {
    let screenWidth=Dimensions.get('window').width; //para poner la imagen normal
    let screenHeight=Dimensions.get('window').height;
    
    if(screenHeight<=592){ //1080 * 1920  xxhdpi
 
      letCam='40%'
    }else if(screenHeight<=605){ //mopvil de  david
      letCam='40%'
  } else if(screenHeight<=678){ // mi movil
    letCam='40%' 
   }else if(screenHeight<=685){ //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
    letCam='40%'
   }else if(screenHeight<=775){//1440 *2880 :560dpi
    letCam='45%'

   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
    letCam='45%'
   }else{ // 800 = 480 * 800 mdpi
    letCam='45%'
   }
    return (

      <View style={{flex: 1}}>
      
        <View style={{flex:9}}>
          
         <View style={{marginHorizontal:16,alignItems: 'center',
                   marginTop:10}}>
           <Text style={{color:'#312f3d',fontSize:20,fontWeight:'bold'}}>
           Upload a cover image for your Live </Text>
          </View>
          <View style={{marginHorizontal:16,alignItems: 'center',
                  }}>        
                <Text style={{color:'#312f3d',fontSize:20,fontWeight:'bold'}}>Event</Text>
         </View>


    {/*  FIN */}
 <View  style={{marginHorizontal:16,marginBottom:5}}>
      
      <Image style={{ marginTop:36,
                      width:screenWidth-30 , //para imagen grande a la pantalla
                      height:200}}
      
      source={require('../../assets/influencers/KalaTempo/kala2.jpg')}
    />
    <Image style={{
      width:50,
      height:50,
      top:'50%',
      left:letCam,
      position:'absolute',
      borderRadius: Platform.OS === 'ios' ? 25:30 
    }}
  source={require('../../assets/icons_genGMI/foto.png')}
/>
  
 </View>
    {/* */}
<View style={{marginHorizontal:16,marginTop:20}}>
<Text style={{color:'#312f3d', fontSize:17 ,fontWeight:'500',}}>
Cover image best practices
</Text>
<Text style={{marginVertical:10,color:'#677183', fontSize:13 ,letterSpacing:-0.08}}>
Resolution of 1280X720 (minimum width of 640 pixels).
Use image formats such as .JPG, .GIF, .BMP, or .PNG.
Stay under the 2MB size limit.
Try to use a 16:9 aspect ratio.
</Text>
 
</View>
{/* fin */}
 

    
   </View>
   {/*  fin de contenedor */}
          
  

                   <View style={{ alignItems:'center'}}> 
       
       <TouchableOpacity style={styles.containerbutton}
           onPress={() => this.props.navigation.navigate("publishEven4message")}
       > 
       <Text style={{color:'white',fontSize:wp('4.5%')}}>
         Continue </Text>      
      </TouchableOpacity> 
    </View>

    
    </View>
   

     
    );
  }
 
}





const styles = StyleSheet.create({
   
  containerbutton:{
    backgroundColor: '#ff5a60',
    width:'90%',
    paddingVertical:13,
    borderRadius:27,
    alignItems:'center',
    marginBottom:40,

  },
})