import React, { Component } from 'react';
import { Platform,Keyboard,
  View,Text ,TextInput,TouchableOpacity,TouchableWithoutFeedback,
  StyleSheet,ScrollView,
  Image} from 'react-native';

import Button from 'react-native-button'; 

export default class Search extends Component {

  static navigationOptions = {
    header: null ,
};



  render() {
    return (
     
<View style={{flex: 1}}>
<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
                     }}>Kurtis 'Kala' Lloydi</Text>
                     <Text style={{
                       color:'#677183',
                        fontSize:13 ,letterSpacing:0.08
                      }}>@kurtiskala</Text>
                      </View>
                   <View style={{flex:1,marginRight:5}}>
                  <View style={{flex:1 ,alignItems:'center',justifyContent:'center'}}>
                       
                     </View>
                </View>
                  <View style={{flex:1}}>
                        <View style={{flex:1 ,alignItems:'center',justifyContent:'center'}}>
                          <Image source={require('../assets/icons_genGMI/Filter.png')} 
                           style={{ width:25,height:25,
                                borderRadius:10}}
                         />
                       </View>
                    </View>
                 </View>

          </View>
          </TouchableWithoutFeedback>
            <View style={{flex: 9}}>
    
           
                       
                     {/*  TITULOOO */}
                     <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                       <View style={{ marginHorizontal:16,marginTop:10}}>
                         <Text style={{fontSize:34,fontWeight:"700"}}>
                         Search</Text>
                      </View>
                      </TouchableWithoutFeedback>
      
                         {/* BUSCADOR*/}
                   <View style={{ marginHorizontal:16,paddingVertical:9 }}>

                       <TextInput
                           style={{
                              height:42,
           
                          borderRadius:10,
          
                                } }
                           placeholder="Search live events,influencer...."
                          editable={true} // con false , no podremos escribir nada
                         borderBottomColor = '#e2e7ee'
                          borderBottomWidth ={1}
                       paddingHorizontal={30}
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
            {/*-----------------------------------------*/}

           <ScrollView>
             {/* MOSTRAR EL TEXTO DEL INPUT -esta oculto 
              <Text style={{display:'none'}}>en input : {this.state.tytexto}</Text>
              */}
         
                  {/* TRENDING TAGS */}
                 <Text style={{
                         color:'#312f3d',
                       fontSize:16,
                      marginHorizontal:16,
                    paddingVertical:20,
                     }}
         
                      >Trending Tags</Text>

                   <View style={{
                              marginHorizontal:16,flexDirection:'row',
                            flexWrap:'wrap',paddingVertical:10}}>
             
                     <Text style={styles.tagsTrending}>#games</Text>
                      <Text style={styles.tagsTrending}>#fashion</Text>
                      <Text style={styles.tagsTrending}>#JustCause4</Text>
                      <Text style={styles.tagsTrending}>#stream</Text>
                      <Text style={styles.tagsTrending}>#godofwar</Text>
                      <Text style={styles.tagsTrending}>#showroom</Text>
                      <Text style={styles.tagsTrending}>#conemastream</Text>
                 </View>
    
                      {/* TRENDING CATEGORUIES */}

              <View style={{flexDirection:'row',
                    justifyContent: 'space-between',padding:10,marginHorizontal:10
                     ,marginTop:10}}>
                     <View > 
                         <Text style={{color:"#312f3d",fontSize:17}}>Trending categories</Text>
                     </View>
                    <View style={{flexDirection:'row'}} >
                        <TouchableOpacity
                           onPress={() => this.props.navigation.navigate("SearchCateg")}
                          >
                        <Text style={{color:"#ff5a60",fontSize:16}}>Show all</Text>
                         </TouchableOpacity>
                      <Text style={{color:"#ff5a60",fontSize:16,fontWeight:'bold'}}> > </Text>

                      </View>
                </View>


                {/*  SING UP */}

             <View style={{ marginLeft: Platform.OS === 'ios' ? 23:16,
                           marginRight: Platform.OS === 'ios' ? 5:16
                            ,marginVertical:30 }}>

                <View style={styles.social}>  
                     <View style={{borderRadius:10,width:104, height:104 }}>
                            <Text style={styles.textoprueba2}>
                                 Manga
                           </Text>
                             <Image source={require('../assets/OnBoard/manga.jpg')} 
                              style={{ zIndex:2,borderRadius:10,width: '100%', height: '100%'}}
                                />
                      </View>
  
                      <Text >{" "}{" "}</Text>
                      <View style={{borderRadius:10,width:104, height:104 }} >
                              <Text style={styles.textoprueba2}>
                                Motor
                             </Text>
                              <Image source={require('../assets/OnBoard/motor.jpg')} 
                              style={{borderRadius:10,width: '100%', height: '100%'}}
                              />
                       </View>

                      <Text >{" "}{" "}</Text>

                      <View style={{borderRadius:10,width:104, height:104 }}  >
                        <Text style={styles.textoprueba}>
                          Nature,{'\n'}Outdoors
                                        </Text>
                        <Image source={require('../assets/OnBoard/nature.jpg')} 
                      style={{borderRadius:10,width: '100%', height: '100%'}}
                        />
                       </View>
                 </View>

     {/*  ------------------------------- */}
 
              <View style={styles.social}>  

                <View style={{borderRadius:10,width:104, height:104 }}>
                <Text style={styles.textoprueba2}>
                Celebrity
                  </Text>
              <Image source={require('../assets/OnBoard/celebrity.jpg')} 
                style={{ zIndex:2,borderRadius:10,width: '100%', height: '100%'}}
                />
            </View>

            <Text >{" "}{" "}</Text>
              <View style={{borderRadius:10,width:104, height:104 }} >
              <Text style={styles.textoprueba2}>
              Podcast
              </Text>
              <Image source={require('../assets/OnBoard/podcast.jpg')} 
              style={{borderRadius:10,width: '100%', height: '100%'}}
              />
              </View>

            <Text >{" "}{" "}</Text>

            <View style={{borderRadius:10,width:104, height:104 }}  >
            <Text style={styles.textoprueba}>
                Technology,{'\n'}Outdoors
             </Text>
              <Image source={require('../assets/OnBoard/tecnologia.jpg')} 
             style={{borderRadius:10,width: '100%', height: '100%'}}
               />
            </View>
            </View>
 

            <View style={{flexDirection:'row',
                     justifyContent: 'space-between',
                     marginTop:20}}>
                  <View > 
                  <Text style={{color:"#312f3d",fontSize:17}}>Most wanted influencers</Text>
                  </View>
                  <View style={{flexDirection:'row'}} >
                  <TouchableOpacity
                     onPress={() => this.props.navigation.navigate("searchuser")}
                     >
                  <Text style={{color:"#ff5a60",fontSize:16}}>Show all</Text>
                 </TouchableOpacity>
                 <Text style={{color:"#ff5a60",fontSize:16,fontWeight:'bold'}}> > </Text>
                 </View>
              </View>
          </View>
            

{/* ---------------- SECCION IMAGEN DESPLAZABLE-----------*/}

<ScrollView horizontal showsHorizontalScrollIndicator={false}    style={{marginTop:-20}} >
          <View style={{ flexDirection:'row' ,
                marginLeft : Platform.OS === 'ios' ? 10:0}}>
           
           <View style={{ paddingVertical:22,paddingHorizontal:10}}>
           <TouchableOpacity
                           onPress={() => this.props.navigation.navigate("profile1")}
                          > 
               <Image source={require('../assets/influencers/uno.png')} 
                  style={styles.imagentrending}
                 />
                <Text style={{ padding:4,fontSize:16,fontWeight:'normal',textAlign:'center'}} >MandyJTV</Text>
              <View  style={[styles.estrellasimagen2]}>
                  <Image source={require('../assets/Red.png')} 
                     style={{ width:11,height:11}}
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
             </TouchableOpacity>
         </View>

         <View style={{ paddingVertical:22,paddingHorizontal:10}}>
               <Image source={require('../assets/influencers/dos.png')} 
                  style={styles.imagentrending}
                 />
                <Text style={{ padding:4,fontSize:16,fontWeight:'normal',textAlign:'center'}} >Jean Bowers</Text>
              <View  style={[styles.estrellasimagen2]}>
                  <Image source={require('../assets/Red.png')} 
                     style={{ width:11,height:11}}
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

         <View style={{ paddingVertical:22,paddingHorizontal:10}}>
               <Image source={require('../assets/influencers/tres.png')} 
                  style={styles.imagentrending}
                 />
                <Text style={{ padding:4,fontSize:16,fontWeight:'normal',textAlign:'center'}} >Ricardo Vega</Text>
              <View  style={[styles.estrellasimagen2]}>
                  <Image source={require('../assets/Red.png')} 
                     style={{ width:11,height:11}}
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
         
         <View style={{ paddingVertical:22,paddingHorizontal:10}}>
               <Image source={require('../assets/influencers/uno.png')} 
                  style={styles.imagentrending}
                 />
                <Text style={{ padding:4,fontSize:16,fontWeight:'normal',textAlign:'center'}} >MandyJTV</Text>
              <View  style={[styles.estrellasimagen2]}>
                  <Image source={require('../assets/Red.png')} 
                     style={{ width:11,height:11}}
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

         <View style={{ paddingVertical:22,paddingHorizontal:10}}>
               <Image source={require('../assets/influencers/dos.png')} 
                  style={styles.imagentrending}
                 />
                <Text style={{ padding:4,fontSize:16,fontWeight:'normal',textAlign:'center'}} >Jean Bowers</Text>
              <View  style={[styles.estrellasimagen2]}>
                  <Image source={require('../assets/Red.png')} 
                     style={{ width:11,height:11}}
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

         <View style={{ paddingVertical:22,paddingHorizontal:10}}>
               <Image source={require('../assets/influencers/tres.png')} 
                  style={styles.imagentrending}
                 />
                <Text style={{ padding:4,fontSize:16,fontWeight:'normal',textAlign:'center'}} >Ricardo Vega</Text>
              <View  style={[styles.estrellasimagen2]}>
                  <Image source={require('../assets/Red.png')} 
                     style={{ width:11,height:11}}
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

         </View>
      </ScrollView> 
  </ScrollView>

  </View>

{/* -----------------------------  penta icon o  tabs-------------------------------------------------- */}
  
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
               <View  style={{flexDirection:'column'}}>
                     
                       <View style={{ width:30,height:30,marginLeft:'10%'}}>
                       <Image source={require('../assets/pentaicon/searchRojo.png')} 
                      style={{borderRadius:10 ,width:'100%',height:'100%'}}
                      />
                       </View>
                   <Text style={styles.pentaIcon}>Search</Text>
              </View>
       </View>
        
      
      <View style={{flex:1,alignItems:'center',padding:2}}>
      <TouchableOpacity
            
            onPress={() => this.props.navigation.navigate("boked1")}
             >
              <View  style={{flexDirection:'column'}}>
                   
                   <View style={{ width:30,height:30,marginLeft:'25%'}}>
                       <Image source={require('../assets/pentaicon/events.jpg')} 
                      style={{borderRadius:10 ,width:'100%',height:'100%'}}
                      />
                       </View>
                   <Text style={styles.pentaIcon}>Live Events</Text>
              </View>
              </TouchableOpacity>
     </View>
     
     <View style={{flex:1,alignItems:'center',paddingTop:'2%',marginRight:'-4%'}}>
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
 
//*** TAGS DE TRENDING */
tagsTrending:{
  paddingVertical:8,
  borderColor:'#312f3d' ,
  borderWidth: 1,
  fontSize:13,
  borderRadius:20,
  paddingHorizontal:10,
  marginBottom: 5,
  marginLeft: 3,
},

//**** TRENDING CATEGORIES */
social:{
    

 marginBottom:7,
  flexDirection: 'row',


 },

 textoprueba:{
  padding:5,
  position:'absolute',
  zIndex:3,
  color:'white',
  marginTop:43,
  fontWeight:'500',
  textAlign:'left',
 },
 textoprueba2:{
     padding:5,
     position:'absolute',
     zIndex:3,
     color:'white',
     marginTop:60,
     fontWeight:'500',
     textAlign:'left', 
 },
 textoprueba3:{
     padding:5,
     position:'absolute',
     zIndex:3,
     color:'white',
     marginTop:27,
     fontWeight:'500',
     textAlign:'left', 
 },
 //most wanted influencer
 imagentrending:{
  width:100,
  height:100,
  
},
estrellasimagen2:{
  padding:3,
  flexDirection:'row',
  zIndex:3,
  marginLeft:12,

 },
 pentaIcon:{
  color:'white',
  fontSize:13,
}


});