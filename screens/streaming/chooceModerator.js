import React from 'react';
import { Platform,StyleSheet, Text,Dimensions,Alert,
  TextInput,TouchableOpacity, View, Image } from 'react-native';
 
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class ChooceModerator  extends React.Component {
   
    static navigationOptions = {
        header: null ,
    };
 
 
constructor(props) {
  super(props);

this.state = {
    view:4.354,

   
 
  }

}

    render() {

    
    return (

        <View  style={{flex:1,backgroundColor:'black'}}>
          <View style={{flex:3}}>
              <View style={{flex:4.5,marginHorizontal:wp('4%'),flexDirection:'row'}}>
                    
                       <View style={{flex:1.3,justifyContent:'center'}}>

                       <View style={{paddingVertical:hp('1%'),borderRadius:30,
                         borderWidth:wp('0.4%'),borderColor:'#232323',alignItems:'center'
                         }}>
                           <Image source={require('../../assets/icons_genGMI/banuser.png')} 
                              style={{width:30,height:30 }}          
                                /> 
                        </View>
                       </View>
                       <View style={{flex:6.7}}>

                       </View>


                         <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
                           <Image source={require('../../assets/icons_genGMI/userWhite.png')} 
                              style={{width:15,height:15 }}          
                                /> 
                          </View>
                             <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
                              <Text style={{
                                 fontSize:wp('3%'),
                                 color:'white',
                                  
                              }}>{this.state.view}</Text>      
                            </View>  
                    </View>

                    <View style={{flex:5.5, marginHorizontal:wp('4%'), 
                                   flexDirection:'row'}}>

                        <View style={{flex:2.3,alignItems:'flex-end'}}>
                              <Image source={require('../../assets/icons_genGMI/arrowStreaming.png')} 
                              style={{width:70,height:70 }}          
                                /> 
                        </View>
                        <View style={{flex:5.7}}>

                        </View>
                        <View style={{flex:2,alignItems:'flex-end'}}>
                             <View style={{padding:hp('0.3%'),borderRadius:30,
                              borderWidth:wp('0.4%'),borderColor:'#232323',
                              }}>
                               <Image source={require('../../assets/icons_genGMI/uploads.png')} 
                              style={{width:40,height:40 }}          
                                /> 
                             </View>
                         </View>
                        
              </View>

              </View>
            
            
          
          <View style={{flex:4.5,backgroundColor:'black',alignItems:'center'}}>
                 <View style={{flex:2 ,paddingHorizontal:wp('15%')}}>
                     <Text style={{
                         textAlign:'center',
                         color:'white',
                         fontSize:wp('6%'),
                         fontWeight:'bold'
                     }}>Entrust chat moderation to a viewer</Text>
                 </View>
                 <View style={{flex:2, paddingHorizontal:wp('13%')}}>
                        <Text  style={{
                         textAlign:'center',
                         color:'white',
                         fontSize:wp('3.8%'),
                         fontWeight:'100'
                     }}
                        >Make your followers feel more engaged by proposing tham to participate in the chat moderation.</Text>
                 </View>
                 <View style={{flex:2 ,paddingHorizontal:wp('10%')}}>
                   <Text   style={{
                            textAlign:'center',
                            color:'white',
                            fontSize:wp('3.8%'),
                            fontWeight:'100'
                        }}>You can change the Moderator at any time,or you can choose to make chat moderation yourself.</Text>
                 </View>
                 <View style={{flex:4}}>
                    <Text></Text>
                 </View>
         </View>

    <View style={{flex:2.5}}>

        <View style={{flex:1 ,alignItems:'center'}}>
        <TouchableOpacity style={{width:'80%',paddingVertical:hp('1.5%'),
       borderWidth:wp('0.3%'),borderRadius:wp('30%'),borderColor:'white'
         ,alignItems:'center',justifyContent:'center'}}
          onPress = {() => this.props.navigation.navigate("modoInfluencer") } >
           <Text style={{color:'white',
           fontSize:wp('4%'),letterSpacing:0.41 }}>Choose Moderator</Text>
        </TouchableOpacity>
        </View>
         
        <View style={{flex:1.5 ,alignItems:'center'}}>
                     <Text style={{
                         textAlign:'center',
                         color:'white',
                         fontSize:wp('3.5%'),
                         fontWeight:'100'
                     }}>Maybe Later</Text>
                 </View>
        

      
         </View>
       </View>


   
   );
}
}




const styles = StyleSheet.create({
 
 

});




