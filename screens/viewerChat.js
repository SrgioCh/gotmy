import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,
  StyleSheet,ScrollView,KeyboardAvoidingView,
  Image,TouchableOpacity} from 'react-native';

import Button from 'react-native-button'; 
import AddParticip1 from "./publishPrivate/AddParticip1"

export default class ViewerChat extends Component {


  static navigationOptions = {
    header: null ,
};

    constructor(props){

        super(props);
      
         this.state={
         
           nombreInflu:'Sophia Lindsey',


              mensajeA:'How many days do you think will take us to discover Paris?',
              mensaFinal1:'10 min ago',

              mensajeB:'OK, sounds great! I’ll start organising the flight tickets first. ✈️',
              mensaFinal2:'2 hours ago',
           
             //para que la cabezera no pierda su forma , al activar el input
              activInput:1,
    
          }
      
      }// fin de consttructor


  render() {

    return (
   
      <KeyboardAvoidingView behavior="padding" style={{flex:1}}>
  
  <View style={{flex:this.state.activInput,flexDirection:'row', paddingTop:'5%',
         borderBottomWidth: 2,borderBottomColor:'#C3C1C0'}}>
            <View style={{flex:1 , marginLeft:'4%',marginTop:'6%'}}>
            <TouchableOpacity
                     onPress={() => this.props.navigation.pop()}
                     >
            <Image
                  source={require('../assets/icons_genGMI/Back.png')}
                  style={{
                                           
                        width:20,
                        height:20,
                        borderRadius:10,
                                 
                         }}
                       />
           </TouchableOpacity>
            </View>
            <View style={{flex:7,marginTop:'6%',alignItems:'center'}}>
                 <Text style={{
                  marginLeft:'7%', color:'#312f3d',fontSize:17,fontWeight:'500'
                 }}>Create Private Meeting</Text>
            </View>
            <View style={{flex:2,marginTop:'6%',
            marginRight:'4%',alignItems:'flex-end'}}>
              <TouchableOpacity
                     onPress={() => this.props.navigation.navigate("requestAcepted")}
                     >
            <Text style={{
                   color:'#ff5a60',fontSize:15,fontWeight:'500'
                 }}>cancel</Text>
                 </TouchableOpacity>
            </View>
        </View>

 

          <View style={{flex:9}}>
           
          <ScrollView showsVerticalScrollIndicator={false}> 

               {/* --------------- BLOQUE MENSAJE A-------------------- */}
    <View style={{flex:1,marginHorizontal:16,flexDirection:'row',
                marginTop:10,marginBottom:10,
         }}>

          <View style={{flex:1,marginTop:5,marginRight:10}}>

                <Image source={require(`../assets/influencers/dos.png`)} 
                       style={{ width:50,height:50,
                         borderRadius:10}}
                   />
              
            </View>

            <View style={{flex:8,flexDirection:'column',
                    paddingBottom:10,marginLeft: 10,}}>

            <View style={{flexDirection:'row',paddingVertical:3}}>
             <View  style={{flex:6,flexWrap:'wrap',backgroundColor:'#e2e7ee',
                          paddingVertical:10,paddingHorizontal:3,borderRadius:10}}>
                  <Text style={{fontSize:14,
                         color:'#312f3d'}}>{this.state.mensajeA}</Text>
             </View>

 
                    <Text style={{flex:2}}> {' '}</Text>
 
                 </View>
                  <View style={{}}>
                    <Text style={{
                        fontSize:12,
                        color:'#677183'
                    }}>{this.state.mensaFinal2}</Text>
                 </View>
                  </View>
               </View>
               {/* --------------- BLOQUE MENSAJE B-------------------- */}
                    <View style={{flex:1,marginHorizontal:16,flexDirection:'row',marginBottom:10,
                         }}>

                    <Text style={{flex:2}}> {' '}</Text>
                    <View style={{flex:8,flexDirection:'column',
                            paddingBottom:10,marginLeft: 10,}}>



                     <View  style={{flex:6,flexWrap:'wrap',backgroundColor:'#f6f6f6',
                                  paddingVertical:10,paddingHorizontal:3,borderRadius:10}}>
                          <Text style={{fontSize:14,
                                 color:'#312f3d'}}>{this.state.mensajeB}</Text>
                     </View>

                     <View style={{alignItems:'flex-end',justifyContent:'flex-end'}}>
                       <Text style={{
                           fontSize:12,
                           color:'#677183'
                       }}>{this.state.mensaFinal1}</Text>
                    </View>
                    </View>
               </View>
                {/*   fin de bloque b*/}





<View  style={{flexDirection:'row',marginTop:320}}>


<View style={{flex:1,alignItems:'center',marginLeft:16,marginTop:10}}>
<View style={{ width:35,height:35}}>
              <Image source={require('../assets/icons_genGMI/foto.png')} 
             style={{borderRadius:10 ,width:'100%',height:'100%'}}
             />
     </View>
</View>


<View style={{flex:8,alignItems:'center',padding:2}}>


<View style={{ marginHorizontal:16,marginBottom:20, paddingVertical:5,flexDirection:'row' }}>
<View style={{flexDirection:'row',flex:5,backgroundColor:'#f6f6f6',
     alignItems:'center',borderRadius:10}}>

        <TextInput
           style={{
           
              height:42,
              width:'90%',
            
              borderRadius:10,
           
           } }
           placeholder="Type a message here"
           editable={true} // con false , no podremos escribir nada
           borderBottomColor = '#e2e7ee'
           borderBottomWidth ={1}
           paddingHorizontal={5}
           onChangeText={
             (text3)=>{
               this.setState(()=> {

                                 return {
                                   tytexto:text3,
          
                                 }
                      })
             }
        }//fin de onchange
        onFocus={
          ()=>this.setState(()=>{
            return{
              activInput:1.5
            }
          })
        }
        onEndEditing={
          ()=>this.setState(()=>{
            return{
              activInput:1
            }
          })
        }
        onSubmitEditing={
          ()=>this.setState(()=>{
            return{
              activInput:1
            }
          })
        }

        
     />

</View>

</View>

</View>

<View style={{flex:1,alignItems:'center',marginTop:10,marginRight:16}}>
     <View style={{ width:35,height:35}}>
              <Image source={require('../assets/icons_genGMI/iconosChat.png')} 
             style={{borderRadius:10 ,width:'100%',height:'100%'}}
             />
     </View>
 </View>   


</View>




             </ScrollView>

          </View>
            
          
     </KeyboardAvoidingView>

     
    );
  }
 
}





const styles = StyleSheet.create({
 

});