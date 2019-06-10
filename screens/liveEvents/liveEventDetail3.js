import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Checkbox from 'react-native-modest-checkbox';

export default class LiveEventDetail3 extends Component {


  static navigationOptions = ({ navigation }) => {
    return {
       title:'Buy Ticket',
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
        headerRight: (<View style={{
          marginRight:15
        }}>
          <TouchableOpacity onPress={() => navigation.navigate("discover")} >
          <Text style={{
              color:'red'
          }}>Cancel</Text>
          </TouchableOpacity>
          </View>),  
          headerTintColor: '#ff5a60',
    };
  }

    constructor(props){

        super(props);
      
         this.state={
         
           nombreInflu:'MandyJTV',

           //caja de fecha 
           dia:21,
           mes:'DEC',
          texto1:'My FIRST God of War experience!',
          texto2:'Games',
            direccion:'Live from New York, at 18:30 pm',
  
         //PRECIOS
         evPrice:20,
         feesGot:0.50 ,
         rebaja:2.9,
         resultado:1.59,
        //PAGAR
        precioTicket:21.08,


        // CHECKBOX
        isCheckedA:false,
        valueA:'',
        isCheckedB:false,
        valueB:'',
      }
      
      }// fin de consttructor


  render() {
    let screenHeight=Dimensions.get('window').height;
    
    if(screenHeight<=592){ //1080 * 1920  xxhdpi
      fontM=14;
      fontN=12;
      marTop=15;
    }else if(screenHeight<=605){ //mopvil de  david
      fontM=16;
      fontN=14;
      marTop=25
  } else if(screenHeight<=678){ // mi movil
    fontM=16;
    fontN=14;
    marTop=25
   }else if(screenHeight<=685){ //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
    fontM=16;
    fontN=14;
    marTop=25
   }else if(screenHeight<=775){//1440 *2880 :560dpi
    fontM=16;
    fontN=14;
    marTop=25
   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
    fontM=16;
    fontN=14;
    marTop=25
   }else{ // 800 = 480 * 800 mdpi
    fontM=16;
      fontN=14;
      marTop=25
   }
  

    return (

      <View style={{flex: 1}}>
        
    <View style={{flex:9}}>
      {/* CAJA DE FECHA */}
      <View style={{borderRadius:10,marginTop:5,
                        marginLeft:  Platform.OS === 'ios' ? 6:16,
                     flexDirection:'row',
                    backgroundColor:'#f6f6f6',
                     marginBottom: 30}}>
             <View style={{ flex:1, 
           backgroundColor:'white',flexDirection:'column',
            paddingTop:20,alignItems:'center'
                }}>
                  <Text style={{ fontSize:28,fontWeight:'bold'}}>
                   {this.state.dia}</Text>
                  <Text style={{color:'#ff5a60'}}>{this.state.mes}</Text>
                  </View>
             <View style={{ flex:6, flexDirection:'column',backgroundColor:'white',
                  paddingTop:20}}>
               <Text style={{ fontSize: Platform.OS === 'ios' ? 15:17,
                  fontWeight:'bold',color:'#312f3d'}}>
                      {this.state.texto1}</Text>
                   <Text style={{ fontSize:  Platform.OS === 'ios' ? 14:16,
                   fontWeight:'bold',color:'#ff5a60'}} >{this.state.texto2}</Text>
                   
                   <View style={{flexDirection:'row'}}>
                     <Image source={require('../../assets/icons_genGMI/ubicacion.png')} 
                     style={{ width:15,height:15,marginTop:4,marginRight:5}}
                     />  

                   <Text style={{ fontSize:  Platform.OS === 'ios' ? 11:13 ,
                   fontWeight:'bold',color:'#677183',
                    paddingVertical:4}}>{this.state.direccion}</Text>
                   </View>
                
          </View>
         </View>  
         {/*  fin */}
    
 
         <View style={{marginHorizontal:16,flexDirection:'row'}}>

                <View style={{flex:1}}>
                <Image source={require('../../assets/icons_genGMI/price_detail3.png')} 
                   style={{ width:30,height:30}}
                  />   
                </View>
                <View style={{flex:8,flexDirection:'column',marginLeft:20,
                        borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
                <Text style={{color:'#312f3d',fontSize:fontM,marginTop:-7}}>Event price</Text>
                <Text style={{color:'#677183',fontSize:fontN,paddingBottom:8,paddingTop:4}}>
                $ {this.state.evPrice}</Text>
                </View>
        </View>


            <View style={{marginTop:15,marginHorizontal:16,flexDirection:'row'}}>

                <View style={{flex:1}}>
                    <Image source={require('../../assets/icons_genGMI/fice_detail3.png')} 
                 style={{ width:30,height:30}}
                  />   
                </View>
                <View style={{flex:8,flexDirection:'column',marginLeft:20,
                  borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
                <Text style={{color:'#312f3d',fontSize:fontM,marginTop:-7}}>GotMy fees</Text>
                <Text style={{color:'#677183',fontSize:fontN,paddingBottom:8,paddingTop:4}}>
               $ {this.state.feesGot} + {this.state.rebaja} % = $ {this.state.resultado}</Text>
                </View>
          </View>               
        {/*fin */}    

        <Text style={{fontSize:16,color:'#312f3d',marginVertical:marTop,marginBottom: 10,
                 fontWeight: '500',marginHorizontal:16}}>Choose a payment method</Text>
       


        
{/* ------------CREADIT CARD-------------------- */}


 <View style={{flexDirection:'row',paddingVertical:1,
              marginBottom:15, marginHorizontal:16}}>

     <View style={{flex:1,paddingRight:10}}>
     <Image
              source={require('../../assets/icons_genGMI/mastercard.png')}
               style={{ 
                  width:30,
                  height:30,
                  borderRadius:10,
                  marginTop:5,
                  
                }}
            />
     </View>
     <View style={{flex:7,flexDirection:'column', paddingBottom:10,
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
     <View style={{flex:0.8,borderBottomColor:'#e2e7ee',  paddingBottom:10,
                  borderBottomWidth:1}}>
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
                    label=' '
                    value={this.state.valueA}
                    checkedImage={require('../../assets/icons_genGMI/check.png')}
                    uncheckedImage={require('../../assets/icons_genGMI/checkNo.png')}

                              />
                  {/* fin de check box*/}
     </View>

 </View>

{/*----------------------------------------------------- */}

{/* -----------PAY PAL ------------------- */}


<View style={{flexDirection:'row',
              marginHorizontal:16}}>

     <View style={{flex:1,paddingRight:10  }}>
     <Image
              source={require('../../assets/icons_genGMI/paypal.png')}
               style={{ 
                  width:30,
                  height:30,
                  borderRadius:10,
                  marginTop:5,
                  
                
                }}
            />
     </View>
     <View style={{flex:7,flexDirection:'column', 
     paddingBottom:10,  borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
           <View>
              <Text style={{
                  color:'#312f3d',fontSize:fontM,letterSpacing:0.32, 
              }}>Paypal account</Text>
           </View>
           <View   >
              <Text style={{
                  color:'#677183',fontSize:fontN
              }}>Connect with your Paypal Account</Text>
               
           </View>
     </View>
     <View style={{flex:0.8,borderBottomColor:'#e2e7ee',  paddingBottom:10,
                  borderBottomWidth:1}}>
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
                    label=' '
                    value={this.state.valueB}
                    checkedImage={require('../../assets/icons_genGMI/check.png')}
                    uncheckedImage={require('../../assets/icons_genGMI/checkNo.png')}

                              />
                  {/* fin de check box*/}
     </View>



 </View>

{/*----------------------------------------------------- */}

<View style={{marginHorizontal:16}}>
      <View style={{ flexDirection:'row'}} >
              
             
               <View style={{flex:9,marginBottom:35,marginTop:10, 
                alignItems: 'flex-end',}}>
                   <Text  style={{color:'#ff5a60',
                        fontSize:14,letterSpacing:0.32 ,marginTop:5}}>
                        Add new payment method</Text>
               </View>
        
                <View style={{flex:1,marginRight:-10,marginBottom:35,marginTop:10}}>
                   <TouchableOpacity
                 
                 >
                   <Image
                        source={require('../../assets/icons_genGMI/ArrowGrey.png')}
                          style={{marginTop:3}}
                  />
                 </TouchableOpacity>
            </View>
       </View>
          
</View>


</View>



     {/* pie de pagina*/}
     
          <TouchableOpacity style={{ flex:1,backgroundColor:'#ff5a60',
         alignItems:'center',justifyContent:'center'}}
          onPress = {() => this.props.navigation.navigate("liveEventDetail4") } >
           <Text style={{color:'white',
           fontSize:wp('5%'),letterSpacing:0.41 }}>
           Pay $ {this.state.precioTicket}</Text>
        </TouchableOpacity>
    
        
    
   </View>
   

     
    );
  }
 
}





const styles = StyleSheet.create({
 

});