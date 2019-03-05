import React, { Component } from 'react';
import { Platform,TouchableOpacity,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image} from 'react-native';

import Button from 'react-native-button'; 




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



    return (
     
    <ScrollView  style={{flex:1,marginTop:20}} >
     
     <View style={{marginHorizontal:16}}>
        
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
{/* -----------------------BOTONES ------------------*/}

 <View style={{marginTop: Platform.OS === 'ios' ? 180 :150, marginHorizontal:16,
    alignItems:'center',  borderRadius: 50, backgroundColor:'#ff5a60'}}>
  <Button
        style={{
          fontSize: 15,
          color: 'white',
         
          padding:15,
         
          width:320,
         }}

        
        styleDisabled={{color: 'red'}}
        onPress={()=>{this.props.navigation.navigate("paymetho3")}}>
        Save changes
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
    padding: Platform.OS === 'ios' ? 14:6,
   paddingHorizontal: 20,

  },
  text:{
  
    backgroundColor:'white',
    textAlign:'left',
    color:"#697181",
     fontSize:13,
    
  },
});