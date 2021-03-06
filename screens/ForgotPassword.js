import React, { Component } from 'react';
import { Platform, StyleSheet,TouchableOpacity ,TouchableWithoutFeedback,Keyboard,
  Text, TextInput, View} from "react-native";
  import Button from 'react-native-button'; 
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class ForgotPassword extends React.Component {


  static navigationOptions = ({ navigation }) => {
    return {
       title:"Reset Password",
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        width: '90%',
          fontWeight:'500',
              letterSpacing:0.41,
              height:120,
              fontSize:16,
              color:'#312f3d',
              marginTop:'40%',

      },
      headerRight: (<View>
           <TouchableOpacity onPress={() => navigation.navigate("singUpInicio")} >
        <Text style={{
            color:'#ff5a60',marginRight:15,fontSize:16
        }}>Cancel</Text>
        </TouchableOpacity>
        </View>),  
        headerTintColor: '#ff5a60',
    };
  }
    render() {
        return (
          <View style={{flex:1}}>

        
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={{flex:8.5}}>
            <Text style={styles.text}>
                <Text >Forgot password</Text>
            </Text>
            <Text style={styles.subtitulo}>
                <Text >Enter your email and we’ll send a link to reset your password</Text>
            </Text>
                
            <Text style={styles.text2}>
                <Text >Email addres</Text>
            </Text>
          
              <TextInput
                 underlineColorAndroid='transparent'
                 style={styles.input}
              />
            
              </View>
              </TouchableWithoutFeedback>
              <View style={{flex:1.5}}>
                 
                   <View style={{ alignItems:'center'}}>
       
       <TouchableOpacity style={styles.containerbutton}
       onPress={() => this.props.navigation.navigate("ConfirmEmail")}
       > 
       <Text style={{color:'white',fontSize:wp('4.5%')}}>
         Continue </Text>      
      </TouchableOpacity> 
    </View>
 
              </View>
             
              </View>
            );
          }
        }
        
        
        
        
        const styles = StyleSheet.create({
        
        
          containerbutton:{
      
            backgroundColor: '#ff5a60',
            width:'90%',
            paddingVertical:13,
            borderRadius:27,
            alignItems:'center',
            marginBottom:40,
        },
        
         
        input:{
          width:'90%',
          borderWidth:1,
          borderColor:'#e2e7ee',
          borderRadius:27,
          padding: Platform.OS === 'ios' ? 12: 5,
          marginTop:8,
          marginBottom:8,
          marginLeft:15,
          paddingLeft:15,
  
        },
        text:{
         
          textAlign:'center',
          color:"black",
          fontSize: 28,
          fontWeight: "bold",
          fontStyle: "normal",
          marginTop:'25%',
          
        },
        subtitulo:{
         
          backgroundColor:'white',
            textAlign:'center',
            color:"gray",
          
           fontSize: 16,
           padding:30,
          fontWeight: "normal",
          fontStyle: "normal",
            
          
          },
        text2:{
         
        backgroundColor:'white',
          textAlign:'left',
          color:"gray",
        
          marginTop:10,
          marginLeft:15,
        
        },
        
        
        textboton:{
         
        
          textAlign:'left',
          color:"white",
          
          marginTop:1,
          marginLeft:105,
          fontSize:17,
        
        }
        });
        
        