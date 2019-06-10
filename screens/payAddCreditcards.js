import React, { Component } from 'react';
import { Platform,TouchableOpacity,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image} from 'react-native';

import Button from 'react-native-button'; 

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class Payaddcreditcards extends Component {

  static navigationOptions = {
      
    headerTitle: "Add Credit Card",
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

    let screenHeight=Dimensions.get('window').height;
    
    if(screenHeight<=592){ //1080 * 1920  xxhdpi
      topBut='29%'
    }else if(screenHeight<=605){ //mopvil de  david
      topBut='35%'
     
  } else if(screenHeight<=678){ // mi movil
    topBut='37%'
   }else if(screenHeight<=685){ //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
    topBut='37%'
   }else if(screenHeight<=775){//1440 *2880 :560dpi
    topBut='45%'
   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
    topBut='45%'
   }else{ // 800 = 480 * 800 mdpi
    topBut='45%'
   }

    return (
    <View style={{flex:1}}>


     <View style={{flex:9 , paddingTop:hp('3%')}}>
     <View style={{ marginHorizontal:16}}>
        
        <Text style={styles.text} >Full name</Text>
        <TextInput
          underlineColorAndroid='transparent'
         style={styles.input}
        />

 </View>
 <View style={{marginHorizontal:16,marginTop:10}}>
    
    <Text style={styles.text} >Credit card number</Text>
    <TextInput
      underlineColorAndroid='transparent'
     style={styles.input}
    />

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
              paddingLeft:'4%',
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
           paddingLeft:'4%',
       }}
         />

    </View>
   
       </View>
     </View>
     
{/* -----------------------BOTONES ------------------*/}

<View style={{flex:1}}>


      <View style={{alignItems:'center'}}>
       
       <TouchableOpacity style={styles.containerbutton}
       onPress={()=>{this.props.navigation.navigate("paymetho3")}}
       > 
       <Text style={{color:'white',fontSize:wp('4.5%')}}>
       Save changes</Text>      
      </TouchableOpacity> 
    </View>
</View>



</View>
     
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
    padding: Platform.OS === 'ios' ? 14:6,
   paddingHorizontal: 20,

  },
  text:{
  
    backgroundColor:'white',
    textAlign:'left',
    color:"#697181",
     fontSize:13,
    
  },
  containerbutton:{
      
    backgroundColor: '#ff5a60',
    width:'90%',
    paddingVertical:13,
    borderRadius:27,
    alignItems:'center',
    marginBottom:Platform.OS === 'ios' ? null:40,
},
});