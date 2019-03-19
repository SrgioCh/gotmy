import React, { Component } from 'react';
import { AppRegistry, Alert,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image,TouchableOpacity} from 'react-native';

import Button from 'react-native-button'; 

export default class RequestAcepted extends Component {


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
       

       mensaje1:'Private meeting',
       tiempo1:'2 day ago',
       Use1mensa:'Gerald Williams',
       mensaFinal1:'How many days do you think will take us...',
       check1:'flex',

       mensaje2:'Private meeting',
       tiempo2:'2 day ago',
       Use2mensa:'Micheal Romero',
       mensaFinal2:'How many days do you think will take us...',
       check2:'flex',

    //menus
    menu1:styles.menuelegido,
    menu2:styles.menunormal,
    menu3:styles.menunormal,

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
                       fontSize:17 ,letterSpacing:0.41,fontWeight:'500'
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
              <Image source={require('../../assets/icons_genGMI/requestDetail.png')} 
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
    <Text style={{fontSize:34,color:'#312f3d',marginVertical:8,
           fontWeight: 'bold',}}>Requests</Text>

</View>
  {/* ----------------MENU ----------------*/}
 
  <View style={{flexDirection:'row' ,alignItems:'center',justifyContent:'center'
              ,marginHorizontal:16,marginBottom:10}}>

                 <View style={[{flex:1,alignItems:'center',justifyContent:'center'}, this.state.menu2]}>
                 <TouchableOpacity
              onPress={() => this.props.navigation.navigate("requesPendin")}
                >
                 <Text  style={{ color:'#697181', fontSize:17,paddingVertical:14  }}>
                 Pending
                 </Text>
                 </TouchableOpacity>
               </View>



           <View style={[this.state.menu1,{flex:1,alignItems:'center',justifyContent:'center'}]}>
         
            <Text  style={{color:'#312f3d',fontSize:17,paddingVertical:14  }}>
           Accepted
          </Text>
        
         </View>


        <View style={[this.state.menu3,{flex:1,alignItems:'center',justifyContent:'center'}]}>
            <TouchableOpacity
                 onPress={() => this.props.navigation.navigate("requestRejected")}
             >
            <Text  style={{color:'#697181',marginLeft:10,fontSize:17,paddingVertical:14 }}>
             Rejected
              </Text>
         </TouchableOpacity>
      </View>

     </View>

 {/* ------------------------*/} 


   <ScrollView>
     
{/* ----------------------------------------------------------- */}

<View style={{flex:1,marginHorizontal:16,flexDirection:'row',
          marginTop:10,marginBottom:10,
              }}>

  <View style={{flex:2}}>
        <Image source={require(`../../assets/influencers/tres.png`)} 
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
                  display:this.state.chek1}}>
             <Image
                 source={require('../../assets/icons_genGMI/checkRequest.png')}
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
          
          <TouchableOpacity
            
            onPress={() => this.props.navigation.navigate("requestAcepted2")}
             > 
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
          </TouchableOpacity>
        </View>
        <View style={{}}>
            <Text style={{
                fontSize:12,
                color:'#677183'
            }}>{this.state.mensaFinal1}</Text>
       </View>

 </View>


</View>
{/* ----------------------------------------------------------- */}



<View style={{flex:1,marginHorizontal:16,flexDirection:'row',
          marginTop:10,marginBottom:10,
              }}>

  <View style={{flex:2}}>
        <Image source={require(`../../assets/influencers/influencer.png`)} 
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
                  display:this.state.chek2}}>
             <Image
                 source={require('../../assets/icons_genGMI/checkRequest.png')}
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

           <TouchableOpacity
            
            onPress={() => this.props.navigation.navigate("requestAcepted2")}
             > 
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
          </TouchableOpacity>
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
       
                <View  style={{flexDirection:'column'}}>
                     
                 <View style={{ width:25,height:25,marginLeft:'25%'}}>
                         <Image source={require('../../assets/pentaicon/influe/requestSelec.png')} 
                        style={{borderRadius:10 ,width:'100%',height:'100%'}}
                        />
                         </View>
                     <Text style={[styles.pentaIcon,
                         {opacity:this.state.opaciNo,marginTop:'3.5%'}]}>Requests</Text>
                </View>
         
       </View>
       
       <View style={{flex:1,alignItems:'center',paddingTop:'3%'}}>
        <TouchableOpacity
               onPress={() => this.props.navigation.navigate("mensa2")}
               >
                <View  style={{flexDirection:'column'}}>
                  
                <View style={{ width:25,height:25,marginLeft:'30%'}}>
                         <Image source={require('../../assets/pentaicon/influe/messages.png')} 
                        style={{borderRadius:10 ,width:'100%',height:'100%'}}
                        />
                         </View>
                     <Text style={[styles.pentaIcon,
                          {opacity:this.state.opaciSi,marginTop:'3.5%'}]}>Messages</Text>
                </View>
                </TouchableOpacity>
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
 

pentaIcon:{
  color:'white',
  fontSize:13,
  
},

//   MENUS
menuelegido:{
    borderBottomWidth:1,
    borderBottomColor:'#ff5a60',
  },
  
  menunormal:{
    borderBottomWidth:1,
    borderBottomColor:'#e1e3e6',
  },
  




});