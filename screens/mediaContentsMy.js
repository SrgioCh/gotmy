import React, { Component } from 'react';
import { AppRegistry, Alert,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image} from 'react-native';

  import EventContents from "./../components/eventContents"
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class Mediacontentsmy extends Component {
  static navigationOptions = {
    headerTitle:'',
    headerTintColor: '#ff5a60',
};

  constructor(props){

    super(props);
  
     this.state={
      usuarios:[
        {
         fecha:'Monday, 19/12/2018',
         descripcion:'Teaching Machamp THE BEST MOVE IN THE GAME' ,
         imagVideo:require('../assets/influencers/KalaTempo/kala3.png'),
         duraVid:'12:40',
         tipo:'Sports'
  
        },
        {
          fecha:'Monday, 19/12/2018',
         descripcion:'Teaching Machamp THE BEST MOVE IN THE GAME' ,
         imagVideo:require('../assets/influencers/KalaTempo/kalafiesta.jpg'),
         duraVid:'12:40',
         tipo:'Naturs,Outdoors & Chefs'
        },
        {
          fecha:'Monday, 19/12/2018',
         descripcion:'Teaching Machamp THE BEST MOVE IN THE GAME' ,
         imagVideo:require('../assets/influencers/KalaTempo/kala2.jpg'),
         duraVid:'12:40',
         tipo:'Naturs,Outdoors & Chefs'
        }
        ,
        {
          fecha:'Monday, 19/12/2018',
         descripcion:'Teaching Machamp THE BEST MOVE IN THE GAME' ,
         imagVideo:require('../assets/influencers/KalaTempo/kalamalkaguitar.jpg'),
         duraVid:'12:40',
         tipo:'Naturs,Outdoors & Chefs'
        }
  
      ]
     
     
      }
  
  }// fin de consttructor

  render() {
    let screenHeight=Dimensions.get('window').height;
    
    if(screenHeight<=592){
 
    
    }else if(screenHeight<=678){ // mi movil
     
   
   }else if(screenHeight<=685){ //1080 *1920
   

   }else if(screenHeight<=775){
   
  
   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
  
   }else{
   
   }
    return (
     
   
<View>    
{/*----------- TITULO----------------- */}
<View style={{marginTop:16,marginBottom:5,marginHorizontal:16}}>
    <Text style={{fontSize:28,color:'#312f3d',
           fontWeight: 'bold',}}>Media Contents</Text>
</View>


{/* BUSCADOR*/}
 <View style={{ marginHorizontal:16,paddingVertical:15,flexDirection:'row' }}>
      <View style={{flexDirection:'row',flex:1,backgroundColor:'#f6f6f6',
              alignItems:'center',borderRadius:10}}>
                 <View style={{ width:30,height:30}}>
                     <Image source={require('../assets/buscador/lupa.jpg')} 
                      style={{borderRadius:10 ,width:'100%',height:'100%'}}
                      />
                 </View>
                 <TextInput
                    style={{
                    
                       height:42,
                       width:215,
                     
                       borderRadius:10,
                    
                    } }
                    placeholder="Search......"
                    editable={true} // con false , no podremos escribir nada
                    borderBottomColor = '#e2e7ee'
                    borderBottomWidth ={1}
                    paddingHorizontal={5}
                    onChangeText={
                      (text3)=>{
                        this.setState(()=> {

                                          return {
                                            tytexto:text3,
                                          }
                               })
                      }
                      

                 }//fin de onchange
              />

        </View>
</View>
 

<ScrollView style={{marginTop:hp('3%')}} >
{
  this.state.usuarios.map((item,i)=> {

    
    return ( 
<EventContents key={i}
fecha={item.fecha}
descripcion={item.descripcion}
imagVideo={item.imagVideo}
duraVid={item.duraVid}
tipo={item.tipo}
/>
    )})}

    </ScrollView>

</View>

     
    );
  }
 
}





const styles = StyleSheet.create({

//en lista influencer
estrellasTrending:{
  paddingTop:7,
 marginBottom:20,
  flexDirection:'row',

},
textTren:{
    color:'#312f3d',
    fontSize:15,
    fontWeight:'500',
   }


});