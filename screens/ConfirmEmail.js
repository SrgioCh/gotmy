import React from 'react';
import { Platform,StyleSheet, Text, TextInput, View, Image, TouchableHighlight } from 'react-native';
import  {Button}  from "react-native-elements";
import  Modal  from "react-native-modal";


const util = require("util");

export default class ConfirmEmail extends React.Component {

  state = {
    modalVisible: false,
    fondoPrincipal:''
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  };


  static navigationOptions = {
    headerTitle: "Confirm your email", 
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
          color:'#ff5a60',marginRight:15,fontSize:16
      }}>Cancel</Text>
      </View>),  
      headerTintColor: '#ff5a60',

    
};

  render() {
    return (
    <View style={[{flex:1},this.state.fondoPrincipal]}>

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
        
  
       
       <View style={styles.container2}>
       <Button  style={styles.textboton}
          title="Continue"
          onPress={() => {
            this.setModalVisible(true);
            this.setState({
              fondoPrincipal:styles.transparentePrincipal
            })
            
          }
                         }
          type="clear"
          titleStyle={{ color: "#ffffff",
          position: "absolute",
          top: -5,
          left: Platform.OS === 'ios' ? 15:null,
        }}
        />     
        
        
        </View> 

       {/*   GENERACION DEL MODAL*/}
       
        
        <Modal
        style={{backgroundColor:"transparent",
        opacity:0.99,
                 justifyContent: 'center',
                alignItems: 'center',
                margin: 0,
                borderRadius:20,
      
               }}
          animationType="fade"
        
          transparent={true}
          visible={this.state.modalVisible}
          onBackdropPress={() => {
            this.setModalVisible(!this.state.modalVisible);
            this.setState({
              fondoPrincipal:''
            })
          }}
           
           >

          <View style={{backgroundColor:'white',borderRadius:20,
                       marginHorizontal:'5%'}}>
            <View>
              <View style={{alignItems:'center',marginTop:'5%'}}>
               <Image  
              source={require("../assets/influencers/influencer.png")}
                />
                </View>
              <Text style={styles.modalTitle} >Request accepted!</Text>

              <Text style={{ textAlign:'center',
                        color:"gray",  fontSize: 14, marginLeft:3,
                        marginRight:3, fontWeight: "normal",
                         marginVertical: '3%',}}>
			              Now you can create a private meeting {'\n'}
                   folder for this follower</Text>
               <View style={{
                  backgroundColor: '#ff5a60',
                  width:'70%',
                  padding:15,
                  color:'white',
                  borderRadius:27,
                  textAlign:"center",
                  marginTop:'3%',
                  marginHorizontal:'15%'
               }}>
               <Button style={styles.textboton}
                title="Continue"
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  this.setState({
                    fondoPrincipal:''
                  })
                }}
                type="clear"
                titleStyle={{ color: "#ffffff",
                position: "absolute",
                top: -5,
                left: Platform.OS === 'ios' ? -45:null,
                }}
                >
              </Button>
              </View>
              
            </View>
          </View>
        </Modal>
 
  

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

  transparentePrincipal:{
  backgroundColor:'black',
  opacity:0.5
  },

  //el contenedor del boton
container2:{
  backgroundColor: '#ff5a60',
   width:'90%',
   padding:15,
   color:'white',
   borderRadius:27,
   textAlign:"center",
   marginTop:'50%',
   marginLeft:15,
   
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
modal: {

  justifyContent: "center",
  alignItems: "center",
  marginTop: "20%",
  marginLeft: "10%",
  width: "80%",
  height: "60%",
  

},
modalTitle: {
  textAlign:'center',
  color:"black",
  fontSize: 28,
  fontWeight: "bold",
  fontStyle: "normal",
  marginTop:'5%',
}, 
modalBackground: {
  color: "black",
  opacity: 0.4,
},
modalContent2: {
  backgroundColor: 'skyblue',
  padding: 22,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 4,
  borderColor: 'black',
  marginTop: "10%",
  marginLeft: "10%",
  width: "80%",
  height: 200,
 }


});
