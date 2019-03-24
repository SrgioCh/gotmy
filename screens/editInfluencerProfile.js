import React from 'react';
import { Platform,StyleSheet,View,Alert,
   Text,TouchableOpacity,TextInput,KeyboardAvoidingView ,
   ScrollView,Image, Modal } from 'react-native';
   import Button from 'react-native-button'; 

export default class Editinfluencerprofile extends React.Component {

  
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

    //PARA VENTANA MODAL
     modalVisible: false,
   
  }
} /*  fin del constructor */

//PARA VENTANA MODAL
toggleModal(visible) {
  this.setState({ modalVisible: visible });
}


  render() {
    return (

      <KeyboardAvoidingView behavior="padding" style={{flex:1}}>

<Modal
          transparent = {true}
          animationType="fade"
              visible = {this.state.modalVisible}
              onRequestClose = {() => { console.log("Modal has been closed.") } }
              >
          
                  <View style = {styles.modal}>
                  </View> 

                 <View style={{backgroundColor:'white',borderRadius:20,
                          position:'absolute',left:'8%',
                          top:'30%',marginHorizontal:'5%',paddingHorizontal:'10%',
                       paddingVertical:'15%'}}> 

                       <View style={{alignItems:'center',marginTop:10}}>
                       
          
       
                        <Text style={{
                          color:'#312f3d',fontSize:20,fontWeight:'500'
                    }} >Cambios Realizados!</Text>

         
                <View style={{
               backgroundColor: '#ff5a60',
               width:'90%',
               paddingVertical:13,
               borderRadius:27,
               textAlign:"center",
               marginTop:20,
               marginHorizontal:'4%',
               
            }}>
                         <Button 
                          onPress={() =>  this.toggleModal(!this.state.modalVisible)}
                         style={{color:'white',fontSize:17}}
                       >Continue</Button>      
                   </View> 





       </View>

  </View>

              
</Modal>








      <View style={{flex:1,
              marginTop:'2%'}}>

 
 
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
                 }}>Edit Influencer Profile</Text>
            </View>
            <View style={{flex:2,marginTop:'6%',
            marginRight:'4%',alignItems:'flex-end'}}>
              <TouchableOpacity
                     onPress={() => this.props.navigation.navigate("profile2")}
                     >
            <Text style={{
                   color:'#ff5a60',fontSize:15,fontWeight:'200'
                 }}>cancel</Text>
                 </TouchableOpacity>
               </View>
             </View>


             <Image style={styles.imagen}
  
  source={require('../assets/blanco.jpg')}
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



<Text style={styles.text}>
<Text >Basic information</Text>
</Text>

<Text style={styles.text2}>
<Text >Full name</Text>
</Text>
<TextInput
 underlineColorAndroid='transparent'
 style={styles.input}
/>


<Text style={styles.text2}>
<Text >Usarname</Text>
</Text>
<TextInput
 underlineColorAndroid='transparent'
 style={styles.input}
/>

<Text style={styles.text2}>
<Text >Biography</Text>
</Text>
<TextInput
 underlineColorAndroid='transparent'
 style={styles.input}
/>


<Text style={styles.text2}>

<Text >Based on</Text>
</Text>

{/*  BASED ON*/}
<View>
<Image style={{
  width:20,
  height:20,
  top:'26%',
  left:'10%',
  position:'absolute',
  
}}
source={require('../assets/icons_genGMI/ubicacionrojo.png')}
/>

<TextInput
 underlineColorAndroid='transparent'
 style={styles.inputBaseon}
/>

</View>
{/*-----------------FIN DE   BASED ON*/}

{/* My categories */}

<View style={{flexDirection:'row',
        justifyContent: 'space-between',padding:10,
      marginTop:20,marginHorizontal: 10}}>
 <View > 
 <Text style={{color:"#312f3d",fontSize:17}}>My categories</Text>
 </View>
 <View style={{flexDirection:'row'}} >
 <Text style={{color:"#ff5a60",fontSize:16}}>Edit categories</Text>
 <Text style={{color:"#ff5a60",fontSize:16,fontWeight:'bold'}}> > </Text>
 </View>
</View>


<View style={{ marginHorizontal:16 ,marginVertical:30 }}>


<View style={styles.socialTrending}>  

  <View style={{borderRadius:10,width:104, height:104 }}>
     <Text style={styles.textoprueba2}>
      Manga
    </Text>
    <Image source={require('../assets/OnBoard/manga.jpg')} 
   style={{ zIndex:2,borderRadius:10,width: '100%', height: '100%'}}
    />
  </View>

  <Text >{" "}{" "}</Text>
 <View style={{borderRadius:10,width:104, height:104 }} >
   <Text style={styles.textoprueba2}>
    Motor
     </Text>
    <Image source={require('../assets/OnBoard/motor.jpg')} 
      style={{borderRadius:10,width: '100%', height: '100%'}}
     />
   </View>

 <Text >{" "}{" "}</Text>

   <View style={{borderRadius:10,width:104, height:104 }}  >
       <Text style={styles.textoprueba}>
       Nature,{'\n'}Outdoors
       </Text>
    <Image source={require('../assets/OnBoard/nature.jpg')} 
     style={{borderRadius:10,width: '100%', height: '100%'}}
     />
  </View>
</View>
</View>



{/* lenguaje*/}
<View style={styles.language}>
   <Text style={styles.languageTexto} > 
        Language
    </Text>
    <Text style={styles.languageTexto2}>English, Spanish </Text>
    <Text style={styles.languageBoton} > 
            > 
    </Text>
 </View> 

<Text style={styles.tituloConect} >Connect  your social networks</Text>
<View style={styles.social}>
                                 <Image style={styles.imagenSocial}
                                source={require('../assets/social/Linkedin.png')}
                                 />
                                 <View style={styles.socialTextoBut}>
                                     <Text style={styles.socialTexto}>Linkedin {" "}</Text>
         
         
                                     <TouchableOpacity 
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
                          <View style={styles.social}>
                             <Image style={styles.imagenSocial}
                            source={require('../assets/social/Twitch.png')}
                             />
                             <View style={styles.socialTextoBut}>
                                 <Text style={styles.socialTexto}>Twitch {" "} {" "}{" "}</Text>
                                 <TouchableOpacity 
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
                      <View style={styles.social}>
                             <Image style={styles.imagenSocial}
                            source={require('../assets/social/Twitter.png')}
                             />
                             <View style={styles.socialTextoBut}>
                                 <Text style={styles.socialTexto}>Twitter {" "} {" "}{" "}</Text>
                                 <TouchableOpacity 
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
                       <View style={styles.social}>
                              <Image style={styles.imagenSocial}
                             source={require('../assets/social/Youtube.png')}
                              />
                              <View style={styles.socialTextoBut}>
                                  <Text style={styles.socialTexto}>Youtube {" "}{" "}</Text>
                                  <TouchableOpacity 
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
                 <TouchableOpacity
                  onPress={() =>  this.toggleModal(!this.state.modalVisible)  }
                  style={{
                    marginTop:'18%',
                   alignItems:'center',
                    marginBottom:'10%'

                  }}
                >
                  <View style={{
                      backgroundColor: '#ff5a60',
                      width:'90%',
                      paddingVertical:25,
                       alignItems:'center',
                      borderRadius:27,
                      
                  }}>
               
                       <Text  style={{
                         
                          color:"white",
                        fontSize:17,
                        marginTop:'-4%'

                       }}> 
                       Save changes
                      </Text>
                   </View> 
               </TouchableOpacity>
 

             </ScrollView>
       </View>
      </KeyboardAvoidingView>    
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
  marginTop:36,
  marginLeft:16,
  width: 330,
   height:210 ,
   padding:16,
   borderRadius:20,
   borderWidth:1,
   borderColor:'#312f3d',
},
text2:{
 
  backgroundColor:'white',
    textAlign:'left',
    color:"gray",
  
    marginTop:10,
    marginLeft:15,
  
  },
  input:{
    width:'90%',
    borderWidth:1,
    borderColor:'#e2e7ee',
    borderRadius:27,
    paddingLeft:10,
    paddingVertical:5,
    marginTop:5,
    marginBottom:8,
    marginLeft:15,

  
  },
  inputBaseon:{
    width:'90%',
    borderWidth:1,
    borderColor:'#e2e7ee',
    borderRadius:27,
    padding:5,
    marginTop:5,
    marginBottom:8,
    marginLeft:15,
    paddingVertical:5, //base on
    paddingLeft: '15%', //base on
  
  },

contentContainer: {
  paddingVertical: 20
},
language:{
  borderBottomWidth: 1,
  borderBottomColor:'#e2e7ee',

  marginBottom:10,
  marginLeft:15,
  flexDirection: 'row',
  paddingBottom: 20,
},
languageTexto:{
color:"#312f3d",
fontSize:17,

},

languageTexto2:{
  color:"#312f3d",
  fontSize:17,
  //paddingBottom: 20,
  marginLeft:100,
  marginRight:30,
  },
  
  languageBoton:{
    color:'#b3b8c1',
    fontSize:19,
    marginLeft:-20,
  
    width:20,
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

  socialBotone:{
    borderRadius: Platform.OS === 'ios' ? 18:27,
    marginLeft:90,
   backgroundColor:'#ff5a60',
    paddingVertical:8,
    paddingHorizontal: Platform.OS === 'ios' ? 43:40,
   
    borderWidth:1,
    borderColor:'#ff5a60',
  },
  Textsinmarcar:{
    color:'white',
  },
  socialBotonBlanco:{
    marginLeft:95,
 
    backgroundColor: 'white',
    paddingVertical:8,
    paddingHorizontal:20,
    color:'black',
    borderRadius: Platform.OS === 'ios' ? 18:27,
    borderWidth:1,
    borderColor:'black',
  },
  //**** TRENDING CATEGORIES */
socialTrending:{
    

  marginBottom:7,
   flexDirection: 'row',
 
 
  },
  textoprueba:{
   padding:5,
   position:'absolute',
   zIndex:3,
   color:'white',
   marginTop:43,
   fontWeight:'500',
   textAlign:'left',
  },
  textoprueba2:{
      padding:5,
      position:'absolute',
      zIndex:3,
      color:'white',
      marginTop:60,
      fontWeight:'500',
      textAlign:'left', 
  },
  //VENTANA MODAL
// ventana modal
modal: {
  flex: 1,
  alignItems: 'center',
  backgroundColor: 'black',
  opacity:0.5,
  padding: 100
},
textmod: {
  color: '#3f2949',
  marginTop: 10
},

containerbuttonModal:{
backgroundColor: '#ff5a60',
width:'80%',
paddingVertical:13,
borderRadius:27,
textAlign:"center",
marginTop:20,
marginBottom: 10,

},


});
