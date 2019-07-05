import React, { Component } from 'react';
import { AppRegistry, Alert,Platform,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

import Button from 'react-native-button'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CabezeraViewer from "./../components/cabezeraViewer"


export default class Activity1 extends Component {


  static navigationOptions = {
    header: null ,
};

  constructor(props){

    super(props);
  
     this.state={

// PARA LA CABEZERA
imagViewer:require('../assets/reviews/kuskal.png'),
nombreView:`Kurtis 'Kala' Lloyd`,
correoView:'@kurtiskala',
iconoUno:null,
iconoDos:null,

//

      userIcon1:require('../assets/activity/una.png'),
      user1:'Lisa smith',
      mensaje1:'started following you',
      tiempo1:'2 min ago',
      evento1:<View style={{backgroundColor:'#ff5a60',paddingHorizontal:5 ,
                  paddingVertical:4 ,borderRadius:20 ,alignItems:'center' }}>
                 <Text style={{color:'white',fontSize:wp('3%')}}>Follow</Text>
              </View>,

     userIcon2:require('../assets/activity/dos.png'),
     user2:'Jhon Terry',
     mensaje2:'approved a Private Meeting',
     tiempo2:'5 min ago',
     evento2:null,
    


     userIcon3:require('../assets/activity/tres.png'),
     user3:'Melisa Everson',
     mensaje3:'booked your event Showcase Gaming 2019',
     tiempo3:'10 min ago',
     evento3: <Image source={require('../assets/OnBoard/motor.jpg')} 
                  style={{ width:50,height:50,borderRadius:5}}
                   />,

      }
  
  }// fin de consttructor

  recogeDeHijo(){
    console.log('no existe')
      }
   
     recogeDeHijo2(){
      console.log('no existe')
        }
   
     abrirMenu(){
       this.props.navigation.toggleDrawer() 
     }


  render() {

    let screenHeight=Dimensions.get('window').height;
    
   // alert(screenHeight)
    if(screenHeight<=592){ //1080 * 1920  xxhdpi
 
   
    }else if(screenHeight<=605){ //mopvil de  david

  
  
  } else if(screenHeight<=678){ // mi movil
    
   }else if(screenHeight<=685){ //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
  
   }else if(screenHeight<=775){//1440 *2880 :560dpi
   
   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
  
   }else{
  
   }
  




    return (

      <View style={{flex: 1}}>
     
     <CabezeraViewer
       imagViewer={this.state.imagViewer}
       
       nombreView={this.state.nombreView}
       correoView={this.state.correoView}

       iconoUno={this.state.iconoUno}
       iconoDos={this.state.iconoDos}

      
       enviaAPadreIconoUno={this.recogeDeHijo.bind(this)}
       enviaAPadreIconoDos={this.recogeDeHijo2.bind(this)}

       enviaAPadreMenu={this.abrirMenu.bind(this)}
    
       />
      
      <View style={{flex: 8.7}}>
     


{/* TITULO */}  

<View style={{marginHorizontal:'4%'}}>
    <Text style={{fontSize:34,color:'#312f3d',marginTop:hp('2%'),
           fontWeight: 'bold',}}>Activity</Text>

</View>

<ScrollView style={{marginTop:hp('2.5%')}} >

<View style={{flexDirection:'row',marginTop:hp('3%'),marginBottom:hp('0.5%'),marginHorizontal:'4%'}}>

      <View style={{flex:1.5,justifyContent:'center'}}>
                          <Image source={this.state.userIcon1} 
                               style={{ width:wp('10%'),height:hp('5%'),borderRadius:Platform.OS === 'ios' ? hp('2%'):hp('5%')}}
                              />
                      
       </View>
  
      <View style={{flex:6.5,flexDirection:'column', borderBottomWidth:1,justifyContent:'center'  
              , borderBottomColor:'#e1e3e6',paddingBottom:hp('1.5%')}}>
         
         <View style={{flexDirection:'row',marginTop:hp('3%')}}>
               <Text style={{fontSize:wp('3.5%'),color:'#312f3d',fontWeight:'bold'}}>{this.state.user1}</Text> 
              <Text>{' '}{this.state.mensaje1}</Text>
         </View>
         <Text style={{fontSize:wp('2.8%'),color:'#697181'}}>{this.state.tiempo1}</Text>
      </View>

     <View style={{flex:2,borderBottomWidth:1,justifyContent:'center',borderBottomColor:'#e1e3e6',}} >
       {this.state.evento1}
     </View>
</View>


<View style={{flexDirection:'row'}}>

    <View style={{flex:1.5,alignItems:'center',justifyContent:'center'}}>
                    <Image source={this.state.userIcon2} 
                         style={{width:wp('10%'),height:hp('5%'),borderRadius:Platform.OS === 'ios' ? hp('2%'):hp('5%')}}
                        />
                
    </View>

    <View style={{flex:6.5,flexDirection:'column',paddingBottom:hp('1.5%'),
        borderBottomWidth:1,  borderBottomColor:'#e1e3e6'}}>
         <View>
        <Text style={{fontSize:wp('3.5%'),color:'#312f3d',marginTop:hp('3%')}}>
        <Text style={{fontWeight:'bold'}}>{this.state.user2}</Text> 
        {' '}{this.state.mensaje2}</Text>
        </View>
     <View>
      <Text style={{fontSize:wp('2.8%'),color:'#697181'}}>{this.state.tiempo2}</Text>
    </View>

    </View>
          <View style={{flex:2,
              justifyContent:'center', borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}} >
          {this.state.evento2}
        </View>

</View>
                    {/*-----------------------------------------*/}






<View style={{flexDirection:'row',}}>

<View style={{flex:1.5,alignItems:'center',justifyContent:'center'}}>
                    <Image source={this.state.userIcon3} 
                         style={{ width:40,height:40,borderRadius:Platform.OS === 'ios' ? hp('2%'):hp('5%')}}
                        />
                
 </View>

<View style={{flex:6.5,flexDirection:'column',paddingBottom:hp('1.5%'),
        borderBottomWidth:1,  borderBottomColor:'#e1e3e6'}}>
     <View style={{marginTop:hp('3%')}}>
        <Text style={{fontSize:wp('3.5%'),color:'#312f3d'}}>
        <Text style={{fontWeight:'bold'}}>{this.state.user3}</Text> 
        {' '}{this.state.mensaje3}</Text>
     </View>
    <View>
      <Text style={{fontSize:wp('2.8%'),color:'#697181'}}>{this.state.tiempo3}</Text>
    </View>

</View>
<View style={{flex:2,justifyContent:'center',alignItems:'center', borderBottomWidth:1,  borderBottomColor:'#e1e3e6',}} >
 
 {this.state.evento3}
</View>


</View>


 
    </ScrollView>
    
    </View>
  
  </View>


     
    );
  }
 
}





const styles = StyleSheet.create({
 
//en lista influencer
estrellasTrending:{
  paddingTop:7,
  marginLeft:-6,
  flexDirection:'row',

},
socialBotonRojo:{
  backgroundColor: '#ff5a60',
  alignItems:'center',
  borderRadius:27,
  width:'80%',
  paddingVertical:5,
  paddingHorizontal:6,

  
},
socialBotonBlanco:{
  backgroundColor: 'white',
  alignItems:'center',
  borderRadius:27,
  width:'80%',
  paddingVertical:5,
  paddingHorizontal:5,
  borderWidth:1,
  borderColor: '#312f3d',
},
pentaIcon:{
  color:'white',
  fontSize:13,
},

});