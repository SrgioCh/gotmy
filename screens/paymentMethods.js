import React, { Component } from 'react';
import { AppRegistry, Alert,TouchableOpacity,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image} from 'react-native';

import Button from 'react-native-button'; 

export default class Paymentmethod extends Component {

  static navigationOptions = {
    header: null ,
};

 
 
  render() {


    return (
      
  <View style={{flex:1}}>
         <View  style={{flex: 1 ,marginTop:22,justifyContent:'center',
        borderBottomWidth: 0.8,borderBottomColor:'#f6f6f6'}}>
          
        <View style={{flexDirection:'row',paddinRight:5,paddingLeft: 16}}>
        <TouchableOpacity style={{flex:1 ,alignItems:'center',justifyContent:'center'}}
                       onPress={() => this.props.navigation.toggleDrawer()}  >
            <Image source={require('../assets/reviews/kuskal.png')} 
                      style={{ width:40,height:40,
                                borderRadius:10}}
                      />
           </TouchableOpacity>
           <View style={{flex:4,flexDirection:'column',marginLeft:10,
                      marginRight:10}}>
                <Text style={{
                     color:'#312f3d',
                     fontSize:17 ,letterSpacing:0.41
                }}>Kurtis 'Kala' Lloyd</Text>
                <Text style={{
                       color:'#677183',
                       fontSize:13 ,letterSpacing:0.08
                }}>@kurtiskala</Text>
           </View>
           <View style={{flex:1,marginLeft:-5,marginRight:5}}>
            </View>
            <View style={{flex:1 ,marginRight:5}}>
            </View>
        </View>

    </View>
       <View style={{flex:10}}>
       <ScrollView style={{marginTop:40 }} >

{/*  CAJA DE IMAGEN*/}
    
    <View style={{alignItems:'center',justifyContent:'center',
                 marginHorizontal:35}}>

         <Image
              source={require('../assets/logoGotmy.png')}
               style={{  }}
            />
            

    

 
          <Text style={{ color:'#312f3d',fontSize:22,fontWeight:'bold',letterSpacing:0.32, }}>
            How do you want to pay?
            </Text>

            <Text style={{
                    color:'#677183', fontSize:14,letterSpacing:0.32,textAlign:'center',
                    marginTop:15,
                    
            }}>
            We need a payment method to tranfer your {'\n'} earnings and payments

            </Text>
  </View>


{/* ------------CREADIT CARD-------------------- */}


 <View style={{flexDirection:'row',paddingVertical:1,
              marginBottom:15,  marginTop:35, marginHorizontal:16}}>

     <View style={{flex:1,paddingRight:10}}>
     <Image
              source={require('../assets/icons_genGMI/target.png')}
               style={{ 
                  width:30,
                  height:30,
                  borderRadius:10,
                  marginTop:5,
                  
                }}
            />
     </View>
     <View style={{flex:6,flexDirection:'column', paddingBottom:10,
                   borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
                    <TouchableOpacity
            
            onPress={() => this.props.navigation.navigate("paymetho2")}
             >
           <View>
              <Text style={{
                  color:'#312f3d',fontSize:16,letterSpacing:0.32, 
              }}>Credit Card</Text>
           </View>
           <View   >
              <Text style={{
                  color:'#677183',fontSize:14
              }}>Automatic charge to your card</Text>
               
           </View>
           </TouchableOpacity>
     </View>
    
     <View style={{flex:1,alignItems:'flex-end',justifyContent:'center', paddingBottom:10,
             borderBottomColor:'#e2e7ee',borderBottomWidth:1}}>
       
          <Image
              source={require('../assets/icons_genGMI/ArrowGrey.png')}
               style={{ 
                 
                
                }}
            />
      </View>
  
 </View>

{/*----------------------------------------------------- */}

{/* -----------PAY PAL ------------------- */}


<View style={{flexDirection:'row',
              marginBottom:15, marginHorizontal:16}}>

     <View style={{flex:1,paddingRight:10  }}>
     <Image
              source={require('../assets/icons_genGMI/paypal.png')}
               style={{ 
                  width:30,
                  height:30,
                  borderRadius:10,
                  marginTop:5,
                  
                
                }}
            />
     </View>
     <View style={{flex:6,flexDirection:'column', 
     paddingBottom:10,  borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
           <View>
              <Text style={{
                  color:'#312f3d',fontSize:16,letterSpacing:0.32, 
              }}>Paypal account</Text>
           </View>
           <View   >
              <Text style={{
                  color:'#677183',fontSize:14
              }}>Connect with your Paypal Account</Text>
               
           </View>
     </View>
     <View style={{flex:1,alignItems:'flex-end',justifyContent:'center', paddingBottom:10,
             borderBottomColor:'#e2e7ee',borderBottomWidth:1}}>
          <Image
              source={require('../assets/icons_genGMI/ArrowGrey.png')}
               style={{ 
                 
                
                }}
            />
     </View>

 </View>

{/*----------------------------------------------------- */}

 </ScrollView>

  </View>
       
  </View>
     
   
     
    );
  }
 
}





const styles = StyleSheet.create({
 
});