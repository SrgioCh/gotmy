import React from 'react';
import { Platform,StyleSheet, Text, TextInput, View,TouchableWithoutFeedback,Keyboard,
     TouchableOpacity, Image } from "react-native";
     import Button from 'react-native-button'; 

//const util = require("util");
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class Login extends React.Component {
    
    static navigationOptions = ({ navigation }) => {
       return {
          title:'Log In',
          headerTitleStyle: {
            alignSelf: 'center',
            textAlign: 'center',
            width: '80%',

            fontWeight:'500',
            letterSpacing:0.41,
            height:120,
            fontSize:16,
            color: Platform.OS === 'ios' ? 'red':'#312f3d',
            marginTop:  Platform.OS === 'ios' ? '45%':'40%',

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
  

    render() {
        
        return (
            <View style={{flex:1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        
            <View  style={{flex:8.5}}>
               
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

                </View>
                </TouchableWithoutFeedback>
               <View style={{flex:1.5}}>

               
             
    <View style={{ alignItems:'center'}}>
       
       <TouchableOpacity style={styles.containerbutton}
       onPress={() => this.props.navigation.navigate("discover")}
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
        marginTop:'55%',
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

    containerbutton:{
      
        backgroundColor: '#ff5a60',
        width:'90%',
        paddingVertical:13,
        borderRadius:27,
        alignItems:'center',
        marginBottom:40,
    },

  
});


        
    
