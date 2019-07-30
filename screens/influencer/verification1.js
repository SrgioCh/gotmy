import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,Dimensions,Modal,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';


import Checkbox from 'react-native-modest-checkbox';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

 

export default class  Verification1 extends Component {
    static navigationOptions = {
        headerTitle:'Verify Profile',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center',
  
          width: '90%',
            fontWeight:'500',
                letterSpacing:0.41,
               
                fontSize:wp('4%'),
                color:'#312f3d',
            
         },
         headerRight: ( 
            <View style={{alignItems:'center',marginRight:wp('4%')}}>
              <Text style={{color:'#ff5a60'}}>Cancel</Text>
     
            </View>
            ),   
          headerTintColor: '#ff5a60',
    };

    constructor(props) {
        super(props);
      
      this.state = {
           imagInflu:require('../../assets/influencers/MandyJTV/manyfot.png'),
           name:'MandyJTV',
           estrellas:4,
 

        }
      
      }
   
  

  render() {
 
 
    let screenWidth=Dimensions.get('window').width;
     



    return (
      <View style={{flex:1}}>
 


        <View style={{flex:3,alignItems:'center',
                justifyContent:'center'}}>
     <View style={{flexDirection:'row'}}>
       <View style={{padding:hp('0.5%'),borderWidth:wp('0.5%'),borderRadius:80,
              borderColor:'grey'}}>
          <Image source={this.state.imagInflu} 
                style={{ width:120,height:120,borderRadius:Platform.OS === 'ios' ? 60:80}}          
           />
         </View>
         <View style={{justifyContent:'flex-end',marginLeft:wp('-12%')}}>
         <Image source={require('../../assets/icons_genGMI/raiceOf.png')} 
                style={{ width:35,height:35,borderRadius:Platform.OS === 'ios' ? 17:25}}          
           />
         </View>
        

     </View>
         
          
                    
       </View>
       <View style={{flex:1, alignItems:'center'}}>
           <Text style={{
                fontSize:wp('5%'),
                color:'#312f3d',
                fontWeight:'500'
               }}>Payout & Tax Setup</Text>
            

       </View>
      
       <View style={{flex:1.5,alignItems:'center'}}>
             <Text style={{fontSize:wp('3.5%'),
             
                               color:'#312f3d'}}>
                We need collects and securely stores all your</Text>
            
                 <Text  style={{ fontSize:wp('3.5%'),
                          
                               color:'#312f3d'}}> 
                 tax and payout information</Text>
        </View>
        <View style={{flex:1,alignItems:'center'}}>
               <TouchableOpacity style={styles.containerbutton}
               onPress={() => this.props.navigation.navigate("verification2")}
               
               > 
               <Text style={{color:'white',fontSize:wp('4.5%')}}>
                Continue</Text>      
              </TouchableOpacity> 
        </View>
        <View style={{flex:1,alignItems:'center'}}>
               <TouchableOpacity style={styles.containerbutton2}
                 > 
               <Text style={{color:'#ff5a60',fontSize:wp('4.5%')}}>
                Set Up Later</Text>      
              </TouchableOpacity> 
        </View>
      
      
        <View style={{flex:2 ,alignItems:'center',marginTop:hp('4%')}}
              
               > 
        <Text style={{
                fontSize:wp('4%'),
                color:'#ff5a60',
                fontWeight:'500'
               }}>Guide to Taxes & Payouts</Text>
       </View>
 
        
 </View>


     
    );
  }
 
}


const styles = StyleSheet.create({
 
    containerbutton:{
      backgroundColor: '#ff5a60',
      width:'90%',
      height:'60%',
      borderRadius:27,
      alignItems:'center',
      justifyContent:'center',
      marginBottom:40,
     
    
      },
      containerbutton2:{
        backgroundColor: 'white',
        width:'70%',
        height:'60%',
        
        borderRadius:27,
        borderColor:"#ff5a60",
        borderWidth:1,
        alignItems:'center',
      justifyContent:'center',
        marginBottom:40,
     
    
      },

   
});