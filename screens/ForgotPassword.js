import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View} from "react-native";
import { Button } from "react-native-elements";


export default class ForgotPassword extends React.Component {

    static navigationOptions = {
      
      headerTitle: "Reset Password",
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
            <View style={styles.StyleSheet}>
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
               
               <View style={styles.container2}>
                <Button  style={styles.textboton}
                title="Continue"
                onPress={() => this.props.navigation.navigate("ConfirmEmail")}
                type="clear"
                titleStyle={{ color: "#ffffff",
                position: "absolute",
                top: -5,
                left: Platform.OS === 'ios' ? 15:null,
              }}
                /> 
        
                
              
                
                
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
        
          //el contenedor del boton
        container2:{
          backgroundColor: '#ff5a60',
           width:'90%',
           padding:15,
           color:'white',
           borderRadius:27,
           textAlign:"center",
           marginTop:10,
           marginLeft:15,
           
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
        
          
        
        },
        text:{
         
          textAlign:'center',
          color:"black",
          fontSize: 28,
          fontWeight: "bold",
          fontStyle: "normal",
          marginTop:100,
          
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
        
        