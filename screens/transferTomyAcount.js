import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

import {CheckBox} from "react-native-elements";
import Checkbox from 'react-native-modest-checkbox';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class  TransferTomyAcount extends Component {
    static navigationOptions = {
        headerTitle:'transfer balance',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center',
          width: '90%',
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

             isCheckedA:false,
             valueA:'',
             isCheckedB:false,
             valueB:'',
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

    let screenHeight=Dimensions.get('window').height;
    
    if(screenHeight<=592){ //1080 * 1920  xxhdpi
      fontM=14;
      fontN=12;
      marginVer=10
      topcheck=5
      topBut=5
  
    }else if(screenHeight<=605){ //mopvil de  david
      fontM=16;
      fontN=14;
      marginVer=25
      topcheck=15
      topBut=50
 
  } else if(screenHeight<=678){ // mi movil
    fontM=16;
    fontN=14;
    marginVer=25
    topcheck=15
    topBut=50
   }else if(screenHeight<=685){ //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
    fontM=16;
    fontN=14;
    marginVer=25
    topcheck=15
    topBut=50
   }else if(screenHeight<=775){//1440 *2880 :560dpi
    fontM=16;
      fontN=14;
      marginVer=25
      topcheck=15
      topBut=140
   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
    fontM=16;
      fontN=14;
      marginVer=25
      topcheck=15
      topBut=120
   }else{ // 800 = 480 * 800 mdpi
    fontM=16;
      fontN=14;
      marginVer=25
      topcheck=15
      topBut=120
   }



    return (

        <View  style={{flex:1}}>

        <View  style={{flex:8.5}}>
             
        
        {/*  CAJA DE IMAGEN*/}
            
            <View style={{alignItems:'center',justifyContent:'center',marginTop:15,
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
        
        <View style={{marginVertical:marginVer,marginHorizontal:'3%'}}>
             <Text style={{color:'#312f3d', fontSize:16, fontWeight:'500', letterSpacing:0.32,
               }}>  Choose a payment method
             </Text>
        </View>
       
        
        {/* ------------CREADIT CARD-------------------- */}
        
        
         <View style={{flexDirection:'row',paddingVertical:1,
                      marginBottom:15,marginHorizontal:16}}>
        
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
             <View style={{flex:8,flexDirection:'column', paddingBottom:10,
                           borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
                  
                   <View>
                      <Text style={{
                          color:'#312f3d',fontSize:fontM,letterSpacing:0.32, 
                      }}>Master Card</Text>
                   </View>
                   <View   >
                      <Text style={{
                          color:'#677183',fontSize:fontN
                      }}>**** **** **** 0959</Text>
                       
                   </View>
                 
             </View>
             <View style={{flex:0.9, paddingBottom:10,
                     borderBottomColor:'#e2e7ee',borderBottomWidth:1}}>
                        <Checkbox
                        onChange={() => {
                         if(this.state.isCheckedA==true){
                        this.setState({
                          isCheckedA:false,
         
                        })
       
       
                      }else{
                        this.setState({
                          isCheckedA:true,
      
                        })
                      }
                    }}
                    checked={this.state.isCheckedA}
                    containerStyle={{
                      backgroundColor:'white',
                      marginTop:10,
                     
                    }}
                    checkboxStyle={{
                     
                      backgroundColor:'white',
    
                    }}

                    value={this.state.valueA}
                    checkedImage={require('../assets/icons_genGMI/check.png')}
                    uncheckedImage={require('../assets/icons_genGMI/checkNo.png')}

                              />


                     {/* fin de check box*/}
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
             <View style={{flex:8,flexDirection:'column', 
             paddingBottom:10,  borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
                   <View>
                      <Text style={{
                          color:'#312f3d',fontSize:fontM,letterSpacing:0.32, 
                      }}>Paypal account</Text>
                   </View>
                   <View   >
                      <Text style={{
                          color:'#677183',fontSize:fontN
                      }}>info@email.com</Text>
                       
                   </View>
             </View>
             <View style={{flex:0.9, paddingBottom:10,
                     borderBottomColor:'#e2e7ee',borderBottomWidth:1}}>
                        <Checkbox
                        onChange={() => {
                         if(this.state.isCheckedB==true){
                        this.setState({
                          isCheckedB:false,
         
                        })
       
       
                      }else{
                        this.setState({
                          isCheckedB:true,
      
                        })
                      }
                    }}
                    checked={this.state.isCheckedB}
                    containerStyle={{
                      backgroundColor:'white',
                      marginTop:10,
                     
                    }}
                    checkboxStyle={{
                     
                      backgroundColor:'white',
    
                    }}

                    value={this.state.valueB}
                    checkedImage={require('../assets/icons_genGMI/check.png')}
                    uncheckedImage={require('../assets/icons_genGMI/checkNo.png')}

                              />
                  {/* fin de check box*/}
             </View>
        
         </View>

        {/* -------------------------------------------- */}
   <View style={{flexDirection:'row'}}>
        <View style={{flex:1,paddingHorizontal:0}}>
             <CheckBox
                  checked={ this.state.checked }
                  onPress={ () => this.isChecked() }
                  style={{
                    backgroundColor:'red'
                  }}
             />
          </View>

             <View style={{flex:5,marginLeft:-40,top:topcheck}}>
                 <Text style={styles.textgris}>
                     <Text >By creating account you accept the </Text>
                </Text>
                 <Text style={styles.textrojo}>
                     <Text >Terms and Conditions <Text style={styles.textgris}>and </Text> Privacy Policy</Text>
                 </Text>
            </View>
    
    </View>
 
      
   </View>
   <View style={{flex:1.5,alignItems:'center'}}>
       
       <TouchableOpacity style={styles.containerbutton}
        onPress={()=>{this.props.navigation.navigate("vieweredit")}}
       > 
       <Text style={{color:'white',fontSize:wp('4.5%')}}>
       Transfer balance</Text>      
      </TouchableOpacity> 
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
      },
      containerbutton:{
        backgroundColor: '#ff5a60',
          width:'90%',
          paddingVertical:13,
          borderRadius:27,
          alignItems:'center',
          marginBottom:40,
      }
});