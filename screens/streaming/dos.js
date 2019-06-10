import React from 'react';
import { Platform,StyleSheet, Text,Dimensions,ScrollView,
  TextInput,TouchableOpacity, View, Image,ImageBackground,
  TouchableWithoutFeedback,Keyboard,Alert} from 'react-native';
 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import OpcionesUno from "./componentes/opcionesUno"


export default class Dos  extends React.Component {
   
    static navigationOptions = {
        header: null ,
    };
 
constructor(props) {
  super(props);

this.state ={
  
 // usuarios:[],
  
  usuarios:[
    {
      foto:require('../../assets/usuarios/cinco.png'),
      nick:'Clide Collins',
      mensj:'Everithing and evereyone else  around you can effect your self',
    },
    {
    foto:require('../../assets/usuarios/tres.png'),
      nick:'Flora sephens',
      mensj:'Everithing and evereyone else  around you can effect your self',
    },{
    foto:require('../../assets/usuarios/cuatro.png'),
      nick:'Louis Singleton',
      mensj:'Everithing and evereyone else  around you can effect your self',
    },{
    foto:require('../../assets/usuarios/dos.png') ,
      nick:'Ethan Ramos',
      mensj:'Everithing and evereyone else  around you can effect your self',
    }
  ] , 

  //en la parte inicial sin seleccioanr Video
  displicoInit:'flex',
  displvidFot:'none',
  //para redimensionado en caso teclado
  //*normal :
  heiteclado:'10%' ,    
  heichat:'30%' ,  
  displChat:'flex',

   
  //para seleccion de opciones :
  displMicro:'none',
  icoChat:require('../../assets/streamingIcon/chat.png'),
  icoVide:require('../../assets/streamingIcon/videoNo.png'),
  icoReload:require('../../assets/streamingIcon/reload.png'),

  mensVidFone:" Wait for your turn\n to speak",

  displchangeCam:'none',//aparece cuando seleccionamos el video

  //para caja de texto en diferente pantalla
  margintextTop:null,
  //para la caja de texto 
  habilitaInput:true,
  },

  

  users=this.state.usuarios;
} // fin del constructor

componentWillMount () {
  this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
  this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
}

componentWillUnmount () {
  this.keyboardDidShowListener.remove();
  this.keyboardDidHideListener.remove();
}

_keyboardDidShow=()=>{
  this.setState({
   displChat:'none',
  })
  if(screenHeight>=776){
    //alert('llega aqui 2')
    this.setState({
      margintextTop:hp('6%')
      
     })
  } 
}

_keyboardDidHide=()=>{
  
  this.setState({
   displChat:'flex',
  })
  if(screenHeight>=776){
  // alert('llega aqui')
    this.setState({
      margintextTop:null,
     })
  } 
}

microfonoNo=()=>{
 //alert(users)
  this.setState({
    icoChat:require('../../assets/streamingIcon/chat.png'),
   usuarios:users,
   habilitaInput:true,
    }) 
}

    render() {

    screenHeight=Dimensions.get('window').height;

    // alert(screenHeight)
    
    if(screenHeight<=592){
     
    
    }else if(screenHeight<=678){// mi movil
 
     }else if(screenHeight<=684){
   
     }else if(screenHeight<=775){
     
     }else{
      
     }
   

    return (
       
        <ImageBackground source={require('../../assets/influencers/preciosa.jpg')}
        style={{flex:1}}>
            <View style={{flex:1,marginHorizontal:wp('4%')}}>
            <TouchableWithoutFeedback
         onPress={Keyboard.dismiss} accessible={false}>
           <View style={{flex:2,flexDirection:'row',}}>
               <View style={{flex:1.5,justifyContent:'center'}}>
                     <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/influencers/preciosa.jpg')} 
                         style={{ width:47,height:45,borderRadius:30,borderColor:'red',borderWidth:wp('0.5%')}}
                        /> 
                       <View style={{justifyContent:'flex-end'}}>
                        <Image source={require('../../assets/streamingIcon/reloadselec.png')} 
                        style={{marginLeft:wp('-5%') ,width:20,height:18,borderRadius:15,borderColor:'red',borderWidth:wp('0.5%')}}
                          /> 
                       </View>
                    </View>  
               </View>
               <View style={{flex:6.5,justifyContent:'center'}}>
                    <Text style={{color:'white',fontSize:wp('4.5%'),fontWeight:'500'
                    }}>Vernon curtis</Text>
                   <View style={{flexDirection:'row'}}>
                      <View style={{justifyContent:'center'}}>
                          <Text style={{height:hp('1%'),paddingHorizontal:wp('1%'),
                            marginHorizontal:wp('1%'),borderRadius:10,backgroundColor:'red'}}>
                         </Text>
                      </View>
                         
                       <Text style={{color:'white',fontSize:wp('3.5%'),fontWeight:'200'
                    }}>Live from New York</Text>
                   </View> 
               </View>
               <View style={{flex:2,justifyContent:'center'/*backgroundColor:'yellow'*/,paddingTop:hp('5%')}}>
                 <View style={{display:this.state.displicoInit}}>

               
                   <View style={{flexDirection:'row',marginBottom:hp('2%'),alignItems:'center'}}>
                    <Image source={require('../../assets/icons_genGMI/userWhite.png')} 
                         style={{ width:18,height:16,marginLeft:wp('1%')}}
                        /> 
                        <Text style={{color:'white',fontSize:wp('4%'),fontWeight:'200'
                         }}>4.354</Text>  
                   </View>
                   <View style={{alignItems:'center'}}>
                   <Image source={require('../../assets/streamingIcon/upload.png')} 
                         style={{ width:50,height:48,borderRadius:25}}
                        /> 
                   </View>
                   </View>
                   <View style={{display:this.state.displvidFot}}>
                        <View style={{alignItems:'center',marginBottom:hp('-3%')}}>
                           <Image source={require('../../assets/influencers/spffiele.png')} 
                         style={{ width:wp('22%'),height:hp('19%'),borderColor:'white',
                              borderRadius:15,borderWidth:wp('0.5%')}}
                           /> 
                         </View>
                   </View>
               </View>
           </View>
           </TouchableWithoutFeedback>
           <TouchableWithoutFeedback
         onPress={Keyboard.dismiss} accessible={false}>
          <View style={{flex:2.5}}>
          </View>
        </TouchableWithoutFeedback>
          <View style={{flex:4.5,/*backgroundColor:'yellow'*/}}>
             <View style={{display:this.state.displChat,flex:1,flexDirection:'row' ,height:hp(this.state.heichat),marginTop:hp('8%'),
                paddingBottom:hp('1.5%'),/* backgroundColor:'pink' */}}>
  
                <View style={{flex:8.5}}>
                   <ScrollView >
                  {
                     this.state.usuarios.map((item,i)=>{
                     return(
                      <View key={i} style={{ flex:1,flexDirection:'row',marginTop:hp('1%')}}>
                      <View style={{flex:1.3,paddingVertical:hp('1%')}}>
                      <Image source={item.foto} 
                               style={{width:30,height:29,borderRadius:15}}
                              /> 
                      </View>
                      <View style={{flex:8.7, /* backgroundColor:'green'  */}}>
                          <Text style={{color:'white',fontSize:wp('3.5%'), fontWeight:'normal'}} >
                            <Text style={{
                            color:'#ff5a60',fontSize:wp('4%'), fontWeight:'500'   
                           }}>{item.nick}</Text>{' '}{item.mensj}</Text>
                      </View>
                   </View>
                     )


                     })
                  
                    }
                    </ScrollView>
                       <View style={{ display:this.state.displMicro/* backgroundColor:'red' */,height:hp('10%')}}>
                             <View style={{flex:1,flexDirection:'row'}}>
                                 <View style={{flex:2,/* backgroundColor:'pink' */alignItems:'center',justifyContent:'center'}}>
                                      <Image source={require('../../assets/influencers/spffiele.png')} 
                                      style={{width:50,height:48,borderRadius:30}}
                                        /> 
                                 </View>
                                 <View style={{flex:8,justifyContent:'center'}}>
                                      <Text style={{color:'white',fontSize:wp('3.5%'), fontWeight:'normal'}}>
                                       {this.state.mensVidFone}
                                      </Text>
                                 </View>
                              </View>  
                       </View>
                   </View>

                   <View style={{flex:1.5}}>
                      <TouchableOpacity
                       style={{display:this.state.displchangeCam, flex:1 ,alignItems:'flex-end',justifyContent:'flex-end'}}>
                             <Image source={require('../../assets/streamingIcon/changecam.png')} 
                                 style={{width:40,height:38,borderRadius:20}}
                                /> 
                      </TouchableOpacity>
                      <TouchableOpacity
                       style={{flex:1 ,alignItems:'flex-end',justifyContent:'flex-end'}}
                         onPress={() =>{ 

                            if(this.state.displchangeCam=='none'){
                               this.setState({
                                   displchangeCam:'flex',
                                   icoVide:require('../../assets/streamingIcon/video.png'),
                                   displicoInit:'none',
                                   displvidFot:'flex',
                                   mensVidFone:" You're In!\n Share your troughts!",
                                   })
                            }else{
                              this.setState({
                                   displchangeCam:'none',
                                   icoVide:require('../../assets/streamingIcon/videoNo.png'), 
                                   displicoInit:'flex',
                                   displvidFot:'none',
                                   mensVidFone:" Wait for your turn\n to speak",
                            
                                  })
                            }

                         }}>
                                <Image source={this.state.icoVide} 
                                 style={{width:40,height:38,borderRadius:20}}
                                /> 
                       </TouchableOpacity>
                       
                       <TouchableOpacity
                       style={{flex:1 ,alignItems:'flex-end',justifyContent:'center'}}
                         onPress={() =>{
                       
                          if(this.state.icoChat==require('../../assets/streamingIcon/chat.png')){
                            this.setState({
                             // displMicro:'flex'   
                            icoChat:require('../../assets/streamingIcon/chatNo.png'),
                            usuarios:[],
                            habilitaInput:false,
                          })
                          }else{
                              this.microfonoNo();
                            }
                          }
                        }
                         
                         >
  
                      <Image source={require('../../assets/streamingIcon/microRed.png')} 
                          style={{width:40,height:38,borderRadius:20}}
                          /> 
                      </TouchableOpacity>

                      <TouchableOpacity
                       style={{flex:1 ,alignItems:'flex-end',justifyContent:'flex-start'}}
                         onPress={() =>{
                          
                          if(this.state.displMicro=='none'){
                            this.setState({
                               displMicro:'flex',
                               icoReload:require('../../assets/streamingIcon/reloadselec.png'),
                               habilitaInput:true,
                            })
                            this.microfonoNo();
                          }else{
                            this.setState({
                             displMicro:'none',
                             icoReload:require('../../assets/streamingIcon/reload.png')
                            })
  
                          }
                          
                         }}
                         >
                      <Image source={this.state.icoReload} 
                                 style={{width:40,height:38,borderRadius:20}}
                                /> 
                         
                      </TouchableOpacity>
                   </View>
              </View>


              <View style={{ height:hp(this.state.heiteclado),marginTop:this.state.margintextTop}}>
                     <View style={{ flex:1,flexDirection:'row'}}>
                           <View style={{flex:8.5,alignItems:'center',justifyContent:'center'}}>
                                     
                                <View style={{paddingVertical:hp('1.5%'),backgroundColor:'black',opacity:0.7,paddingTop:hp('0.5%'),
                                 zIndex:1, paddingLeft:wp('3%'), width:wp('75%'),borderRadius:hp('10%')}}>
                                         
                                      <TextInput
                                     style={{
                                       color:'white',
                                       zIndex:4,
                                     }}
                                     underlineColorAndroid="transparent"
                                     placeholder="Say something ......"
                                     placeholderTextColor="white"
                                     onChangeText={(text2) =>
                                      this.setState({text2})  }
                   
                                    textAlignVertical='top'
                                    value={this.state.text2}
                                    editable={this.state.habilitaInput}
                                     selectTextOnFocus={this.state.habilitaInput}
                                     />
                                </View>
                           </View>
                           <View style={{flex:1.5 ,alignItems:'flex-end',justifyContent:'center'}}>
                                 
                                     <Image source={this.state.icoChat} 
                                     style={{width:40,height:38,borderRadius:20}}
                                    /> 
                             
                           </View>
                     </View>
                     
                </View>
          </View>
          

          </View>
        </ImageBackground>
   
   );
}
}




const styles = StyleSheet.create({

 

});