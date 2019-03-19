import React from 'react';
import { StyleSheet,View, Text,TextInput, ScrollView, Button,Image } from 'react-native';


export default class Editinfluencerprofile extends React.Component {

  static navigationOptions = {
      
    headerTitle: "Edit Influencer Profile",
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
      <Text style={{
          color:'#ff5a60',marginRight:16,fontSize:16
      }}>Cancel</Text>
      </View>),  
      headerTintColor: '#ff5a60',
  };



  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
     
    <View style={styles.StyleSheet}>

  
       <Image style={styles.imagen}
      
          source={require('../assets/blanco.jpg')}
        />

        <Image style={{
          width:50,
          height:50,
          top:'8%',
          left:'45%',
          position:'absolute',
          
        }}
      source={require('../assets/icons_genGMI/LogOut.png')}
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
                 <Text style={styles.socialBoton} >
                   Connect 
                </Text>
           </View>
       </View> 

       <View style={styles.social}>
           <Image style={styles.imagenSocial}
          source={require('../assets/social/Twitch.png')}
           />
           <View style={styles.socialTextoBut}>
               <Text style={styles.socialTexto}>Twitch {" "} {" "}{" "}</Text>
                 <Text style={styles.socialBoton} >
                   Connect 
                </Text>
           </View>
       </View> 
       <View style={styles.social}>
           <Image style={styles.imagenSocial}
          source={require('../assets/social/Twitter.png')}
           />
           <View style={styles.socialTextoBut}>
               <Text style={styles.socialTexto}>Twitter {" "} {" "}</Text>
                 <Text style={styles.socialBotonBlanco} >
                 ✔ Connect 
                </Text>
           </View>
       </View> 
       <View style={styles.social}>
           <Image style={styles.imagenSocial}
          source={require('../assets/social/Youtube.png')}
           />
           <View style={styles.socialTextoBut}>
               <Text style={styles.socialTexto}>Youtube {" "} </Text>
                 <Text style={styles.socialBoton} >
                   Connect 
                </Text>
           </View>
       </View> 




       
       <View style={styles.container2}>
             <Text  style={styles.textboton}> 
            Save changes
           </Text>
        </View> 
        
      </View>
      </ScrollView>
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
   marginTop:'35%',
   marginLeft:15,
   
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

textboton:{
 

  textAlign:'left',
  color:"white",
  
  marginTop:1,
  marginLeft:105,
  fontSize:17,

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


  socialBoton:{
    marginLeft:110,
    backgroundColor: '#ff5a60',
    paddingVertical:4,
    paddingHorizontal:30,
    color:'white',
    borderRadius:27,
  },
  socialBotonBlanco:{
    marginLeft:110,
    backgroundColor: 'white',
    paddingVertical:4,
    paddingHorizontal:20,
    color:'black',
    borderRadius:27,
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
  }


});
