import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

import {CheckBox } from "react-native-elements";
import Button from 'react-native-button'; 

export default class  TransferTomyAcount extends Component {
    static navigationOptions = {
        headerTitle:'transfer balance',
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
           </View>),  
          headerTintColor: '#ff5a60',
    };


    state = {
        checked: false,
      };
    
      isChecked() {
        if(this.state.checked==true){
        this.setState({checked: false})
      }else{
        this.setState({checked: true})
      }
    
      }

  render() {
 
    const dinero = this.props.navigation.getParam('diner');

    alert(dinero);
    return (

        <View  style={{flex:1}}>

        <View  style={{flex:10}}>
                  <ScrollView style={{}} >
        
        {/*  CAJA DE IMAGEN*/}
            
            <View style={{alignItems:'center',justifyContent:'center',
                         marginHorizontal:35}}>
        
                 
                       <Image
                        source={require('../assets/logoGotmy.png')}
                        style={{ }}
                      />
                 
                 <Text style={{color:'#312f3d',fontSize:17,fontWeight:'500',letterSpacing:0.32}}>
                 Current Balance</Text>
                  <Text style={{ color:'#312f3d',fontSize:40,fontWeight:'bold',letterSpacing:0.32, }}>
                   $ {dinero}
                    </Text>
        
                    <Text style={{
                            color:'#677183', fontSize:14,letterSpacing:0.32,textAlign:'center',
                            marginTop:15,
                            
                    }}>
                    You will receive the money in your account{'\n'} in the next 3 business days
                   </Text>
          </View>
        
        <View style={{marginTop:25,marginHorizontal:'3%'}}>
             <Text style={{color:'#312f3d', fontSize:16, fontWeight:'500', letterSpacing:0.32,
               }}>  Choose a payment method
             </Text>
        </View>
       
        
        {/* ------------CREADIT CARD-------------------- */}
        
        
         <View style={{flexDirection:'row',paddingVertical:1,
                      marginBottom:15,  marginTop:20, marginHorizontal:16}}>
        
             <View style={{flex:1,paddingRight:10}}>
             <Image
                      source={require('../assets/icons_genGMI/mastercard.png')}
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
                     onPress={() => this.props.navigation.navigate("myWallet")}
                      >
                   <View>
                      <Text style={{
                          color:'#312f3d',fontSize:16,letterSpacing:0.32, 
                      }}>Master Card</Text>
                   </View>
                   <View   >
                      <Text style={{
                          color:'#677183',fontSize:14
                      }}>**** **** **** 0959</Text>
                       
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
                      }}>info@email.com</Text>
                       
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

        {/* -------------------------------------------- */}
   <View style={{flexDirection:'row'}}>
        <View style={{flex:1,paddingHorizontal:0}}>
             <CheckBox
                  checked={ this.state.checked }
                  onPress={ () => this.isChecked() }
             />
          </View>

             <View style={{flex:5,marginLeft:-40,top:15}}>
                 <Text style={styles.textgris}>
                     <Text >By creating account you accept the </Text>
                </Text>
                 <Text style={styles.textrojo}>
                     <Text >Terms and Conditions <Text style={styles.textgris}>and </Text> Privacy Policy</Text>
                 </Text>
            </View>
    
    </View>
 
        
        {/*----------------------------------------------------- */}
        
        <View style={{marginTop: Platform.OS === 'ios' ? 80 :45, marginHorizontal:16,
            alignItems:'center',  borderRadius: 50, backgroundColor:'#ff5a60'}}>
          <Button
                style={{
                  fontSize: 15,
                  color: 'white',
                 
                  padding:15,
                 
                  width:320,
                 }}
        
                
                styleDisabled={{color: 'red'}}
                onPress={()=>{this.props.navigation.navigate("vieweredit")}}>
                Transfer balance
              </Button>
        
                </View>
        
        
            </ScrollView>
        
        
        
                  </View>
        
        
               </View>

     
    );
  }
 
}


const styles = StyleSheet.create({
 
    //PARA EL CHECKBOX ,FINAL
    textgris:{
        fontSize:13,
        color:"#677183",
        marginLeft:17 ,
      },
      textrojo:{
        fontSize:13,
        color:"#ff5a60",
        marginLeft:17 ,
      }
});