import React, { Component } from 'react';
import { AppRegistry, Alert,
  View,Text ,TextInput,TouchableWithoutFeedback,Keyboard,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class Mensaje1 extends Component {


  static navigationOptions = {
    header: null ,
};

  constructor(props){

    super(props);
  
     this.state={
        influencer:`Kurtis 'Kala' Lloyd`,
        fotoInflu:'uno.png',
       correoInflu:'@kalatempo',


       mensaje1:'Request Private Meeting',
       tiempo1:'2 day ago',
       Use1mensa:'MandyJTV',
       mensaFinal1:'Surprise a friend',
       reloj1:'flex',

       mensaje2:'Just Cause 4 FINALLY ',
       tiempo2:'2 hours ago',
       Use2mensa:'Charlotte Roberson',
       mensaFinal2:'How many days do you think will take us..desaparece fuera..',
       reloj2:'none',

      
       tiempo3:'Yesterday, 12:00',
       Use3mensa:'Sophia Lindsey',
       mensaFinal3:'How many days do you think will take us...',
      


      }
  
  }// fin de consttructor

  render() {

  
   /*     const  mensaje1={
                foto:'uno.png'
               }

  alert(mensaje1.foto);*/

 

    return (

   <View style={{flex: 1}}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View  style={{flex:0.9 ,marginTop:22,justifyContent:'center',
          borderBottomWidth: 0.8,borderBottomColor:'#f6f6f6'}}>
            
          <View style={{flexDirection:'row',paddingHorizontal:'4%'}}>
              <View style={{flex:1 ,justifyContent:'center'}}>
              <Image source={require('../assets/reviews/kuskal.png')} 
                        style={{ width:40,height:40,
                                  borderRadius:10}}
                        />
              </View>
             <View style={{flex:4,flexDirection:'column',
                        marginRight:15}}>
                  <Text style={{
                       color:'#312f3d',
                       fontSize:17 ,letterSpacing:0.41
                  }}>{this.state.influencer}</Text>
                  <Text style={{
                         color:'#677183',
                         fontSize:13 ,letterSpacing:0.08
                  }}>{this.state.correoInflu}</Text>
             </View>
             <View style={{flex:1,marginRight:5}}>
              </View>
             

              <TouchableOpacity
              style={{flex:1,alignItems:'flex-end'}}
             onPress={() => this.props.navigation.navigate("addParticip1")}
              >
              <Image source={require('../assets/icons_genGMI/mensajex.png')} 
                        style={{ width:35,height:35,
                                  borderRadius:10}}
                        />
                 </TouchableOpacity>
              
          </View>
  
      </View>
      </TouchableWithoutFeedback>
    <View style={{flex: 2 }}>
      
{/* TITULO */}  
<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
<View style={{marginHorizontal:16}}>
    <Text style={{fontSize:34,color:'#312f3d',marginVertical:hp('2%'),
           fontWeight: 'bold',}}>Messages</Text>

</View>
</TouchableWithoutFeedback>
{/* BUSCADOR*/}
 <View style={{ marginHorizontal:16,marginBottom:20, paddingVertical:5,flexDirection:'row' }}>
      <View style={{flexDirection:'row',flex:5,backgroundColor:'#f6f6f6',
              alignItems:'center',borderRadius:10}}>

                 <View style={{ width:30,height:30}}>
                     <Image source={require('../assets/buscador/lupa.jpg')} 
                      style={{borderRadius:10 ,width:'100%',height:'100%'}}
                      />
                 </View>
                 <TextInput
                    style={{
                    
                       height:42,
                       width:'90%',
                     
                       borderRadius:10,
                    
                    } }
                    placeholder="Search......"
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

{/* ------------------------------ fin de buscadorr------------*/}

</View>

<View style={{flex:6}}>

<ScrollView  >
{/* --------------- BLOQUE MENSAJE -3 PARTES-------------------- */}
  <TouchableOpacity
              onPress={() => this.props.navigation.navigate("requestPri4B")}
                               >
<View style={{flex:1,marginHorizontal:16,flexDirection:'row',marginBottom:10,
              }}>

  <View style={{flex:1.5}}>
    
        <Image source={require(`../assets/influencers/uno.png`)} 
                        style={{ width:50,height:50,
                                  borderRadius:10}}
                        />
  </View>

  <View style={{flex:7.5,flexDirection:'column',
                 paddingBottom:10,borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
        <View  style={{flexDirection:'row'}}>



         <View style={{
                  width:15,
                  height:15, 
                  marginRight:5,
                  marginTop:3,
                  display:this.state.reloj1}}>
             <Image
                 source={require('../assets/icons_genGMI/relojMesage.png')}
                  style={{
                  width:'100%',
                  height:'100%',
                 }}
               />
         </View>
            <Text style={{flex:6,fontSize:14,
                      color:'#312f3d',fontWeight:'500'
            
                           }}>{this.state.mensaje1}</Text> 
            <Text style={{flex:2 ,fontSize:12,marginRight:'7%',
                color:'#677183'}}>{this.state.tiempo1}</Text> 
        </View>
        <View style={{flexDirection:'row',paddingVertical:3}}>
           <Text style={{flex:7,fontSize:14,
                      color:'#312f3d'}}>{this.state.Use1mensa}</Text>
          
          <View style={{alignItems:'flex-end' }}>
           <Image
              source={require('../assets/icons_genGMI/ArrowGrey.png')}
              style={{
                  width:25,
                  height:25,
                  marginLeft:10
              }}
            />

          </View>
          
        </View>
        <View style={{}}>
            <Text style={{
                fontSize:12,
                color:'#677183'
            }}>{this.state.mensaFinal1}</Text>
       </View>

 </View>
</View>
</TouchableOpacity>
{/* ----------------------------------------------------------- */}


<View style={{flex:1,marginHorizontal:16,flexDirection:'row',marginBottom:10,
               }}>


  <View style={{flex:1.5}}>
        <Image source={require(`../assets/influencers/influencer.png`)} 
                        style={{ width:50,height:50,
                                  borderRadius:10}}
                        />
  </View>

  <View style={{flex:7.5,flexDirection:'column',
                 paddingBottom:10,borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
        <View  style={{flexDirection:'row'}}>



         <View style={{
                  width:15,
                  height:15, 
                  marginRight:5,
                  marginTop:3,
                  display:this.state.reloj2}}>
             <Image
                 source={require('../assets/icons_genGMI/relojMesage.png')}
                  style={{
                  width:'100%',
                  height:'100%',
                 }}
               />
         </View>
            <Text style={{flex:6,fontSize:14,
                      color:'#312f3d',fontWeight:'500'
            
                           }}>{this.state.mensaje2}</Text> 
            <Text style={{flex:2 ,fontSize:12,marginRight:'7%',
                color:'#677183'}}>{this.state.tiempo2}</Text> 
        </View>
        <View style={{flexDirection:'row',paddingVertical:3}}>
           <Text style={{flex:7,fontSize:14,
                      color:'#312f3d'}}>{this.state.Use2mensa}</Text>
          
          <View style={{alignItems:'flex-end'}}>
           <Image
              source={require('../assets/icons_genGMI/ArrowGrey.png')}
              style={{
                  width:25,
                  height:25,
                  flex:1
              }}
            />

          </View>
          
        </View>

        <View style={{}}>
            <Text numberOfLines={1}  style={{
                fontSize:12,
                color:'#677183'
            }}>{this.state.mensaFinal2}</Text>
       </View>

 </View>

</View>

{/* ----------------------------------------------------------- */}



{/* --------------- BLOQUE MENSAJE 2 PARTES-------------------- */}
<View style={{flex:1,marginHorizontal:16,flexDirection:'row',marginBottom:10,
              }}>

  <View style={{flex:1.5}}>
        <Image source={require(`../assets/influencers/dos.png`)} 
                        style={{ width:50,height:50,
                                  borderRadius:10}}
                        />
  </View>

  <View style={{flex:7.5,flexDirection:'column',
                 paddingBottom:10,borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
       
        <View style={{flexDirection:'row',paddingVertical:3}}>
           <Text style={{flex:5,fontSize:14,
                      color:'#312f3d'}}>{this.state.Use3mensa}</Text>
          
          <Text style={{flex:4 ,fontSize:12,
                color:'#677183'}}>{this.state.tiempo3}</Text> 


      
          <View style={{marginTop:10}}>
          
          <TouchableOpacity
              onPress={() => this.props.navigation.navigate("viewerChat")}
                               >
       
           <Image
              source={require('../assets/icons_genGMI/ArrowGrey.png')}
              style={{
                  width:25,
                  height:25,
             
              }}
            />
           </TouchableOpacity>
         
          </View>
         
        </View>
        <View style={{}}>
            <Text numberOfLines={1} style={{
                fontSize:12,
                color:'#677183',
                 marginBottom:5
            }}>{this.state.mensaFinal3}</Text>
       </View>

 </View>


</View>
{/* ----------------------------------------------------------- */}

<View style={{flex:1,marginHorizontal:16,flexDirection:'row',marginBottom:10,
              }}>

  <View style={{flex:1.5}}>
        <Image source={require(`../assets/influencers/uno.png`)} 
                        style={{ width:50,height:50,
                                  borderRadius:10}}
                        />
  </View>

  <View style={{flex:7.5,flexDirection:'column',
                 paddingBottom:10,borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
        <View  style={{flexDirection:'row'}}>



         <View style={{
                  width:15,
                  height:15, 
                  marginRight:5,
                  marginTop:3,
                  display:this.state.reloj2}}>
             <Image
                 source={require('../assets/icons_genGMI/relojMesage.png')}
                  style={{
                  width:'100%',
                  height:'100%',
                 }}
               />
         </View>
            <Text style={{flex:6,fontSize:14,
                      color:'#312f3d',fontWeight:'500'
            
                           }}>{this.state.mensaje2}</Text> 
            <Text style={{flex:2 ,fontSize:12,marginRight:'7%',
                color:'#677183'}}>{this.state.tiempo2}</Text> 
        </View>
        <View style={{flexDirection:'row',paddingVertical:3}}>
           <Text style={{flex:7,fontSize:14,
                      color:'#312f3d'}}>{this.state.Use2mensa}</Text>
          
          <View style={{alignItems:'flex-end'}}>
           <Image
              source={require('../assets/icons_genGMI/ArrowGrey.png')}
              style={{
                  width:25,
                  height:25,
                  flex:1
              }}
            />

          </View>
          
        </View>
        <View style={{}}>
            <Text numberOfLines={1} style={{
                fontSize:12,
                color:'#677183',
            
            }}>{this.state.mensaFinal2}</Text>
       </View>

 </View>


</View>
{/* ----------------------------------------------------------- */}



{/* --------------- BLOQUE MENSAJE 2 PARTES-------------------- */}
<View style={{flex:1,marginHorizontal:16,flexDirection:'row',marginBottom:10,
              }}>

  <View style={{flex:1.5}}>
        <Image source={require(`../assets/influencers/tres.png`)} 
                        style={{ width:50,height:50,
                                  borderRadius:10}}
                        />
  </View>

  <View style={{flex:7.5,flexDirection:'column',
                 paddingBottom:10,borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
       
        <View style={{flexDirection:'row',paddingVertical:3}}>
           <Text style={{flex:6,fontSize:14,
                      color:'#312f3d'}}>{this.state.Use3mensa}</Text>
          
          <Text style={{flex:3 ,fontSize:12,right:20,
                color:'#677183'}}>{this.state.tiempo3}</Text> 

          <View style={{position:'absolute',top:15,left:'91%'}}>
           <Image
              source={require('../assets/icons_genGMI/ArrowGrey.png')}
              style={{
                  width:25,
                  height:25,
             
              }}
            />

          </View>
          
        </View>
        <View style={{}}>
            <Text style={{
                fontSize:12,
                color:'#677183'
            }}>{this.state.mensaFinal3}</Text>
       </View>

 </View>


</View>
{/* ----------------------------------------------------------- */}

 

   
 
    </ScrollView>
    
    </View>
  
       </View>


     
    );
  }
 
}





const styles = StyleSheet.create({
 
pentaIcon:{
  color:'white',
  fontSize:13,
},

});