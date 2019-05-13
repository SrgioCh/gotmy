import React from 'react';

import { Platform,StyleSheet, Text, TextInput, View,  ScrollView,
   Image,TouchableOpacity,KeyboardAvoidingView,Dimensions,
   } from 'react-native';
import { Button } from "react-native-elements";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class CreateViewerProfile  extends React.Component {
  

  static navigationOptions = {
    header: null ,
};

constructor(props) {
  super(props)
  this.state = { 
     linkedin:false,
     caja1: styles.socialBotone,
     marca1:styles.Textsinmarcar,
     texto1:'Connect',

     twitch:false,
     caja2: styles.socialBotone,
     marca2:styles.Textsinmarcar,
     texto2:'Connect',

     twiter:false,
     caja3: styles.socialBotone,
     marca3:styles.Textsinmarcar,
    texto3:'Connect',
    
     yutub:false,
    caja4: styles.socialBotone,
    marca4:styles.Textsinmarcar,
    texto4:'Connect',
   
  }
} /*  fin del constructor */
 
 
  render() {
    let screenWidth=Dimensions.get('window').width; //para poner la imagen normal
    let screenHeight=Dimensions.get('window').height;
    
   
    if(screenHeight<=592){ //1080 * 1920  xxhdpi
      widFot=330
      widImag=104
      heImag=104 
      leftBut=90
      leftEN=110
    }else if(screenHeight<=605){ //mopvil de  david

      widFot='92%'
      widImag=104
      heImag=104 
     leftBut=90
     leftEN=110
  } else if(screenHeight<=678){ // mi movil
    widFot='92%'
    widImag=104
    heImag=104 
    leftBut=90
    leftEN=110
   }else if(screenHeight<=685){ //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
    widFot='93%'
    widImag=122
    heImag=120 
    leftBut=130
    leftEN=150
   }else if(screenHeight<=775){//1440 *2880 :560dpi
    widFot='93%'
    widImag=122
    heImag=120 
    leftBut=130
    leftEN=150
   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
    widFot='93%'
    widImag=122
    heImag=120 
    leftBut=85
    leftEN=105
   }else{ // 800 = 480 * 800 mdpi
    widFot='93%'
    widImag=122
    heImag=120 
    leftBut=85
    leftEN=105
   }

    return (
  
      <KeyboardAvoidingView behavior="padding" style={{flex:1}}>

      <View style={{flex:1,
              marginTop:'5%'}}>
              <ScrollView showsVerticalScrollIndicator={false}> 

              <View style={{flex: 1 ,flexDirection:'row', paddingBottom:'3%',
         borderBottomWidth: 2,borderBottomColor:'#C3C1C0'}}>
            <View style={{flex:1 , marginLeft:'4%',marginTop:'6%'}}>
            <TouchableOpacity
                     onPress={() => this.props.navigation.pop()}
                     >
            <Image
                  source={require('../assets/icons_genGMI/Back.png')}
                  style={{
                                       
                        width:20,
                        height:20,
                        
                                 
                         }}
                       />
           </TouchableOpacity>
            </View>
            <View style={{flex:7,marginTop:'6%',alignItems:'center'}}>
                 <Text style={{
                  marginLeft:'7%', color:'#312f3d',fontSize:17,fontWeight:'500'
                 }}>Edit Profile</Text>
            </View>
            <View style={{flex:2,marginTop:'6%',
            marginRight:'4%',alignItems:'flex-end'}}>
              <TouchableOpacity
                     onPress={() => this.props.navigation.navigate("singUpInicio")}
                     >
            <Text style={{
                   color:'#ff5a60',fontSize:15,fontWeight:'200'
                 }}>cancel</Text>
                 </TouchableOpacity>
               </View>
             </View>
       
             <Image style={[styles.imagen,{width: Platform.OS === 'ios' ? '91%':widFot}]}
                      source={require('../assets/influencers/KalaTempo/tres.jpg')}
                   />
                   <Image style={{
                     width:50,
                     height:50,
                     borderRadius:25,
                     top:'12%',
                     left:'45%',
                     position:'absolute',
                   }}
                   source={require('../assets/icons_genGMI/foto.png')}
                   />
                

                   
                         
                          <Text style={styles.text} >Basic information 
                          </Text>
 
                            <Text style={styles.text2} >Full name</Text>
                           
                           <TextInput
                               underlineColorAndroid='transparent'
                               style={styles.input}
                            />
                          

                          <Text style={styles.text2}>
                             Usarname</Text>
                            
                        <TextInput
                             underlineColorAndroid='transparent'
                             style={styles.input}
                          />
    
                            <Text style={styles.text2}>
                             Biography</Text>
                       
                         <TextInput
                             underlineColorAndroid='transparent'
                             style={styles.input}
                          />

                        <View>
                           <Text style={styles.text2}>
                             Based on</Text>

  
                       
                           <Image style={{
                              width:20,
                              height:20,
                              bottom:20,
                              left:30,
                              position:'absolute',
                            }}
                          source={require('../assets/icons_genGMI/ubicacionrojo.png')}
                           />
                        <TextInput
                             underlineColorAndroid='transparent'
                             style={[styles.input,{paddingLeft:45}]}
                          />
                        </View>

                        <View style={styles.language}>
                                 <Text style={styles.languageTexto} > 
                                      Language
                                                            </Text>
                                  <Text style={{
                                    color:"#312f3d",
                                    fontSize:17,
                                    //paddingBottom: 20,
                                    marginLeft:leftEN,
                                  }}>English, Spanish </Text>
                                  <Image
                                    source={require('../assets/icons_genGMI/ArrowGrey.png')}
                                    style={styles.ImagInfluence}
                                  />
                               </View> 

                               <Text style={styles.tituloConect} >Connect  your social networks</Text>


                               <View style={{flexDirection:'row',marginHorizontal:'4%'}}>
                               <View style={{flex:1.3}}>
                                        <Image style={{height:35,width:35}}
                                      source={require('../assets/social/Linkedin.png')}
                                       />
                               </View>
                                
                                 <View style={{flex:4.4,justifyContent:'center'}}>
                                     <Text style={{color:'#312f3d',fontSize:wp('4%'),fontWeight:'500'}}>Linkedin</Text>
                                </View>
         
                                <View style={{flex:4.3}}>
                                     <TouchableOpacity 
                                     style={{ alignItems:'center'}}
                                    onPress = { () => {
                                     if (this.state.linkedin!==false)
                                    {
                                    this.setState({
                                        caja1: styles.socialBotone,
                                        marca1:styles.Textsinmarcar,
                                        texto1:'Connect',
                                        linkedin:false,
                                       })
                                    }
                                   else{
                                      this.setState({
                                        linkedin:true,
                                        caja1: styles.socialBotonBlanco,
                                        marca1:' ',
                                        texto1:'✔ Connected',
                                     })
                                   }
                                 }}
                                 >
                                     <View style={this.state.caja1} >
                                       <Text style={this.state.marca1}>
                                         {this.state.texto1}
                                      </Text>
                                      </View>
                                    </TouchableOpacity>
                           
                              </View>
                             </View> 
                          {/* --------------------------------------------- */}
                          <View style={{flexDirection:'row',marginHorizontal:'4%',marginTop:hp('2%')}}>
                            
                          <View style={{flex:1.3}}>
                                        <Image style={{height:35,width:35}}
                            source={require('../assets/social/Twitch.png')}
                             />
                             </View>

                             <View style={{flex:4.4,justifyContent:'center'}}>
                                 <Text style={{color:'#312f3d',fontSize:wp('4%'),fontWeight:'500'}}>Twitch</Text>
                             </View> 
                             <View style={{flex:4.3}}>
                                 <TouchableOpacity 
                                  style={{ alignItems:'center'}}
                                onPress = { () => {
                                 if (this.state.twitch!==false)
                                {
                                this.setState({
                                    caja2: styles.socialBotone,
                                    marca2:styles.Textsinmarcar,
                                    texto2:'Connect',
                                    twitch:false,
                                   })
                                      } else{
                                  this.setState({
                                    twitch:true,
                                    caja2: styles.socialBotonBlanco,
                                    marca2:' ',
                                    texto2:'✔ Connected',
                                 })
                               }
                             }}
                             >
                                 <View style={this.state.caja2} >
                                   <Text style={this.state.marca2}>
                                     {this.state.texto2}
                                  </Text>
                                  </View>
                                  </TouchableOpacity>
                                  </View>
                            
                         </View>
                      {/* ----------------------------------------------- */}



                      {/* --------------------------------------------- */}
                      <View style={{flexDirection:'row',marginHorizontal:'4%',marginTop:hp('2%')}}>
                       <View style={{flex:1.3}}>
                                        <Image style={{height:35,width:35}}
                            source={require('../assets/social/Twitter.png')}
                             />
                          </View>

                             <View style={{flex:4.4,justifyContent:'center'}}>
                                 <Text style={{color:'#312f3d',fontSize:wp('4%'),fontWeight:'500'}}>Twitter</Text>
                              </View> 
                               
                              <View style={{flex:4.3}}>
                                 <TouchableOpacity 
                                 style={{ alignItems:'center'}}
                                onPress = { () => {
                                 if (this.state.twiter!==false)
                                {
                                this.setState({
                                    caja3: styles.socialBotone,
                                    marca3:styles.Textsinmarcar,
                                    texto3:'Connect',
                                    twiter:false,
                                   })
                                }
                               else{
                                  this.setState({
                                          twiter:true,
                                          caja3: styles.socialBotonBlanco,
                                          marca3:' ',
                                          texto3:'✔ Connected',
                                       })
                                     }
                                   }}
                                   >
                                       <View style={this.state.caja3} >
                                         <Text style={this.state.marca3}>
                                           {this.state.texto3}
                                        </Text>
                                        </View>
                                        </TouchableOpacity>
                                   </View>
                               </View>
                            {/* ----------------------------------------------- */}




                       {/* --------------------------------------------- */}
                       <View style={{flexDirection:'row',marginHorizontal:'4%',marginTop:hp('2%')}}>
                       <View style={{flex:1.3}}>
                                        <Image style={{height:35,width:35}}
                             source={require('../assets/social/Youtube.png')}
                              />
                        </View>   

                         <View style={{flex:4.4,justifyContent:'center'}}>
                                 <Text style={{color:'#312f3d',fontSize:wp('4%'),fontWeight:'500'}}>Youtube</Text>
                              </View>

                               <View style={{flex:4.3}}>
                                 <TouchableOpacity 
                                 style={{ alignItems:'center'}}
                                 onPress = { () => {
                                  if (this.state.yutub!==false)
                                 {
                                 this.setState({
                                     caja4: styles.socialBotone,
                                     marca4:styles.Textsinmarcar,
                                     texto4:'Connect',
                                     yutub:false,
                                    })
                                 }
                                else{
                                   this.setState({
                                     yutub:true,
                                     caja4: styles.socialBotonBlanco,
                                     marca4:' ',
                                     texto4:'✔ Connected',
                                  })
                                }
                              }}
                              >
                                  <View style={this.state.caja4} >
                                    <Text style={this.state.marca4}>
                                      {this.state.texto4}
                                   </Text>
                                   </View>
                                   </TouchableOpacity>
                                                     </View>
                                 </View>
                       {/* ----------------------------------------------- */}



                   

           <View style={{ alignItems:'center',marginTop:hp('5%')}}>
       
       <TouchableOpacity style={styles.containerbutton}
        onPress={() => this.props.navigation.navigate("ConfirmEmail2")}
       > 
       <Text style={{color:'white',fontSize:wp('4.5%')}}>
       Continue</Text>      
      </TouchableOpacity> 
    </View>
     



            

              </ScrollView>

      </View>

      </KeyboardAvoidingView>
    );
  }
}




const styles = StyleSheet.create({
  

  //el contenedor del boton
container2:{
  backgroundColor: '#ff5a60',
  width:'90%',
  padding:15,
  color:'white',
  borderRadius:27,
   
},

text:{
 
  textAlign:'left',
  color:"#312f3d",
  fontSize: 17,
    fontWeight: '300',
  fontStyle: "normal",
  marginTop:'5%',
  marginLeft:16,
},
subtitulo:{

  backgroundColor:'white',
    textAlign:'center',
    color:"gray",
  
   fontSize: 16,
  marginLeft:'5%',
  marginRight:'5%',
  fontWeight: "normal",
  fontStyle: "normal",
    
  
  },
imagen:{
  marginHorizontal:16,
   height:210 ,
   padding:16,
   borderRadius:10,
   marginTop:'2%'
},
text2:{
 
  backgroundColor:'white',
    textAlign:'left',
    color:"gray",
  
    marginTop:10,
    marginLeft:15,
  
  },
  input:{
    width:'91%',
    borderWidth:1,
    borderColor:'#e2e7ee',
    borderRadius:27,
    padding: Platform.OS === 'ios' ? 12:5,
    paddingLeft: 15,
    marginTop:5,
    marginBottom:8,
    marginLeft:15,
  
  },

textboton:{
 

  textAlign:'left',
  color:"white",
  
  marginTop:1,
  marginLeft:105,
  fontSize:17,

},
contentContainer: {

},
language:{
  borderBottomWidth: 1,
  borderBottomColor:'#e2e7ee',
  marginTop:36,
  marginHorizontal:15,
  flexDirection: 'row',
  paddingBottom: 20,
},
languageTexto:{
color:"#312f3d",
fontSize:17,

},

  tituloConect:{
    color:'#312f3d',
    fontSize:17,
    padding:20,
  },

  social:{
    
    height:64,
    marginLeft:15,
    flexDirection: 'row',
    alignItems:'center',
  
   },
   imagenSocial:{
  
  },
  
  socialTextoBut:{
    borderBottomWidth: 1,
    borderBottomColor:'#e2e7ee',
  
   flexDirection:'row',
   alignItems:'center',
  // paddingBottom:10,
   paddingVertical:10,
 

  },
  socialTexto:{
     marginLeft:15, 
    
  },

  //al inicio
  socialBotone:{
    borderRadius: Platform.OS === 'ios' ? 18:hp('5%'),
    backgroundColor:'#ff5a60',
    paddingVertical:8,
   width:'80%',
    borderWidth:1,
    borderColor:'#ff5a60',
  alignItems:'center'
  },
  Textsinmarcar:{
    color:'white',
    fontSize:wp('3.5%'),
    fontWeight:'500'
  },
  //
  socialBotonBlanco:{
  backgroundColor: 'white',
    paddingVertical:8,
    width:'80%',
    color:'black',
    borderRadius: Platform.OS === 'ios' ? 18:hp('5%'),
    borderWidth:1,
    borderColor:'black',
    alignItems:'center'
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

});
