import React from 'react';
import { Platform, StyleSheet, Text,TextInput, View,
  TouchableWithoutFeedback,Keyboard ,TouchableOpacity} from 'react-native';
import {CheckBox} from "react-native-elements";
import Button from 'react-native-button'; 

export default class CreateAcount extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
       title:"Create Acount",
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
       <TouchableOpacity onPress={() => navigation.navigate("singUpInicio")} >

      <Text style={{
          color:'#ff5a60',marginRight:15,fontSize:16
      }}>Cancel</Text>
             </TouchableOpacity>
      </View>),  
      headerTintColor: '#ff5a60',
  }
  }



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
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={{flex:1}}>
    <Text style={styles.text}>
        <Text >Email address</Text>
    </Text>
      
      <TextInput
         underlineColorAndroid='transparent'
         style={styles.input}
      />
        
    <Text style={styles.text2}>
        <Text >Password</Text>
    </Text>
  
      <TextInput
         underlineColorAndroid='transparent'
         style={styles.input}
         secureTextEntry={true}
      />
       <Text style={styles.text2}>
        <Text >Confirm Password</Text>
    </Text>
  
      <TextInput
         underlineColorAndroid='transparent'
         style={styles.input}
         secureTextEntry={true}
      />

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

 
        <View style={styles.containerbutton }>
                         <Button 
                          onPress={() => this.props.navigation.navigate("createViewerProfile")}
                         style={{color:'white',fontSize:17}}
                       >Continue</Button>      
                   </View> 


      </View>
      </TouchableWithoutFeedback>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  containerbutton:{
    backgroundColor: '#ff5a60',
    width:'90%',
    paddingVertical:13,
    borderRadius:27,
    textAlign:"center",
    position:'absolute',
   bottom:20,
    marginHorizontal:'4%'

  },
input:{
  width:'92%',
  borderWidth:1,
  borderColor:'#e2e7ee',
  borderRadius:27,
  padding: Platform.OS === 'ios' ? 12:5,
  paddingLeft: 15,
  marginTop:8,
  marginBottom:8,
  marginHorizontal:16,

  

},
text:{
 

  backgroundColor:'white',
  textAlign:'left',
  color:"gray",

  marginTop:40,
  marginLeft:15,

},
text2:{
 
backgroundColor:'white',
  textAlign:'left',
  color:"gray",

  marginTop:10,
  marginLeft:15,

},

textboton:{
 
  textAlign:'left',
  color:"white",
  
  marginTop:1,
  marginLeft:105,
  fontSize:17,

},
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
