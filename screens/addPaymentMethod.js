import React, { Component } from 'react';
import { Platform,TouchableOpacity,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image} from 'react-native';

import Button from 'react-native-button'; 




export default class AddPaymentMethod extends Component {


    static navigationOptions = {
      headerTitle: "Become An Influencer",
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
            color:'#ff5a60',marginRight:15,fontSize:16
        }}>Cancel</Text>
        </View>),  
        headerTintColor: '#ff5a60',
  };
 

  render() {

    return (
     
    <ScrollView  style={{flex:1,marginTop:20}} >
     
   {/*  TITULO Y SUBTITULO */}
   <View style={{alignItems:'center',justifyContent:'center',
                 marginHorizontal:35,paddingBottom: 20}}>

          <Text style={{ color:'#312f3d',fontSize:22,fontWeight:'bold',letterSpacing:0.32, }}>
            Payment method
            </Text>

            <Text style={{
                    color:'#677183', fontSize:14,letterSpacing:0.32,textAlign:'center',
                    marginTop:15,
                    
            }}>
            We need a payment method to tranfer your {'\n'} earnings and payments

            </Text>
  </View>

{/* ------------------------------------------------------- */}





     <View style={{marginHorizontal:16}}>
        
     <Text style={{
        color:'#312f3d',
        fontSize:17 ,
        letterSpacing:0.41 ,
        paddingBottom:10,
        fontWeight:'bold',
     }} >Add credit card</Text>


            <Text style={styles.text} >Full name</Text>
            <TextInput
              underlineColorAndroid='transparent'
             style={styles.input}
            />

     </View>


     <View style={{marginTop:10,marginLeft:15,marginRight:6}}>
        
        <Text style={styles.text} >Credit card number</Text>
        <View>
            <View style={{flex:1,paddingRight:10}}>
            <Image
              source={require('../assets/icons_genGMI/mastercard.png')}
               style={{ 
                  width:40,
                  height:40,
                  borderRadius:10,
                  position:'absolute',
                  right:'7%',
                  top:'19%',
                  
                }}
               />
                 <TextInput
          underlineColorAndroid='transparent'
         style={styles.input}
        />

             </View>
        </View>
      

 </View>
     
 <View style={{ marginHorizontal:16,marginTop:10}}>
                
               <View style={{flexDirection:'row'}}>
               <Text style={styles.text} >Valid date</Text>
                 <Text style={[styles.text,
                 { marginLeft:128 } ]} >CVC</Text>
                 </View> 
               
      
       
        <View style={{flexDirection:'row'}}>
             <TextInput
              underlineColorAndroid='transparent'
              style={{
                  width:173,
                  height:42,
                  
                 borderWidth:1,
                   borderColor:'#e2e7ee',
                  borderRadius:27,
                  marginTop:8,
                   marginBottom:8,
              }}
             />

            <TextInput
              underlineColorAndroid='transparent'
             style={{
              width:106,
              height:42,
              marginLeft:10,
             borderWidth:1,
               borderColor:'#e2e7ee',
              borderRadius:27,
              marginTop:8,
               marginBottom:8,
           }}
             />

        </View>
       
 </View>

{/* ADD PAYPAL ACOUNT*/}

<View style={{marginHorizontal:16,marginTop:20}}>
<Text style={{
        color:'#312f3d',
        fontSize:17 ,
        letterSpacing:0.41 ,
        paddingBottom:10,
        fontWeight:'bold',
     }} >Add Paypal account</Text>

<Text style={styles.text} >Email</Text>
            <TextInput
              underlineColorAndroid='transparent'
             style={styles.input}
            />




</View>


{/* -----------------------BOTONES ------------------*/}

 <View style={{marginTop:40,marginBottom:20, backgroundColor:'#ff5a60',
             borderRadius: 50,marginHorizontal:16,alignItems:'center'}}>
  <Button
        
         onPress={() => this.props.navigation.navigate("confirMailInflu")}
        
         >
        continue
      </Button>

        </View>

    </ScrollView>


     
    );
  }
 
}





const styles = StyleSheet.create({
  input:{
 
    borderWidth:1,
    borderColor:'#e2e7ee',
    borderRadius:27,
    marginTop:8,
    marginBottom:8,
    paddingVertical: 10,
   paddingHorizontal: 20,

  },
  text:{
  
    backgroundColor:'white',
    textAlign:'left',
    color:"#697181",
     fontSize:13,
    
  },
});