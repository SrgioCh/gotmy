import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,Dimensions,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

  import Button from 'react-native-button'; 


export default class RequestPri2 extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
        title:'Request Private Meeting',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center',
          width: '80%',
            fontWeight:'500',
                letterSpacing:0.41,
                height:Platform.OS === 'ios' ? 180:120,
                fontSize:16,
                color:'#312f3d',
                marginTop:  Platform.OS === 'ios' ? '63%':'43%',
    
    
        },
        headerRight: (<View style={{marginRight: 16}}>
        <TouchableOpacity onPress={() => navigation.navigate("profile1")} >
           <Text style={{color:'red'}}>Cancel</Text>
           </TouchableOpacity>
          </View>),  
          headerTintColor: '#ff5a60',
    };
  }

    constructor(props){

        super(props);
      
         this.state={
         
             nombreInflu:'MandyJTv',
            
             isChecked:false,
             value:'uno',
             isChecked2:false,
             value2:'uno',
             isChecked3:false,
             value2:'uno',
             isChecked4:false,
             value2:'uno',
             isChecked5:true,
             value2:'uno',
                   
             isCheckedA:false,
             valueA:'uno',
             isCheckedB:false,
             valueB:'uno',
             isCheckedC:false,
             valueC:'uno',

                 tytexto: 'surprise a friend',

          }
      
      }// fin de consttructor


 
presiona=()=>{

  let elegidos=[];
  if(this.state.isChecked===true){
    elegidos.push(this.state.value);
  }
  

  if(this.state.isChecked===true)
  {
    alert("se agregaron :  "+elegidos)
  }else{
    alert('no marcaste nada');
  }

}



  render() {

    let screenHeight=Dimensions.get('window').height;
    
    if(screenHeight<=592){//1080 * 1920  xxhdpi
      topBut='24.5%'
    
    }else if(screenHeight<=605){ //mopvil de  david
      topBut='5%'
 
  } else if(screenHeight<=678){ // mi movil
    topBut='32%'
   }else if(screenHeight<=685){ //1080 *1920 420dpi  --- 1440 *2560 :560 dpi
    topBut='32%'
 
   }else if(screenHeight<=775){//1440 *2880 :560dpi
    topBut='40%'
    
   }else if(screenHeight<=778){//1440 *3300 :xxxhdpi Snote9
    topBut='42%'
    
   }else{
    topBut='42%'
   
   }

    return (
      <View style={{flexDirection:'column',paddingBottom :20}}>
           
      <ScrollView>

      <View style={{flexDirection:'row',marginHorizontal:16,marginVertical:8}}>
            <View style={{flex:2}}>
            <Image source={require('../../assets/influencers/uno.png')} 
            style={{ width:50,height:50,borderRadius:30}}
            />   
            </View>

          <View style={{flex:8,flexDirection:'column',paddingLeft:2 ,
                }}>
               <View>

               <Text style={{fontSize:17,color:'#312f3d'
                   ,fontWeight:'500'}}>{this.state.nombreInflu}</Text>
               </View>
              
               <View  style={styles.estrellasTrending}>
                              <Image source={require('../../assets/Red.png')} 
                              style={{ width:11,height:11,}}
                              />
                             <Image source={require('../../assets/Red.png')} 
                            style={{ width:11,height:11,marginLeft:2}}
                            />
                           <Image source={require('../../assets/Grey.png')} 
                              style={{ width:11,height:11,marginLeft:2}}
                             />
                          <Image source={require('../../assets/Grey.png')} 
                           style={{ width:11,height:11,marginLeft:2}}
                            />
                           <Image source={require('../../assets/Grey.png')} 
                               style={{ width:11,height:11,marginLeft:2}}
                           />
                       </View>
          </View>
     </View>
     
     {/* TITULO */}  
  

  <View style={{marginHorizontal:16}}>
      
           <Text style={{fontSize:20,color:'#312f3d',marginBottom: 10,
            fontWeight: '500'}}>Tell me about your objetives</Text>
           <Text style={{
              color:'#677183',fontSize: 13,
           }}>
           200 Characters Min - 1000 Characters Max. (TBD)
           </Text>
       
   </View>
   <View style={styles.textAreaContainer}>
         
         <TextInput
            
             underlineColorAndroid="transparent"
           
            placeholderTextColor="grey"
           numberOfLines={8}
            multiline={true}
            onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              textAlignVertical='top'
       />
       </View>

   

      <View style={{marginTop:hp(topBut),alignItems:'center'}}>
       
        <TouchableOpacity style={styles.containerbutton}
         onPress={() => this.props.navigation.navigate("requestPri3")}
        > 
        <Text style={{color:'white',fontSize:wp('4.5%')}}>
          Continue </Text>      
       </TouchableOpacity> 
     </View>

   </ScrollView>
 </View>

         

     
    );
  }
 
}





const styles = StyleSheet.create({
  
  estrellasTrending:{
    paddingTop:7,
   marginBottom:20,
    flexDirection:'row',
  
  },

 
    textAreaContainer: {
        borderColor: '#f6f6f6',
        borderWidth: 2,
        padding: Platform.OS === 'ios' ? 55: 5,
        borderRadius:10,
        marginHorizontal:16,
        marginTop:20,

      },
      containerbutton:{
        backgroundColor: '#ff5a60',
        width:'90%',
        paddingVertical:13,
        borderRadius:27,
        alignItems:'center',
        marginBottom:40,
    
      },

});