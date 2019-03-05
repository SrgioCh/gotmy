import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';
  import  {Button}  from "react-native-elements";

export default class PublishPri4 extends Component {


    static navigationOptions = {
        headerTitle:'Cover image',
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
              color:'red',marginRight: 16,
          }}>Cancel</Text>
          </View>),  
          headerTintColor: '#ff5a60',
    };


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
      
      source={require('../../assets/influencers/KalaTempo/kala6.jpg')}
    />
    <Image style={{
      width:50,
      height:50,
      top:'50%',
      left:'40%',
      position:'absolute',
      borderRadius:30 
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
          <View style={{flex:1,marginTop:40,marginBottom:20, backgroundColor:'#ff5a60',
             borderRadius: 50,marginHorizontal:16,alignItems:'center'}}>
                  <Button  
          title="Continue"
          onPress={() => this.props.navigation.navigate("publishPri7")}
          type="clear"
          titleStyle={{ color: "#ffffff",
          left: Platform.OS === 'ios' ? 15:null,
        }}
        />     

         </View>
   
 
    
    </View>
   

     
    );
  }
 
}





const styles = StyleSheet.create({
   

});