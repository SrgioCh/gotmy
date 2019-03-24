import React from 'react';
import { Platform,StyleSheet, Text, Modal,
  TextInput, View, Image, TouchableOpacity  } from 'react-native';


  import Button from 'react-native-button'; 



const util = require("util");

export default class ConfirmEmail extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
       title:"Confirm your email", 
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
       <TouchableOpacity onPress={() => navigation.navigate("singUpInicio")} >
      <Text style={{
          color:'#ff5a60',marginRight:15,fontSize:16
      }}>Cancel</Text>
      </TouchableOpacity>
      </View>),  
      headerTintColor: '#ff5a60',

      }

  }

state = {
  //PARA VENTANA MODAL
  modalVisible: false,
};

//PARA VENTANA MODAL
toggleModal(visible) {
  this.setState({ modalVisible: visible });
}


  render() {
    return (
    <View style={{flex:1}}>
 <Modal
          transparent = {true}
          animationType="fade"
              visible = {this.state.modalVisible}
              onRequestClose = {() => { console.log("Modal has been closed.") } }
              >
          
                  <View style = {styles.modal}>
                  </View> 

                 <View style={{backgroundColor:'white',borderRadius:20,
                          position:'absolute',left:'5%',
                          top:'30%',marginHorizontal:'5%',paddingHorizontal:'5%',
                       paddingVertical:'10%'}}> 

                       <View style={{alignItems:'center',marginTop:10}}>
                       
                       <Image  
       source={require("../assets/influencers/influencer.png")}
         />
       
       <Text style={{
         color:'#312f3d',fontSize:20,fontWeight:'500'
       }} >Request accepted!</Text>

       <Text style={{ textAlign:'center',
                 color:"gray",  fontSize: 14, marginLeft:3,
                 marginRight:3, fontWeight: "normal",
                  marginVertical: '3%',}}>
             Now you can create a private meeting {'\n'}
            folder for this follower</Text>
      

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


     <View style={{alignItems:'center'
                 ,marginTop:'20%'}}>
       <Image style={styles.imagen}
          source={require('../assets/logoGotmy.png')}
        />
     </View>

       
    <Text style={styles.text}>
        <Text >Check your inbox!</Text>
    </Text>
    <Text style={styles.subtitulo}>
        <Text >
        An email has been sent. {'\n'}
        Please, click the reset link from your email
        </Text>
    </Text>
        
  
       
        <View style={styles.containerbutton }>
                         <Button 
                          onPress={() =>  
                            this.toggleModal(!this.state.modalVisible)
                           
                          }
                         style={{color:'white',fontSize:17}}
                       >Continue</Button>      
                   </View> 

      
      </View>
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
  containerbutton:{
    backgroundColor: '#ff5a60',
        width:'90%',
        paddingVertical:13,
        borderRadius:27,
        textAlign:"center",
       position:'absolute',
        marginHorizontal:'4%',
        bottom:20,

  },

text:{
 
  textAlign:'center',
  color:"black",
  fontSize: 28,
  fontWeight: "bold",
  fontStyle: "normal",
  marginTop:'5%',
  
},
subtitulo:{
 
    textAlign:'center',
    color:"gray",
  
   fontSize: 16,
  marginLeft:'5%',
  marginRight:'5%',
  fontWeight: "normal",
  fontStyle: "normal",
    
  
  },

textboton:{
 

  textAlign:'left',
  color:"white",
  
  marginTop:1,
  marginLeft:105,
  fontSize:17,

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
