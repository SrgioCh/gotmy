import React from 'react';
import { Platform,StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { Button } from "react-native-elements";

//const util = require("util");


export default class Login extends React.Component {

  

        static navigationOptions = ({ navigation }) => ({
            headerTitle: 'Log Ini',
            headerTitleStyle: {
              alignSelf: 'center',
              textAlign: 'center',
              width: '80%',

              fontWeight:'500',
              letterSpacing:0.41,
              height:120,
              fontSize:16,
              color: Platform.OS === 'ios' ? 'red':'#312f3d',
              marginTop:  Platform.OS === 'ios' ? '45%':'43%',

            },
            headerRight: (<View>
                <Text style={{
                    color:'#ff5a60',marginRight:15,fontSize:16
                }}>Cancel</Text>
                </View>),
           headerTintColor: '#ff5a60',
           
           
          })

    render() {
        
        return (
            <View >
                <Text style={styles.text}>
                    <Text >Email addres</Text>
                </Text>
                
                <TextInput
                    underlineColorAndroid='transparent'
                    style={styles.input}
                />
                    
                <Text style={styles.text2}>
                    <Text >Password</Text>
                </Text>
            
                <TextInput
                    underlineColorAndroid='transparent'
                    secureTextEntry={true}
                    style={styles.input}
                />
                <TouchableOpacity onPress={() => this.props.navigation.navigate("forgotPass")} >
                    <Text style={styles.text3}>Forgot your Password ?</Text>
                </TouchableOpacity>
                <View style={styles.container2}>
                    <Button  style={styles.textboton}
                    title="Continue"
                    titleStyle={{ color: "#ffffff",
                    position: "absolute",
                    top: -5,
                    
                    left: Platform.OS === 'ios' ? 15:null,
                   
                    }}
                    onPress={() => this.props.navigation.navigate("discover")}
                    type="clear"
                  
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

        
     container2:{
        backgroundColor: '#ff5a60',
        width: Platform.OS === 'ios' ? '92%':'92%',
        padding:15,
        color:'white',
        borderRadius:27,
        textAlign:"center",
        marginTop:140,
        marginHorizontal:16,
      },
     input:{
        width: Platform.OS === 'ios' ? '92%':'90%',
        borderWidth:1,
        borderColor:'#e2e7ee',
        borderRadius:27,
        padding: Platform.OS === 'ios' ? 12:5,
        paddingLeft: 15,
        marginTop:8,
        marginBottom:8,
        marginLeft:15,
       
      },
        text:{
        

        backgroundColor:'white',
        textAlign:'left',
        color:"gray",

        marginTop:120,
        marginLeft:15,

       },
        text2:{
           backgroundColor:'white',
           textAlign:'left',
           color:"gray",

           marginTop:10,
           marginLeft:15,

        },
        text3:{
         backgroundColor:'white',
         textAlign:'left',
         color:'#ff5a60',
         marginTop:10,
        marginLeft:15,

    },

    textboton:{
        
     textAlign:'left',
        color: "white",
        
        marginTop:1,
        marginLeft:105,
        fontSize:17,

    }

  
});


        
    
