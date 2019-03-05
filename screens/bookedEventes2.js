import React, { Component } from 'react';
import {Platform,Alert,TouchableOpacity,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image} from 'react-native';

import Button from 'react-native-button'; 

export default class BookedEvDos extends Component {

  static navigationOptions = {
    header: null ,
};

  constructor(props){

    super(props);
  
     this.state={
          tytexto:'',
          menu1:styles.menuelegido,
          menu2:styles.menunormal,
          menu3:styles.menunormal,
          colorA:'#312f3d',/*Para letra texto lo pongo aqui porque meter el color dentro del 
             view    que contiene al componente texto, no coge el color */
          colorB:'#697181',
     
      }
  
  }// fin de consttructor

  
 //  *** DECLARACION DE FUNCIONES **************

seleccion1=() =>{
   
  if(this.state.menu1!==styles.menuelegido){
      
     }
      
   } //  fin dela funcion

 
 



  render() {
    return (
      <View style={{flex: 1}}>
      <View  style={{flex: 1 ,marginTop:22,justifyContent:'center',
          borderBottomWidth: 0.8,borderBottomColor:'#f6f6f6'}}>
            
          <View style={{flexDirection:'row',paddingHorizontal:5}}>
              <View style={{flex:1 ,alignItems:'center',justifyContent:'center'}}>
              <Image source={require('../assets/reviews/kuskal.png')} 
                        style={{ width:40,height:40,
                                  borderRadius:10}}
                        />
              </View>
             <View style={{flex:4,flexDirection:'column',marginLeft:10,
                        marginRight:15}}>
                  <Text style={{
                       color:'#312f3d',
                       fontSize:17 ,letterSpacing:0.41
                  }}>Kurtis 'Kala' Lloyd</Text>
                  <Text style={{
                         color:'#677183',
                         fontSize:13 ,letterSpacing:0.08
                  }}>@kurtiskala</Text>
             </View>
             <View style={{flex:1,marginRight:5}}>
               
              </View>
              <View style={{flex:1}}>
                 <View style={{flex:1 ,alignItems:'center',justifyContent:'center'}}>
                    <Image source={require('../assets/icons_genGMI/calendarRojo.png')} 
                        style={{ width:30,height:30,
                                  borderRadius:10}}
                        />
                  </View>
              </View>
          </View>
  
      </View>
      <View style={{flex: 9}}>
   

 {/* ----------- TITULO ----------------*/} 

 <View style={{ marginHorizontal:16,paddingBottom:2  }}>
     
     <Text style={{
        color:'#312f3d',
           fontSize:34,
           fontWeight:'bold',
           letterSpacing:0.41,
   }}>Live Events</Text>         
</View>

        
  
 
 {/* ----------------MENU ----------------*/}
 
<View style={{flexDirection:'row' ,alignItems:'center',justifyContent:'center'
              ,marginHorizontal:16,marginVertical:10}}>

      <View style={[{flex:1,alignItems:'center',justifyContent:'center'}, this.state.menu2]}>
      <TouchableOpacity
            
            onPress={() => this.props.navigation.navigate("boked1")}
             >
       
         <Text  style={{  fontSize:17,paddingVertical:14  ,color:this.state.colorB }}>
         Upcoming
         </Text>
  </TouchableOpacity>
      </View>



      <View style={[this.state.menu1,{flex:1,alignItems:'center',justifyContent:'center'}]}>
         <Text  style={{marginLeft:7,fontSize:17,paddingVertical:14 ,color:this.state.colorA }}>
          Past Eventes
         </Text>

      </View>
      <View style={[this.state.menu3,{flex:1,alignItems:'center',justifyContent:'center'}]}>
        
      <TouchableOpacity
            
            onPress={() => this.props.navigation.navigate("boked3")}
             >
         <Text  style={{marginLeft:10,fontSize:17,paddingVertical:14 ,color:this.state.colorB }}>
          Favorites
         </Text>
      </TouchableOpacity>
      </View>

</View>

 {/* ------------------------*/}
 <ScrollView  >

  {/* ------------------lista paast----------------------------------------------*/}

  <View style={{flexDirection:'row',marginHorizontal:16,
               paddingTop:10,paddingBottom:15, 
                 borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
           <View>
                   
                        
               
                  <View  style={{flexDirection:'column'}}>
                           <Text style={{color:18 ,color:'#697181',
                                     paddingBottom:5}}>Monday, 18/12/2018 </Text>
                           <Text style={styles.textTren}>Teaching Machamp THE  </Text>
                           <Text style={styles.textTren} >BEST MOVE IN THE GAME </Text>
                           <Text style={{color:'#ff5a60',fontSize:16
                                 ,paddingTop:5}}>Nature, Outdoors & Oets</Text>
                  </View>
         </View>        
        <View >

            <View style={{ width:110,height:84,marginLeft:15,marginTop:10}}>
                <Image source={require('../assets/influencers/MandyJTV/2.png')} 
                  style={{borderRadius:10 ,width:'100%',height:'100%'}}
                 />
             </View>
             <Text style={styles.cajaTransparente}></Text>
         <Text
          style={styles.textoTransparente}>08:30</Text>
        </View>
          
 </View>



  {/* ---------------------------------------------------------*/}

  <View style={{flexDirection:'row',marginHorizontal:16,
               paddingTop:10,paddingBottom:15, 
                 borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
           <View>
                   
                        
               
                  <View  style={{flexDirection:'column'}}>
                           <Text style={{color:18 ,color:'#697181',
                                     paddingBottom:5}}>Monday, 18/12/2018 </Text>
                           <Text style={styles.textTren}>Teaching Machamp THE  </Text>
                           <Text style={styles.textTren} >BEST MOVE IN THE GAME </Text>
                           <Text style={{color:'#ff5a60',fontSize:16
                                 ,paddingTop:5}}>Instagram Influencer</Text>
                  </View>
         </View>        
        <View >

            <View style={{ width:110,height:84,marginLeft:15,marginTop:10}}>
                <Image source={require('../assets/influencers/MandyJTV/mandy3.png')} 
                  style={{borderRadius:10 ,width:'100%',height:'100%'}}
                 />
             </View>
             <Text style={styles.cajaTransparente}></Text>
      <Text style={styles.textoTransparente}>06:20</Text>
        </View>
          
 </View>
 
  {/* --------------------------------------------------------*/}

  <View style={{flexDirection:'row',marginHorizontal:16,
                 paddingTop:10,paddingBottom:15, 
                 borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
           <View>
                   
                        
               
                  <View  style={{flexDirection:'column'}}>
                           <Text style={{color:18 ,color:'#697181',
                                     paddingBottom:5}}>Monday, 18/12/2018 </Text>
                           <Text style={styles.textTren}>Teaching Machamp THE  </Text>
                           <Text style={styles.textTren} >BEST MOVE IN THE GAME </Text>
                           <Text style={{color:'#ff5a60',fontSize:16
                                 ,paddingTop:5}}>Nature, Outdoors & Oets</Text>
                  </View>
         </View>        
        <View >

            <View style={{ width:110,height:84,marginLeft:15,marginTop:10}}>
                <Image source={require('../assets/influencers/KalaTempo/kala3.png')} 
                  style={{borderRadius:10 ,width:'100%',height:'100%'}}
                 />
             </View>
             <Text style={styles.cajaTransparente}></Text>
      <Text style={styles.textoTransparente}>05:10</Text>
        </View>
          
 </View>

 
 <View style={{flexDirection:'row',marginHorizontal:16,
               paddingTop:10,paddingBottom:15, 
                 borderBottomColor:'#e1e3e6',borderBottomWidth:1}}>
           <View>
                   
                        
               
                  <View  style={{flexDirection:'column'}}>
                           <Text style={{color:18 ,color:'#697181',
                                     paddingBottom:5}}>Monday, 18/12/2018 </Text>
                           <Text style={styles.textTren}>Teaching Machamp THE  </Text>
                           <Text style={styles.textTren} >BEST MOVE IN THE GAME </Text>
                           <Text style={{color:'#ff5a60',fontSize:16
                                 ,paddingTop:5}}>Nature, Outdoors & Oets</Text>
                  </View>
         </View>        
        <View >

            <View style={{ width:110,height:84,marginLeft:15,marginTop:10}}>
                <Image source={require('../assets/influencers/MandyJTV/2.png')} 
                  style={{borderRadius:10 ,width:'100%',height:'100%'}}
                 />
             </View>
             <Text style={styles.cajaTransparente}></Text>
             <Text style={styles.textoTransparente}>03:10</Text>
        </View>
          
 </View>
{/* ----------------------------------------*/}
 </ScrollView>

</View>
    {/*   penta icon o  tabs */}
    <View  style={{flex: 1,flexDirection:'row', backgroundColor:'#312f3d'}}>
              <View style={{flex:1,padding:2}}>
              <TouchableOpacity
            
            onPress={() => this.props.navigation.navigate("discover")}
             >
                   <View style={{flexDirection:'column',alignItems:'center'}} >
                      <View style={{ width:30,height:30,marginLeft:'15%'}}>
                       <Image source={require('../assets/pentaicon/discoverNormal.png')} 
                        style={{borderRadius:10 ,width:'100%',height:'100%'}}
                        />
                      </View>
                     <Text style={styles.pentaIcon}>Discover</Text>
                </View>
                </TouchableOpacity>
          </View>
  
      
        <View style={{flex:1,alignItems:'center',padding:2}}>
        <TouchableOpacity
              
               onPress={() => this.props.navigation.navigate("search")}
                >
                 <View  style={{flexDirection:'column'}}>
                       
                         <View style={{ width:30,height:30,marginLeft:'10%'}}>
                         <Image source={require('../assets/pentaicon/search.jpg')} 
                        style={{borderRadius:10 ,width:'100%',height:'100%'}}
                        />
                         </View>
                     <Text style={styles.pentaIcon}>Search</Text>
                </View>
            </TouchableOpacity>
         </View>
          
        
        <View style={{flex:1,alignItems:'center',paddingBottom:2,
                       paddingHorizontal:2,paddingTop:5}}>
        <TouchableOpacity
              
              onPress={() => this.props.navigation.navigate("boked1")}
               >
                <View  style={{flexDirection:'column'}}>
                     
                     <View style={{ width:25,height:25,marginLeft:'25%'}}>
                         <Image source={require('../assets/pentaicon/eventsRojo.png')} 
                        style={{borderRadius:10 ,width:'100%',height:'100%'}}
                        />
                         </View>
                     <Text style={styles.pentaIcon}>Live Events</Text>
                </View>
              </TouchableOpacity>
       </View>
       
        <View style={{flex:1,alignItems:'center',padding:2}}>
        <TouchableOpacity
             onPress={() => this.props.navigation.navigate("mensa1")}
              >
                <View  style={{flexDirection:'column'}}>
                  
                      <View style={{ width:30,height:30,marginLeft:'20%'}}>
                         <Image source={require('../assets/pentaicon/message.jpg')} 
                        style={{borderRadius:10 ,width:'100%',height:'100%'}}
                        />
                         </View>
                     <Text style={styles.pentaIcon}>Messages</Text>
                </View>
                </TouchableOpacity>
        </View>
   
                       
       
        <View style={{flex:1,alignItems:'center',padding:2}}>
        <TouchableOpacity
             onPress={() => this.props.navigation.navigate("ActiOne")}
              >
                 <View style={{flexDirection:'column'}}>
                 <View style={{ width:30,height:30,marginLeft:'11%'}}>
                         <Image source={require('../assets/pentaicon/activity.jpg')} 
                        style={{borderRadius:10 ,width:'100%',height:'100%'}}
                        />
                         </View>
                     <Text style={styles.pentaIcon}>Activity</Text>
                </View>
                </TouchableOpacity>
          </View >
      
       
         </View>
  
       </View>

     
    );
  }
 
}





const styles = StyleSheet.create({
 
 
 //   MENUS
 menuelegido:{
   borderBottomWidth:1,
   borderBottomColor:'#ff5a60',
   
 },
 
 menunormal:{
   borderBottomWidth:1,
   borderBottomColor:'#e1e3e6',
 
 },
 
   //TRENDING   **************
   estrellasTrending:{
    padding:3,
    
    flexDirection:'row',

  },
  textTren:{
   color:'#312f3d',
   fontSize:17,
  },
 
 //TABS PENTA ICON

 pentaIcon:{
  color:'white',
  fontSize:13,
},
cajaTransparente:{
  position:'absolute',
  fontWeight:'bold',
backgroundColor:'#312f3d',
  opacity:0.8,
    paddingHorizontal:25,
    paddingVertical:Platform.OS === 'ios' ? 5:7,
  bottom:Platform.OS === 'ios' ? 5:5,
  right:4,
zIndex:4,
borderRadius:Platform.OS === 'ios' ? 50:10,
borderBottomWidth:1,
},
textoTransparente:{
  position:'absolute',
  zIndex:6,
bottom:Platform.OS === 'ios' ? 8:8,

right:10,
 color:'white',
}


});