import React, { Component } from 'react';
import { Platform,TouchableOpacity,
  View,Text ,TextInput,Dimensions,KeyboardAvoidingView,
  StyleSheet,ScrollView,
  Image} from 'react-native';

  import { Button } from "react-native-elements";




export default class AddPaymentMethod extends Component {


  static navigationOptions = {
    header: null ,
};


  render() {

    return (
      <KeyboardAvoidingView behavior="padding" style={{flex:1}}>

            <View>
            <ScrollView showsVerticalScrollIndicator={false}> 
                    {/*  creamos la cabezera  */}
                    <View style={{flex: 1 ,flexDirection:'row', paddingTop: '5%', paddingBottom:'3%',
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
                  marginLeft:'12%', color:'#312f3d',fontSize:17,fontWeight:'500'
                 }}>Become An Influencer</Text>
               </View>
                <View style={{flex:2,marginTop:'6%',
                 marginRight:'4%',alignItems:'flex-end'}}>
                  <TouchableOpacity
                       onPress={() => this.props.navigation.navigate("discover")}
                     >
                 <Text style={{
                   color:'#ff5a60',fontSize:15,fontWeight:'200'
                 }}>cancel</Text>
                 </TouchableOpacity>
                  </View>
               </View>
               {/*  -- fin de la cabezera --*/}

{/*  TITULO Y SUBTITULO */}
   <View style={{alignItems:'center',justifyContent:'center'
                 ,marginHorizontal:25,marginTop:'3%'}}>

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





     <View style={{marginHorizontal:16,marginTop:'3%'}}>
        
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


     <View style={{marginTop:7,marginLeft:15,marginRight:6}}>
        
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
     
 <View style={{ marginHorizontal:16,marginTop:7}}>
                
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
                  paddingLeft:15,
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
               paddingLeft:15,
           }}
             />

        </View>
       
 </View>

{/* ADD PAYPAL ACOUNT*/}

<View style={{marginHorizontal:16,marginTop:15}}>
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

 


      <View style={styles.container2}>
       <Button  style={styles.textboton}
          title="Continue"
          onPress={() => this.props.navigation.navigate("confirMailInflu")}
          type="clear"
          titleStyle={{ color: "#ffffff",
          position: "absolute",
          top: -5
        }}
        />    
      </View> 
  
 
               </ScrollView>
          </View>
     
    </KeyboardAvoidingView>


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
  container2:{
    backgroundColor: '#ff5a60',
     width:'90%',
     padding:15,
     color:'white',
     borderRadius:27,
     textAlign:"center",
     marginTop:Platform.OS === 'ios' ? '16%':20,
     marginLeft:16,
     marginBottom:80
     
  },
  textboton:{
 

    textAlign:'center',
    color:"white", 
    marginTop:1,
    fontSize:17,
  
  }
});