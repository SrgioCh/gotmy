import React, { Component } from 'react';
import { Platform, Alert,
  View,Text ,
  StyleSheet,ScrollView,TouchableOpacity,
  Image,Modal} from 'react-native';
  import {  FontAwesome } from '@expo/vector-icons';



export default class SingUpInicio extends Component {

  static navigationOptions = {
    header: null ,
};

constructor(props) {
    super(props)
  
  
    this.state = { 
  
      modal:'none',
      flexModal:1,
      modalOscuro:null,
      modalOpacity:null,
      modalIndex:-1,
      cabezera :'flex',
    }
}

ventana=()=>{

    if(this.state.modal==='none'){
        this.setState({
            modal:'flex',
            flexModal:8,
            modalOscuro:'#312f3d',
            modalOpacity:0.9,
            modalIndex:11,
            cabezera:'none'
          })
    }else{
        this.setState({
            modal:'none',
            flexModal:1,
            modalOscuro:null,
            modalOpacity:null,
            modalIndex:11,
            cabezera:'flex'
          })
    }
   
    
}

  render() {
  
    return (
<View style={{flex: 1 ,}}>

    <View  style={{flex: 1,display:this.state.cabezera ,marginTop:22,justifyContent:'center',
        borderBottomWidth: 0.8,borderBottomColor:'#f6f6f6',
         backgroundColor:this.state.modalOscuro,
         opacity:this.state.modalOpacity,
         zIndex:this.state.modalIndex}}>
          
        <View style={{flexDirection:'row',paddinRight:5,paddingLeft: 13}}>
       
            <View style={{flex:1 ,alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/icons_genGMI/LogOut.png')} 
                      style={{ width:40,height:40,
                                borderRadius:10}}
                      />
            </View>
            
           <View style={{flex:4,flexDirection:'column',marginLeft:10,
                      marginRight:10}}>
                      <TouchableOpacity
                     onPress={this.ventana.bind(this)}
                     >
              <View>
              <Text style={{
                     color:'#ff5a60',
                     fontSize:17 ,letterSpacing:0.41,marginTop:10
                }}>Sing Up</Text> 

              </View>
               </TouchableOpacity>
           </View>
         
           <TouchableOpacity
                     onPress={() => this.props.navigation.navigate("discoverCalendar")}
                     >
           <View style={{flex:1,marginLeft:-5,marginRight:15}}>
         
               <View style={{flex:1 ,alignItems:'center',justifyContent:'center'}}>
                  <Image source={require('../assets/icons_genGMI/calendarRojo.png')} 
                      style={{ width:30,height:30,
                                borderRadius:10}}
                      />
                </View>
               
            </View>
            </TouchableOpacity>
           
            <TouchableOpacity
                     onPress={() => this.props.navigation.navigate("discoverPreferences")}
                     >
            <View style={{flex:1 ,marginRight:15}}>
         
         
                <View style={{flex:1 ,marginTop:8}}>
                 <Image source={require('../assets/icons_genGMI/Filter.png')} 
                      style={{ width:25,height:25,
                                borderRadius:10}}
                      />
                </View>
               
             
            </View>
            </TouchableOpacity>
          
        </View>

    </View>
    <View style={{flex: 9 ,
                   backgroundColor:this.state.modalOscuro,
                   opacity:this.state.modalOpacity,
                    zIndex:this.state.modalIndex}}>
       <ScrollView>
            {/*   TITULOO   */}
            <View style={styles.contieneTitulo}>
                <Text style={styles.Titulo}>Discover</Text>
                <Text style={styles.subTitulo}>Live Events now</Text>
           </View>


             {/*  bloquee  NO CARDVIEW*/}

         <View style={{marginHorizontal:16 , backgroundColor:this.state.modalOscuro,
         opacity:this.state.modalOpacity,
         zIndex:this.state.modalIndex
        
                      }}>
                <Image source={require('../assets/influencers/influencer.png')} 
                  style={{ width:40,height:40, zIndex:3,borderRadius:10,position:'absolute',left:15,top:15}}
                   />
                 <Text style={styles.textoLogo}>
                  MandyJTV
                </Text>

                <View  style={styles.estrellasimagen}>
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
              <View style={{borderRadius:10,
                         width:  Platform.OS === 'ios' ? 340:330,
                         height:200}}>
                 <Image source={require('../assets/influencers/MandyJTV/download.jpg')} 
                  style={{ zIndex:2,borderRadius:10,width:'100%',height:'100%'}}
                 />
                 <Text style={styles.textoLogobajo}>
                  Team Rocket vs Team Skull {'\n'}RAP BATTLE{'\n'} </Text>
                  <Text style={[styles.textoLogobajo,{marginTop:'50%',fontSize:13,
                   fontWeight:'normal',}]}>Entertaiment</Text> 
            </View>

               {/*  corazon gris */}
               <View  style={{
              width:50,
              height:50,
              borderRadius:30,
              backgroundColor:'#312f3d',
              opacity:0.8,
              zIndex:9,
              position:'absolute',
              right:15,
              bottom:135,
              alignItems:'center',
              justifyContent:'center',

            }}>
                <Image source={require('../assets/icons_genGMI/Like/corazongris.png')} 
                  style={{  width:30,height:30,
                            zIndex:10}}
                   />  
            </View>
        </View>   



           {/*  bloquee   TRENDING INFLUENCER */}

                <View style={{flexDirection:'row',
                justifyContent: 'space-between',padding:10,marginHorizontal:9
                ,marginTop:10}}>
                 <View > 
                 <Text style={{color:"#312f3d",fontSize:17
                     ,fontWeight:'500'}}>Trending Influencers</Text>
                  </View>
                  <TouchableOpacity   
                onPress={() => this.props.navigation.navigate("searchuser")}
                > 
                   <View style={{flexDirection:'row'}} >
                 
                 <Text style={{color:"#ff5a60",fontSize:16}}>Show all</Text>
               <Text style={{color:"#ff5a60",fontSize:16,fontWeight:'bold'}}> > </Text>
               
                 </View>
                 </TouchableOpacity>
                </View>
   
{/* ---------------- SECCION IMAGEN DESPLAZABLE-----------*/}

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:5}} >
              <View style={{ flexDirection:'row',
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

{/*  fin de imagenes horizontales */}

               {/*  bloquee   upcomign */}

            <View style={{flexDirection:'row',
                justifyContent: 'space-between',padding:10,marginHorizontal:10
                ,marginTop:10}}>
               <View > 
                   <Text style={{color:"#312f3d",fontSize:17
                     ,fontWeight:'500'}}>Upcoming Live Events</Text>
               </View>
              <View style={{flexDirection:'row'}} >
                 <TouchableOpacity
                     onPress={() => this.props.navigation.navigate("upcoevent")}
                     >
                      <Text style={{color:"#ff5a60",fontSize:16}}>Show all</Text>
                      </TouchableOpacity>
                <Text style={{color:"#ff5a60",fontSize:16,fontWeight:'bold'}}> > </Text>
              </View>
            </View>

             
{/* -----------------BICARDVIEW--------------*/}       
 <View style={{marginHorizontal:16,backgroundColor:'#f6f6f6',paddingBottom:7,
                 marginVertical:10, borderRadius:10}}>
     
             <View style={{borderRadius:10,
               width:Platform.OS === 'ios' ? 339:328,
              height:200,padding:7}} >
                  <Image source={require('../assets/influencers/MandyJTV/maxresdefault.jpg')} 
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
      
         {/*  seccion trending media */}
    
          <View style={{flexDirection:'row',
                   justifyContent: 'space-between',padding:10,marginHorizontal:10
                ,marginTop:5}}>
              <View > 
                 <Text style={{color:"#312f3d",fontSize:17
                  ,fontWeight:'500'}}>Trending Media Contents</Text></View>

               <View style={{flexDirection:'row'}} >
               <TouchableOpacity
                     onPress={() => this.props.navigation.navigate("mediacontenInflu")}
                     >
                  <Text style={{color:"#ff5a60",fontSize:16}}>Show all</Text>
               </TouchableOpacity>
                <Text style={{color:"#ff5a60",fontSize:16,fontWeight:'bold'}}> > </Text>
             </View>
        </View>

         {/* CAJA DE LOS TRENDIGN*/}
   
          <View style={{flexDirection:'row',marginHorizontal:10, padding:10}}>
                <View>
                     <View style={{flexDirection:'row'}}>

                          <View  style={{ padding:6 }}>
                               <Image source={require('../assets/influencers/influencer.png')} 
                               style={{ width:40,height:40,borderRadius:10}}
                              />
                          </View>
                        
                          <View style={{width:120,marginLeft:10,
                                        alignItems:'flex-start',
                                         paddingTop:10,flexDirection:'column'}}>
                             
                                <Text style={{color:'#312f3d',fontSize:16}} >MandyJTV</Text>

                                <View  style={styles.estrellasTrending}>
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
                   </View>
               
                  <View  style={{flexDirection:'column'}}>
                           <Text style={styles.textTren}>Teaching Machamp THE  </Text>
                           <Text style={styles.textTren} >BEST MOVE IN THE GAME </Text>
                           <Text style={{color:'#677183',fontSize:16}}>Games </Text>
                  </View>
              </View>        
          <View >

              <View style={{ width:110,height:84,marginLeft:15,marginTop:10}}>
                    <Image source={require('../assets/influencers/MandyJTV/maxresdefault.jpg')} 
                   style={{borderRadius:10 ,width:'100%',height:'100%'}}
                  />
             </View>
             <Text style={{


               position:'absolute',
               fontWeight:'bold',
              backgroundColor:'#312f3d',
               opacity:0.8,
              paddingHorizontal:25,
            paddingVertical:Platform.OS === 'ios' ? 5:7,
            bottom:Platform.OS === 'ios' ? 24:28,
             right:4,
            zIndex:4,
            borderRadius:Platform.OS === 'ios' ? 50:10,
            borderBottomWidth:1,
            }}></Text>
            <Text
              style={{
              position:'absolute',
                zIndex:6,
              bottom:Platform.OS === 'ios' ? 26:30,
              
            right:10,
            color:'white',

              }}>12:40</Text>
            </View>
          
            </View>

          {/* ******************************** */}
          <View style={{flexDirection:'row',marginHorizontal:10, padding:10}}>
           <View>
                     <View style={{flexDirection:'row'}}>

                          <View  style={{ padding:6 }}>
                          <Image source={require('../assets/influencers/uno.png')} 
                               style={{ width:40,height:40,borderRadius:10}}
                              />
                          </View>
                        
                          <View style={{width:120,marginLeft:10,
                                        alignItems:'flex-start',
                                         paddingTop:10,flexDirection:'column'}}>
                             
                                <Text style={{color:'#312f3d',fontSize:16}} >MandyJTV</Text>

                                <View  style={styles.estrellasTrending}>
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
                   </View>
               
                  <View  style={{flexDirection:'column'}}>
                           <Text style={styles.textTren}>Teaching Machamp THE  </Text>
                           <Text style={styles.textTren} >BEST MOVE IN THE GAME </Text>
                           <Text style={{color:'#677183',fontSize:16,lineHeight:21}}>Games </Text>
                  </View>
              </View>        
                <View >
                      <View style={{ width:110,height:84,marginLeft:15,marginTop:10}}>
                       <Image source={require('../assets/influencers/chicarosa.jpg')} 
                       style={{borderRadius:10 ,width:'100%',height:'100%'}}
                          />
                 </View>
                 <Text style={{

        position:'absolute',
        fontWeight:'bold',
        backgroundColor:'#312f3d',
       opacity:0.8,
      paddingHorizontal:25,
      paddingVertical:Platform.OS === 'ios' ? 5:7,
      bottom:Platform.OS === 'ios' ? 24:28,
      right:4,
      zIndex:4,
    borderRadius:Platform.OS === 'ios' ? 50:10,
      borderBottomWidth:1,
      }}></Text>
      <Text
      style={{
            position:'absolute',
            zIndex:6,
           bottom:Platform.OS === 'ios' ? 26:30,

           right:10,
         color:'white',

          }}>12:40</Text>
       </View>
          
          </View>

            {/**  ************************************************** */}

            <View style={{flexDirection:'row',marginHorizontal:10 , padding:10}}>
                  <View>
                     <View style={{flexDirection:'row'}}>

                          <View  style={{ padding:6 }}>
                          <Image source={require('../assets/influencers/tres.png')} 
                               style={{ width:40,height:40,borderRadius:10}}
                              />
                          </View>
                        
                          <View style={{width:120,marginLeft:10,
                                        alignItems:'flex-start',
                                         paddingTop:10,flexDirection:'column'}}>
                             
                                <Text style={{color:'#312f3d',fontSize:16}} >Randy Stanley</Text>

                                <View  style={styles.estrellasTrending}>
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
                   </View>
               
                  <View  style={{flexDirection:'column'}}>
                           <Text style={styles.textTren}>Teaching Machamp THE  </Text>
                           <Text style={styles.textTren} >BEST MOVE IN THE GAME </Text>
                           <Text style={{color:'#677183',fontSize:16}}>Games </Text>
                  </View>
              </View>        
              <View >
                  <View style={{ width:110,height:84,marginLeft:15,marginTop:10}}>
                     <Image source={require('../assets/influencers/chicacorriendo.jpg')} 
                       style={{borderRadius:10 ,width:'100%',height:'100%'}}
                     />
               </View>
               <Text style={{

                  position:'absolute',
                fontWeight:'bold',
              backgroundColor:'#312f3d',
              opacity:0.8,
               paddingHorizontal:25,
               paddingVertical:Platform.OS === 'ios' ? 5:7,
                 bottom:Platform.OS === 'ios' ? 24:28,
                    right:4,
                   zIndex:4,
                borderRadius:Platform.OS === 'ios' ? 50:10,
          borderBottomWidth:1,
          }}></Text>
            <Text
            style={{
              position:'absolute',
              zIndex:6,
             bottom:Platform.OS === 'ios' ? 26:30,

              right:10,
            color:'white',

             }}>08:30</Text>
              </View>
          
          </View>
 {/* ********************fin de los trendign********************************* */}
 </ScrollView>

</View>
            <View  display={this.state.modal} 
            style={{flex:this.state.flexModal}}>

                  <View style={{backgroundColor:'white',marginHorizontal:40,
                             alignItems:'center',justifyContent:'center'}}>
                        <Text style={{
                            fontSize:28 ,
                            letterSpacing:0.36 ,
                            color:'#312f3d',
                            fontWeight:'500',
                            marginVertical:10,
                        }}>Sign up</Text>
                        <Text
                         style={{
                            fontSize:13 ,
                            letterSpacing:0.32 ,
                            color:'#312f3d',
                            marginVertical:5,
                        }}>You must have an account to continue</Text>
                         <TouchableOpacity
                       onPress={() => this.props.navigation.navigate("createAcu")}
                       >
                        <View style={{backgroundColor:'#ff5a60',
                                    borderRadius:20 ,paddingVertical:10,
                                    paddingHorizontal:'23%',
                                    marginVertical:5,}}>
                        <Text style={{
                           color:'white'
                        } }>Sign Up with your email</Text>
                      
                        </View>
                        </TouchableOpacity>

                        
                        <View style={{backgroundColor:'#13389B',
                                    borderRadius:20 ,paddingVertical:10,
                                    paddingHorizontal:'23%',flexDirection:'row',
                                    marginVertical:5,}}>
                        <FontAwesome name="facebook" size={20} color="white" 
                           style={{position:'absolute',left:20,top:7
                           }}/>
                         <Text style={{
                           color:'white'
                        } }>Connect with Facebook</Text>
                       </View>
                         
                       <View style={{backgroundColor:'#4371EC',
                                    borderRadius:20 ,paddingVertical:10,
                                    paddingHorizontal:'23%',flexDirection:'row',
                                    marginVertical:5,}}>
                        <FontAwesome name="linkedin" size={20} color="white" 
                           style={{position:'absolute',left:20,top:7
                           }}/>
                         <Text style={{
                           color:'white'
                        } }>Connect with LinkedIn</Text>
                       </View>

                       <View style={{
                           flexDirection:'row'
                       }}>
                       <Text style={{
                             fontSize:12 ,
                             letterSpacing:0.08 ,
                             color:'#312f3d',
                             marginTop:5,
                       }}>Already have an account? </Text>
                       
                       <TouchableOpacity
                       onPress={() => this.props.navigation.navigate("Log")}
                       >
                        <View >
                            <Text
                             style={{
                                fontSize:12 ,
                                letterSpacing:0.08 ,
                                color:'#ff5a60',
                                marginTop:5,
                               }}>  Log In </Text>
                        </View>
                    </TouchableOpacity>
                        </View>
                           
                          
                  </View>
                
                  <View style={{
                             position:'absolute',
                             right:20,
                             top:10
                           }}>
                  <TouchableOpacity
                       onPress={this.ventana.bind(this)}
                       >
                         <FontAwesome name="close" size={20} color="#ff5a60"  /> 
                            
                  </TouchableOpacity> 
             </View> 
                  
    </View>


     </View>
 
    );
  }
 
}

const styles = StyleSheet.create({
 
  contieneTitulo:{
    marginBottom:20,
    marginLeft:16,
    paddingBottom:20,
    paddingHorizontal:16,
   },
   Titulo:{
     fontSize:34,
     marginLeft:-18,
     fontWeight:"700",
    
   },
   subTitulo:{
       marginTop:20,
       fontSize:17,
       marginLeft:-18,
       fontWeight:"500",
       marginBottom:-10,
   },


   estrellasimagen:{
   
      padding:3,
      position:'absolute',
      flexDirection:'row',
      zIndex:3,
      top:'20%',
      left:'21%',
   },
   estrellasimagen2:{
    padding:3,
    flexDirection:'row',
    zIndex:3,
    marginLeft:12,
  
   },

  textoLogo:{
   padding:5,
   position:'absolute',
   zIndex:3,
   color:'white',
   marginTop:'4%',
   fontSize:17,
   fontWeight:'500',
   textAlign:'left',
   marginLeft:65,
  },

  textoLogo2:{ //para texto  imagen con transparencia
    padding:35,
    position:'absolute',
    zIndex:5,
    color:'white',
    top:160,
    fontSize:17,
    fontWeight:'500',
    textAlign:'left',
     left:'20%',
     backgroundColor:'yellow'
   },
   estrellasimagen3:{
 
    flexDirection:'row',
    zIndex:5,
    left:85,
    top:190,
   },// para  imagen con transparencia

  textoLogobajo:{
    padding:2,
    position:'absolute',
    zIndex:3,
    color:'white',
    marginTop:100,
    fontSize:20,
    fontWeight:'bold',
    textAlign:'left',
    marginLeft:20,
    letterSpacing:1,

  },
  transparente:{
    width:317,
    height:54,
    position:'absolute',
    zIndex:3,
  
  left:17,
 bottom:0,
    fontWeight:'bold',
  
    backgroundColor:'black',
    opacity:0.5,
  },


  imagentrending:{
    width:100,
    height:100,
    
 
    //borderRadius:100,
  },
  //*****  scroll */
  contentContainer: {
   
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

  pentaIcon:{
     color:'white',
     fontSize:13,
  },
  socialCategoria:{
    
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