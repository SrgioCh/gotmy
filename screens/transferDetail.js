import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

import {CheckBox} from "react-native-elements";
import Checkbox from 'react-native-modest-checkbox';
import Button from 'react-native-button'; 

export default class  TransferDetail extends Component {
    static navigationOptions = {
        headerTitle:'Transaction detail',
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

    constructor(props){

        super(props);
      
         this.state={
       

             transac_ID:768483732,
             transac_status:'Success',
             data:'12/01/2019 - 12:45 PM)',
             fullName:'Jack Vega'
          }
      
      }// fin de consttructor
 
    
     

  render() {
 
    const dinero = this.props.navigation.getParam('dinerillo');

  
    return (

        <View  style={{flex:1}}>

     
        
        
         <View style={{flex:8.5}}>
                  <View style={{alignItems:'center',justifyContent:'center',
                         marginHorizontal:35,marginTop:'10%'}}>
                    <Text style={{color:'#312f3d',fontSize:17,fontWeight:'500',letterSpacing:0.32}}>
                     Amount</Text>
                     <Text style={{ color:'#312f3d',fontSize:40,fontWeight:'bold',letterSpacing:0.32, }}>
                     $ {dinero},00
                     </Text>
                  </View>

                          
 {/* cajita fecha*/}
 <View style={{borderRadius:10,
                 marginLeft:  Platform.OS === 'ios' ? 6:8,
                 marginRight:  Platform.OS === 'ios' ? 11:8,
                 flexDirection:'row',
                 backgroundColor:'#f6f6f6'}}>
                   <View style={{ flex:1, 
                           backgroundColor:'white',flexDirection:'column',
                            paddingTop:20,alignItems:'center'
                   }}>
                       <Text style={{ fontSize:28,fontWeight:'bold'}}>
                       21</Text>
                       <Text style={{color:'red'}}>DEC</Text>
                       </View>
                    <View style={{ flex:6, flexDirection:'column',backgroundColor:'white',
                           paddingTop:20}}>
                      <Text style={{ fontSize: Platform.OS === 'ios' ? 15:17,
                        fontWeight:'bold',color:'#312f3d'}}>
                       My FIRST Godr of War experience !</Text>
                       <Text style={{ fontSize:  Platform.OS === 'ios' ? 14:16,
                        fontWeight:'bold',color:'#677183'}} >Fashion</Text>
                    <View style={{flexDirection:'row'}}>
                      <Image source={require('../assets/icons_genGMI/ubicacion.png')} 
                                style={{ width:11,height:11,marginLeft:2,marginTop:6}}
                            />
                        <Text style={{ fontSize:  Platform.OS === 'ios' ? 11:13 ,
                      fontWeight:'bold',color:'#677183',
                              paddingVertical:4,marginLeft:5}}>Live from New York, at 18:30 pm</Text>
                       </View>
                   
                     </View>
               </View>  
 
 {/* ------------------  CAJAS DE DETALLES -----------------------*/}
                <View style={{marginHorizontal:16,flexDirection:'row',marginTop:'8%'}}>

                <View style={{flex:1}}>
                <Image source={require('../assets/icons_genGMI/transaccionB.png')} 
                     style={{ width:30,height:30}}
                     />   
                </View>
                <View style={{flex:8,flexDirection:'column',marginLeft:20,
                        borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
                <Text style={{color:'#312f3d',fontSize:16,marginTop:-7}}>Transaction ID</Text>
                <Text style={{color:'#677183',fontSize:14,paddingBottom:8,paddingTop:4}}>{this.state.transac_ID}</Text>
                </View>
                </View>
                <View style={{marginTop:15,marginHorizontal:16,flexDirection:'row'}}>

                <View style={{flex:1}}>                        
                   <Image source={require('../assets/icons_genGMI/Time.png')} 
                 style={{ width:30,height:30}}
                  />   
                </View>
                <View style={{flex:8,flexDirection:'column',marginLeft:20,
                   borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
                <Text style={{color:'#312f3d',fontSize:16,marginTop:-7}}>Transaction status</Text>
                <Text style={{color:'#677183',fontSize:14,paddingBottom:8,paddingTop:4}}>
                {this.state.transac_status}</Text>
                </View>
                </View>

                <View style={{marginTop:15,marginHorizontal:16,flexDirection:'row'}}>

                <View style={{flex:1}}>
                     <Image source={require('../assets/icons_genGMI/CalendarGrey.png')} 
                    style={{ width:30,height:30}}
                     />   
                </View>
                <View style={{flex:8,flexDirection:'column',marginLeft:20,
                  borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
                <Text style={{color:'#312f3d',fontSize:16,marginTop:-7}}>Date</Text>
                <Text style={{color:'#677183',fontSize:14,paddingBottom:8,paddingTop:4}}>
                {this.state.data}</Text>
                </View>
                </View>

                <View style={{marginTop:15,marginHorizontal:16,flexDirection:'row'}}>

                <View style={{flex:1}}>
                   <Image source={require('../assets/icons_genGMI/User.png')} 
                  style={{ width:30,height:30}}
                  />   
                </View>
                <View style={{flex:8,flexDirection:'column',marginLeft:20,
                   borderBottomColor: '#e1e3e6',borderBottomWidth:1,}}>
                <Text style={{color:'#312f3d',fontSize:16,marginTop:-7}}>Full name</Text>
                <Text style={{color:'#677183',fontSize:14,paddingBottom:8,paddingTop:4}}>
                  {this.state.fullName}</Text>
                </View>
                </View>




 </View>
{/*  fin del flex 8.5 */}

   <View style={{flex:1.5}}>
   <View style={{ marginHorizontal:16,marginTop:10,
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
                Share invoice
              </Button>
        
                </View>

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