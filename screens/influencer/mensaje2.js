import React, { Component } from 'react';
import { AppRegistry, Alert,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

import Button from 'react-native-button'; 

export default class Mensaje2 extends Component {


  static navigationOptions = {
    header: null ,
};

  constructor(props){

    super(props);
  
     this.state={

      influencer:'Kala | Tempo',
      fotoInflu:'influencer.png',
      correoInflu:'@kalatempo',

       opaciNo:null,
       opaciSi:0.5,


       //mensajes
       

       mensaje2:'Just Cause 4 FINALLY ',
       tiempo2:'2 hours ago',
       Use2mensa:'Charlotte Roberson',
       mensaFinal2:'How many days do you think will take us.',
       reloj2:'none',

      
       tiempo3:'Yesterday, 12:00',
       Use3mensa:'Elmer Santos',
       mensaFinal3:'How many days do you think will take us.',
      

      }
  
  }// fin de consttructor

  render() {

    return (

      <View style={{flex: 1}}>
      <View  style={{flex: 1 ,marginTop:22,justifyContent:'center',
          borderBottomWidth: 0.8,borderBottomColor:'#f6f6f6'}}>
            
          <View style={{flexDirection:'row',paddingHorizontal:16}}>
              <View style={{flex:1 ,alignItems:'center',justifyContent:'center'}}>
              <Image source={require('../../assets/influencers/influencer.png')} 
                        style={{ width:40,height:40,
                                  borderRadius:10}}
                        />
              </View>
             <View style={{flex:3,flexDirection:'column',marginLeft:10,
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
             <View style={{flex:1,marginRight:85}}>
                  <Image source={require('../../assets/influencers/KalaTempo/mascotaKala.png')} 
                        style={{ width:20,height:20 ,marginLeft:-15,marginTop:2}}
                        />
              </View>
              <View style={{flex:1,alignItems:'flex-end'}}>
              <TouchableOpacity
             onPress={() => this.props.navigation.navigate("viewerChat")}
              >
              <Image source={require('../../assets/icons_genGMI/mensajex.png')} 
                        style={{ width:40,height:40,
                                  borderRadius:10}}
                        />
                 </TouchableOpacity>
              </View>
          </View>
  
      </View>
      <View style={{flex: 9}}>
     
{/* TITULO */}  

<View style={{marginHorizontal:16}}>
    <Text style={{fontSize:34,color:'#312f3d',marginVertical:15,
           fontWeight: 'bold',}}>Messages</Text>

</View>

{/* BUSCADOR*/}
 <View style={{ marginHorizontal:16,marginBottom:20, paddingVertical:5,flexDirection:'row' }}>
      <View style={{flexDirection:'row',flex:5,backgroundColor:'#f6f6f6',
              alignItems:'center',borderRadius:10}}>

                 <View style={{ width:30,height:30}}>
                     <Image source={require('../../assets/buscador/lupa.jpg')} 
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


   <ScrollView>
     
{/* ----------------------------------------------------------- */}

<View style={{flex:1,marginHorizontal:16,flexDirection:'row',marginBottom:10,
              }}>

  <View style={{flex:2}}>
        <Image source={require(`../../assets/influencers/dos.png`)} 
                        style={{ width:50,height:50,
                                  borderRadius:10}}
                        />
  </View>

  <View style={{flex:8,flexDirection:'column',
                 paddingBottom:10,borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
        <View  style={{flexDirection:'row'}}>



         <View style={{
                  width:15,
                  height:15, 
                  marginRight:5,
                  marginTop:3,
                  display:this.state.reloj2}}>
             <Image
                 source={require('../../assets/icons_genGMI/relojMesage.png')}
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
              source={require('../../assets/icons_genGMI/ArrowGrey.png')}
              style={{
                  width:25,
                  height:25,
                  flex:1
              }}
            />

          </View>
          
        </View>
        <View style={{}}>
            <Text style={{
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

  <View style={{flex:2}}>
        <Image source={require(`../../assets/influencers/tres.png`)} 
                        style={{ width:50,height:50,
                                  borderRadius:10}}
                        />
  </View>

  <View style={{flex:8,flexDirection:'column',
                 paddingBottom:10,borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
       
        <View style={{flexDirection:'row',paddingVertical:3}}>
           <Text style={{flex:6,fontSize:14,
                      color:'#312f3d'}}>{this.state.Use3mensa}</Text>
          
          <Text style={{flex:3 ,fontSize:12,right:20,
                color:'#677183'}}>{this.state.tiempo3}</Text> 

          <View style={{position:'absolute',top:15,left:'91%'}}>
           <Image
              source={require('../../assets/icons_genGMI/ArrowGrey.png')}
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

<View style={{flex:1,marginHorizontal:16,flexDirection:'row',marginBottom:10,
              }}>

  <View style={{flex:2}}>
        <Image source={require(`../../assets/influencers/dos.png`)} 
                        style={{ width:50,height:50,
                                  borderRadius:10}}
                        />
  </View>

  <View style={{flex:8,flexDirection:'column',
                 paddingBottom:10,borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
        <View  style={{flexDirection:'row'}}>



         <View style={{
                  width:15,
                  height:15, 
                  marginRight:5,
                  marginTop:3,
                  display:this.state.reloj2}}>
             <Image
                 source={require('../../assets/icons_genGMI/relojMesage.png')}
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
              source={require('../../assets/icons_genGMI/ArrowGrey.png')}
              style={{
                  width:25,
                  height:25,
                  flex:1
              }}
            />
        
          </View>
          
        </View>
        <View style={{}}>
            <Text style={{
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

  <View style={{flex:2}}>
        <Image source={require(`../../assets/influencers/tres.png`)} 
                        style={{ width:50,height:50,
                                  borderRadius:10}}
                        />
  </View>

  <View style={{flex:8,flexDirection:'column',
                 paddingBottom:10,borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
       
        <View style={{flexDirection:'row',paddingVertical:3}}>
           <Text style={{flex:6,fontSize:14,
                      color:'#312f3d'}}>{this.state.Use3mensa}</Text>
          
          <Text style={{flex:3 ,fontSize:12,right:20,
                color:'#677183'}}>{this.state.tiempo3}</Text> 

          <View style={{position:'absolute',top:15,left:'91%'}}>
           <Image
              source={require('../../assets/icons_genGMI/ArrowGrey.png')}
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
  
      {/*   penta icon o  tabs */}
  <View  style={{flex: 1,flexDirection:'row', backgroundColor:'#ff5a60'}}>
         <View style={{flex:1,paddingTop:'3%'}}>
              <TouchableOpacity
             onPress={() => this.props.navigation.navigate("discover")}
             >
                   <View style={{flexDirection:'column',alignItems:'center'}} >
                      <View style={{ width:25,height:25,marginLeft:'15%'}}>
                       <Image source={require('../../assets/pentaicon/influe/events.png')} 
                        style={{borderRadius:10 ,width:'100%',height:'100%'}}
                        />
                      </View>
                     <Text style={[styles.pentaIcon,
                           {opacity:this.state.opaciSi,marginTop:'3.5%'}]}>My Events</Text>
                     
                </View>
                </TouchableOpacity>
          </View>
  
      
        <View style={{flex:1,alignItems:'center',paddingTop:'3%'}}>
        <TouchableOpacity
              
               onPress={() => this.props.navigation.navigate("search")}
                >
                 <View  style={{flexDirection:'column'}}>
                       
                 <View style={{ width:25,height:25,marginLeft:'25%'}}>
                         <Image source={require('../../assets/pentaicon/influe/stats.png')} 
                        style={{borderRadius:10 ,width:'100%',height:'100%'}}
                        />
                         </View>
                     <Text style={[styles.pentaIcon,
                           {opacity:this.state.opaciSi,marginTop:'3.5%'}]}>My Stats</Text>
                </View>
            </TouchableOpacity>
         </View>
          
        
        <View style={{flex:1,alignItems:'center',paddingTop:'3%'}}>
        <TouchableOpacity
               onPress={() => this.props.navigation.navigate("requesPendin")}
               >
                <View  style={{flexDirection:'column'}}>
                     
                     <View style={{ width:25,height:25,marginLeft:'25%'}}>
                         <Image source={require('../../assets/pentaicon/influe/request.png')} 
                        style={{borderRadius:10 ,width:'100%',height:'100%'}}
                        />
                         </View>
                     <Text style={[styles.pentaIcon,
                           {opacity:this.state.opaciSi,marginTop:'3.5%'}]}>Requests</Text>
                </View>
              </TouchableOpacity>
       </View>
       
        <View style={{flex:1,alignItems:'center',paddingTop:'3%'}}>
                <View  style={{flexDirection:'column'}}>
                  
                   <View style={{ width:25,height:25,marginLeft:'30%'}}>
                         <Image source={require('../../assets/pentaicon/influe/mesageSelec.png')} 
                        style={{borderRadius:10 ,width:'100%',height:'100%'}}
                        />
                         </View>
                     <Text style={[styles.pentaIcon,
                           {opacity:this.state.opaciNo,marginTop:'3.5%'}]}>Messages</Text>
                </View>
        </View>
   
                       
       
        <View style={{flex:1,alignItems:'center',paddingTop:'3.9%'}}>
        <TouchableOpacity
               onPress={() => this.props.navigation.navigate("ActiToo")}
               >
                 <View style={{flexDirection:'column'}}>
                 <View style={{ width:22,height:22,marginLeft:'30%'}}>
                         <Image source={require('../../assets/pentaicon/influe/activity.png')} 
                        style={{borderRadius:10 ,width:'100%',height:'100%'}}
                        />
                         </View>
                     <Text style={[styles.pentaIcon,
                           {opacity:this.state.opaciSi,marginTop:'4%'}]}>Activity</Text>
                </View>
                </TouchableOpacity>
          </View >
      
       
         </View>
  
       </View>


     
    );
  }
 
}





const styles = StyleSheet.create({
 
//en lista influencer
estrellasTrending:{
  paddingTop:7,
  marginLeft:-6,
  flexDirection:'row',

},
socialBotonRojo:{
  backgroundColor: '#ff5a60',
  alignItems:'center',
  borderRadius:27,
  width:'80%',
  paddingVertical:5,
  paddingHorizontal:6,

  
},
socialBotonBlanco:{
  backgroundColor: 'white',
  alignItems:'center',
  borderRadius:27,
  width:'80%',
  paddingVertical:5,
  paddingHorizontal:5,
  borderWidth:1,
  borderColor: '#312f3d',
},
pentaIcon:{
  color:'white',
  fontSize:13,
  
},

});