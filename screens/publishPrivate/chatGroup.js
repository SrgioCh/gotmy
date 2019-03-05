import React, { Component } from 'react';
import { Platform,AppRegistry, Alert,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

  import { Button } from "react-native-elements";


export default class ChatGroup extends Component {


    static navigationOptions = ({ navigation }) => {

        if(navigation.getParam('nombreChat')){
          titulo=navigation.getParam('nombreChat');
        }else{
            titulo='Group Chat';
        }
        return {
          title:titulo,
          headerTintColor: '#ff5a60', 
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
          }, headerRight: (<View>
            <Text >{' '}</Text>
            </View>),  
        };
      };
 


 

    constructor(props){
 
        super(props);
      
         this.state={
        
            mensajeA:'How many days do you think will take us to discover Paris?',
            mensaFinal1:'10 min ago',

            mensajeB:'OK, sounds great! I’ll start organising the flight tickets first. ✈️',
            mensaFinal2:'2 hours ago',

 
 
          }
      
      } 

    
         

  render() {
const users = this.props.navigation.getParam('datos');



var imagenes=users.map((item,i)=> 
   
   <View  key={i} style={{flex:1,width:'25%',alignItems: 'center',marginRight:10,
                         paddingTop:10,borderColor:'#e2e7ee',borderWidth:1  }}>
        <Image
          style={{width:30,height:30}}
          source={item.foto}
        />
        <Text style={{textAlign:'center'}}>
          {item.nombre}
        </Text>
     </View>
   )
    
//*************************************************************************** */
    return (
     <View style={{flex:1,marginHorizontal:'4%',marginTop:'3%'}}>

     <View style={{flex:2 ,paddingBottom:'5%'}}>

     
              <Text style={{
               
              color:'#312f3d',
              fontSize:17 ,
              fontWeight:'500'
              }}>Participants</Text>
     
             <View style={{marginTop:'2%'}}>
       
             <ScrollView horizontal showsHorizontalScrollIndicator={false} 
                      >
             <View style={{ marginBottom:10,padding:10,
                        flexDirection: 'row'}}>
                      {imagenes}
             </View>
             </ScrollView>
             </View>
        </View>  
            
             <View style={{flex:7,marginHorizontal:'4%',marginTop:'3%'}}>
               
               <ScrollView>
                           {/* --------------- BLOQUE MENSAJE A-------------------- */}
                    <View style={{flex:1,flexDirection:'row',marginBottom:10,
                                }}>

                        <View style={{flex:1,marginTop:5,marginRight:16}}>
 
                         <Image source={require(`../../assets/influencers/dos.png`)} 
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
    <View style={{flex:1,flexDirection:'row',marginBottom:10,
              }}>

       <Text style={{flex:2}}> {' '}</Text>
      <View style={{flex:8,flexDirection:'column',
                 paddingBottom:10,marginLeft: 16,}}>
      
      
       
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
{/* ----------------------------------------------------------- */}
               </ScrollView>

             </View>

        
        
       

         {/*  parte del footer */}
         <View style={{flex:1,flexDirection:'row'}}>

                  
       <View style={{flex:1,alignItems:'center',marginTop:10}}>
       <View style={{ width:45,height:45}}>
                       <Image source={require('../../assets/icons_genGMI/foto.png')} 
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
              />

        </View>

</View>

       </View>
        
      
         <View style={{flex:1,alignItems:'center',marginTop:10}}>
              <View style={{ width:40,height:40}}>
                       <Image source={require('../../assets/icons_genGMI/iconosChat.png')} 
                      style={{borderRadius:10 ,width:'100%',height:'100%'}}
                      />
              </View>
          </View>        
          
 
        
        
         </View>

        {/* cierre principal,abajo */}
     </View> 
    

    );
  }
 
}



const styles = StyleSheet.create({
  
   
   


});