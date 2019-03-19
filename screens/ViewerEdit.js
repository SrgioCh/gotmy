import React from 'react';

import { Platform,StyleSheet, Text, TextInput, View,  ScrollView, Image,TouchableOpacity } from 'react-native';
import { Button } from "react-native-elements";

export default class Vieweredit  extends React.Component {
  
  static navigationOptions = {
    headerTitle: "Edit Profile",
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
          color:'#ff5a60',marginRight:16,fontSize:16
      }}>Cancel</Text>
      </View>),  
      headerTintColor: '#ff5a60',
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
    return (
      <ScrollView contentContainerStyle={styles.Container}>
     
    <View style={{marginTop:-20}}>

  
       <Image style={styles.imagen}
      
          source={require('../assets/influencers/KalaTempo/tres.jpg')}
        />
        <Image style={{
          width:50,
          height:50,
          top:'10%',
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

    <View>
       <Text style={styles.text2}>
       <Text >Based on</Text>
    
      
       </Text>
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
         style={styles.input}
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
              marginLeft:110,
            }}>English, Spanish </Text>
            <Image
              source={require('../assets/icons_genGMI/ArrowGrey.png')}
              style={styles.ImagInfluence}
            />
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
              }
             else{
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
























  
       <View style={styles.container2}>
        <Button  style={styles.textboton}
          title="Continue"
          onPress={() => this.props.navigation.navigate("Become1")}
          type="clear"
          
          titleStyle={{ color: "#ffffff",
          position: "absolute",
          top: -5,
          left: Platform.OS === 'ios' ? 15:null,
        }}
        />         
        </View> 

        
      </View>
      </ScrollView>
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
   textAlign:"center",
   marginTop:60,
  marginBottom: 40,
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
  marginHorizontal:16,

  width: Platform.OS === 'ios' ? '91%':330,
   height:210 ,
   padding:16,
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
  }


});
