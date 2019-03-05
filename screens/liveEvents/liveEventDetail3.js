import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

import Button from 'react-native-button'; 

export default class LiveEventDetail3 extends Component {


    static navigationOptions = {
        headerTitle:'Buy Ticket',
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
              color:'red'
          }}>Cancel</Text>
          </View>),  
          headerTintColor: '#ff5a60',
    };


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
      }
      
      }// fin de consttructor


  render() {

    return (

      <View style={{flex: 1}}>
        
         
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
                <Text style={{color:'#312f3d',fontSize:16,marginTop:-7}}>Event price</Text>
                <Text style={{color:'#677183',fontSize:14,paddingBottom:8,paddingTop:4}}>
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
                <Text style={{color:'#312f3d',fontSize:16,marginTop:-7}}>GotMy fees</Text>
                <Text style={{color:'#677183',fontSize:14,paddingBottom:8,paddingTop:4}}>
               $ {this.state.feesGot} + {this.state.rebaja} % = $ {this.state.resultado}</Text>
                </View>
          </View>               
        {/*fin */}    

        <Text style={{fontSize:16,color:'#312f3d',marginTop:30,marginBottom: 10,
                 fontWeight: '500',marginHorizontal:16}}>Choose a payment method</Text>
       


        
{/* ------------CREADIT CARD-------------------- */}


 <View style={{flexDirection:'row',paddingVertical:1,
              marginBottom:15,  marginTop:20, marginHorizontal:16}}>

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
     <View style={{flex:6,flexDirection:'column', paddingBottom:10,
                   borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
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
     </View>
     <View style={{flex:1,alignItems:'flex-end',justifyContent:'center', paddingBottom:10,
             borderBottomColor:'#e2e7ee',borderBottomWidth:1}}>
          <Image
              source={require('../../assets/icons_genGMI/ArrowGrey.png')}
               style={{ 
                 
                
                }}
            />
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
              source={require('../../assets/icons_genGMI/ArrowGrey.png')}
               style={{ 
                 
                
                }}
            />
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






     {/* pie de pagina*/}
      <View style={{flex:1,backgroundColor:'#ff5a60',paddingVertical: '2.5%',
         alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity 
          onPress = {() => this.props.navigation.navigate("liveEventDetail4") } >
           <Text style={{flex:1 , color:'white', 
           fontSize:17,letterSpacing:0.41 }}>
           Pay $ {this.state.precioTicket}</Text>
        </TouchableOpacity>
      </View>
        
    
   </View>
   

     
    );
  }
 
}





const styles = StyleSheet.create({
 

});