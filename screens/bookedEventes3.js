import React, { Component } from 'react';
import { Platform,Alert,TouchableOpacity,
  View,Text ,TextInput,
  StyleSheet,ScrollView,
  Image} from 'react-native';

import Button from 'react-native-button'; 

export default class BookedEvTres extends Component {

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
            
          <View style={{flexDirection:'row',paddingHorizontal:'4%'}}>
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

      <View style={[{flex:1,alignItems:'center',justifyContent:'center'}, this.state.menu3]}>
      <TouchableOpacity
            
            onPress={() => this.props.navigation.navigate("boked1")}
             >
         <Text  style={{ color:'#312f3d', fontSize:17,paddingVertical:14 ,color:this.state.colorB }}>
         Upcoming
         </Text>
  </TouchableOpacity>
      </View>

      <View style={[this.state.menu2,{flex:1,alignItems:'center',justifyContent:'center'}]}>
      <TouchableOpacity
            
            onPress={() => this.props.navigation.navigate("boked2")}
             >
         
         <Text  style={{color:'#697181',marginLeft:7,fontSize:17,paddingVertical:14,color:this.state.colorB  }}>
          Past Eventes
         </Text>
  </TouchableOpacity>
      </View>
      <View style={[this.state.menu1,{flex:1,alignItems:'center',justifyContent:'center'}]}>
         <Text  style={{color:'#697181',marginLeft:10,fontSize:17,paddingVertical:14,color:this.state.colorA }}>
          Favorites
         </Text>

      </View>

</View>

 {/* ------------------------*/}

 <ScrollView >

            
{/* -----------------BICARDVIEW--------------*/}  
<TouchableOpacity 
            onPress = {() => this.props.navigation.navigate("liveEventDetail2") } >     
 <View style={{marginHorizontal:16,backgroundColor:'#f6f6f6',paddingBottom:7,
                 marginVertical:10, borderRadius:10}}>
     
             <View style={{borderRadius:10,
               width:Platform.OS === 'ios' ? 339:328,
              height:200,padding:7}} >
                  <Image source={require('../assets/influencers/comida.jpg')} 
                  style={{ zIndex:1,borderRadius:10 ,width:'100%',height:'100%'}}
                 />
              </View>  


<View>
<View style={{flexDirection:'row',
            marginHorizontal:16,marginVertical:14,
             position:'absolute',bottom:0,zIndex:4}}>

     <View style={{flex:2}}>

                      <Image source={require('../assets/influencers/influencer.png')} 
                           style={{ width:50,height:50,borderRadius:10}}
                          />
                    

      </View>

      <View style={{flex:3,flexDirection:'column'}}>
     
          <View>
          <Text style={{fontSize:17,color:'white',marginLeft:-6,marginRight:-15,marginTop:4}}>Mabel Spencer</Text>
         </View>
      
     
             <View  style={styles.estrellasTrendingNuevo}>
                               <Image source={require('../assets/Red.png')} 
                               style={{ width:11,height:11,}}
                               />
                              <Image source={require('../assets/Red.png')} 
                             style={{ width:11,height:11,marginLeft:2}}
                             />
                            <Image source={require('../assets/Red.png')} 
                               style={{ width:11,height:11,marginLeft:2}}
                              />
                           <Image source={require('../assets/Red.png')} 
                            style={{ width:11,height:11,marginLeft:2}}
                             />
                            <Image source={require('../assets/Grey.png')} 
                                style={{ width:11,height:11,marginLeft:2}}
                            />
                        </View>
     
  
 </View>


<View style={{flex:4,alignItems:'flex-end',  justifyContent:'center'}}>
      <View style={styles.socialBotonRojo}>
            <Text style={{color:'white'}}>
              @ 34
            </Text>
      </View>
      <View style={styles.socialBotonRojo}>
            <Text style={{color:'white'}}>
              Only 2 tickets left
            </Text>
      </View>
  
    </View>

  </View>
  <Text style={styles.transparenteNuevo}></Text>
 </View>

 {/* cajita fecha*/}
 <View style={{borderRadius:10,marginTop:-9,
                 marginLeft:  Platform.OS === 'ios' ? 6:8,
                 marginRight:  Platform.OS === 'ios' ? 11:8,
                 flexDirection:'row',
                 backgroundColor:'#f6f6f6'}}>
                   <View style={{ flex:1, 
                           backgroundColor:'white',flexDirection:'column',
                            paddingTop:20,alignItems:'center'
               }}>
                       <Text style={{ fontSize:28,fontWeight:'bold'}}>
                       21</Text>
                       <Text style={{color:'red'}}>DEC</Text>
                       </View>
                    <View style={{ flex:6, flexDirection:'column',backgroundColor:'white',
                           paddingTop:20}}>
                      <Text style={{ fontSize: Platform.OS === 'ios' ? 15:17,
                        fontWeight:'bold',color:'#312f3d'}}>
                       My FIRST Godr of War experience !</Text>
                       <Text style={{ fontSize:  Platform.OS === 'ios' ? 14:16,
                        fontWeight:'bold',color:'#677183'}} >Fashion</Text>
                      <Text style={{ fontSize:  Platform.OS === 'ios' ? 11:13 ,
                      fontWeight:'bold',color:'#677183',
                              paddingVertical:4}}> *  Live from New York, at 18:30 pm</Text>
                     </View>
   </View>  
</View>  
</TouchableOpacity>
 {/* -------------------------------------------------------------------*/}
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
          
        
        <View style={{flex:1,alignItems:'center',paddingTop:7,paddingHorizontal:2}}>
        <TouchableOpacity
              
              onPress={() => this.props.navigation.navigate("boked1")}
               >
                <View  style={{flexDirection:'column'}}>
                     
                     <View style={{ width:25,height:25,marginLeft:'30%'}}>
                         <Image source={require('../assets/pentaicon/eventsRojo.png')} 
                        style={{borderRadius:10 ,width:'100%',height:'100%'}}
                        />
                         </View>
                     <Text style={styles.pentaIcon}>Live Events</Text>
                </View>
              </TouchableOpacity>
       </View>
       
       <View style={{flex:1,alignItems:'center',paddingTop:7,paddingHorizontal:2,marginRight:'-4%'}}>
      <TouchableOpacity
             onPress={() => this.props.navigation.navigate("mensa1")}
              >
              <View  style={{flexDirection:'column'}}>
                
                    <View style={{ width:25,height:25,marginLeft:'30%'}}>
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
 
  /* PARA TRANSPARENCIA */
estrellasTrending:{
  marginTop:15,
  marginLeft:-55,
  flexDirection:'row',
  zIndex:4,

},
transparente:{
  width:313,
  height:60,
  position:'absolute',
  zIndex:1,
  backgroundColor:'black',
  opacity:0.5,
 bottom:-4,
 
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
 
 //TABS PENTA ICON

 pentaIcon:{
  color:'white',
  fontSize:13,
},
estrellasTrendingNuevo:{
  paddingTop:7,
  marginLeft:-6,
  flexDirection:'row',
  marginTop:-5,

},
transparenteNuevo:{
  width:  Platform.OS === 'ios' ? 325:315,
  height:60,
  position:'absolute',
  zIndex:3,
  backgroundColor:'black',
  opacity:0.5,
  marginHorizontal:7,
  bottom:6,
 
},



});